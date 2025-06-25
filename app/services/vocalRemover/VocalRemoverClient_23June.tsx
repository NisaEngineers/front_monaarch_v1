"use client";

import { useState, useRef, useEffect } from "react";

export default function VocalRemoverClient() {
  const [uploaded, setUploaded] = useState(false);
  const [removingVocals, setRemovingVocals] = useState(false);
  const [originalAudioURL, setOriginalAudioURL] = useState<string | null>(null);
  const [vocalAudioURL, setVocalAudioURL] = useState<string | null>(null);
  const [instrumentalAudioURL, setInstrumentalAudioURL] = useState<string | null>(null);
  const [isPlayingOriginal, setIsPlayingOriginal] = useState(false);
  const [isPlayingVocal, setIsPlayingVocal] = useState(false);
  const [isPlayingInstrumental, setIsPlayingInstrumental] = useState(false);
  const [originalVolume, setOriginalVolume] = useState(0);
  const [vocalVolume, setVocalVolume] = useState(0);
  const [instrumentalVolume, setInstrumentalVolume] = useState(0);
  const [isOriginalPaused, setIsOriginalPaused] = useState(true);
  const [isVocalPaused, setIsVocalPaused] = useState(true);
  const [isInstrumentalPaused, setIsInstrumentalPaused] = useState(true);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Refs for audio elements
  const originalAudioRef = useRef<HTMLAudioElement>(null);
  const vocalAudioRef = useRef<HTMLAudioElement>(null);
  const instrumentalAudioRef = useRef<HTMLAudioElement>(null);

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const url = URL.createObjectURL(file);
      setUploadedFile(file);
      setOriginalAudioURL(url);
      setUploaded(true);
      setError(null);
    }
  };

  const handleRemoveVocals = async () => {
    if (!uploadedFile) return;
    
    setRemovingVocals(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("audio_file", uploadedFile);
      formData.append("task", "Vocal Remove");

      const response = await fetch("http://localhost:8000/process-audio/", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.detail || "Processing failed");
      }

      if (data.output_files?.length >= 2) {
        // Process both vocal and accompaniment paths
        const vocalPath = data.output_files[0]
          .replace(/\\/g, '/')
          .split('/')
          .map(segment => encodeURIComponent(segment))
          .join('/');

        const accompanimentPath = data.output_files[1]
          .replace(/\\/g, '/')
          .split('/')
          .map(segment => encodeURIComponent(segment))
          .join('/');

        const vocalURL = `http://localhost:8000/download/${vocalPath}`;
        const instrumentalURL = `http://localhost:8000/download/${accompanimentPath}`;

        // Verify both URLs
        const [vocalResponse, instrumentalResponse] = await Promise.all([
          fetch(vocalURL),
          fetch(instrumentalURL)
        ]);

        if (!vocalResponse.ok || !instrumentalResponse.ok) {
          throw new Error("Processed files not found");
        }

        setVocalAudioURL(vocalURL);
        setInstrumentalAudioURL(instrumentalURL);
      } else {
        throw new Error("Invalid server response");
      }
    } catch (err) {
      console.error("Processing error:", err);
      setError(err instanceof Error ? err.message : "Audio processing failed");
    } finally {
      setRemovingVocals(false);
    }
  };

  // Original audio controls
  const toggleOriginalPlayPause = () => {
    if (originalAudioRef.current) {
      if (isOriginalPaused) {
        originalAudioRef.current.play();
        setIsPlayingOriginal(true);
        setIsOriginalPaused(false);
        if (originalVolume === 0) setOriginalVolume(50);
      } else {
        originalAudioRef.current.pause();
        setIsPlayingOriginal(false);
        setIsOriginalPaused(true);
      }
    }
  };

  const handleOriginalVolumeChange = (value: number) => {
    setOriginalVolume(value);
    if (originalAudioRef.current) {
      originalAudioRef.current.volume = value / 100;
      originalAudioRef.current[value === 0 ? 'pause' : 'play']();
      setIsPlayingOriginal(value !== 0);
      setIsOriginalPaused(value === 0);
    }
  };

  // Vocal audio controls
  const toggleVocalPlayPause = () => {
    if (vocalAudioRef.current) {
      if (isVocalPaused) {
        vocalAudioRef.current.play();
        setIsPlayingVocal(true);
        setIsVocalPaused(false);
        if (vocalVolume === 0) setVocalVolume(50);
      } else {
        vocalAudioRef.current.pause();
        setIsPlayingVocal(false);
        setIsVocalPaused(true);
      }
    }
  };

  const handleVocalVolumeChange = (value: number) => {
    setVocalVolume(value);
    if (vocalAudioRef.current) {
      vocalAudioRef.current.volume = value / 100;
      vocalAudioRef.current[value === 0 ? 'pause' : 'play']();
      setIsPlayingVocal(value !== 0);
      setIsVocalPaused(value === 0);
    }
  };

  // Instrumental audio controls
  const toggleInstrumentalPlayPause = () => {
    if (instrumentalAudioRef.current) {
      if (isInstrumentalPaused) {
        instrumentalAudioRef.current.play();
        setIsPlayingInstrumental(true);
        setIsInstrumentalPaused(false);
        if (instrumentalVolume === 0) setInstrumentalVolume(50);
      } else {
        instrumentalAudioRef.current.pause();
        setIsPlayingInstrumental(false);
        setIsInstrumentalPaused(true);
      }
    }
  };

  const handleInstrumentalVolumeChange = (value: number) => {
    setInstrumentalVolume(value);
    if (instrumentalAudioRef.current) {
      instrumentalAudioRef.current.volume = value / 100;
      instrumentalAudioRef.current[value === 0 ? 'pause' : 'play']();
      setIsPlayingInstrumental(value !== 0);
      setIsInstrumentalPaused(value === 0);
    }
  };

  useEffect(() => {
    if (originalAudioRef.current) originalAudioRef.current.volume = originalVolume / 100;
    if (vocalAudioRef.current) vocalAudioRef.current.volume = vocalVolume / 100;
    if (instrumentalAudioRef.current) instrumentalAudioRef.current.volume = instrumentalVolume / 100;
  }, [originalVolume, vocalVolume, instrumentalVolume]);

  return (
    <section className="relative min-h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/Vocal_BG.mp4"
        autoPlay
        loop
        muted
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      <div className="relative z-10 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            <div className="pb-12 text-center">
              <h1 className="text-4xl font-bold md:text-5xl text-green-300">
                Voice Remover
              </h1>
              <p className="text-lg mt-4 text-gray-300 max-w-3xl mx-auto">
                Remove vocals from your audio tracks and enjoy instrumental versions.
              </p>
              {error && (
                <div className="mt-4 p-3 bg-red-800/50 rounded-lg text-red-300">
                  Error: {error}
                </div>
              )}
            </div>

            {!uploaded ? (
              <form className="mx-auto max-w-md bg-transparent">
                <div className="space-y-5">
                  <div className="relative">
                    <input
                      id="upload"
                      type="file"
                      accept="audio/*"
                      className="w-full h-12 opacity-0 cursor-pointer"
                      onChange={handleUpload}
                      required
                    />
                    <div className="absolute inset-0 flex items-center justify-center border-2 border-dashed border-gray-500 rounded-lg bg-transparent pointer-events-none">
                      <p className="text-gray-200 opacity-80">
                        Click to Choose a File<span className="text-red-500">*</span>
                      </p>
                    </div>
                  </div>
                </div>
              </form>
            ) : (
              <div className="mt-6">
                {!removingVocals ? (
                  <div className="text-center">
                    <button
                      className="px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded shadow hover:from-green-500 hover:to-blue-600 transition-all duration-300"
                      onClick={handleRemoveVocals}
                    >
                      Remove Vocals
                    </button>
                  </div>
                ) : (
                  <div className="flex justify-center mt-6">
                    <div className="flex items-center space-x-2 text-white">
                      <div className="loader-dot"></div>
                      <div className="loader-dot"></div>
                      <div className="loader-dot"></div>
                      <span>Processing...</span>
                    </div>
                  </div>
                )}
              </div>
            )}

            {uploaded && !removingVocals && vocalAudioURL && instrumentalAudioURL && (
              <div className="mt-10 space-y-12">
                {/* Original Audio Section */}
                <div className="p-6 rounded-lg border-2 border-dashed border-gray-500 bg-transparent">
                  <h2 className="text-xl font-semibold mb-4 text-center">Original Audio</h2>
                  <div className="flex flex-col items-center">
                    <div className="flex items-center space-x-4">
                      <button onClick={toggleOriginalPlayPause} className="play-button focus:outline-none">
                        {isOriginalPaused ? (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M5 3.5v17l14-8.5-14-8.5z" />
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M6 4h4v16h-4v-16zm8 0h4v16h-4v-16z" />
                          </svg>
                        )}
                      </button>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={originalVolume}
                        onChange={(e) => handleOriginalVolumeChange(Number(e.target.value))}
                        className="w-32 h-2 bg-transparent appearance-none cursor-pointer slider-thumb"
                      />
                    </div>
                    {isPlayingOriginal && (
                      <div className="equalizer mt-4 w-full flex items-center justify-center">
                        {[...Array(5)].map((_, i) => <div key={i} className="bar"></div>)}
                      </div>
                    )}
                    <audio
                      ref={originalAudioRef}
                      src={originalAudioURL!}
                      onEnded={() => {
                        setIsPlayingOriginal(false);
                        setIsOriginalPaused(true);
                        setOriginalVolume(0);
                      }}
                    />
                    <div className="mt-6 flex justify-center">
                      <a
                        href={originalAudioURL!}
                        download="original_audio.mp3"
                        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 flex items-center"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M3 15a1 1 0 001 1h12a1 1 0 001-1v-3h-2v3H5v-3H3v3z" />
                          <path d="M7 10l3 3 3-3H9V4H7v6H4l3 3z" />
                        </svg>
                        Download Original
                      </a>
                    </div>
                  </div>
                </div>

                {/* Vocal Audio Section */}
                <div className="p-6 rounded-lg border-2 border-dashed border-gray-500 bg-transparent">
                  <h2 className="text-xl font-semibold mb-4 text-center">Vocal Audio</h2>
                  <div className="flex flex-col items-center">
                    <div className="flex items-center space-x-4">
                      <button onClick={toggleVocalPlayPause} className="play-button focus:outline-none">
                        {isVocalPaused ? (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M5 3.5v17l14-8.5-14-8.5z" />
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M6 4h4v16h-4v-16zm8 0h4v16h-4v-16z" />
                          </svg>
                        )}
                      </button>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={vocalVolume}
                        onChange={(e) => handleVocalVolumeChange(Number(e.target.value))}
                        className="w-32 h-2 bg-transparent appearance-none cursor-pointer slider-thumb"
                      />
                    </div>
                    {isPlayingVocal && (
                      <div className="equalizer mt-4 w-full flex items-center justify-center">
                        {[...Array(5)].map((_, i) => <div key={i} className="bar"></div>)}
                      </div>
                    )}
                    <audio
                      ref={vocalAudioRef}
                      src={vocalAudioURL}
                      onEnded={() => {
                        setIsPlayingVocal(false);
                        setIsVocalPaused(true);
                        setVocalVolume(0);
                      }}
                    />
                    <div className="mt-6 flex justify-center">
                      <a
                        href={vocalAudioURL}
                        download="vocal_audio.wav"
                        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 flex items-center"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M3 15a1 1 0 001 1h12a1 1 0 001-1v-3h-2v3H5v-3H3v3z" />
                          <path d="M7 10l3 3 3-3H9V4H7v6H4l3 3z" />
                        </svg>
                        Download Vocals
                      </a>
                    </div>
                  </div>
                </div>

                {/* Instrumental Audio Section */}
                <div className="p-6 rounded-lg border-2 border-dashed border-gray-500 bg-transparent">
                  <h2 className="text-xl font-semibold mb-4 text-center">Instrumental Audio</h2>
                  <div className="flex flex-col items-center">
                    <div className="flex items-center space-x-4">
                      <button onClick={toggleInstrumentalPlayPause} className="play-button focus:outline-none">
                        {isInstrumentalPaused ? (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M5 3.5v17l14-8.5-14-8.5z" />
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M6 4h4v16h-4v-16zm8 0h4v16h-4v-16z" />
                          </svg>
                        )}
                      </button>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={instrumentalVolume}
                        onChange={(e) => handleInstrumentalVolumeChange(Number(e.target.value))}
                        className="w-32 h-2 bg-transparent appearance-none cursor-pointer slider-thumb"
                      />
                    </div>
                    {isPlayingInstrumental && (
                      <div className="equalizer mt-4 w-full flex items-center justify-center">
                        {[...Array(5)].map((_, i) => <div key={i} className="bar"></div>)}
                      </div>
                    )}
                    <audio
                      ref={instrumentalAudioRef}
                      src={instrumentalAudioURL}
                      onEnded={() => {
                        setIsPlayingInstrumental(false);
                        setIsInstrumentalPaused(true);
                        setInstrumentalVolume(0);
                      }}
                    />
                    <div className="mt-6 flex justify-center">
                      <a
                        href={instrumentalAudioURL}
                        download="instrumental_audio.wav"
                        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 flex items-center"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M3 15a1 1 0 001 1h12a1 1 0 001-1v-3h-2v3H5v-3H3v3z" />
                          <path d="M7 10l3 3 3-3H9V4H7v6H4l3 3z" />
                        </svg>
                        Download Instrumental
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        .control-container {
          background: linear-gradient(135deg, #1a1b26, #16161e);
          padding: 1.5rem;
          border-radius: 12px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.1);
        }

        .equalizer {
          height: 40px;
          display: flex;
          align-items: flex-end;
          gap: 2px;
        }

        .bar {
          width: 120px;
          background: linear-gradient(to top, #6366f1, #ec4899, #f59e0b);
          animation: equalize 2s infinite ease-in-out;
          border-radius: 2px 2px 0 0;
        }

        @keyframes equalize {
          0%, 100% { height: 10%; }
          50% { height: 100%; }
        }

        .loader-dot {
          width: 10px;
          height: 10px;
          background: #ddd;
          border-radius: 50%;
          animation: loader 1s infinite alternate;
        }

        @keyframes loader {
          to { transform: scale(1.5); background: #ec4899; }
        }

        .slider-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          height: 4px;
        }

        .slider-thumb::-webkit-slider-thumb {
          width: 16px;
          height: 16px;
          background: linear-gradient(45deg, #6366f1, #ec4899);
          border: 2px solid #fff;
        }
      `}</style>
    </section>
  );
}
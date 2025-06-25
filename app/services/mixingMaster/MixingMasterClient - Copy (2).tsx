"use client";

import { useState, useRef, useEffect } from "react";

export default function MixingMasterClient() {
  // State variables
  const [uploaded, setUploaded] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [originalAudioURL, setOriginalAudioURL] = useState<string | null>(null);
  const [masteredAudioURL, setMasteredAudioURL] = useState<string | null>(null);
  const [highCutoff, setHighCutoff] = useState(50);
  const [lowCutoff, setLowCutoff] = useState(50);
  const [decibelLevel, setDecibelLevel] = useState(50);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  // Refs
  const originalAudioRef = useRef<HTMLAudioElement>(null);
  const masteredAudioRef = useRef<HTMLAudioElement>(null);

  // Volume state
  const [originalVolume, setOriginalVolume] = useState(0);
  const [masteredVolume, setMasteredVolume] = useState(0);

  // Playback state
  const [isPlayingOriginal, setIsPlayingOriginal] = useState(false);
  const [isPlayingMastered, setIsPlayingMastered] = useState(false);
  const [isOriginalPaused, setIsOriginalPaused] = useState(true);
  const [isMasteredPaused, setIsMasteredPaused] = useState(true);

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.[0]) {
      const file = event.target.files[0];
      const url = URL.createObjectURL(file);
      setOriginalAudioURL(url);
      setUploadedFile(file);
      setUploaded(true);
    }
  };

  const handleProcess = async () => {
    if (!uploadedFile) return;
    
    setProcessing(true);
    try {
      const formData = new FormData();
      formData.append("target_file", uploadedFile);

      const response = await fetch("http://127.0.0.1:8001/process_audio", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Processing failed");
      const blob = await response.blob();
      setMasteredAudioURL(URL.createObjectURL(blob));
    } catch (error) {
      console.error("Processing error:", error);
    } finally {
      setProcessing(false);
    }
  };

  // Audio control functions
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

  const toggleMasteredPlayPause = () => {
    if (masteredAudioRef.current) {
      if (isMasteredPaused) {
        masteredAudioRef.current.play();
        setIsPlayingMastered(true);
        setIsMasteredPaused(false);
        if (masteredVolume === 0) setMasteredVolume(50);
      } else {
        masteredAudioRef.current.pause();
        setIsPlayingMastered(false);
        setIsMasteredPaused(true);
      }
    }
  };

  useEffect(() => {
    if (originalAudioRef.current) {
      originalAudioRef.current.volume = originalVolume / 100;
    }
    if (masteredAudioRef.current) {
      masteredAudioRef.current.volume = masteredVolume / 100;
    }
  }, [originalVolume, masteredVolume]);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/Mixing_BG.mp4"
        autoPlay
        loop
        muted
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />

      {/* Main Content */}
      <div className="relative z-10 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Header */}
            <div className="pb-12 text-center">
              <h1 className="text-4xl font-bold md:text-5xl text-green-300">
                Mixing & Mastering
              </h1>
              <p className="text-lg mt-4 text-gray-300 max-w-3xl mx-auto">
                At Monaarch, we offer top-tier mixing and mastering services...
              </p>
            </div>

            {/* Upload Form */}
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
                {/* Controls */}
                <div className="flex flex-wrap justify-center gap-8 mb-8">
                  {[highCutoff, lowCutoff, decibelLevel].map((value, idx) => (
                    <div key={idx} className="text-center">
                      <label className="block text-sm font-medium text-indigo-100 mb-2">
                        {['High Cutoff', 'Low Cutoff', 'Decibel Level'][idx]}
                      </label>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={value}
                        onChange={(e) => [setHighCutoff, setLowCutoff, setDecibelLevel][idx](Number(e.target.value))}
                        className="w-24 h-24 transform rotate-[-90deg]"
                      />
                      <div className="mt-2 text-indigo-200">{value}</div>
                    </div>
                  ))}
                </div>

                {/* Process Button */}
                {processing ? (
                  <div className="flex justify-center mt-6">
                    <div className="flex items-center space-x-2 text-white">
                      {[...Array(3)].map((_, i) => (
                        <div key={i} className="loader-dot" />
                      ))}
                      <span>Processing...</span>
                    </div>
                  </div>
                ) : (
                  <div className="text-center">
                    <button
                      className="px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded shadow hover:from-green-500 hover:to-blue-600 transition-all duration-300"
                      onClick={handleProcess}
                    >
                      Start Mastering
                    </button>
                  </div>
                )}
              </div>
            )}

            {/* Audio Players */}
            {uploaded && !processing && masteredAudioURL && (
              <div className="mt-10 flex flex-col space-y-12">
                {[
                  {
                    title: 'Original Audio',
                    url: originalAudioURL,
                    ref: originalAudioRef,
                    volume: originalVolume,
                    setVolume: setOriginalVolume,
                    isPlaying: isPlayingOriginal,
                    isPaused: isOriginalPaused,
                    toggle: toggleOriginalPlayPause,
                    bgImage: '/original_m.png',
                    color: 'blue'
                  },
                  {
                    title: 'Mastered Audio',
                    url: masteredAudioURL,
                    ref: masteredAudioRef,
                    volume: masteredVolume,
                    setVolume: setMasteredVolume,
                    isPlaying: isPlayingMastered,
                    isPaused: isMasteredPaused,
                    toggle: toggleMasteredPlayPause,
                    bgImage: '/mixing_bg.png',
                    color: 'green'
                  }
                ].map((audio, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-lg bg-cover bg-center bg-no-repeat border-dashed border-2 border-white"
                    style={{ backgroundImage: `url('${audio.bgImage}')` }}
                  >
                    <h2 className="text-xl font-semibold mb-4 text-center">{audio.title}</h2>
                    <div className="flex flex-col items-center">
                      <div className="flex items-center space-x-4">
                        <button
                          onClick={audio.toggle}
                          className="play-button focus:outline-none"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-12 w-12 text-${audio.color}-500`}
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            {audio.isPaused ? (
                              <path d="M5 3.5v17l14-8.5-14-8.5z" />
                            ) : (
                              <path d="M6 4h4v16h-4v-16zm8 0h4v16h-4v-16z" />
                            )}
                          </svg>
                        </button>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={audio.volume}
                          onChange={(e) => audio.setVolume(Number(e.target.value))}
                          className="w-32 h-2 bg-transparent appearance-none cursor-pointer slider-thumb"
                        />
                      </div>
                      {audio.isPlaying ? (
                        <div className="equalizer mt-4 w-full flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <div key={i} className="bar" />
                          ))}
                        </div>
                      ) : (
                        <div className="mt-4 w-full h-8 opacity-0 pointer-events-none" />
                      )}
                      <audio
                        ref={audio.ref}
                        src={audio.url!}
                        onEnded={() => {
                          audio.setVolume(0);
                          audio.isPaused ? setIsPlayingOriginal : setIsPlayingMastered(false);
                          audio.isPaused ? setIsOriginalPaused : setIsMasteredPaused(true);
                        }}
                      />
                    </div>
                    <div className="mt-6 flex justify-center">
                      <a
                        href={audio.url!}
                        download={`${audio.title.toLowerCase().replace(' ', '_')}.${audio.color === 'blue' ? 'mp3' : 'wav'}`}
                        className={`px-6 py-3 bg-${audio.color}-600 text-white font-semibold rounded-full shadow-lg hover:bg-${audio.color}-700 transition-all duration-300 flex items-center`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M3 15a1 1 0 001 1h12a1 1 0 001-1v-3h-2v3H5v-3H3v3z" />
                          <path d="M7 10l3 3 3-3H9V4H7v6H4l3 3z" />
                        </svg>
                        Download {audio.title.split(' ')[0]}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx>{`
        .equalizer {
          height: 40px;
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
      `}</style>
    </section>
  );
}
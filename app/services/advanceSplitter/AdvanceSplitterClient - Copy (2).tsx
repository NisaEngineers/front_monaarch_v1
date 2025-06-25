"use client";

import { useState, useRef, useEffect } from "react";
const Waveform = () => (
  <div className="waveform">
    {[...Array(5)].map((_, i) => (
      <div key={i} />
    ))}
  </div>
);
export default function AdvanceSplitterClient(){
  const [uploaded, setUploaded] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [originalAudioURL, setOriginalAudioURL] = useState<string | null>(null);
  const [splitTracks, setSplitTracks] = useState({
    vocals: "",
    other: "",
    bass: "",
    drums: "",
    piano: ""
  });
  const [error, setError] = useState<string | null>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  // Refs and states for audio elements
  const originalAudioRef = useRef<HTMLAudioElement>(null);
  const vocalsAudioRef = useRef<HTMLAudioElement>(null);
  const otherAudioRef = useRef<HTMLAudioElement>(null);
  const bassAudioRef = useRef<HTMLAudioElement>(null);
  const drumsAudioRef = useRef<HTMLAudioElement>(null);
  const pianoAudioRef = useRef<HTMLAudioElement>(null);

  // Volume states
  const [originalVolume, setOriginalVolume] = useState(0);
  const [vocalsVolume, setVocalsVolume] = useState(0);
  const [otherVolume, setOtherVolume] = useState(0);
  const [bassVolume, setBassVolume] = useState(0);
  const [drumsVolume, setDrumsVolume] = useState(0);
  const [pianoVolume, setPianoVolume] = useState(0);

  // Play states
  const [isPlayingOriginal, setIsPlayingOriginal] = useState(false);
  const [isPlayingVocals, setIsPlayingVocals] = useState(false);
  const [isPlayingOther, setIsPlayingOther] = useState(false);
  const [isPlayingBass, setIsPlayingBass] = useState(false);
  const [isPlayingDrums, setIsPlayingDrums] = useState(false);
  const [isPlayingPiano, setIsPlayingPiano] = useState(false);

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.[0]) {
      const file = event.target.files[0];
      setUploadedFile(file);
      setOriginalAudioURL(URL.createObjectURL(file));
      setUploaded(true);
      setError(null);
    }
  };

  const handleProcess = async () => {
    if (!uploadedFile) return;
    
    setProcessing(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("audio_file", uploadedFile);
      formData.append("task", "Advanced Split");

      const response = await fetch("http://localhost:8000/process-audio/", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.detail || "Processing failed");
      }

      if (data.output_files?.length >= 5) {
        const processPath = (rawPath: string) => 
          rawPath.replace(/\\/g, '/')
                 .split('/')
                 .map(segment => encodeURIComponent(segment))
                 .join('/');

        const tracks = {
          vocals: `http://localhost:8000/download/${processPath(data.output_files[0])}`,
          other: `http://localhost:8000/download/${processPath(data.output_files[1])}`,
          bass: `http://localhost:8000/download/${processPath(data.output_files[2])}`,
          drums: `http://localhost:8000/download/${processPath(data.output_files[3])}`,
          piano: `http://localhost:8000/download/${processPath(data.output_files[4])}`
        };

        // Verify all tracks
        const responses = await Promise.all(Object.values(tracks).map(url => fetch(url)));
        if (responses.some(r => !r.ok)) throw new Error("Some tracks missing");
        
        setSplitTracks(tracks);
      } else {
        throw new Error("Invalid server response");
      }
    } catch (err) {
      console.error("Processing error:", err);
      setError(err instanceof Error ? err.message : "Audio processing failed");
    } finally {
      setProcessing(false);
    }
  };

  // Audio control functions (same as basic splitter)
  const togglePlayPause = (
    ref: React.RefObject<HTMLAudioElement>,
    isPlaying: boolean,
    setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>,
    volume: number,
    setVolume: React.Dispatch<React.SetStateAction<number>>
  ) => {
    if (!ref.current) return;
    
    if (isPlaying) {
      ref.current.pause();
    } else {
      if (volume === 0) setVolume(50);
      ref.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (
    ref: React.RefObject<HTMLAudioElement>,
    value: number,
    setVolume: React.Dispatch<React.SetStateAction<number>>,
    setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    setVolume(value);
    if (!ref.current) return;
    
    ref.current.volume = value / 100;
    if (value === 0) {
      ref.current.pause();
      setIsPlaying(false);
    } else if (!ref.current.paused) {
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    const syncVolume = (ref: React.RefObject<HTMLAudioElement>, volume: number) => {
      if (ref.current) ref.current.volume = volume / 100;
    };

    syncVolume(originalAudioRef, originalVolume);
    syncVolume(vocalsAudioRef, vocalsVolume);
    syncVolume(otherAudioRef, otherVolume);
    syncVolume(bassAudioRef, bassVolume);
    syncVolume(drumsAudioRef, drumsVolume);
    syncVolume(pianoAudioRef, pianoVolume);
  }, [originalVolume, vocalsVolume, otherVolume, bassVolume, drumsVolume, pianoVolume]);

  return (
    <section className="relative min-h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/Basic_BG.mp4"
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
                Advanced Splitter
              </h1>
              <p className="text-lg mt-4 text-gray-300 max-w-3xl mx-auto">
                Splits Voice, Other Instruments, Bass, Drums, and Piano
              </p>
              {error && (
                <div className="mt-4 p-3 bg-red-800/50 rounded-lg text-red-300">
                  Error: {error}
                </div>
              )}
            </div>

            {/* Upload Section */}
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
                {!processing ? (
                  <div className="text-center">
                    <button
                      className="px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded shadow hover:from-green-500 hover:to-blue-600 transition-all duration-300"
                      onClick={handleProcess}
                    >
                      Process Audio
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

            {uploaded && !processing && splitTracks.vocals && (
              <div className="mt-10 space-y-12">
                {/* Original Track */}
                <div className="p-6 rounded-lg border-2 border-dashed border-gray-500 bg-transparent">
                  <h2 className="text-xl font-semibold mb-4 text-center">Original Audio</h2>
                  <div className="flex flex-col items-center">
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => togglePlayPause(
                          originalAudioRef,
                          isPlayingOriginal,
                          setIsPlayingOriginal,
                          originalVolume,
                          setOriginalVolume
                        )}
                        className="play-button focus:outline-none"
                      >
                        {isPlayingOriginal ? (
                          <svg className="h-12 w-12 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M6 4h4v16h-4v-16zm8 0h4v16h-4v-16z" />
                          </svg>
                        ) : (
                          <svg className="h-12 w-12 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M5 3.5v17l14-8.5-14-8.5z" />
                          </svg>
                        )}
                      </button>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={originalVolume}
                        onChange={(e) => handleVolumeChange(
                          originalAudioRef,
                          Number(e.target.value),
                          setOriginalVolume,
                          setIsPlayingOriginal
                        )}
                        className="w-32 h-2 bg-transparent appearance-none cursor-pointer slider-thumb"
                      />
                    </div>
                    {isPlayingOriginal && <Waveform />}
                    <audio
                      ref={originalAudioRef}
                      src={originalAudioURL!}
                      onEnded={() => setIsPlayingOriginal(false)}
                    />
                  </div>
                </div>

                {/* Split Tracks Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    { name: "Vocals", ref: vocalsAudioRef, volume: vocalsVolume, 
                      setVolume: setVocalsVolume, isPlaying: isPlayingVocals, 
                      setIsPlaying: setIsPlayingVocals, url: splitTracks.vocals,
                      color: "bg-purple-600 hover:bg-purple-700" },
                    { name: "Other", ref: otherAudioRef, volume: otherVolume,
                      setVolume: setOtherVolume, isPlaying: isPlayingOther,
                      setIsPlaying: setIsPlayingOther, url: splitTracks.other,
                      color: "bg-teal-600 hover:bg-teal-700" },
                    { name: "Bass", ref: bassAudioRef, volume: bassVolume,
                      setVolume: setBassVolume, isPlaying: isPlayingBass,
                      setIsPlaying: setIsPlayingBass, url: splitTracks.bass,
                      color: "bg-yellow-600 hover:bg-yellow-700" },
                    { name: "Drums", ref: drumsAudioRef, volume: drumsVolume,
                      setVolume: setDrumsVolume, isPlaying: isPlayingDrums,
                      setIsPlaying: setIsPlayingDrums, url: splitTracks.drums,
                      color: "bg-red-600 hover:bg-red-700" },
                    { name: "Piano", ref: pianoAudioRef, volume: pianoVolume,
                      setVolume: setPianoVolume, isPlaying: isPlayingPiano,
                      setIsPlaying: setIsPlayingPiano, url: splitTracks.piano,
                      color: "bg-pink-600 hover:bg-pink-700" },
                  ].map((track) => (
                    <div key={track.name} className="p-6 rounded-lg border-2 border-dashed border-gray-500 bg-transparent">
                      <h2 className="text-xl font-semibold mb-4 text-center">{track.name}</h2>
                      <div className="flex flex-col items-center">
                        <div className="flex items-center space-x-4">
                          <button
                            onClick={() => togglePlayPause(
                              track.ref,
                              track.isPlaying,
                              track.setIsPlaying,
                              track.volume,
                              track.setVolume
                            )}
                            className="play-button focus:outline-none"
                          >
                            {track.isPlaying ? (
                              <svg className="h-12 w-12 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M6 4h4v16h-4v-16zm8 0h4v16h-4v-16z" />
                              </svg>
                            ) : (
                              <svg className="h-12 w-12 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M5 3.5v17l14-8.5-14-8.5z" />
                              </svg>
                            )}
                          </button>
                          <input
                            type="range"
                            min="0"
                            max="100"
                            value={track.volume}
                            onChange={(e) => handleVolumeChange(
                              track.ref,
                              Number(e.target.value),
                              track.setVolume,
                              track.setIsPlaying
                            )}
                            className="w-32 h-2 bg-transparent appearance-none cursor-pointer slider-thumb"
                          />
                        </div>
                        {track.isPlaying && <Waveform />}
                        <audio
                          ref={track.ref}
                          src={track.url}
                          onEnded={() => track.setIsPlaying(false)}
                        />
                        <div className="mt-6 flex justify-center">
                          <a
                            href={track.url}
                            download={`${track.name.toLowerCase()}.wav`}
                            className={`px-6 py-3 ${track.color} text-white font-semibold rounded-full shadow-lg transition-all duration-300 flex items-center`}
                          >
                            <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M3 15a1 1 0 001 1h12a1 1 0 001-1v-3h-2v3H5v-3H3v3z" />
                              <path d="M7 10l3 3 3-3H9V4H7v6H4l3 3z" />
                            </svg>
                            Download {track.name}
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Same global styles as basic splitter */}
      <style jsx global>{`
        .loader-dot {
          width: 10px;
          height: 10px;
          background: #ddd;
          border-radius: 50%;
          animation: loader 1s infinite alternate;
        }

        @keyframes loader {
          to {
            transform: scale(1.5);
            background: #ec4899;
          }
        }

        .waveform {
          display: flex;
          gap: 4px;
          height: 40px;
          align-items: flex-end;
          margin: 1rem auto 0;
          width: fit-content;
        }

        .waveform div {
          width: 120px;
          background: linear-gradient(to top, #6366f1, #ec4899);
          border-radius: 3px;
          animation: pulse 0.8s infinite ease-in-out;
          transform-origin: bottom;
        }

        .waveform div:nth-child(1) { height: 18px; animation-delay: 0.1s; }
        .waveform div:nth-child(2) { height: 22px; animation-delay: 0.2s; }
        .waveform div:nth-child(3) { height: 16px; animation-delay: 0.3s; }
        .waveform div:nth-child(4) { height: 24px; animation-delay: 0.4s; }
        .waveform div:nth-child(5) { height: 14px; animation-delay: 0.5s; }

        @keyframes pulse {
          0%, 100% { transform: scaleY(0.6); }
          50% { transform: scaleY(1.4); }
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
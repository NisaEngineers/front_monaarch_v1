
"use client";

import { useState, useRef, useEffect } from "react";

const Waveform = () => (
  <div className="waveform">
    {[...Array(5)].map((_, i) => (
      <div key={i} />
    ))}
  </div>
);

export default function MixingMasterClient() {
  const [uploaded, setUploaded] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [originalAudioURL, setOriginalAudioURL] = useState<string | null>(null);
  const [masteredAudioURL, setMasteredAudioURL] = useState<string | null>(null);
  const [highCutoff, setHighCutoff] = useState(1920); // Updated to match example
  const [lowCutoff, setLowCutoff] = useState(190);   // Updated to match example
  const [decibelLevel, setDecibelLevel] = useState(-27); // Updated to match example
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Refs for audio elements
  const originalAudioRef = useRef<HTMLAudioElement>(null);
  const masteredAudioRef = useRef<HTMLAudioElement>(null);

  // Volume states
  const [originalVolume, setOriginalVolume] = useState(0);
  const [masteredVolume, setMasteredVolume] = useState(0);

  // Play states
  const [isPlayingOriginal, setIsPlayingOriginal] = useState(false);
  const [isPlayingMastered, setIsPlayingMastered] = useState(false);

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.[0]) {
      const file = event.target.files[0];
      const url = URL.createObjectURL(file);
      setUploadedFile(file);
      setOriginalAudioURL(url);
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
      formData.append("target_file", uploadedFile);
      formData.append("freq_low", lowCutoff.toString());
      formData.append("freq_high", highCutoff.toString());
      formData.append("reduction_db", decibelLevel.toString());

      const response = await fetch("http://127.0.0.1:8002/process_audio", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Processing failed");
      const blob = await response.blob();
      setMasteredAudioURL(URL.createObjectURL(blob));
    } catch (err) {
      console.error("Processing error:", err);
      setError(err instanceof Error ? err.message : "Audio processing failed");
    } finally {
      setProcessing(false);
    }
  };

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
    syncVolume(masteredAudioRef, masteredVolume);
  }, [originalVolume, masteredVolume]);

  return (
    <section className="relative min-h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/Mixing_BG.mp4"
        autoPlay
        loop
        muted
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50" />

      <div className="relative z-10 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            <div className="pb-12 text-center">
              <h1 className="text-4xl font-bold md:text-5xl text-green-300">
                Mixing & Mastering
              </h1>
              <p className="text-lg mt-4 text-gray-300 max-w-3xl mx-auto">
                At Monaarch, we offer top-tier mixing and mastering services...
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
                <div className="flex flex-wrap justify-center gap-8 mb-8">
                  <div className="text-center">
                    <label className="block text-sm font-medium text-indigo-100 mb-2">
                      High Cutoff (Hz)
                    </label>
                    <div className="relative">
                      <input
                        type="range"
                        min="500"
                        max="5000"
                        step="10"
                        value={highCutoff}
                        onChange={(e) => setHighCutoff(Number(e.target.value))}
                        className="w-32 h-2 bg-gradient-to-r from-gray-600 to-gray-400 appearance-none cursor-pointer slider-thumb rounded-full"
                      />
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 slider-tooltip">
                        {highCutoff} Hz
                      </div>
                    </div>
                    <div className="mt-2 text-indigo-200">{highCutoff} Hz</div>
                  </div>
                  <div className="text-center">
                    <label className="block text-sm font-medium text-indigo-100 mb-2">
                      Low Cutoff (Hz)
                    </label>
                    <div className="relative">
                      <input
                        type="range"
                        min="50"
                        max="500"
                        step="5"
                        value={lowCutoff}
                        onChange={(e) => setLowCutoff(Number(e.target.value))}
                        className="w-32 h-2 bg-gradient-to-r from-gray-600 to-gray-400 appearance-none cursor-pointer slider-thumb rounded-full"
                      />
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 slider-tooltip">
                        {lowCutoff} Hz
                      </div>
                    </div>
                    <div className="mt-2 text-indigo-200">{lowCutoff} Hz</div>
                  </div>
                  <div className="text-center">
                    <label className="block text-sm font-medium text-indigo-100 mb-2">
                      Reduction (dB)
                    </label>
                    <div className="relative">
                      <input
                        type="range"
                        min="-40"
                        max="0"
                        step="1"
                        value={decibelLevel}
                        onChange={(e) => setDecibelLevel(Number(e.target.value))}
                        className="w-32 h-2 bg-gradient-to-r from-gray-600 to-gray-400 appearance-none cursor-pointer slider-thumb rounded-full"
                      />
                      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs rounded px-2 py-1 opacity-0 slider-tooltip">
                        {decibelLevel} dB
                      </div>
                    </div>
                    <div className="mt-2 text-indigo-200">{decibelLevel} dB</div>
                  </div>
                </div>

                {processing ? (
                  <div className="flex justify-center mt-6">
                    <div className="flex items-center space-x-2 text-white">
                      <div className="loader-dot"></div>
                      <div className="loader-dot"></div>
                      <div className="loader-dot"></div>
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

            {uploaded && !processing && masteredAudioURL && (
              <div className="mt-10 space-y-12">
                {[
                  {
                    title: "Original Audio",
                    url: originalAudioURL,
                    ref: originalAudioRef,
                    volume: originalVolume,
                    setVolume: setOriginalVolume,
                    isPlaying: isPlayingOriginal,
                    setIsPlaying: setIsPlayingOriginal,
                    color: "blue",
                  },
                  {
                    title: "Mastered Audio",
                    url: masteredAudioURL,
                    ref: masteredAudioRef,
                    volume: masteredVolume,
                    setVolume: setMasteredVolume,
                    isPlaying: isPlayingMastered,
                    setIsPlaying: setIsPlayingMastered,
                    color: "green",
                  },
                ].map((audio, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-lg border-2 border-dashed border-gray-500 bg-transparent"
                  >
                    <h2 className="text-xl font-semibold mb-4 text-center">{audio.title}</h2>
                    <div className="flex flex-col items-center">
                      <div className="flex items-center space-x-4">
                        <button
                          onClick={() => togglePlayPause(
                            audio.ref,
                            audio.isPlaying,
                            audio.setIsPlaying,
                            audio.volume,
                            audio.setVolume
                          )}
                          className="play-button focus:outline-none"
                        >
                          {audio.isPlaying ? (
                            <svg className={`h-12 w-12 text-${audio.color}-500`} fill="currentColor" viewBox="0 0 24 24">
                              <path d="M6 4h4v16h-4v-16zm8 0h4v16h-4v-16z" />
                            </svg>
                          ) : (
                            <svg className={`h-12 w-12 text-${audio.color}-500`} fill="currentColor" viewBox="0 0 24 24">
                              <path d="M5 3.5v17l14-8.5-14-8.5z" />
                            </svg>
                          )}
                        </button>
                        <input
                          type="range"
                          min="0"
                          max="100"
                          value={audio.volume}
                          onChange={(e) => handleVolumeChange(
                            audio.ref,
                            Number(e.target.value),
                            audio.setVolume,
                            audio.setIsPlaying
                          )}
                          className="w-32 h-2 bg-gradient-to-r from-gray-600 to-gray-400 appearance-none cursor-pointer slider-thumb rounded-full"
                        />
                      </div>
                      {audio.isPlaying && <Waveform />}
                      <audio
                        ref={audio.ref}
                        src={audio.url!}
                        onEnded={() => audio.setIsPlaying(false)}
                      />
                      <div className="mt-6 flex justify-center">
                        <a
                          href={audio.url!}
                          download={`${audio.title.toLowerCase().replace(' ', '_')}.${audio.color === 'blue' ? 'mp3' : 'wav'}`}
                          className={`px-6 py-3 bg-${audio.color}-600 text-white font-semibold rounded-full shadow-lg hover:bg-${audio.color}-700 transition-all duration-300 flex items-center`}
                        >
                          <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M3 15a1 1 0 001 1h12a1 1 0 001-1v-3h-2v3H5v-3H3v3z" />
                            <path d="M7 10l3 3 3-3H9V4H7v6H4l3 3z" />
                          </svg>
                          Download {audio.title.split(' ')[0]}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

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
          border-radius: 50%;
          cursor: pointer;
        }

        .slider-thumb::-moz-range-thumb {
          width: 16px;
          height: 16px;
          background: linear-gradient(45deg, #6366f1, #ec4899);
          border: 2px solid #fff;
          border-radius: 50%;
          cursor: pointer;
        }

        .slider-thumb {
          height: 4px;
          border-radius: 2px;
        }

        .slider-thumb:hover + .slider-tooltip,
        .slider-thumb:active + .slider-tooltip {
          opacity: 1;
          transition: opacity 0.2s ease-in-out;
        }

        .slider-tooltip {
          transition: opacity 0.2s ease-in-out;
        }
      `}</style>
    </section>
  );
}

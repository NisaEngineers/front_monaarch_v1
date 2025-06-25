// MixingMasterClient.tsx

"use client";

import { useState, useRef, useEffect } from "react";

export default function MixingMasterClient() {
  // State variables remain unchanged
  const [uploaded, setUploaded] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [originalAudioURL, setOriginalAudioURL] = useState<string | null>(null);
  const [masteredAudioURL, setMasteredAudioURL] = useState<string | null>(null);
  const [highCutoff, setHighCutoff] = useState(50);
  const [lowCutoff, setLowCutoff] = useState(50);
  const [decibelLevel, setDecibelLevel] = useState(50);

  // Refs for audio elements
  const originalAudioRef = useRef<HTMLAudioElement>(null);
  const masteredAudioRef = useRef<HTMLAudioElement>(null);

  // Volume state (start from 0)
  const [originalVolume, setOriginalVolume] = useState(0);
  const [masteredVolume, setMasteredVolume] = useState(0);

  // Animation state
  const [isPlayingOriginal, setIsPlayingOriginal] = useState(false);
  const [isPlayingMastered, setIsPlayingMastered] = useState(false);

  // Play/Pause button state
  const [isOriginalPaused, setIsOriginalPaused] = useState(true);
  const [isMasteredPaused, setIsMasteredPaused] = useState(true);

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const url = URL.createObjectURL(file);
      setOriginalAudioURL(url);
      setUploaded(true);
    }
  };

  const handleProcess = () => {
    setProcessing(true);
    // Simulate processing delay
    setTimeout(() => {
      // Simulate mastering by reusing the original audio URL
      setMasteredAudioURL(originalAudioURL);
      setProcessing(false);
    }, 3000);
  };

  // Handle play/pause for original audio
  const toggleOriginalPlayPause = () => {
    if (originalAudioRef.current) {
      if (isOriginalPaused) {
        originalAudioRef.current.play();
        setIsPlayingOriginal(true);
        setIsOriginalPaused(false);
        if (originalVolume === 0) setOriginalVolume(50); // Set default volume if at zero
      } else {
        originalAudioRef.current.pause();
        setIsPlayingOriginal(false);
        setIsOriginalPaused(true);
      }
    }
  };

  // Handle play/pause for mastered audio
  const toggleMasteredPlayPause = () => {
    if (masteredAudioRef.current) {
      if (isMasteredPaused) {
        masteredAudioRef.current.play();
        setIsPlayingMastered(true);
        setIsMasteredPaused(false);
        if (masteredVolume === 0) setMasteredVolume(50); // Set default volume if at zero
      } else {
        masteredAudioRef.current.pause();
        setIsPlayingMastered(false);
        setIsMasteredPaused(true);
      }
    }
  };

  // Ensure audio volume is synced initially
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

      {/* Overlay for contrast */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      {/* Main Content */}
      <div className="relative z-10 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Section Header */}
            <div className="pb-12 text-center">
              <h1 className="text-4xl font-bold md:text-5xl text-green-300">
                Mixing & Mastering
              </h1>
              <p className="text-lg mt-4 text-gray-300 max-w-3xl mx-auto">
                At Monaarch, we offer top-tier mixing and mastering services to bring your music to life. Our advanced algorithms and expert techniques ensure that every track sounds crisp, clear, and professionally polished. Whether you're an emerging artist or a seasoned professional, our platform provides the tools you need to create stunning audio experiences.
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
                {/* Rotating Knobs */}
                <div className="flex flex-wrap justify-center gap-8 mb-8">
                  {/* High Cutoff Frequency Knob */}
                  <div className="text-center">
                    <label className="block text-sm font-medium text-indigo-100 mb-2">
                      High Cutoff Frequency
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={highCutoff}
                      onChange={(e) => setHighCutoff(Number(e.target.value))}
                      className="w-24 h-24 transform rotate-[-90deg]"
                    />
                    <div className="mt-2 text-indigo-200">{highCutoff}</div>
                  </div>
                  {/* Low Cutoff Frequency Knob */}
                  <div className="text-center">
                    <label className="block text-sm font-medium text-indigo-100 mb-2">
                      Low Cutoff Frequency
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={lowCutoff}
                      onChange={(e) => setLowCutoff(Number(e.target.value))}
                      className="w-24 h-24 transform rotate-[-90deg]"
                    />
                    <div className="mt-2 text-indigo-200">{lowCutoff}</div>
                  </div>
                  {/* Decibel Level Knob */}
                  <div className="text-center">
                    <label className="block text-sm font-medium text-indigo-100 mb-2">
                      Adjust Decibel Level
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={decibelLevel}
                      onChange={(e) => setDecibelLevel(Number(e.target.value))}
                      className="w-24 h-24 transform rotate-[-90deg]"
                    />
                    <div className="mt-2 text-indigo-200">{decibelLevel}</div>
                  </div>
                </div>
                {/* Process Button */}
                {!processing ? (
                  <div className="text-center">
                    <button
                      className="px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded shadow hover:from-green-500 hover:to-blue-600 transition-all duration-300"
                      onClick={handleProcess}
                    >
                      Start Mastering
                    </button>
                  </div>
                ) : (
                  <div className="flex justify-center mt-6">
                    {/* Processing Animation */}
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

            {/* Audio Placeholders */}
            {uploaded && !processing && masteredAudioURL && (
              <div className="mt-10 flex flex-col space-y-12">
                {/* Original Audio Placeholder */}
                <div
                  className="p-6 rounded-lg bg-cover bg-center bg-no-repeat border-dashed border-2 border-white"

                  style={{ backgroundImage: "url('/original_m.png')" }}
                >
                  <h2 className="text-xl font-semibold mb-4 text-center">Original Audio</h2>
                  {/* Audio Controls */}
                  <div className="flex flex-col items-center">
                    <div className="flex items-center space-x-4">
                      {/* Play/Pause Button */}
                      <button
                        onClick={toggleOriginalPlayPause}
                        className="play-button focus:outline-none"
                      >
                        {isOriginalPaused ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12 text-blue-500"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M5 3.5v17l14-8.5-14-8.5z" />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12 text-blue-500"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M6 4h4v16h-4v-16zm8 0h4v16h-4v-16z" />
                          </svg>
                        )}
                      </button>
                      {/* Volume Slider */}
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={originalVolume}
                        onChange={(e) =>
                          handleOriginalVolumeChange(Number(e.target.value))
                        }
                        className="w-32 h-2 bg-transparent appearance-none cursor-pointer slider-thumb"
                      />
                    </div>
                    {/* Equalizer */}
                    {isPlayingOriginal ? (
                      <div className="equalizer mt-4 w-full flex items-center">
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                      </div>
                    ) : (
                      <div className="mt-4 w-full h-8 opacity-0 pointer-events-none"></div>
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
                  </div>
                  {/* Download Button */}
                  <div className="mt-6 flex justify-center">
                    <a
                      href={originalAudioURL!}
                      download="original_audio.mp3"
                      className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 flex items-center"
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
                      Download Original
                    </a>
                  </div>
                </div>

                {/* Mastered Audio Placeholder */}
                <div
                  className="p-6 rounded-lg bg-cover bg-center bg-no-repeat border-dashed border-2 border-white"

                  style={{ backgroundImage: "url('/mixing_bg.png')" }}
                >
                  <h2 className="text-xl font-semibold mb-4 text-center">Mastered Audio</h2>
                  {/* Audio Controls */}
                  <div className="flex flex-col items-center">
                    <div className="flex items-center space-x-4">
                      {/* Play/Pause Button */}
                      <button
                        onClick={toggleMasteredPlayPause}
                        className="play-button focus:outline-none"
                      >
                        {isMasteredPaused ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12 text-blue-500"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M5 3.5v17l14-8.5-14-8.5z" />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-12 w-12 text-blue-500"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M6 4h4v16h-4v-16zm8 0h4v16h-4v-16z" />
                          </svg>
                        )}
                      </button>
                      {/* Volume Slider */}
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={masteredVolume}
                        onChange={(e) =>
                          handleMasteredVolumeChange(Number(e.target.value))
                        }
                        className="w-32 h-2 bg-transparent appearance-none cursor-pointer slider-thumb"
                      />
                    </div>
                    {/* Equalizer */}
                    {isPlayingMastered ? (
                      <div className="equalizer mt-4 w-full flex items-center">
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                      </div>
                    ) : (
                      <div className="mt-4 w-full h-8 opacity-0 pointer-events-none"></div>
                    )}
                    <audio
                      ref={masteredAudioRef}
                      src={masteredAudioURL!}
                      onEnded={() => {
                        setIsPlayingMastered(false);
                        setIsMasteredPaused(true);
                        setMasteredVolume(0);
                      }}
                    />
                  </div>
                  {/* Download Button */}
                  <div className="mt-6 flex justify-center">
                    <a
                      href={masteredAudioURL!}
                      download="mastered_audio.mp3"
                      className="px-6 py-3 bg-green-600 text-white font-semibold rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 flex items-center"
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
                      Download Mastered
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Styles */}
        {/* Styles */}
        <style jsx>{`
  /* Container Background */
  .control-container {
    background: linear-gradient(135deg, #1a1b26, #16161e);
    padding: 1.5rem;
    border-radius: 12px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.1);
  }

  /* Equalizer Styles */
  .equalizer {
    height: 40px;
    position: relative;
    display: flex;
    align-items: flex-end;
    gap: 2px;
  }

  .bar {
    width: 120px;
    background: linear-gradient(to top, #6366f1, #ec4899, #f59e0b);
    /* Increase the animation duration for a more gradual cycle */
    animation: equalize 2s infinite ease-in-out;
    border-radius: 2px 2px 0 0;
  }

  /* Adjust delays for a smooth staggered effect */
  .bar:nth-child(1) { animation-delay: 0s; }
  .bar:nth-child(2) { animation-delay: 0.15s; }
  .bar:nth-child(3) { animation-delay: 0.3s; }
  .bar:nth-child(4) { animation-delay: 0.45s; }
  .bar:nth-child(5) { animation-delay: 0.6s; }
  .bar:nth-child(6) { animation-delay: 0.75s; }
  .bar:nth-child(7) { animation-delay: 0.9s; }
  .bar:nth-child(8) { animation-delay: 1.05s; }

  /* Loader Styles */
        .loader-dot {
          width: 10px;
          height: 10px;
          background: #ddd;
          border-radius: 50%;
          animation: loader 1s infinite alternate;
        }
        .loader-dot:nth-child(1) {
          animation-delay: 0s;
        }
        .loader-dot:nth-child(2) {
          animation-delay: 0.2s;
        }
        .loader-dot:nth-child(3) {
          animation-delay: 0.4s;
        }

  /* Keyframes: Increase amplitude by having a lower baseline and higher peak */
  @keyframes equalize {
    0%, 100% {
      height: 10%;  /* Lower starting/ending height */
    }
    50% {
      height: 100%;  /* Increase peak to fill the container */
    }
  }

  /* Button Styles */
  .control-button {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(8px);
    border: none;
    padding: 0.8rem;
    border-radius: 8px;
    transition: all 0.3s ease;
  }

  /* Volume Slider Styles */
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

  /* Maintain original loader scaling */
  @keyframes loader {
    to {
      transform: scale(1.5);
      background: #ec4899;
    }
  }
`}</style>
    </section>
  );
}

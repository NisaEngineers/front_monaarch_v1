// ChordsClient.tsx

"use client";

import { useState, useRef, useEffect } from "react";

export default function ChordsClient() {
  const [uploaded, setUploaded] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [originalAudioURL, setOriginalAudioURL] = useState<string | null>(null);
  const [chords, setChords] = useState<string[] | null>(null);

  // Refs for audio elements
  const originalAudioRef = useRef<HTMLAudioElement>(null);
  const [originalVolume, setOriginalVolume] = useState(0);
  const [isPlayingOriginal, setIsPlayingOriginal] = useState(false);
  const [isOriginalPaused, setIsOriginalPaused] = useState(true);

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
      // Simulate chord extraction by generating a random chord sequence
      setChords(["Cmaj7", "G7", "Am7", "D7"]);
      setProcessing(false);
    }, 3000);
  };

  // Handle play/pause and volume for original audio
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
      if (value === 0) {
        originalAudioRef.current.pause();
        setIsPlayingOriginal(false);
        setIsOriginalPaused(true);
      } else {
        originalAudioRef.current.play();
        setIsPlayingOriginal(true);
        setIsOriginalPaused(false);
      }
    }
  };

  // Ensure audio volume is synced initially
  useEffect(() => {
    if (originalAudioRef.current) {
      originalAudioRef.current.volume = originalVolume / 100;
    }
  }, [originalVolume]);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/Chords_BG.mp4"
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
                Chord Extraction
              </h1>
              <p className="text-lg mt-4 text-gray-300 max-w-3xl mx-auto">
                Extract chords from your audio and convert them into MIDI files using Monaarch's advanced chord recognition technology.
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
                {!processing ? (
                  <div className="text-center">
                    <button
                      className="px-6 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded shadow hover:from-green-500 hover:to-blue-600 transition-all duration-300"
                      onClick={handleProcess}
                    >
                      Extract Chords
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

            {/* Display Extracted Chords */}
{uploaded && !processing && chords && (
  <div className="mt-10 space-y-12">
    {/* Original Audio */}
    <div
      className="p-6 rounded-lg bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/original_m.png')" }}
    >
      <h2 className="text-xl font-semibold mb-4 text-center">Original Audio</h2>
      {/* Audio Controls */}
      <div className="flex flex-col items-center">
        <div className="flex items-center space-x-4">
          {/* Play/Pause Button */}
          <button onClick={toggleOriginalPlayPause} className="play-button focus:outline-none">
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
            onChange={(e) => handleOriginalVolumeChange(Number(e.target.value))}
            className="w-32 h-2 bg-transparent appearance-none cursor-pointer slider-thumb"
          />
        </div>
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

    {/* Extracted Chords */}
    <div
      className="p-6 rounded-lg bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/chords_bg.png')" }}
    >
      <h2 className="text-xl font-semibold mb-4 text-center">Extracted Chords</h2>
      {/* MIDI Viewer */}
      <div className="bg-gray-800 bg-opacity-50 rounded-lg p-4">
        {chords && (
          <div className="grid grid-cols-4 gap-4 text-center">
            {chords.map((chord, index) => (
              <div key={index} className="text-white text-lg font-semibold">
                {chord}
              </div>
            ))}
          </div>
        )}
      </div>
      {/* Download MIDI Button */}
      <div className="mt-6 flex justify-center">
        <a
          href="#"
          download="chords.mid"
          className="px-6 py-3 bg-purple-600 text-white font-semibold rounded-full shadow-lg hover:bg-purple-700 transition-all duration-300 flex items-center"
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
          Download MIDI
        </a>
      </div>

      {/* BPM Finder Section */}
      <div className="mt-10 p-6 bg-cover bg-center bg-no-repeat ">
        <h2 className="text-xl font-semibold mb-4 text-center">BPM Finder</h2>
        {/* BPM Range Card */}
        <div className="bg-gray-800 bg-opacity-50 rounded-lg p-4">
          <div className="grid grid-cols-1 gap-4 text-center">
            <div className="text-white text-lg font-semibold">BPM Progress Bar [0-500]</div>
          </div>
        </div>
        {/* BPM Finder Button */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={() => {}}
            className="px-6 py-3 bg-green-600 text-white font-semibold rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 flex items-center"
          >
            BPM Finder
          </button>
        </div>
      </div>
    </div>
  </div>
)}

            
          </div>
        </div>
      </div>

     {/* Styles */}
		<style jsx>{`
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

  @keyframes loader {
    from {
      transform: scale(1);
      background: #6366f1;
    }
    to {
      transform: scale(1.5);
      background: #22d3ee;
    }
  }

  /* Volume Slider Background */
  .slider-thumb::-webkit-slider-runnable-track {
    width: 100%;
    height: 4px;
    background: #ddd;
    border-radius: 2px;
  }

  .slider-thumb::-moz-range-track {
    width: 100%;
    height: 4px;
    background: #ddd;
    border-radius: 2px;
  }

  /* Volume Slider Thumb Style */
  .slider-thumb::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    background: blue;
    cursor: pointer;
    border-radius: 50%;
    margin-top: -9px; /* Center the thumb vertically */
  }

  .slider-thumb::-moz-range-thumb {
    width: 20px;
    height: 20px;
    background: blue;
    cursor: pointer;
    border-radius: 50%;
  }

  /* Play Button Styles */
  .play-button svg {
    transition: transform 0.2s;
  }

  .play-button:hover svg {
    transform: scale(1.1);
  }
`}</style>

    </section>
  );
}

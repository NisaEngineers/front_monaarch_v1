// BasicSplitterClient.tsx

"use client";


import { useState, useRef, useEffect } from "react";

export default function BasicSplitterClient() {
  const [uploaded, setUploaded] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [originalAudioURL, setOriginalAudioURL] = useState<string | null>(null);

  const [splitTracks, setSplitTracks] = useState<{
    vocals: string | null;
    drums: string | null;
    bass: string | null;
    others: string | null;
  }>({
    vocals: null,
    drums: null,
    bass: null,
    others: null,
  });

  // Refs and states for audio elements
  const originalAudioRef = useRef<HTMLAudioElement>(null);
  const vocalsAudioRef = useRef<HTMLAudioElement>(null);
  const drumsAudioRef = useRef<HTMLAudioElement>(null);
  const bassAudioRef = useRef<HTMLAudioElement>(null);
  const othersAudioRef = useRef<HTMLAudioElement>(null);

  const [originalVolume, setOriginalVolume] = useState(0);
  const [vocalsVolume, setVocalsVolume] = useState(0);
  const [drumsVolume, setDrumsVolume] = useState(0);
  const [bassVolume, setBassVolume] = useState(0);
  const [othersVolume, setOthersVolume] = useState(0);

  const [isPlayingOriginal, setIsPlayingOriginal] = useState(false);
  const [isPlayingVocals, setIsPlayingVocals] = useState(false);
  const [isPlayingDrums, setIsPlayingDrums] = useState(false);
  const [isPlayingBass, setIsPlayingBass] = useState(false);
  const [isPlayingOthers, setIsPlayingOthers] = useState(false);

  const [isOriginalPaused, setIsOriginalPaused] = useState(true);
  const [isVocalsPaused, setIsVocalsPaused] = useState(true);
  const [isDrumsPaused, setIsDrumsPaused] = useState(true);
  const [isBassPaused, setIsBassPaused] = useState(true);
  const [isOthersPaused, setIsOthersPaused] = useState(true);

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
      // Simulate split tracks by reusing the original audio URL
      setSplitTracks({
        vocals: originalAudioURL,
        drums: originalAudioURL,
        bass: originalAudioURL,
        others: originalAudioURL,
      });
      setProcessing(false);
    }, 3000);
  };

  // Handle play/pause and volume for audio elements
  const handlePlayPause = (
    audioRef: React.RefObject<HTMLAudioElement>,
    isPaused: boolean,
    setIsPaused: React.Dispatch<React.SetStateAction<boolean>>,
    setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>,
    volume: number,
    setVolume: React.Dispatch<React.SetStateAction<number>>,
  ) => {
    if (audioRef.current) {
      if (isPaused) {
        audioRef.current.play();
        setIsPlaying(true);
        setIsPaused(false);
        if (volume === 0) setVolume(50);
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
        setIsPaused(true);
      }
    }
  };

  const handleVolumeChange = (
    audioRef: React.RefObject<HTMLAudioElement>,
    value: number,
    setVolume: React.Dispatch<React.SetStateAction<number>>,
    setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>,
    setIsPaused: React.Dispatch<React.SetStateAction<boolean>>,
  ) => {
    setVolume(value);
    if (audioRef.current) {
      audioRef.current.volume = value / 100;
      if (value === 0) {
        audioRef.current.pause();
        setIsPlaying(false);
        setIsPaused(true);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
        setIsPaused(false);
      }
    }
  };

  // Ensure audio volume is synced initially
  useEffect(() => {
    if (originalAudioRef.current) {
      originalAudioRef.current.volume = originalVolume / 100;
    }
    // Repeat for other audio refs
    if (vocalsAudioRef.current) {
      vocalsAudioRef.current.volume = vocalsVolume / 100;
    }
    if (drumsAudioRef.current) {
      drumsAudioRef.current.volume = drumsVolume / 100;
    }
    if (bassAudioRef.current) {
      bassAudioRef.current.volume = bassVolume / 100;
    }
    if (othersAudioRef.current) {
      othersAudioRef.current.volume = othersVolume / 100;
    }
  }, [
    originalVolume,
    vocalsVolume,
    drumsVolume,
    bassVolume,
    othersVolume,
  ]);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/Basic_BG.mp4"
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
                Basic Splitter
              </h1>
              <p className="text-lg mt-4 text-gray-300 max-w-3xl mx-auto">
                Split your audio into vocals, drums, bass, and other components with Monaarch's advanced audio separation technology.
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
                      Start Splitting
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

            {/* Display Split Tracks */}
            {uploaded && !processing && splitTracks.vocals && (
              <div className="mt-10 space-y-12">
                {/* Original Audio */}
                <div className="p-6 rounded-lg bg-cover bg-center bg-no-repeat">

                  <h2 className="text-xl font-semibold mb-4 text-center">Original Audio</h2>
                  {/* Audio Controls */}
                  <div className="flex flex-col items-center">
                    <div className="flex items-center space-x-4">
                      {/* Play/Pause Button */}
                      <button
                        onClick={() =>
                          handlePlayPause(
                            originalAudioRef,
                            isOriginalPaused,
                            setIsOriginalPaused,
                            setIsPlayingOriginal,
                            originalVolume,
                            setOriginalVolume
                          )
                        }
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
                          handleVolumeChange(
                            originalAudioRef,
                            Number(e.target.value),
                            setOriginalVolume,
                            setIsPlayingOriginal,
                            setIsOriginalPaused
                          )
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

                {/* Split Tracks */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Vocals */}
                  <div className="p-6 rounded-lg bg-cover bg-center bg-no-repeat border-dashed border-2 border-white">
                    <h2 className="text-xl font-semibold mb-4 text-center">Vocals</h2>
                    {/* Audio Controls */}
                    <div className="flex flex-col items-center">
                      <div className="flex items-center space-x-4">
                        {/* Play/Pause Button */}
                        <button
                          onClick={() =>
                            handlePlayPause(
                              vocalsAudioRef,
                              isVocalsPaused,
                              setIsVocalsPaused,
                              setIsPlayingVocals,
                              vocalsVolume,
                              setVocalsVolume
                            )
                          }
                          className="play-button focus:outline-none"
                        >
                          {isVocalsPaused ? (
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
                          value={vocalsVolume}
                          onChange={(e) =>
                            handleVolumeChange(
                              vocalsAudioRef,
                              Number(e.target.value),
                              setVocalsVolume,
                              setIsPlayingVocals,
                              setIsVocalsPaused
                            )
                          }
                          className="w-32 h-2 bg-transparent appearance-none cursor-pointer slider-thumb"
                        />
                      </div>
                      {/* Equalizer */}
                      {isPlayingVocals ? (
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
                        ref={vocalsAudioRef}
                        src={splitTracks.vocals!}
                        onEnded={() => {
                          setIsPlayingVocals(false);
                          setIsVocalsPaused(true);
                          setVocalsVolume(0);
                        }}
                      />
                    </div>
                    {/* Download Button */}
                    <div className="mt-6 flex justify-center">
                      <a
                        href={splitTracks.vocals!}
                        download="vocals.mp3"
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
                        Download Vocals
                      </a>
                    </div>
                  </div>

                  {/* Drums */}
                  <div className="p-6 rounded-lg bg-cover bg-center bg-no-repeat border-dashed border-2 border-white">
                    <h2 className="text-xl font-semibold mb-4 text-center">Drums</h2>
                    {/* Audio Controls */}
                    <div className="flex flex-col items-center">
                      <div className="flex items-center space-x-4">
                        {/* Play/Pause Button */}
                        <button
                          onClick={() =>
                            handlePlayPause(
                              drumsAudioRef,
                              isDrumsPaused,
                              setIsDrumsPaused,
                              setIsPlayingDrums,
                              drumsVolume,
                              setDrumsVolume
                            )
                          }
                          className="play-button focus:outline-none"
                        >
                          {isDrumsPaused ? (
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
                          value={drumsVolume}
                          onChange={(e) =>
                            handleVolumeChange(
                              drumsAudioRef,
                              Number(e.target.value),
                              setDrumsVolume,
                              setIsPlayingDrums,
                              setIsDrumsPaused
                            )
                          }
                          className="w-32 h-2 bg-transparent appearance-none cursor-pointer slider-thumb"
                        />
                      </div>
                      {/* Equalizer */}
                      {isPlayingDrums ? (
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
                        ref={drumsAudioRef}
                        src={splitTracks.drums!}
                        onEnded={() => {
                          setIsPlayingDrums(false);
                          setIsDrumsPaused(true);
                          setDrumsVolume(0);
                        }}
                      />
                    </div>
                    {/* Download Button */}
                    <div className="mt-6 flex justify-center">
                      <a
                        href={splitTracks.drums!}
                        download="drums.mp3"
                        className="px-6 py-3 bg-red-600 text-white font-semibold rounded-full shadow-lg hover:bg-red-700 transition-all duration-300 flex items-center"
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
                        Download Drums
                      </a>
                    </div>
                  </div>

                  {/* Bass */}
                  <div className="p-6 rounded-lg bg-cover bg-center bg-no-repeat border-dashed border-2 border-white">
                    <h2 className="text-xl font-semibold mb-4 text-center">Bass</h2>
                    {/* Audio Controls */}
                    <div className="flex flex-col items-center">
                      <div className="flex items-center space-x-4">
                        {/* Play/Pause Button */}
                        <button
                          onClick={() =>
                            handlePlayPause(
                              bassAudioRef,
                              isBassPaused,
                              setIsBassPaused,
                              setIsPlayingBass,
                              bassVolume,
                              setBassVolume
                            )
                          }
                          className="play-button focus:outline-none"
                        >
                          {isBassPaused ? (
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
                          value={bassVolume}
                          onChange={(e) =>
                            handleVolumeChange(
                              bassAudioRef,
                              Number(e.target.value),
                              setBassVolume,
                              setIsPlayingBass,
                              setIsBassPaused
                            )
                          }
                          className="w-32 h-2 bg-transparent appearance-none cursor-pointer slider-thumb"
                        />
                      </div>
                      {/* Equalizer */}
                      {isPlayingBass ? (
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
                        ref={bassAudioRef}
                        src={splitTracks.bass!}
                        onEnded={() => {
                          setIsPlayingBass(false);
                          setIsBassPaused(true);
                          setBassVolume(0);
                        }}
                      />
                    </div>
                    {/* Download Button */}
                    <div className="mt-6 flex justify-center">
                      <a
                        href={splitTracks.bass!}
                        download="bass.mp3"
                        className="px-6 py-3 bg-yellow-600 text-white font-semibold rounded-full shadow-lg hover:bg-yellow-700 transition-all duration-300 flex items-center"
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
                        Download Bass
                      </a>
                    </div>
                  </div>

                  {/* Others */}
                  <div className="p-6 rounded-lg bg-cover bg-center bg-no-repeat border-dashed border-2 border-white">
                    <h2 className="text-xl font-semibold mb-4 text-center">Music</h2>
                    {/* Audio Controls */}
                    <div className="flex flex-col items-center">
                      <div className="flex items-center space-x-4">
                        {/* Play/Pause Button */}
                        <button
                          onClick={() =>
                            handlePlayPause(
                              othersAudioRef,
                              isOthersPaused,
                              setIsOthersPaused,
                              setIsPlayingOthers,
                              othersVolume,
                              setOthersVolume
                            )
                          }
                          className="play-button focus:outline-none"
                        >
                          {isOthersPaused ? (
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
                          value={othersVolume}
                          onChange={(e) =>
                            handleVolumeChange(
                              othersAudioRef,
                              Number(e.target.value),
                              setOthersVolume,
                              setIsPlayingOthers,
                              setIsOthersPaused
                            )
                          }
                          className="w-32 h-2 bg-transparent appearance-none cursor-pointer slider-thumb"
                        />
                      </div>
                      {/* Equalizer */}
                      {isPlayingOthers ? (
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
                        ref={othersAudioRef}
                        src={splitTracks.others!}
                        onEnded={() => {
                          setIsPlayingOthers(false);
                          setIsOthersPaused(true);
                          setOthersVolume(0);
                        }}
                      />
                    </div>
                    {/* Download Button */}
                    <div className="mt-6 flex justify-center">
                      <a
                        href={splitTracks.others!}
                        download="others.mp3"
                        className="px-6 py-3 bg-teal-600 text-white font-semibold rounded-full shadow-lg hover:bg-teal-700 transition-all duration-300 flex items-center"
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
                        Download Others
                      </a>
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

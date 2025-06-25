import { useState } from "react";
import Link from "next/link";

export const metadata = {
  title: "Voice Remover - Monaarch",
  description: "Remove vocals from your audio tracks with ease",
};

const VoiceRemover: React.FC = () => {
  const [uploaded, setUploaded] = useState(false);
  const [removingVocals, setRemovingVocals] = useState(false);

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUploaded(true);
    // Add upload functionality here
  };

  const handleRemoveVocals = () => {
    setRemovingVocals(true);
    // Add vocal removal functionality here
  };

  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center">
            <h1 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Voice Remover
            </h1>
          </div>
          {/* Upload form */}
          {!uploaded ? (
            <form className="mx-auto max-w-[400px]">
              <div className="space-y-5">
                <div>
                  <label
                    className="mb-1 block text-sm font-medium text-indigo-200/65"
                    htmlFor="upload"
                  >
                    Upload Song <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="upload"
                    type="file"
                    className="form-input w-full"
                    onChange={handleUpload}
                    required
                  />
                </div>
                {removingVocals ? (
                  <div className="flex justify-center mt-6">
                    <div className="loader">Loading...</div>
                  </div>
                ) : (
                  <button className="btn w-full bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%]">
                    Upload
                  </button>
                )}
              </div>
            </form>
          ) : (
            <div className="mt-6 text-center">
              <button
                className="btn w-full bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%]"
                onClick={handleRemoveVocals}
              >
                Remove Vocals
              </button>
            </div>
          )}
          {uploaded && removingVocals && (
            <div className="mt-6 flex flex-col space-y-4">
              <div className="flex items-center justify-between p-4 bg-gray-800 rounded">
                <span className="text-white">Original Audio</span>
                <div className="flex items-center space-x-2">
                  <button className="btn text-white">Play</button>
                  <input type="range" className="slider" />
                </div>
              </div>
              <div className="flex items-center justify-between p-4 bg-gray-800 rounded">
                <span className="text-white">Instrumental Audio</span>
                <div className="flex items-center space-x-2">
                  <button className="btn text-white">Play</button>
                  <input type="range" className="slider" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default VoiceRemover;
 
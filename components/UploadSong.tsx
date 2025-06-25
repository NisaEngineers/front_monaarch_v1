import { useState } from "react";
import Image from "next/image";
import UploadIcon from "@/public/images/upload.svg"; // Assume you have an SVG icon for upload
import WaveIllustration from "@/public/images/wave-illustration.svg"; // Background or decorative SVG

export default function UploadSong() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setSelectedFile(file || null);
  };

  const handleUpload = () => {
    if (selectedFile) {
      // Handle the file upload logic here
      console.log("Uploading:", selectedFile);
    } else {
      alert("Please select a file to upload.");
    }
  };

  return (
    <section className="relative bg-gray-900 py-12 md:py-20">
      {/* Background Illustration */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
      >
        <Image
          src={WaveIllustration}
          layout="fill"
          objectFit="cover"
          alt="Background decoration"
        />
      </div>

      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2
          className="animate-[gradient_6s_linear_infinite] bg-gradient-to-r from-gray-200 via-indigo-200 to-gray-200 bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
          data-aos="fade-up"
        >
          Upload Your Song
        </h2>
        <p
          className="mb-8 text-xl text-indigo-200/80"
          data-aos="fade-up"
          data-aos-delay={200}
        >
          Select a track to start transforming your music with our AI-powered tools.
        </p>

        <div
          className="mx-auto max-w-lg rounded-lg border-2 border-dashed border-indigo-500 p-6"
          data-aos="fade-up"
          data-aos-delay={400}
        >
          <div className="flex flex-col items-center justify-center">
            {/* Upload Icon */}
            <UploadIcon className="h-16 w-16 text-indigo-500" aria-hidden="true" />

            {/* File Input */}
            <label
              htmlFor="file-upload"
              className="mt-4 cursor-pointer rounded-md bg-indigo-600 px-4 py-2 text-white shadow-md transition-transform hover:scale-105"
            >
              <span>Select File</span>
              <input
                id="file-upload"
                name="file-upload"
                type="file"
                accept="audio/*"
                className="sr-only"
                onChange={handleFileChange}
              />
            </label>

            {selectedFile && (
              <p className="mt-4 text-indigo-200">
                Selected File: {selectedFile.name}
              </p>
            )}

            {/* Upload Button */}
            <button
              className="mt-6 btn group bg-gradient-to-t from-indigo-600 to-indigo-500 px-6 py-2 text-white shadow-md transition-transform hover:scale-105"
              onClick={handleUpload}
            >
              <span className="relative inline-flex items-center">
                Upload
                <span className="ml-1 tracking-normal text-white/70 transition-transform group-hover:translate-x-0.5">
                  &rarr;
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

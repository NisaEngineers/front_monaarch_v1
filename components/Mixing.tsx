"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import image from "@/public/vrix.jpg";
import Loader from "./Loader";
import cloud from "@/public/images (1).png";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Mixing = () => {
  const router = useRouter();

  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      handleFileChange(file);
    }
  };

  const handleFileChange = (file: File) => {
    if (!file.name.endsWith(".mp3")) {
      setErrorMessage("Only MP3 files are allowed.");
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      setErrorMessage("File size should not exceed 10MB.");
      return;
    }
    setSelectedFile(file);
    setFileName(file.name);
    setErrorMessage("");
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      setErrorMessage("Please select a file first.");
      return;
    }

    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("file", selectedFile);
      const response = await fetch(
        "",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.status === 201) {
        const data = await response.json();
        setDownloadUrl(data.data);
      } else {
        setErrorMessage("Upload failed, please try again.");
      }
    } catch (error: any) {
      setErrorMessage(`ERROR! ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = (url: any) => {
    window.open(url, "_blank");
  };

  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0]; // Get the first file
        if (file) {
          handleFileChange(file); // Pass the file directly
        }
      }}
      className="relative mb-32 bg-[#705d1d]"
    >
      <div className="relative min-h-screen flex items-center justify-center pt-20">
        <Image src={image} alt="Plan background" className="absolute z-0" />
        <div className="relative z-10 text-center text-white">
          <div className="flex flex-col items-center justify-center">
            <div className="max-w-2xl">
              <h2 className="text-2xl py-2 md:text-6xl font-bold tracking-tighter">
                Revolutionize Your Music Creation Process with AI Technology
                Mastering
              </h2>
              <p>Create custom, affordable, release-ready masters in minutes</p>
            </div>
            <div className="mt-10 flex flex-col items-center justify-center gap-10">
              <div
                className={`w-full max-w-md p-6 border-4  rounded-lg flex flex-col items-center justify-center transition-colors
                  ${selectedFile ? "border-[#fac109] bg-white text-black " : "border-gray-300 hover:border-[#fac109] bg-[#f5f5f5] text-gray-600 hover:bg-white "}
                `}
                onClick={() => document.getElementById("file-input")?.click()}
              >
                <input
                  type="file"
                  accept=".mp3"
                  onChange={handleInputChange}
                  id="file-input"
                  className="hidden"
                />
                {/* Cloud upload icon */}
                <Image src={cloud} alt="Cloud Upload" width={64} height={64} className="mb-4" />
                <p className="text-lg tracking-tighter md:text-xl">
                  {selectedFile ? `${fileName}` : "Drag and drop or click to upload an MP3 file"}
                </p>
              </div>
              <Button
				onClick={handleUpload}
				className="mt-4 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-8 rounded"
				disabled={isLoading}
				aria-label="Upload song"
				>
			{isLoading ? "Uploading..." : "Upload Song"}
			</Button>

            </div>
            {errorMessage && <div className="text-red-500 text-sm mt-2">{errorMessage}</div>}
            {isLoading && (
              <div className="text-yellow-500 text-lg mt-4">
                <Loader /> {/* Add the Loader component here */}
                Processing your track...
              </div>
            )}
            {downloadUrl && (
              <Link
                href={downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black px-3 bg-blue-400 py-2 rounded-md mt-4"
              >
                Download Song
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mixing;

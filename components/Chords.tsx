"use client";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import backgroundImg from "@/public/4st.jpg";
import { useRouter } from "next/navigation";
import Loader from "./Loader";
import cloud from "@/public/images (1).png";

const SplitterHero = () => {
  const router = useRouter();
  const [fileData, setFileData] = useState({
    ulid: "",
    file_name: "",
    status: "",
    vocalsUrl: "",
    instrumentalsUrl: "",
    bassUrl: "",
    drumsUrl: "",
    sourceUrl: "",
    othersUrl: "",
  });
  const [fileName, setFileName] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);

  const navigateDown = (e: any) => {
    e.preventDefault();
    const element = document.getElementById("work");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      handleFileChange(file);
    }
  };

  const handleFileChange = (file: File) => {
    if (file) {
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
    }
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
      const result = await response.json();
      setFileData((prevData) => ({
        ...prevData,
        ulid: result.file_conversion.ulid,
        status: result.file_conversion.status,
      }));
      pollForResult(result.file_conversion.ulid);
    } catch (error: any) {
      setErrorMessage(`ERROR! ${error.message}`);
      setIsLoading(false);
    }
  };

  const pollForResult = (ulid: any) => {
    const id = setInterval(async () => {
      try {
        const response = await fetch(
          ``
        );
        const data = await response.json();
        if (data.file_conversion.status === "completed") {
          clearInterval(id);
          setFileData({
            ...fileData,
            vocalsUrl: data.file_conversion.output.vocals.url,
            instrumentalsUrl: data.file_conversion.output.instrumentals.url,
            bassUrl: data.file_conversion.output.bass.url,
            drumsUrl: data.file_conversion.output.drums.url,
            othersUrl: data.file_conversion.output.others.url,
            sourceUrl: data.file_conversion.output.source.url,
            status: data.file_conversion.status,
          });
          setIsLoading(false);
        } else {
          setFileData({
            ...fileData,
            status: data.file_conversion.status,
          });
        }
      } catch (error) {
        clearInterval(id);
        console.error("Error polling for result:", error);
        setIsLoading(false);
      }
    }, 5000);

    setIntervalId(id);
  };

  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  const handleDownload = (url: any) => {
    window.open(url, "_blank");
  };

  return (
    <div onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0]; // Get the first file
        if (file) {
          handleFileChange(file); // Pass the file directly
        }
      }} className="relative">
      <div className="relative min-h-screen flex items-center justify-center bg-[#705d1d]">
        <Image
          src={backgroundImg}
          alt="Chords image"
          className="absolute z-0"
        />
        <div className="relative z-10 text-center text-black pt-36 pb-10">
          <Button
            onClick={navigateDown}
            className="text-lg mb-5 md:text-xl bg-[#fac109] rounded-xl px-3 hover:bg-[#fac109] hover:opacity-80 py-2 text-black"
            aria-label="Navigate to how it works section"
          >
            How it works
          </Button>
          <h1 className="text-3xl md:text-5xl font-bold">Chord Extractor</h1>
          <p className="max-w-md md:max-w-2xl">
            Extract chords from music with AI-Powered algorithms
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-10">
            <h1 className="text-xl md:text-2xl font-bold border-b-4 border-[#fac109] py-2">
              Extract Chords
            </h1>

            <div
              className={`w-full max-w-md p-6 border-4 rounded-lg flex flex-col items-center justify-center transition-colors
      ${selectedFile
                ? "border-[#fac109] bg-white text-black "
                : "border-gray-300 hover:border-[#fac109] bg-[#f5f5f5] text-gray-600 hover:bg-white "
              }`}
              onClick={() => document.getElementById("file-input")?.click()}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                const file = e.dataTransfer.files[0]; // Get the first file
                if (file) {
                  handleFileChange(file); // Pass the file directly
                }
              }}
            >
              <input
                type="file"
                accept=".mp3"
                onChange={handleInputChange}
                id="file-input"
                className="hidden"
              />
              <Image
                src={cloud}
                alt="Cloud Upload"
                width={64} // Adjust the size as needed
                height={64}
                className="mb-4"
              />
              <p className="text-lg tracking-tighter md:text-xl">
                {selectedFile
                  ? `${fileName}`
                  : "Drag and drop or click to upload an MP3 file"}
              </p>
            </div>
            <Button
              onClick={handleUpload}
              className="mt-4 bg-[#fac109] hover:bg-[#fac109] text-black py-2 px-8 rounded"
              disabled={isLoading}
              aria-label="Extract chords"
            >
              {isLoading ? "Uploading..." : "Extract Chords"}
            </Button>
          </div>

          {errorMessage && (
            <div className="text-red-500 text-sm mt-2">{errorMessage}</div>
          )}
          {isLoading && fileData.status === 'processing' && (
            <div className="text-yellow-500 text-lg mt-4">
              <Loader /> {/* Add the Loader component here */}
              Processing your track...
            </div>
          )}
          {fileData.status === "in_process_queue" && (
            <div className="text-yellow-500 text-lg mt-4">
              <Loader /> {/* Add the Loader component here */}
              Your Track in the process queue...
            </div>
          )}
          {fileData.status === "completed" && (
            <div className="flex flex-col items-center justify-center gap-3 mt-3">
              <Button
                onClick={() => handleDownload(fileData.vocalsUrl)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Download Vocals
              </Button>
              <Button
                onClick={() => handleDownload(fileData.instrumentalsUrl)}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              >
                Download Instrumentals
              </Button>
              <Button
                onClick={() => handleDownload(fileData.bassUrl)}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Download Bass
              </Button>
              <Button
                onClick={() => handleDownload(fileData.drumsUrl)}
                className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
              >
                Download Drums
              </Button>
              <Button
                onClick={() => handleDownload(fileData.othersUrl)}
                className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded"
              >
                Download Instrumentals
              </Button>
              <Button
                onClick={() => handleDownload(fileData.sourceUrl)}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              >
                Download Original
              </Button>
            </div>
          )}
        </div>
      </div>
      <div
        id="work"
        className="my-40 border-t-2 border-[#fac109] max-w-7xl mx-auto w-full px-10 p-5"
      >
        <div className="flex flex-col gap-5 items-start justify-start mt-10">
          <h1 className="text-black tracking-tighter text-xl md:text-3xl">
            AI-Powered Chord Extractor
          </h1>
          <div className="bg-[#fac109] px-10 py-10 text-md tracking-tighter md:text-3xl">
            <h1>
              This app allows to extract chords from music using advanced AI models. 
              Just choose a song, and the AI will analyze and identify the chords. Processing 
              usually takes about 1 minute.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SplitterHero;
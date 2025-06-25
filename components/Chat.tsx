"use client";

import { useState } from "react";
import { FaComments, FaPaperPlane } from "react-icons/fa";

export default function Chat() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSendMessage = async () => {
    if (message.trim()) {
      // Add the user's message locally.
      setMessages((prev) => [...prev, { text: message, sender: "user" }]);
      
      // Store the current message for the API call, then clear the input.
      const currentMessage = message;
      setMessage("");

      try {
        // Call the API endpoint.
        const response = await fetch("http://127.0.0.1:5000/ask", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ question: currentMessage }),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();

        // Append the reply from the API to the chat messages.
        setMessages((prev) => [
          ...prev,
          { text: data.result, sender: "bot" },
        ]);
      } catch (error) {
        // In case of error, append an error message.
        setMessages((prev) => [
          ...prev,
          { text: "Error: Unable to get response from the API.", sender: "bot" },
        ]);
      }
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <button
        className="text-gray-300 hover:text-green-300 p-4 bg-gray-900/80 rounded-full shadow-xl transition-transform duration-300 ease-out transform hover:scale-110"
        onClick={() => setIsChatOpen(!isChatOpen)}
      >
        <FaComments className="h-7 w-7" />
      </button>

      {isChatOpen && (
        <div className="mt-4 w-96 bg-gray-900/90 backdrop-blur-lg rounded-xl shadow-2xl border border-gray-700/50 transition-all duration-500 ease-in-out animate-fadeIn">
          <div className="flex flex-col h-80 p-4 overflow-y-auto space-y-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 p-3 rounded-lg transition-all duration-300 ease-in-out ${
                  msg.sender === "user"
                    ? "bg-gradient-to-r from-green-800/50 to-blue-800/50 text-gray-100"
                    : "bg-gray-800/50 text-gray-100"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="flex items-center p-4 bg-gray-800/80 rounded-b-xl">
            <input
              type="text"
              className="flex-1 bg-gray-800/50 text-gray-100 p-3 rounded-lg focus:outline-none transition-all duration-300 ease-in-out"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSendMessage();
              }}
              placeholder="Type your message..."
            />
            <button
              className="text-gray-300 hover:text-green-300 p-3 transition-transform duration-300 ease-out transform hover:scale-105"
              onClick={handleSendMessage}
            >
              <FaPaperPlane className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

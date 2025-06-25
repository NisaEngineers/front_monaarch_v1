"use client";

import { useState } from "react";
import { FaComments, FaPaperPlane } from "react-icons/fa";

export default function Chat() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { text: message, sender: "user" }]);
      setMessage("");
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

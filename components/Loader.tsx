// components/Loader.js
import React from "react";

const Loader = () => {
  return (
    <div className="flex justify-center items-center mt-10">
      <div className="loader"></div>
      <style jsx>{`
        .loader {
          border: 16px solid #f3f3f3; /* Light grey */
          border-top: 16px solid #fac019; /* Yellow */
          border-radius: 50%;
          width: 80px;
          height: 80px;
          animation: spin 2s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Loader;

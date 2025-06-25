"use client";

import { useState } from "react";

export default function PricingClient() {
  const [selectedRegion, setSelectedRegion] = useState<'international' | 'india'>('international');

  const pricingPlans = {
    international: [
      {
        name: "Ultra Lite",
        price: "1.99",
        duration: "day",
        features: {
          tracks: "3 Tracks",
          songLength: "5 minutes",
          downloads: "3 Tracks",
          stemDownload: "50 minutes",
          chordsDownload: "3 Tracks"
        }
      },
      {
        name: "Lite",
        price: "9.99",
        duration: "yearly",
        features: {
          tracks: "100/month",
          songLength: "Any",
          downloads: "100/month",
          stemDownload: "500 minutes",
          chordsDownload: "50/month"
        }
      },
      {
        name: "Pro",
        price: "14.99",
        duration: "yearly",
        features: {
          tracks: "200/month",
          songLength: "Any",
          downloads: "200/month",
          stemDownload: "800 minutes",
          chordsDownload: "100/month"
        }
      }
    ],
    india: [
      {
        name: "Ultra Lite",
        price: "99",
        duration: "day",
        features: {
          tracks: "3 Tracks",
          songLength: "5 minutes",
          downloads: "3 Tracks",
          stemDownload: "50 minutes",
          chordsDownload: "3 Tracks"
        }
      },
      {
        name: "Lite",
        price: "190",
        duration: "month",
        features: {
          tracks: "100/month",
          songLength: "Any",
          downloads: "100/month",
          stemDownload: "500 minutes",
          chordsDownload: "20/month"
        }
      },
      {
        name: "Pro",
        price: "290",
        duration: "month",
        features: {
          tracks: "200/month",
          songLength: "Any",
          downloads: "200/month",
          stemDownload: "800 minutes",
          chordsDownload: "100/month"
        }
      }
    ]
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="./videos/pricing_background.mp4"
        autoPlay
        muted
        loop
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-900/30 to-blue-900/40 backdrop-blur-sm"></div>

      {/* Content */}
      <div className="relative z-10 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Section Header */}
            <div className="pb-12 text-center">
              <h1 className="text-4xl font-bold md:text-5xl bg-gradient-to-r from-green-300 via-blue-400 to-green-300 bg-clip-text text-transparent animate-gradient-shift">
                Pricing Plans
              </h1>
              
              <div className="mt-8 flex justify-center gap-4">
                <button
                  onClick={() => setSelectedRegion('international')}
                  className={`px-6 py-2 rounded-full ${
                    selectedRegion === 'international' 
                      ? 'bg-gradient-to-r from-green-400 to-blue-500 text-white'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                  }`}
                >
                  International
                </button>
                <button
                  onClick={() => setSelectedRegion('india')}
                  className={`px-6 py-2 rounded-full ${
                    selectedRegion === 'india' 
                      ? 'bg-gradient-to-r from-green-400 to-blue-500 text-white'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                  }`}
                >
                  India
                </button>
              </div>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {pricingPlans[selectedRegion].map((plan, index) => (
                <div
                  key={index}
                  className="relative rounded-2xl bg-gray-900/80 backdrop-blur-lg border border-gray-700/50 p-8 shadow-2xl hover:shadow-green-500/20 transition-all duration-300"
                >
                  <div className="mb-6">
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                      {plan.name}
                    </h2>
                    <div className="mt-4">
                      <span className="text-5xl font-bold text-white">
                        {selectedRegion === 'india' ? '₹' : '$'}{plan.price}
                      </span>
                      <span className="text-lg text-gray-400 ml-2">
                        /{plan.duration}
                      </span>
                    </div>
                  </div>

                  {/* Features List */}
                  <ul className="mb-8 space-y-4">
                    {Object.entries(plan.features).map(([key, value]) => (
                      <li 
                        key={key}
                        className="flex items-center text-gray-300 hover:text-white transition-colors"
                      >
                        <svg
                          className="flex-shrink-0 w-5 h-5 mr-3 text-green-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 5.707 8.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span>
                        <span className="ml-2 font-medium">{value}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="w-full py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:from-green-500 hover:to-blue-600 transition-all duration-300">
                    Get Started
                  </button>
                </div>
              ))}
            </div>

            {/* Common Features Table */}
            <div className="mt-16 border border-gray-700/50 rounded-2xl backdrop-blur-lg bg-gray-900/80 p-6">
              <h3 className="text-xl font-bold mb-6 text-green-300">All Plans Include:</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-300">
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  Batch Upload
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  Fast Processing
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  Multiple Formats
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  Stem Separation
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  Chords Conversion
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"/>
                  </svg>
                  Full Length Downloads
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-shift {
          background-size: 200% auto;
          animation: gradient-shift 6s linear infinite;
        }
      `}</style>
    </section>
  );
}
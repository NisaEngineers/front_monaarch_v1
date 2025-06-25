"use client";

import { useState, useEffect } from "react";

export default function PricingClient() {
  // Default region is international.
  const [selectedRegion, setSelectedRegion] = useState('international');
  // Default billing interval is yearly.
  const [selectedBilling, setSelectedBilling] = useState('yearly');

  // On mount, use a basic heuristic: if the browser language includes “in”
  // assume the user is in India.
  useEffect(() => {
    if (typeof window !== "undefined") {
      const lang = window.navigator.language.toLowerCase();
      if (lang.includes("in")) {
        setSelectedRegion("india");
      }
    }
  }, []);

  /* 
     Pricing Data Structure

     There are three plans: Ultra Lite, Lite and Pro.
     • Ultra Lite is always priced per day.
     • Lite and Pro have different pricing when billed yearly or monthly.
     • Additionally, for “Pro” (in both International and India) we want to signal best value.
     • While most feature values are common across regions, note the slight difference in “Chords Download”
       (for Lite: "50 Tracks per month" internationally vs. "20 Tracks" for India).
  */
  const pricingData = {
    international: {
      ultraLite: {
        name: "Ultra Lite",
        pricing: "$1.99 per day",
        features: {
          "Number of Tracks": "Any",
          "Input/Output Format": "MP3, WAV, OGG, FLAC, AVI, MP4, MKV, AIFF, ACC",
          "Fast Processing": "Yes",
          "Maximum Song Length": "5 minutes",
          "Maximum Length for Download": "Full Length",
          "Number of Mastered Song Downloads": "3 Tracks",
          "Vocal/Basic/Advanced Stem Separation": "Yes",
          "Stem Download": "50 minutes",
          "Batch Upload": "Yes",
          "Chords Conversion": "Yes",
          "Chords Download": "3 Tracks"
        }
      },
      lite: {
        name: "Lite",
        pricing: {
          yearly: "$9.99",
          monthly: "$19.99"
        },
        features: {
          "Number of Tracks": "Any",
          "Input/Output Format": "MP3, WAV, OGG, FLAC, AVI, MP4, MKV, AIFF, ACC",
          "Fast Processing": "Yes",
          "Maximum Song Length": "Any",
          "Maximum Length for Download": "Full Length",
          "Number of Mastered Song Downloads": "100 per month",
          "Vocal/Basic/Advanced Stem Separation": "Yes",
          "Stem Download": "500 minutes",
          "Batch Upload": "Yes",
          "Chords Conversion": "Yes",
          "Chords Download": "50 Tracks per month"
        }
      },
      pro: {
        name: "Pro",
        pricing: {
          yearly: "$14.99",
          monthly: "$29.99"
        },
        bestValue: true,
        features: {
          "Number of Tracks": "Any",
          "Input/Output Format": "MP3, WAV, OGG, FLAC, AVI, MP4, MKV, AIFF, ACC",
          "Fast Processing": "Yes",
          "Maximum Song Length": "Any",
          "Maximum Length for Download": "Full Length",
          "Number of Mastered Song Downloads": "200 per month",
          "Vocal/Basic/Advanced Stem Separation": "Yes",
          "Stem Download": "800 Minutes",
          "Batch Upload": "Yes",
          "Chords Conversion": "Yes",
          "Chords Download": "100 Tracks per month"
        }
      }
    },
    india: {
      ultraLite: {
        name: "Ultra Lite",
        pricing: "Rs.99 per day",
        features: {
          "Number of Tracks": "Any",
          "Input/Output Format": "MP3, WAV, OGG, FLAC, AVI, MP4, MKV, AIFF, ACC",
          "Fast Processing": "Yes",
          "Maximum Song Length": "5 minutes",
          "Maximum Length for Download": "Full Length",
          "Number of Mastered Song Downloads": "3 Tracks",
          "Vocal/Basic/Advanced Stem Separation": "Yes",
          "Stem Download": "50 minutes",
          "Batch Upload": "Yes",
          "Chords Conversion": "Yes",
          "Chords Download": "3 Tracks"
        }
      },
      lite: {
        name: "Lite",
        pricing: {
          yearly: "Rs.150/month, Rs.1800 billed upfront",
          monthly: "Rs.190/month"
        },
        features: {
          "Number of Tracks": "Any",
          "Input/Output Format": "MP3, WAV, OGG, FLAC, AVI, MP4, MKV, AIFF, ACC",
          "Fast Processing": "Yes",
          "Maximum Song Length": "Any",
          "Maximum Length for Download": "Full Length",
          "Number of Mastered Song Downloads": "100 per month",
          "Vocal/Basic/Advanced Stem Separation": "Yes",
          "Stem Download": "500 minutes",
          "Batch Upload": "Yes",
          "Chords Conversion": "Yes",
          "Chords Download": "20 Tracks"
        }
      },
      pro: {
        name: "Pro",
        pricing: {
          yearly: "Rs.250/month, Rs.3000 billed upfront",
          monthly: "Rs.290/month"
        },
        bestValue: true,
        features: {
          "Number of Tracks": "Any",
          "Input/Output Format": "MP3, WAV, OGG, FLAC, AVI, MP4, MKV, AIFF, ACC",
          "Fast Processing": "Yes",
          "Maximum Song Length": "Any",
          "Maximum Length for Download": "Full Length",
          "Number of Mastered Song Downloads": "200 per month",
          "Vocal/Basic/Advanced Stem Separation": "Yes",
          "Stem Download": "800 Minutes",
          "Batch Upload": "Yes",
          "Chords Conversion": "Yes",
          "Chords Download": "100 Tracks per month"
        }
      }
    }
  };

  // Ensure consistent ordering:
  const plans = [
    pricingData[selectedRegion].ultraLite,
    pricingData[selectedRegion].lite,
    pricingData[selectedRegion].pro,
  ];

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

              {/* Billing interval buttons */}
              <div className="mt-8 flex justify-center gap-4">
                <button
                  onClick={() => setSelectedBilling("monthly")}
                  className={`px-6 py-2 rounded-full ${
                    selectedBilling === "monthly" 
                      ? "bg-gradient-to-r from-green-400 to-blue-500 text-white"
                      : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setSelectedBilling("yearly")}
                  className={`px-6 py-2 rounded-full ${
                    selectedBilling === "yearly" 
                      ? "bg-gradient-to-r from-green-400 to-blue-500 text-white"
                      : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/50"
                  }`}
                >
                  Yearly
                </button>
              </div>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {plans.map((plan, index) => {
                // Determine which pricing to display:
                let pricingDisplay;
                if (typeof plan.pricing === "string") {
                  // For per-day plans (Ultra Lite)
                  pricingDisplay = plan.pricing;
                } else {
                  pricingDisplay = plan.pricing[selectedBilling];
                }
                if (plan.bestValue) {
                  pricingDisplay = `Best Value for Money - ${pricingDisplay}`;
                }

                return (
                  <div
                    key={index}
                    className="relative rounded-2xl bg-gray-900/80 backdrop-blur-lg border border-gray-700/50 p-8 shadow-2xl hover:shadow-green-500/20 transition-all duration-300"
                  >
                    <div className="mb-6">
                      <h2 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                        {plan.name}
                      </h2>
                      <div className="mt-4">
                        <span className="text-3xl font-bold text-white">
                          {pricingDisplay}
                        </span>
                      </div>
                    </div>

                    {/* Features List */}
                    <ul className="mb-8 space-y-4 text-sm">
                      {Object.entries(plan.features).map(([key, value]) => (
                        <li 
                          key={key}
                          className="flex items-start text-gray-300 hover:text-white transition-colors"
                        >
                          <svg
                            className="flex-shrink-0 w-5 h-5 mr-3 text-green-400 mt-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 5.707 8.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <div>
                            <span className="font-semibold">{key}: </span>
                            <span>{value}</span>
                          </div>
                        </li>
                      ))}
                    </ul>

                    <button className="w-full py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:from-green-500 hover:to-blue-600 transition-all duration-300">
                      Get Started
                    </button>
                  </div>
                );
              })}
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

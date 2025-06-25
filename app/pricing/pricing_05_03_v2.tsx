"use client";

import { useState } from "react";

export default function PricingClient() {
  const [plans] = useState([
    {
      name: "Free Plan",
      price: "0",
      features: ["Vocal Remover", "Basic Splitting [3 tracks/month]"],
    },
    {
      name: "Standard Plan",
      price: "9.99",
      features: [
        "Vocal Remover",
        "Basic Splitting",
        "Chord Extraction",
        "Advanced Splitting",
        "Unlimited Tracks",
      ],
    },
    {
      name: "Premium Plan",
      price: "19.99",
      features: [
        "All Features in Standard",
        "Mixing & Mastering",
        "Priority Processing",
        "Premium Support",
      ],
    },
  ]);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/Chords_BG.mp4"
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
              <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
                Choose the plan that best fits your creative needs
              </p>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className="relative rounded-2xl bg-gray-900/80 backdrop-blur-lg border border-gray-700/50 p-8 shadow-2xl hover:shadow-green-500/20 transition-all duration-300 hover:scale-105"
                >
                  {/* Plan Header */}
                  <div className="mb-8">
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                      {plan.name}
                    </h2>
                    <div className="mt-4">
                      <span className="text-5xl font-bold text-white">
                        ${plan.price}
                      </span>
                      <span className="text-lg text-gray-400 ml-2">/month</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <ul className="mb-8 space-y-4">
                    {plan.features.map((feature, idx) => (
                      <li 
                        key={idx}
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
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button className="w-full py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:from-green-500 hover:to-blue-600 transition-all duration-300">
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
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
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
    <section className="relative">
      {/* Background Video */}
      <div className="absolute inset-0 h-full w-full">
        <video
          className="h-full w-full object-cover"
          src="/videos/pricing_background.mp4"
          autoPlay
          muted
          loop
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-900 opacity-80"></div>

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-24">
        <div className="py-12 md:py-20">
          {/* Section Header */}
          <div className="pb-12 text-center">
            <h1 className="bg-gradient-to-r from-gray-200 via-indigo-200 to-gray-50 bg-clip-text text-4xl font-semibold text-transparent md:text-5xl">
              Pricing Plans
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              Choose the plan that best fits your needs.
            </p>
          </div>
        </div>
      </div>
      
      {/* Pricing Cards */}
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-24">
        <div className="py-12 md:py-20">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {plans.map((plan, index) => (
              <div
                key={index}
                className="flex flex-col rounded-lg bg-gray-800 bg-opacity-90 p-6 text-center"
              >
                <h2 className="mb-4 text-2xl font-semibold text-white">
                  {plan.name}
                </h2>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-indigo-500">
                    ${plan.price}
                  </span>
                  <span className="text-xl font-medium text-gray-400">
                    /month
                  </span>
                </div>
                <ul className="mb-6 flex-1 space-y-3 text-gray-300">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center justify-center">
                      <svg
                        className="mr-2 h-5 w-5 text-indigo-500"
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
                <button className="btn w-full bg-indigo-600 text-white hover:bg-indigo-700">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

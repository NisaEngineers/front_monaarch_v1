"use client";

import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

const stripePromise = loadStripe("YOUR_STRIPE_PUBLIC_KEY");

function PaymentForm({ selectedPlan }: { selectedPlan: string }) {
  const stripe = useStripe();
  const elements = useElements();
  const [cardholderName, setCardholderName] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    const card = elements.getElement(CardNumberElement);
    if (!card) return;

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
      billing_details: {
        name: cardholderName,
      },
    });

    if (error) {
      alert(error.message);
    } else {
      alert(`Payment method created for ${selectedPlan}: ${paymentMethod.id}`);
      // TODO: Send paymentMethod.id to your server to complete the payment
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <div>
        <label className="block text-sm mb-1">Cardholder Name</label>
        <input
          type="text"
          value={cardholderName}
          onChange={(e) => setCardholderName(e.target.value)}
          className="w-full px-4 py-2 bg-gray-800 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm mb-1">Card Number</label>
        <div className="p-2 bg-gray-800 rounded-md border border-gray-600 text-white">
          <CardNumberElement className="w-full" />
        </div>
      </div>
      <div className="flex gap-4">
        <div className="flex-1">
          <label className="block text-sm mb-1">Expiry Date</label>
          <div className="p-2 bg-gray-800 rounded-md border border-gray-600 text-white">
            <CardExpiryElement className="w-full" />
          </div>
        </div>
        <div className="flex-1">
          <label className="block text-sm mb-1">CVC</label>
          <div className="p-2 bg-gray-800 rounded-md border border-gray-600 text-white">
            <CardCvcElement className="w-full" />
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:from-green-500 hover:to-blue-600 transition-all duration-300"
      >
        Pay with Card
      </button>
    </form>
  );
}

export default function PricingClient() {
  const [selectedRegion, setSelectedRegion] = useState("international");
  const [selectedBilling, setSelectedBilling] = useState("yearly");
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const lang = window.navigator.language.toLowerCase();
      if (lang.includes("in")) {
        setSelectedRegion("india");
      }
    }
  }, []);

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

  const plans = [
    pricingData[selectedRegion].ultraLite,
    pricingData[selectedRegion].lite,
    pricingData[selectedRegion].pro,
  ];

  const handlePayPal = (planName: string) => {
    alert(`Redirecting to PayPal for plan: ${planName}`);
    // TODO: Integrate PayPal SDK or redirection
  };

  return (
    <Elements stripe={stripePromise}>
      <section className="relative min-h-screen overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="./videos/pricing_background.mp4"
          autoPlay
          muted
          loop
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-900/30 to-blue-900/40 backdrop-blur-sm" />
        <div className="relative z-10 text-white">
          <div className="container mx-auto px-4 sm:px-6 py-12 md:py-20">
            <div className="text-center pb-12">
              <h1 className="text-4xl font-bold md:text-5xl bg-gradient-to-r from-green-300 via-blue-400 to-green-300 bg-clip-text text-transparent animate-gradient-shift">
                Pricing Plans
              </h1>
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

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {plans.map((plan, index) => {
                let pricingDisplay =
                  typeof plan.pricing === "string"
                    ? plan.pricing
                    : plan.pricing[selectedBilling];
                if (plan.bestValue) {
                  pricingDisplay = `Best Value for Money - ${pricingDisplay}`;
                }

                return (
                  <div
                    key={index}
                    className="relative rounded-2xl bg-gray-900/80 backdrop-blur-lg border border-gray-700/50 p-8 shadow-2xl hover:shadow-green-500/20 transition-all duration-300"
                  >
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                      {plan.name}
                    </h2>
                    <div className="mt-4 text-3xl font-bold">{pricingDisplay}</div>

                    <ul className="my-6 space-y-4 text-sm">
                      {Object.entries(plan.features).map(([key, value]) => (
                        <li key={key} className="flex text-gray-300 hover:text-white">
                          <svg
                            className="w-5 h-5 mr-3 text-green-400 mt-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 00-1.414 0L9 11.586 5.707 8.293a1 1 0 10-1.414 1.414l4 4a1 1 0 001.414 0l7-7a1 1 0 000-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>
                            <strong>{key}:</strong> {value}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-col gap-2">
                      <button
                        onClick={() => setSelectedPlan(plan.name)}
                        className="py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-lg font-semibold hover:from-green-500 hover:to-blue-600"
                      >
                        Pay with Card
                      </button>
                      <button
                        onClick={() => handlePayPal(plan.name)}
                        className="py-2 border border-gray-500 rounded-lg text-white hover:bg-gray-700"
                      >
                        Pay with PayPal
                      </button>
					  
                    </div>
                  </div>
                );
              })}
            </div>

            {selectedPlan && (
              <div className="mt-16 max-w-xl mx-auto bg-gray-800 p-6 rounded-xl border border-gray-700">
                <h3 className="text-xl font-semibold mb-4">
                  Enter card details for <span className="text-green-400">{selectedPlan}</span>
                </h3>
                <PaymentForm selectedPlan={selectedPlan} />
              </div>
            )}
          </div>
        </div>

        <style jsx>{`
          @keyframes gradient-shift {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
          .animate-gradient-shift {
            background-size: 200% auto;
            animation: gradient-shift 6s linear infinite;
          }
        `}</style>
      </section>
    </Elements>
  );
}

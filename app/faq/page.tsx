"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How to use Monaarch?",
    answer:
      "Simply try our sample features and if you like it, you can subscribe to our minimal plans and start using all features.",
  },
  {
    question: "How to use Stem separators?",
    answer:
      "Simply choose your track or drag and drop your track and let our powerful AI separate the tracks for you.",
  },
  {
    question: "How to use Chord extractor?",
    answer:
      "The Chord extractor can extract a single instrument chord or note. In order to do that, you will first need to separate the tracks using our stem splitters, then download the particular instrument track you want to convert, and finally upload it to the chord extractor which immediately converts it to chords.",
  },
  {
    question: "Does Monaarch offer free mastering?",
    answer:
      "Yes. To download the mastered track and access a plethora of options, simply choose any one of our cost-effective subscription plans.",
  },
  {
    question: "What are the benefits of Monaarch?",
    answer:
      "With Monaarch, create unlimited mastered music, enjoy advanced stem separation of multiple instruments, and utilize tools like our Vocal Remover and chord finder for seamless downloads.",
  },
  {
    question: "Does Monaarch use AI?",
    answer:
      "Upload a track and let our powerful, AI-driven mastering engine do the heavy lifting. Our engine listens carefully and applies a fast, reliable master without relying on generic presets.",
  },
  {
    question: "Is it worth paying for mastering?",
    answer:
      "Absolutely. A great master enhances the quality, sparkle, and thump of a track—giving your recordings the final necessary lift.",
  },
  {
    question: "How much do Monaarch plans cost?",
    answer:
      "Monaarch offers highly cost-effective payment options compared to industry prices. The quality and breadth of services available cannot be found elsewhere.",
  },
  {
    question: "What payment modes does Monaarch take?",
    answer: "Monaarch supports multiple convenient payment options.",
  },
  {
    question: "How to get Monaarch for free?",
    answer: "Simply log into Monaarch and subscribe to our free plan.",
  },
  {
    question: "Is Monaarch good for mixing and mastering?",
    answer:
      "By using MONAARCH for mastering, you can significantly enhance the overall quality of your tracks.",
  },
  {
    question: "What does Monaarch use for mastering and Stem Separation?",
    answer:
      "Our AI engine leverages machine learning to emulate the decisions mastering engineers make when hearing a mix for the first time.",
  },
  {
    question: "Is Monaarch good for Vocal Remover and Stem Separation?",
    answer:
      "Using our Vocal Remover and stem separator, you can achieve outstanding separation of tracks for high-quality production.",
  },
  {
    question: "Is Monaarch mastering and features legit?",
    answer:
      "Not everyone can afford an experienced mastering engineer. Monaarch offers a simple, affordable solution with pro-level mastering, plus features like Vocal Remover, stem separation, and Chord-to-MIDI conversion.",
  },
  {
    question: "How many artists use Monaarch?",
    answer:
      "Since our recent launch, more than 105k creators from over 30 countries have embraced Monaarch.",
  },
  {
    question: "Is MONAARCH a distributor?",
    answer:
      "No. Monaarch solely focuses on audio processing and does not distribute music.",
  },
  {
    question: "Who can use Monaarch?",
    answer:
      "Monaarch is designed for professional musicians, DJ artists, bands, composers, content creators, and everyone in between.",
  },
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<boolean[]>(
    Array(faqData.length).fill(false)
  );

  const toggleItem = (index: number) => {
    setOpenItems((prev) => {
      const newOpenItems = [...prev];
      newOpenItems[index] = !newOpenItems[index];
      return newOpenItems;
    });
  };

  return (
    <div className="min-h-screen bg-[url('/images/FAQ_BG.png')] bg-cover bg-center">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center text-green-300 mb-8">
          Frequently Asked Questions
        </h1>
        <div className="space-y-8">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-transparent rounded-2xl border-2 border-dashed border-gray-300/50 shadow-xl"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full flex justify-between items-center p-4 focus:outline-none"
              >
                <h3 className="text-lg font-semibold text-yellow-300">
                  {item.question}
                </h3>
                <span className="ml-2 text-gray-300">
                  {openItems[index] ? (
                    <FaChevronUp className="h-5 w-5" />
                  ) : (
                    <FaChevronDown className="h-5 w-5" />
                  )}
                </span>
              </button>
              {openItems[index] && (
                <div className="px-4 pb-4">
                  <p className="text-gray-300">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

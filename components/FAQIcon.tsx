"use client";

import Link from "next/link";
import { FaQuestionCircle } from "react-icons/fa";

export default function FAQIcon() {
  return (
    <div className="fixed bottom-20 right-4 z-40 flex flex-col items-end">
      <Link href="/faq">
        <button className="text-gray-300 hover:text-green-300 p-3 bg-gray-900/80 rounded-full shadow-xl">
          <FaQuestionCircle className="h-8 w-8" /> {/* Increase the icon size */}
        </button>
      </Link>
    </div>
  );
}

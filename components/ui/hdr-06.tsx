"use client";

import Link from "next/link";
import Logo from "./logo";
import { 
  FaMicrophoneAlt, 
  FaDrum, 
  FaGuitar, 
  FaMixcloud, 
  FaMusic, 
  FaBars 
} from "react-icons/fa";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="z-30 w-full relative">
      {/* Background Video Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-green-900/30 to-blue-900/30 backdrop-blur-sm"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 sm:px-6">
        <div className="flex h-16 md:h-20 items-center justify-between gap-3 rounded-2xl bg-gray-900/80 px-4 md:px-6 backdrop-blur-md border border-gray-700/50 shadow-xl">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-green-300 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <FaBars className="h-6 w-6" />
          </button>

          {/* Left Side - Logo and Shortcut Buttons */}
          <div className="flex items-center gap-4 md:gap-8 flex-1 justify-center md:justify-start">
            <Logo className="text-green-300 w-32 md:w-40" />
            <ul className="hidden md:flex items-center gap-4 lg:gap-6">
              {[
                { icon: FaMicrophoneAlt, href: "/services/vocalRemover", title: "Vocal Remover" },
                { icon: FaDrum, href: "/services/basicSplitter", title: "Basic Splitting" },
                { icon: FaGuitar, href: "/services/advanceSplitter", title: "Advanced Splitting" },
                { icon: FaMixcloud, href: "/services/mixingMaster", title: "Mixing & Mastering" },
                { icon: FaMusic, href: "/services/chords", title: "Chord Extraction" },
              ].map(({ icon: Icon, href, title }, index) => (
                <li key={index}>
                  <Link
                    href={href}
                    className="flex items-center text-gray-300 hover:text-green-300 transition-all duration-300 group"
                    title={title}
                  >
                    <Icon className="h-5 w-5 lg:h-6 lg:w-6 group-hover:scale-110 transition-transform" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side - Navbar Links (Desktop) */}
          <ul className="hidden md:flex items-center gap-4 lg:gap-6">
            <li>
              <Link
                href="/pricing"
                className="px-3 py-1.5 lg:px-4 lg:py-2 text-sm lg:text-base text-gray-300 hover:text-white bg-gradient-to-r from-green-800/30 to-blue-800/30 rounded-lg hover:from-green-800/50 hover:to-blue-800/50 transition-all duration-300"
              >
                Pricing
              </Link>
            </li>
            
            <li className="relative group">
              <button className="px-3 py-1.5 lg:px-4 lg:py-2 text-sm lg:text-base text-gray-300 hover:text-white bg-gradient-to-r from-green-800/30 to-blue-800/30 rounded-lg hover:from-green-800/50 hover:to-blue-800/50 transition-all duration-300">
                Services
              </button>
              <ul className="absolute top-full right-0 hidden group-hover:block min-w-[200px] bg-gray-900/90 backdrop-blur-lg rounded-xl p-2 border border-gray-700/50 shadow-2xl">
                {[
                  { name: "Vocal Remover", href: "/services/vocalRemover" },
                  { name: "Basic Splitting", href: "/services/basicSplitter" },
                  { name: "Advanced Splitting", href: "/services/advanceSplitter" },
                  { name: "Mixing & Mastering", href: "/services/mixingMaster" },
                  { name: "Chord Extraction", href: "/services/chords" },
                  { name: "Real-Time Collaborative Audio Editing", href: "#", comingSoon: true },
                  { name: "Voice Transformation and Synthesis", href: "#", comingSoon: true },
                  { name: "Automated Music Composition & Arrangement", href: "#", comingSoon: true }
                ].map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className={`block px-4 py-3 text-gray-300 ${item.comingSoon ? 'cursor-not-allowed opacity-60 backdrop-blur-md' : 'hover:text-green-300 hover:bg-gray-800/50'} rounded-lg transition-colors duration-300`}
                    >
                      {item.name} {item.comingSoon && <span className="text-xs"> (Coming Soon)</span>}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>

            <li>
              <Link
                href="/signin"
                className="px-3 py-1.5 lg:px-4 lg:py-2 text-sm lg:text-base text-gray-300 hover:text-white bg-gradient-to-r from-green-800/30 to-blue-800/30 rounded-lg hover:from-green-800/50 hover:to-blue-800/50 transition-all duration-300"
              >
                Sign In
              </Link>
            </li>
            
            <li>
              <Link
                href="/signup"
                className="px-3 py-1.5 lg:px-4 lg:py-2 text-sm lg:text-base bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:from-green-500 hover:to-blue-600 transition-all duration-300"
              >
                Register
              </Link>
            </li>
          </ul>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="absolute top-full left-0 right-0 md:hidden bg-gray-900/95 backdrop-blur-xl rounded-b-2xl p-4 border-x border-b border-gray-700/50 shadow-2xl">
              <div className="grid grid-cols-2 gap-4">
                {/* Service Icons */}
                <div className="col-span-2 grid grid-cols-5 gap-2 mb-4">
                  {[
                    { icon: FaMicrophoneAlt, href: "/services/vocalRemover", title: "Vocal Remover" },
                    { icon: FaDrum, href: "/services/basicSplitter", title: "Basic Splitting" },
                    { icon: FaGuitar, href: "/services/advanceSplitter", title: "Advanced Splitting" },
                    { icon: FaMixcloud, href: "/services/mixingMaster", title: "Mixing & Mastering" },
                    { icon: FaMusic, href: "/services/chords", title: "Chord Extraction" },
                  ].map(({ icon: Icon, href, title }, index) => (
                    <Link
                      key={index}
                      href={href}
                      className="flex flex-col items-center p-2 text-gray-300 hover:text-green-300 rounded-lg bg-gray-800/50 transition-all"
                      title={title}
                    >
                      <Icon className="h-6 w-6 mb-1" />
                      <span className="text-xs text-center">{title}</span>
                    </Link>
                  ))}
                </div>

                {/* Navigation Links */}
                <Link
                  href="/pricing"
                  className="col-span-2 p-3 text-gray-300 hover:text-white bg-gray-800/50 rounded-lg transition-colors"
                >
                  Pricing
                </Link>
                <Link
                  href="/signin"
                  className="col-span-2 p-3 text-gray-300 hover:text-white bg-gray-800/50 rounded-lg transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  href="/signup"
                  className="col-span-2 p-3 bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg shadow-lg transition-all"
                >
                  Register
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

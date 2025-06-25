'use client'; // Add this directive at the top

import VideoThumb from "@/public/images/hero-image-01.jpg";
import ModalVideo from "@/components/modal-video";
import { useEffect } from 'react';

export default function HeroHome() {
  // Move styled-jsx styles to CSS-in-JS
  const styles = `
    @keyframes gradient-shift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
  `;

  useEffect(() => {
    const styleSheet = document.createElement('style');
    styleSheet.innerHTML = styles;
    document.head.appendChild(styleSheet);
    
    return () => {
      document.head.removeChild(styleSheet);
    };
  }, [styles]);

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Video */}
      <video 
        autoPlay 
        muted 
        loop 
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for contrast */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      {/* Main Content */}
      <div className="relative z-10 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="py-12 md:py-20">
            {/* Section Header */}
            <div className="pb-12 text-center md:pb-20">
              <h1
                className="text-4xl font-bold md:text-5xl bg-gradient-to-r from-green-300 via-blue-400 to-green-300 bg-clip-text text-transparent pb-5 animate-gradient-shift"
                data-aos="fade-up"
              >
                Monaarch: Transform Your Music with AI-Powered Audio Tools
              </h1>
              <div className="mx-auto max-w-3xl">
                <p
                  className="mb-8 text-lg text-gray-300 max-w-3xl mx-auto"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  Unlock professional-grade audio splitting, mastering, and chords—all accessible directly from your browser.
                </p>
                <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center gap-4">
                  <div data-aos="fade-up" data-aos-delay={400}>
                    <a
                      className="btn group mb-4 w-full bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded shadow-lg hover:from-green-500 hover:to-blue-600 transition-all duration-300 px-8 py-3 sm:mb-0 sm:w-auto"
                      href="/upload"
                    >
                      <span className="relative inline-flex items-center">
                        Get Started
                        <span className="ml-2 transition-transform group-hover:translate-x-1">
                          &rarr;
                        </span>
                      </span>
                    </a>
                  </div>
                  <div data-aos="fade-up" data-aos-delay={600}>
                    <a
                      className="btn relative w-full bg-gray-800/50 border border-gray-700/50 text-gray-300 hover:text-white rounded shadow-lg hover:bg-gray-800/70 transition-all duration-300 px-8 py-3 sm:w-auto"
                      href="#demo"
                    >
                      Explore Features
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Updated ModalVideo Component Usage */}
            <div className="mt-12 border-2 border-gray-700/50 rounded-xl overflow-hidden backdrop-blur-sm bg-gray-900/30">
              <ModalVideo
                thumb={VideoThumb}
                thumbWidth={1920}
                thumbHeight={1080}
                thumbAlt="Monaarch demo video thumbnail"
                video="/videos/demo-video.mp4"
                videoWidth={1920}
                videoHeight={1080}
              />
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
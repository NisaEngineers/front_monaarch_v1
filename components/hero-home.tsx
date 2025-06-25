import VideoThumb from "@/public/images/hero-image-01.jpg";
import ModalVideo from "@/components/modal-video";

export default function HeroHome() {
  return (
    <section className="relative">
      <video 
        autoPlay 
        muted 
        loop 
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-gradient-to-r from-green-400 via-purple-300 to-green-100 bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
              data-aos="fade-up"
            >
              Monaarch: Transform Your Music with AI-Powered Audio Tools
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-indigo-200/80"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Unlock professional-grade audio splitting, mastering, and chords—all accessible directly from your browser.
              </p>
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <a
                    className="btn group mb-4 w-full bg-gradient-to-r from-green-400 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:from-green-500 hover:to-blue-600 transition-all duration-300"
                    href="/pricing"
                  >
                    <span className="relative inline-flex items-center">
                      Get Started
                      <span className="ml-1 tracking-normal text-white/70 transition-transform group-hover:translate-x-0.5">
                        &rarr;
                      </span>
                    </span>
                  </a>
                </div>
                <div data-aos="fade-up" data-aos-delay={600}>
                  <a
                    className="btn relative w-full bg-gradient-to-r from-indigo-400 to-blue-500 text-white font-semibold rounded-lg shadow-lg hover:from-opacity-500 hover:to-purple-600 transition-all duration-300"
                    href="/blogs"
                  >
                    Learn more
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Updated ModalVideo Component Usage */}
          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={1920}
            thumbHeight={1080}
            thumbAlt="Monaarch demo video thumbnail"
            video="videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080}
          />
        </div>
      </div>
    </section>
  );
}

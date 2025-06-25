import Image from "next/image";
import BlurredShapeGray from "@/public/images/blurred-shape-gray.svg";
import BlurredShape from "@/public/images/blurred-shape.svg";
import FeaturesImage from "@/public/images/features.png";
// For icons, you can use react-icons or your own SVGs
import { FaMicrophoneAltSlash, FaDrum, FaGuitar, FaWaveSquare, FaMusic, FaMagic } from 'react-icons/fa';

export default function Features() {
  return (
    <section className="relative">
      {/* Background shapes */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 -mt-20 -translate-x-1/2"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShapeGray}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -mb-80 -translate-x-[120%] opacity-50"
        aria-hidden="true"
      >
        <Image
          className="max-w-none"
          src={BlurredShape}
          width={760}
          height={668}
          alt="Blurred shape"
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,var(--color-slate-400)/25,transparent)1] md:py-20">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pb-4 text-center md:pb-12">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Advanced Features
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-gradient-to-r from-green-500 via-indigo-200 to-purple-200 bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Power Your Music Transformation
            </h2>
            <p className="text-lg text-indigo-200/80">
              Discover how Monaarch brings professional audio editing into your hands with easy-to-use, cutting-edge tools – and get excited for new features on the way.
            </p>
          </div>

          {/* Features Image */}
          <div className="flex justify-center pb-4 md:pb-12" data-aos="fade-up">
            <Image
              className="max-w-none"
              src={FeaturesImage}
              width={1104}
              height={384}
              alt="Monaarch Features"
            />
          </div>

          {/* Feature Items */}
          <div className="mx-auto grid max-w-sm gap-12 sm:max-w-none sm:grid-cols-2 md:gap-x-14 md:gap-y-16 lg:grid-cols-3">

            {/* Feature 1: Vocal Remover */}
            <article data-aos="fade-up">
              <FaMicrophoneAltSlash className="mb-3 text-indigo-500" size={32} />
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Vocal Remover
              </h3>
              <p className="text-indigo-200/80">
                Our Vocal Remover uses smart AI to strip vocals from any track effortlessly—perfect for making karaoke versions or building that remix.
              </p>
            </article>

            {/* Feature 2: Basic Splitting */}
            <article data-aos="fade-up" data-aos-delay="100">
              <FaDrum className="mb-3 text-indigo-500" size={32} />
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Basic Splitting
              </h3>
              <p className="text-indigo-200/80">
                Quickly break your music into its core elements—vocals, drums, bass, and more—so you can explore and remix each part with ease.
              </p>
            </article>

            {/* Feature 3: Advanced Splitting */}
            <article data-aos="fade-up" data-aos-delay="200">
              <FaGuitar className="mb-3 text-indigo-500" size={32} />
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Advanced Splitting
              </h3>
              <p className="text-indigo-200/80">
                Take it a step further with our advanced tool that precisely separates instruments like piano, guitar, and drums—giving you refined control over every note.
              </p>
            </article>

            {/* Feature 4: Mixing & Mastering */}
            <article data-aos="fade-up" data-aos-delay="300">
              <FaWaveSquare className="mb-3 text-indigo-500" size={32} />
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Mixing & Mastering
              </h3>
              <p className="text-indigo-200/80">
                Automatically balance and polish your tracks with our intuitive mixing and mastering tools. Coming soon, enjoy collaborative editing, voice transformation, and AI-driven music composition to elevate your production.
              </p>
            </article>

            {/* Feature 5: Chord Extraction */}
            <article data-aos="fade-up" data-aos-delay="400">
              <FaMusic className="mb-3 text-indigo-500" size={32} />
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Chord Extraction
              </h3>
              <p className="text-indigo-200/80">
                Easily extract chords from single instrument tracks and convert them into editable MIDI files—ideal for rearranging and composing.
              </p>
            </article>

            {/* Feature 6: Intuitive Interface */}
            <article data-aos="fade-up" data-aos-delay="500">
              <FaMagic className="mb-3 text-indigo-500" size={32} />
              <h3 className="mb-1 font-nacelle text-[1rem] font-semibold text-gray-200">
                Intuitive Interface
              </h3>
              <p className="text-indigo-200/80">
                Enjoy a clean, simple design that makes navigating audio editing as easy as a few clicks—whether you're a beginner or a seasoned pro.
              </p>
            </article>

          </div>
        </div>
      </div>
    </section>
  );
}

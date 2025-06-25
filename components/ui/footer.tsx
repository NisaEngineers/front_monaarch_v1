import Logo from "./logo";
import Image from "next/image";
import FooterIllustration from "@/public/images/footer-illustration.svg";

export default function Footer() {
  return (
    <footer>
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        {/* Footer illustration */}
        <div
          className="pointer-events-none absolute bottom-0 left-1/2 -z-10 -translate-x-1/2"
          aria-hidden="true"
        >
          <Image
            className="max-w-none"
            src={FooterIllustration}
            width={1076}
            height={378}
            alt="Footer illustration"
          />
        </div>
        <div className="grid grid-cols-2 justify-between gap-12 py-8 sm:grid-rows-[auto_auto] md:grid-cols-4 md:grid-rows-[auto_auto] md:py-12 lg:grid-cols-[repeat(4,minmax(0,140px))_1fr] lg:grid-rows-1 xl:gap-20">
          {/* 1st block - Services */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-indigo-200 transition hover:text-indigo-500"
                  href="#0"
                >
                  Vocal Remover
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200 transition hover:text-indigo-500"
                  href="#0"
                >
                  Basic Splitting
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200 transition hover:text-indigo-500"
                  href="#0"
                >
                  Advanced Splitting
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200 transition hover:text-indigo-500"
                  href="#0"
                >
                  Mixing & Mastering
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200 transition hover:text-indigo-500"
                  href="#0"
                >
                  Chord Extraction
                </a>
              </li>
            </ul>
          </div>
          {/* 2nd block - Technology */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Technology</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-indigo-200 transition hover:text-indigo-500"
                  href="#0"
                >
                  Machine Learning
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200 transition hover:text-indigo-500"
                  href="#0"
                >
                  Audio Processing
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200 transition hover:text-indigo-500"
                  href="#0"
                >
                  Cloud Services
                </a>
              </li>
            </ul>
          </div>
          {/* 3rd block - Company */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-indigo-200 transition hover:text-indigo-500"
                  href="#0"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200 transition hover:text-indigo-500"
                  href="#0"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200 transition hover:text-indigo-500"
                  href="#0"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200 transition hover:text-indigo-500"
                  href="#0"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* 4th block - Resources */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-gray-200">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="text-indigo-200 transition hover:text-indigo-500"
                  href="#0"
                >
                  Tutorials
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200 transition hover:text-indigo-500"
                  href="#0"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200 transition hover:text-indigo-500"
                  href="#0"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  className="text-indigo-200 transition hover:text-indigo-500"
                  href="#0"
                >
                  Community
                </a>
              </li>
            </ul>
          </div>
          {/* 5th block - Footer Info */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 lg:text-right">
            <div className="mb-3">
              <Logo />
            </div>
            <div className="text-sm">
              <p className="mb-3 text-indigo-200">
                © NisaEngineers
                <span className="text-gray-700"> · </span>
                <a
                  className="text-indigo-200 transition hover:text-indigo-500"
                  href="#0"
                >
                  Terms of Service
                </a>
              </p>
              <ul className="inline-flex gap-1">
                <li>
                  <a
                    className="flex items-center justify-center text-indigo-500 transition hover:text-indigo-400"
                    href="#0"
                    aria-label="Twitter"
                  >
                    {/* Twitter Icon */}
                    <svg
                      className="h-8 w-8 fill-current"
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M32 6.076a13.08 13.08 0 0 1-3.769 1.031 6.577 6.577 0 0 0 2.888-3.631 13.165 13.165 0 0 1-4.169 1.594A6.563 6.563 0 0 0 22.16 4c-3.632 0-6.57 2.94-6.57 6.574 0 .516.059 1.02.17 1.504A18.633 18.633 0 0 1 2.228 5.12a6.537 6.537 0 0 0-.888 3.305 6.572 6.572 0 0 0 2.921 5.467 6.532 6.532 0 0 1-2.976-.823v.083c0 3.184 2.265 5.84 5.269 6.44a6.574 6.574 0 0 1-2.963.112 6.575 6.575 0 0 0 6.139 4.565A13.173 13.173 0 0 1 0 26.251a18.629 18.629 0 0 0 10.077 2.953c12.076 0 18.679-10.006 18.679-18.679 0-.285-.007-.569-.02-.852A13.337 13.337 0 0 0 32 6.076z" />
                    </svg>
                  </a>
                </li>
                {/* Add other social media icons as needed */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

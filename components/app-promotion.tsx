"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export function AppPromotion() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={sectionRef}
      className="bg-white py-12 sm:py-16 lg:py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 order-2 lg:order-1">
            <div className="relative flex justify-center items-center">
              {/* Phone 1 - Left */}
              <div
                className={`transform transition-all duration-1000 ease-out ${
                  isVisible
                    ? "translate-x-0 translate-y-0 opacity-100 rotate-0"
                    : "-translate-x-20 translate-y-10 opacity-0 -rotate-12"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <div className="relative">
                  <Image
                    width={200}
                    height={200}
                    src="/phone1.png"
                    alt="Success Life App Interface"
                    className="w-48 sm:w-56 lg:w-64 h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Phone 2 - Center */}
              <div
                className={`transform transition-all duration-1000 ease-out -ml-8 sm:-ml-12 z-10 ${
                  isVisible
                    ? "translate-y-0 opacity-100 scale-100"
                    : "translate-y-20 opacity-0 scale-95"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                <div className="relative">
                  <Image
                    width={200}
                    height={200}
                    src="/phone2.png"
                    alt="Success Life App Courses"
                    className="w-52 sm:w-60 lg:w-72 h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Phone 3 - Right */}
              <div
                className={`transform transition-all duration-1000 ease-out -ml-8 sm:-ml-12 ${
                  isVisible
                    ? "translate-x-0 translate-y-0 opacity-100 rotate-0"
                    : "translate-x-20 translate-y-10 opacity-0 rotate-12"
                }`}
                style={{ transitionDelay: "600ms" }}
              >
                <div className="relative">
                  <Image
                    width={200}
                    height={200}
                    src="/phone3.png"
                    alt="Success Life App Features"
                    className="w-48 sm:w-56 lg:w-64 h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 order-1 lg:order-2 text-center lg:text-left">
            <div
              className={`transform transition-all duration-1000 ease-out ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-20 opacity-0"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 leading-tight whitespace-nowrap">
                Read God&apos;s Word and Stay Inspired with <br />{" "}
                <span className="pt-2">The Success Life App</span>
              </h2>
            </div>

            <div
              className={`transform transition-all duration-1000 ease-out ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-20 opacity-0"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl">
                Take God&apos;s Word with you wherever you go by downloading the
                free Bible App. Listen to audio Bibles, create Prayers, study
                with Friends, and much more—all for free.
              </p>
            </div>

            <div
              className={`transform transition-all duration-1000 ease-out ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: "700ms" }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                Download Success Life App Now
              </h3>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mb-8">
                <div className="relative group">
                  <Image
                    width={100}
                    height={100}
                    src="/qrcode.png"
                    alt="QR Code"
                    className="w-24 h-24 sm:w-28 sm:h-28 border-2 border-gray-200 rounded-lg p-2 group-hover:border-purple-400 transition-colors duration-300"
                  />
                  <div className="absolute inset-0 bg-purple-100 rounded-lg opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </div>
                <div className="text-center sm:text-left">
                  <p className="text-sm sm:text-base text-gray-700 font-medium mb-1">
                    Scan the QR Code with your mobile device
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500">
                    to download Bible App.
                  </p>
                  <div className="flex items-center justify-center sm:justify-start mt-2">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-base font-normal rounded-md transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  Google Play Store
                </Button>
                <Button className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-base font-normal rounded-md transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  iOS App Store
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

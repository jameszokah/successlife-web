"use client";

import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useRef, useState } from "react";

export function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={footerRef} className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Section - White/Light Gray Background */}
        <div className="py-12 border-b border-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Left Side - Logo and Navigation */}
            <div
              className={`transform transition-all duration-1000 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-full opacity-0"
              }`}
            >
              {/* Logo Section */}
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center relative">
                  <div className="w-6 h-8 bg-white rounded-full relative">
                    <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-purple-600 rounded-full"></div>
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-3 h-4 bg-purple-600 rounded-b-full"></div>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-purple-600">
                    SuccessLife
                  </h3>
                  <p className="text-gray-600 text-sm">Your Way To Success</p>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="border-t border-gray-300 pt-6">
                <nav className="flex flex-wrap gap-x-8 gap-y-2">
                  {["Home", "Devotional", "Courses", "Podcast", "Get App"].map(
                    (link, index) => (
                      <a
                        key={link}
                        href="#"
                        className={`text-gray-700 hover:text-purple-600 font-medium transition-all duration-300 transform ${
                          isVisible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-4 opacity-0"
                        }`}
                        style={{ transitionDelay: `${index * 100 + 200}ms` }}
                      >
                        {link}
                      </a>
                    )
                  )}
                </nav>
              </div>
            </div>

            {/* Right Side - Contact and Newsletter */}
            <div
              className={`transform transition-all duration-1000 delay-300 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-full opacity-0"
              }`}
            >
              {/* Contact Info */}
              <div className="mb-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium">
                      successlifeapp@gmail.com
                    </p>
                    <p className="text-gray-800 font-medium">
                      +233 00 000 0000
                    </p>
                  </div>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div>
                <h4 className="text-xl font-bold text-gray-800 mb-4">
                  Don&apos;t Miss A Beat, Subscribe Now
                </h4>
                <div className="flex gap-3">
                  <Input
                    type="email"
                    placeholder="Enter email here"
                    className="flex-1 border-gray-300 focus:border-purple-600 focus:ring-purple-600"
                  />
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Purple Background */}
        <div className="bg-purple-600 -mx-4 px-4">
          <div
            className={`py-6 flex flex-col md:flex-row justify-between items-center transform transition-all duration-1000 delay-500 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            {/* Footer Links */}
            <div className="flex space-x-8 mb-4 md:mb-0">
              {["Privacy Policy", "Who We Are", "Help"].map((link, index) => (
                <a
                  key={link}
                  href="#"
                  className={`text-white hover:text-purple-200 transition-all duration-300 transform ${
                    isVisible
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-4 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 100 + 600}ms` }}
                >
                  {link}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p
              className={`text-white text-sm transform transition-all duration-1000 delay-700 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-4 opacity-0"
              }`}
            >
              ©2025 Success Life App | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

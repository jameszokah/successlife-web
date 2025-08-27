"use client";

import { useState } from "react";
import { Search, Menu, User } from "lucide-react";
import Image from "next/image";

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50 md:space-y-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <div className="flex items-center space-x-6 lg:space-x-8">
            <div className="flex items-center space-x-3">
              <Image
                src="/logo.png"
                alt="SuccessLife"
                width={100}
                height={100}
                className="w-42"
              />
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-8 flex-1 justify-center max-w-2xl">
            <div className="relative flex-1 max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-md leading-5 bg-primary/10 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-purple-500 focus:border-purple-500 text-sm"
                placeholder="Search..."
              />
            </div>
          </div>

          <div className="flex items-center space-x-6 lg:space-x-8">
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <a
                href="#"
                className="text-gray-700 hover:text-purple-600 font-medium text-base transition-colors duration-200"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-purple-600 font-medium text-base transition-colors duration-200"
              >
                Devotional
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-purple-600 font-medium text-base transition-colors duration-200"
              >
                Courses
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-purple-600 font-medium text-base transition-colors duration-200"
              >
                Podcast
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-purple-600 font-medium text-base transition-colors duration-200"
              >
                Get App
              </a>
            </div>

            <div className="flex items-center space-x-3">
              <button className="lg:hidden p-2">
                <Search className="w-5 h-5 text-gray-500" />
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2"
              >
                <Menu className="w-5 h-5 text-gray-700" />
              </button>
              {/* <div className="hidden lg:block w-6 h-6 bg-gray-300 rounded-full"></div> */}
              <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`lg:hidden mb-3 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden bg-white border-t`}
      >
        <div className="px-4 py-4 space-y-1 ">
          <div className="pb-3 mb-3 border-b">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-md leading-5 bg-primary/10 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-purple-500 focus:border-purple-500 text-sm"
                placeholder="Search..."
              />
            </div>
          </div>
          <a
            href="#"
            className="block text-gray-700 hover:text-purple-600 font-medium py-3 transition-colors duration-200"
          >
            Home
          </a>
          <a
            href="#"
            className="block text-gray-700 hover:text-purple-600 font-medium py-3 transition-colors duration-200"
          >
            Devotional
          </a>
          <a
            href="#"
            className="block text-gray-700 hover:text-purple-600 font-medium py-3 transition-colors duration-200"
          >
            Courses
          </a>
          <a
            href="#"
            className="block text-gray-700 hover:text-purple-600 font-medium py-3 transition-colors duration-200"
          >
            Podcast
          </a>
          <a
            href="#"
            className="block text-gray-700 hover:text-purple-600 font-medium py-3 transition-colors duration-200"
          >
            Get App
          </a>
        </div>
      </div>
    </nav>
  );
}

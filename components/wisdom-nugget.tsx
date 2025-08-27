"use client"

import { ChevronLeft, ChevronRight, Bookmark, Download } from "lucide-react"
import { useState } from "react"

export function WisdomNugget() {
  const [activeSection, setActiveSection] = useState(0)

  const sections = [
    { name: "Faith & Purpose", color: "bg-purple-300" },
    { name: "Personal Growth", color: "bg-purple-400" },
    { name: "Daily Inspiration", color: "bg-purple-500" },
  ]

  const quotes = [
    {
      text: "Believe in yourself even when no one else does. Your journey is yours alone — and what you think about yourself matters far more than what.",
      author: "Anonymous",
    },
    {
      text: "Growth begins at the end of your comfort zone. Every challenge is an opportunity to become stronger and wiser.",
      author: "Anonymous",
    },
    {
      text: "Start each day with gratitude and watch how your perspective transforms everything around you.",
      author: "Anonymous",
    },
  ]

  const nextQuote = () => {
    setActiveSection((prev) => (prev + 1) % quotes.length)
  }

  const prevQuote = () => {
    setActiveSection((prev) => (prev - 1 + quotes.length) % quotes.length)
  }

  return (
    <div className="bg-secondary py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Section - Title and Purple Pills */}
          <div className="space-y-6 lg:space-y-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight">
              Today&apos;s Wisdom Nugget
            </h2>

            {/* Three Purple Sections */}
            <div className="space-y-4">
              {sections.map((section, index) => (
                <div
                  key={index}
                  className={`
                    ${section.color} rounded-full h-12 sm:h-14 lg:h-16 
                    cursor-pointer transition-all duration-300 ease-in-out
                    hover:scale-105 hover:shadow-lg transform
                    ${activeSection === index ? "scale-105 shadow-lg" : ""}
                  `}
                  onClick={() => setActiveSection(index)}
                  style={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <div className="flex items-center justify-center h-full">
                    <span className="text-white font-medium text-sm sm:text-base lg:text-lg  transition-opacity duration-300">
                      {section.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section - Quote Card */}
          <div className="relative">
            <div className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              {/* Navigation Arrows */}
              <button
                onClick={prevQuote}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-purple-600 transition-colors duration-200 hover:bg-purple-50 rounded-full"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={nextQuote}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center text-gray-400 hover:text-purple-600 transition-colors duration-200 hover:bg-purple-50 rounded-full"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Quote Content */}
              <div className="text-center px-8 sm:px-12">
                {/* Large Quote Marks */}
                <div className="text-6xl sm:text-7xl lg:text-8xl text-purple-200 mb-4 leading-none font-serif">&rdquo;</div>

                {/* Quote Text */}
                <div key={activeSection} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 mb-6 sm:mb-8 leading-relaxed font-medium">
                    {quotes[activeSection].text}
                  </p>

                  <p className="text-base sm:text-lg text-gray-600 font-medium">-- {quotes[activeSection].author}</p>
                </div>
              </div>

              {/* Action Icons */}
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 flex space-x-3">
                <button className="w-8 h-8 flex items-center justify-center text-purple-400 hover:text-purple-600 hover:bg-purple-50 rounded-full transition-all duration-200">
                  <Bookmark className="w-5 h-5" />
                </button>
                <button className="w-8 h-8 flex items-center justify-center text-purple-400 hover:text-purple-600 hover:bg-purple-50 rounded-full transition-all duration-200">
                  <Download className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

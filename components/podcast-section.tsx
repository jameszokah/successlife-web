"use client"

import { Play, Clock, User } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function PodcastSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const featuredEpisodes = [
    {
      title: 'Section 1.10.33 of "de allow us to Bonorum et Malorm"',
      author: "Author Name",
      date: "Date of Post",
      category: "POST CATEGORY",
      background: "from-orange-400 via-orange-500 to-yellow-500",
      image: "/silhouette-of-person-jumping-against-sunset-sky.png",
    },
    {
      title: 'Section 1.10.33 of "de allow us to Bonorum et Malorm"',
      author: "Author Name",
      date: "Date of Post",
      category: "POST CATEGORY",
      background: "from-teal-400 via-blue-400 to-blue-500",
      image: "/silhouettes-of-group-of-people-standing-together.png",
    },
  ]

  const episodes = [
    {
      title: "Title Here, Say More",
      duration: "4:00mins",
      date: "6th October, 2025",
      category: "Category Here",
      image: "/curly-haired-woman-portrait.png",
    },
    {
      title: "Title Here, Say More",
      duration: "4:00mins",
      date: "6th October, 2025",
      category: "Category Here",
      image: "/curly-haired-woman-portrait.png",
    },
    {
      title: "Title Here, Say More",
      duration: "4:00mins",
      date: "6th October, 2025",
      category: "Category Here",
      image: "/curly-haired-woman-portrait.png",
    },
    {
      title: "Title Here, Say More",
      duration: "4:00mins",
      date: "6th October, 2025",
      category: "Category Here",
      image: "/curly-haired-woman-portrait.png",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={sectionRef} className="bg-primary/10 py-16 overflow-hidden rounded-br-[4rem]">
      <div className="max-w-7xl mx-auto px-4">
        <div
          className={`flex justify-between items-center mb-12 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          }`}
        >
          <h2 className="text-4xl font-bold text-gray-900">Podcast</h2>
          <a
            href="#"
            className="text-primary hover:text-primary font-semibold text-lg transition-colors duration-300 hover:scale-105 transform"
          >
            See All
          </a>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          <div className="xl:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredEpisodes.map((episode, index) => (
              <div
                key={index}
                className={`relative bg-gradient-to-br ${episode.background} rounded-2xl p-8 text-white overflow-hidden group cursor-pointer transition-all duration-700 hover:scale-105 hover:shadow-2xl ${
                  isVisible
                    ? `opacity-100 ${index === 0 ? "translate-x-0" : "translate-x-0"} translate-y-0`
                    : `opacity-0 ${index === 0 ? "-translate-x-full" : "translate-x-full"} translate-y-8`
                }`}
                style={{
                  transitionDelay: `${index * 200}ms`,
                  backgroundImage: `url(${episode.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundBlendMode: "overlay",
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/60"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300 group-hover:scale-110 transform">
                    <Play className="w-8 h-8 text-white ml-1" fill="white" />
                  </div>

                  <div className="inline-block bg-primary px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                    {episode.category}
                  </div>

                  <h3 className="text-2xl font-bold mb-6 leading-tight">{episode.title}</h3>

                  <div className="flex items-center space-x-6 text-sm opacity-90">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{episode.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{episode.date}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            className={`space-y-4 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            {episodes.map((episode, index) => (
              <div
                key={index}
                className={`flex items-center space-x-4 p-4 bg-white rounded-xl border-2 border-dashed border-gray-200 hover:border-purple-300 transition-all duration-300 hover:shadow-lg group cursor-pointer transform hover:scale-[1.02] ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: `${600 + index * 100}ms` }}
              >
                <div className="relative">
                  <Image
                    width={100}
                    height={100}
                    src={episode.image || "/placeholder.svg"}
                    alt="Episode host"
                    className="w-14 h-14 rounded-full object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-500 mb-1 font-medium uppercase tracking-wide">{episode.category}</p>
                  <h4 className="font-bold text-gray-900 mb-2 text-lg leading-tight">{episode.title}</h4>
                  <div className="flex items-center space-x-3 text-sm text-gray-600">
                    <span>{episode.date}</span>
                    <span>•</span>
                    <span>{episode.duration}</span>
                  </div>
                </div>

                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center group-hover:bg-primary transition-colors duration-300 group-hover:scale-110 transform">
                  <Play className="w-5 h-5 text-white ml-0.5" fill="white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

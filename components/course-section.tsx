"use client"

import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Image from 'next/image'

export function CourseSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  const courses = [
    {
      title: "Course 1: Title Here & Many More Allowed",
      description:
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
      rating: 4.8,
      reviews: 238,
      image: "/person-working-on-dual-monitors-coding.png",
    },
    {
      title: "Course 1: Title Here & Many More Allowed",
      description:
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
      rating: 4.8,
      reviews: 238,
      image: "/hands-working-with-documents-on-desk.png",
    },
    {
      title: "Course 1: Title Here & Many More Allowed",
      description:
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
      rating: 4.8,
      reviews: 238,
      image: "/person-working-on-dual-monitors-coding.png",
    },
  ];

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
    <div ref={sectionRef} className="bg-indigo-950 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`text-left mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-200 mb-6">
            Take a Course
          </h2>
          <div className="flex flex-wrap justify-start gap-3 mb-2 space-x-2">
            {[
              "Mathematics",
              "Mathematics",
              "Mathematics",
              "Mathematics",
              "Mathematics",
            ].map((subject, index) => (
              <span
                key={index}
                className={`bg-transparent hover:bg-indigo-900 border-2 text-white px-4 md:px-6 py-1 md:py-3 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {subject}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`bg-white rounded-br-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
              style={{
                transitionDelay: `${index * 200 + 300}ms`,
                transform: isVisible
                  ? "translateY(0) translateX(0) rotate(0deg)"
                  : `translateY(50px) translateX(${
                      index % 2 === 0 ? "-30px" : "30px"
                    }) rotate(${index % 2 === 0 ? "-2deg" : "2deg"})`,
              }}
            >
              <div className="relative overflow-hidden group">
                <Image
                  width={200}
                  height={200}
                  src={course.image || "/placeholder.svg?height=200&width=400"}
                  alt={course.title}
                  className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="font-bold text-xl text-gray-800 mb-3 leading-tight">
                  {course.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {course.description}
                </p>

                <div className="flex items-center space-x-2 mb-6">
                  <div className="flex items-center space-x-1">
                    <span className="font-bold text-gray-800">
                      {course.rating}
                    </span>
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(course.rating)
                              ? "fill-yellow-400 text-yellow-400"
                              : "fill-gray-200 text-gray-200"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <span className="text-gray-500 text-sm">
                    ({course.reviews} reviews)
                  </span>
                </div>

                {/* <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Enroll Now
                </Button> */}
              </div>
            </div>
          ))}
        </div>

        <div
          className={`text-center transition-all duration-1000 flex ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
          style={{ transitionDelay: "1000ms" }}
        >
          <Button
            variant="outline"
            className="border-2 border-white bg-white text-primary px-8 py-5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View All Courses
          </Button>
        </div>
      </div>
    </div>
  );
}

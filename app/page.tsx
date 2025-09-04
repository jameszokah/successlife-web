"use client"

import { useEffect } from "react"
import { Header } from "@/components/header"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { WisdomNugget } from "@/components/wisdom-nugget"
import { AppPromotion } from "@/components/app-promotion"
import { PodcastSection } from "@/components/podcast-section"
import { CourseSection } from "@/components/course-section"
import { BlogSection } from "@/components/blog-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in-up")
        }
      })
    }, observerOptions)

    const animateElements = document.querySelectorAll(".animate-on-scroll")
    animateElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Navigation />
      <main className="overflow-hidden">
        <HeroSection />
        <div className="animate-on-scroll">
          <WisdomNugget />
        </div>
        <div className="animate-on-scroll">
          <AppPromotion />
        </div>
        <div className="animate-on-scroll">
          <PodcastSection />
        </div>
        <div className="animate-on-scroll">
          <CourseSection />
        </div>
        <div className="animate-on-scroll">
          <BlogSection />
        </div>
      </main>
      <Footer />
    </div>
  )
}












"use client"

import { Button } from "@/components/ui/button"
import { Clock, User } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Image from "next/image";

export function BlogSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

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

  const posts = [
    {
      title:
        "Section 1.10.33 of 'de allow Bonorum et Malorum', written by Cicero in 45 BC",
      excerpt:
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
      author: "Author Name",
      date: "Date of Post",
      image: "/blog-post-thumbnail-with-classical-literature.png",
    },
    {
      title:
        "Section 1.10.33 of 'de allow Bonorum et Malorum', written by Cicero in 45 BC",
      excerpt:
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
      author: "Author Name",
      date: "Date of Post",
      image: "/blog-post-thumbnail-with-study-materials.png",
    },
    {
      title:
        "Section 1.10.33 of 'de allow Bonorum et Malorum', written by Cicero in 45 BC",
      excerpt:
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
      author: "Author Name",
      date: "Date of Post",
      image: "/blog-post-thumbnail-with-ancient-text.png",
    },
    {
      title:
        "Section 1.10.33 of 'de allow Bonorum et Malorum', written by Cicero in 45 BC",
      excerpt:
        "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
      author: "Author Name",
      date: "Date of Post",
      image: "/blog-post-thumbnail-with-classical-literature.png",
    },
  ];

  const featuredPosts = [
    {
      title:
        "Section 1.10.33 of 'de allow Bonorum et Malorum', written by Cicero in 45 BC",
      subtitle: "Date content was added",
      image: "/featured-post-beach-scene.png",
    },
    {
      title:
        "Section 1.10.33 of 'de allow Bonorum et Malorum', written by Cicero in 45 BC",
      subtitle: "Date content was added",
      image: "/blog-post-thumbnail-with-classical-literature.png",
    },
    {
      title:
        "Section 1.10.33 of 'de allow Bonorum et Malorum', written by Cicero in 45 BC",
      subtitle: "Date content was added",
      image: "/blog-post-thumbnail-with-ancient-text.png",
    },
  ];

  return (
    <div ref={sectionRef} className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {posts.map((post, index) => (
                <div
                  key={index}
                  className={`group bg-white  shadow-sm hover:shadow-md transition-all duration-500 overflow-hidden border border-gray-100 ${
                    isVisible
                      ? "animate-slideInLeft"
                      : "opacity-0 translate-x-[-50px]"
                  }`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-2/5 relative overflow-hidden">
                      <Image
                        width={200}
                        height={200}
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-semibold tracking-wide">
                          POST CATEGORY
                        </span>
                      </div>
                    </div>
                    <div className="md:w-3/5 p-8 flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-primary transition-colors duration-300">
                          {post.title}
                        </h3>
                        <div className="flex items-center space-x-6 mb-4 text-gray-600">
                          <div className="flex items-center space-x-2">
                            <User className="w-4 h-4" />
                            <span className="text-sm">{post.author}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4" />
                            <span className="text-sm">{post.date}</span>
                          </div>
                        </div>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                          {post.excerpt}
                        </p>
                      </div>
                      <div>
                        <Button className="bg-primary hover:bg-primary/70 text-white px-8 py-5 rounded-md font-semibold tracking-wide transition-all duration-300 hover:shadow-lg hover:scale-105">
                          READ MORE
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center flex">
              <Button
                variant="outline"
                className={`text-primary border-2 border-primary hover:bg-primary hover:text-white bg-transparent px-8 py-3 rounded-md font-semibold tracking-wide transition-all duration-300 hover:shadow-lg hover:scale-105 ${
                  isVisible
                    ? "animate-slideInUp"
                    : "opacity-0 translate-y-[30px]"
                }`}
                style={{ animationDelay: `${posts.length * 200 + 200}ms` }}
              >
                VIEW MORE POSTS
              </Button>
            </div>
          </div>
          <div
            className={`space-y-8 ${
              isVisible
                ? "animate-slideInRight"
                : "opacity-0 translate-x-[50px]"
            }`}
            style={{ animationDelay: "400ms" }}
          >
            <div>
              <h3 className="font-bold text-gray-800 mb-4">CATEGORY ONE</h3>
              <Button className="w-full bg-primary rounded-none hover:bg-primary/70 text-white mb-2 py-5">
                CATEGORY TWO
              </Button>
              <Button
                variant="outline"
                className="w-full text-primary rounded-none border-primary hover:bg-primary hover:text-white mb-2 bg-transparent py-5"
              >
                CATEGORY THREE
              </Button>
              <Button
                variant="outline"
                className="w-full text-primary rounded-none border-primary hover:bg-primary hover:text-white bg-transparent py-5"
              >
                CATEGORY FOUR
              </Button>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-4">
                Recommended Audios
              </h3>
              <div className="grid grid-cols-2 gap-2 mb-4">
                {Array.from({ length: 6 }).map((_, index) => (
                  <Image
                    width={200}
                    height={200}
                    key={index}
                    src="/audio-thumbnail.png"
                    alt="Audio thumbnail"
                    className="w-full h-20 object-cover rounded-md cursor-pointer hover:scale-105 transition-transform duration-300"
                  />
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-gray-800 mb-4">Featured Posts</h3>
              <div className="space-y-4">
                {featuredPosts.map((post, index) => (
                  <div
                    key={index}
                    className={`bg-purple-50 rounded-xl p-4 hover:bg-purple-100 transition-all duration-300 cursor-pointer group ${
                      isVisible
                        ? "animate-slideInRight"
                        : "opacity-0 translate-x-[30px]"
                    }`}
                    style={{ animationDelay: `${600 + index * 150}ms` }}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1 pr-4">
                        <h4 className="text-base font-bold text-gray-900 leading-tight mb-2 group-hover:text-purple-700 transition-colors duration-300">
                          {post.title}
                        </h4>
                        <p className="text-sm text-gray-500 font-medium">
                          {post.subtitle}
                        </p>
                      </div>
                      <div className="flex-shrink-0">
                        <Image
                          width={200}
                          height={200}
                          src={post.image || "/placeholder.svg"}
                          alt={post.title}
                          className="w-20 h-16 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

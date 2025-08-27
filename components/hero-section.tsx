import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <div className="relative bg-gradient-to-r from-gray-900 to-white text-white min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh] flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60 rounded-br-[6rem]"
        style={{
          backgroundImage: `url('/silhouettes-of-people-raising-hands-and-crosses-ag.png')`,
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 w-full">
        <div className="max-w-2xl lg:max-w-3xl animate-fade-in-up">
          <p className="text-xs md:text-lg font-semibold mb-2 sm:mb-4 text-purple-100">Today&apos;s Devotion</p>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight">
            Section 1.10.33 of &ldquo;de allow us to Bonorum et Malorum&rdquo;
          </h1>
          <Button className="bg-primary hover:bg-primary/90 cursor-pointer text-white px-4 md:px-8 py-2 md:py-4 text-sm sm:text-base transition-all duration-300 hover:scale-105">
            Read Now
          </Button>
        </div>
      </div>
    </div>
  )
}

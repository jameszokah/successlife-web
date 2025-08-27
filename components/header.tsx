import { Instagram, Facebook, Twitter, Youtube, Moon } from "lucide-react"

export function Header() {
  return (
    <div className="bg-primary text-white py-2 px-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
        <div className="flex items-center space-x-4 md:space-x-6">
          <a href="#" className="hover:text-purple-200 transition-colors duration-200">
            About Us
          </a>
          <span className="text-purple-300">|</span>
          <a href="#" className="hover:text-purple-200 transition-colors duration-200">
            Contact Us
          </a>
          <span className="text-purple-300">|</span>
          <a href="#" className="hover:text-purple-200 transition-colors duration-200">
            Privacy Policy
          </a>
        </div>
        <div className="flex items-center space-x-3 md:space-x-4">
          <div className="flex space-x-2 text-primary">
            <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 cursor-pointer transition-all duration-200">
              <Instagram className="w-3 h-3" />
            </div>
            <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 cursor-pointer transition-all duration-200">
              <Facebook className="w-3 h-3" />
            </div>
            <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 cursor-pointer transition-all duration-200">
              <Twitter className="w-3 h-3" />
            </div>
            <div className="w-6 h-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 cursor-pointer transition-all duration-200">
              <Youtube className="w-3 h-3" />
            </div>
          </div>
          <div className=" text-white bg-opacity-20 rounded-full flex items-center justify-center">
            <Moon className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  )
}

"use client"

import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, Coffee, Heart } from "lucide-react"

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {/* Header */}
      <header className="bg-[#2f1f1b] shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="relative">
                <Coffee className="h-8 w-8 text-[#e4cbbb] group-hover:text-orange-300 transition-colors" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-xl font-bold text-[#e4cbbb] group-hover:text-orange-300 transition-colors">
                  Aroma Sriwijaya
                </h1>
                <p className="text-xs text-orange-300">Premium Coffee Export</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? "text-orange-300 bg-[#3d2a26] shadow-inner"
                      : "text-[#e4cbbb] hover:text-orange-300 hover:bg-[#3d2a26]"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-[#e4cbbb] hover:text-orange-300 hover:bg-[#3d2a26] transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <div className="space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                      isActive(item.href)
                        ? "text-orange-300 bg-[#3d2a26]"
                        : "text-[#e4cbbb] hover:text-orange-300 hover:bg-[#3d2a26]"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-[#2f1f1b] text-[#e4cbbb] mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Coffee className="h-6 w-6 text-orange-300" />
                <h3 className="text-lg font-bold">Aroma Sriwijaya</h3>
              </div>
              <p className="text-sm text-[#e4cbbb]/80 mb-4">
                Premium Indonesian coffee exporter, connecting local farmers with international markets.
              </p>
              <div className="flex items-center space-x-2 text-sm">
                <span>Made with</span>
                <Heart className="h-4 w-4 text-red-400 fill-current" />
                <span>for coffee lovers</span>
                <span className="text-orange-300">🐱</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link to={item.href} className="text-sm text-[#e4cbbb]/80 hover:text-orange-300 transition-colors">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-sm text-[#e4cbbb]/80">
                <p>📧 info@aromasriwijaya.com</p>
                <p>📱 +62 812-3456-7890</p>
                <p>📍 Palembang, South Sumatra, Indonesia</p>
              </div>
            </div>
          </div>

          <div className="border-t border-[#3d2a26] mt-8 pt-8 text-center">
            <p className="text-sm text-[#e4cbbb]/60">
              © 2024 Aroma Sriwijaya. All rights reserved.
              <span className="ml-2">🐾 Crafted with feline precision</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout

"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#features", label: "Features" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? "bg-white shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6 lg:px-8">
        {/* Logo */}
        <a href="#home" className="flex items-center space-x-2">
          <div className={`text-2xl font-bold transition-colors ${isScrolled ? "text-[#0A1A2F]" : "text-white"}`}>
            MoneySense
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-[#C99663] ${
                isScrolled ? "text-[#0A1A2F]" : "text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden items-center space-x-4 md:flex">
          <Button
            size="sm"
            className={`transition-all ${
              isScrolled
                ? "bg-[#D9CBB5] text-[#0A1A2F] hover:bg-[#C99663] hover:text-white"
                : "bg-[#D9CBB5] text-[#0A1A2F] hover:bg-white hover:text-[#0A1A2F]"
            }`}
            asChild
          >
            <a href="#waitlist">Get Started</a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden ${isScrolled ? "text-[#0A1A2F]" : "text-white"}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="border-t border-border bg-white md:hidden">
          <nav className="flex flex-col space-y-4 px-4 py-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#0A1A2F] hover:text-[#C99663]"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button
              size="sm"
              className="w-full bg-[#D9CBB5] text-[#0A1A2F] hover:bg-[#C99663] hover:text-white"
              asChild
            >
              <a href="#waitlist" onClick={() => setIsMobileMenuOpen(false)}>
                Get Started
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}

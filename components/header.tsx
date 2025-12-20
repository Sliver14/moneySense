"use client"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils" // assuming you have this (common in shadcn)

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const shouldShowWhiteBg = isScrolled || isMobileMenuOpen

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

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        shouldShowWhiteBg
          ? "bg-white/95 backdrop-blur shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-6 md:px-6 lg:px-8">
        {/* Logo */}
        <a href="#home" className="flex items-center space-x-2">
          <span
            className={`text-2xl font-semibold transition-colors ${
              shouldShowWhiteBg ? "text-[#0A1A2F]" : "text-white"
            }`}
          >
            MoneySense
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-normal transition-colors hover:text-[#C99663] ${
                shouldShowWhiteBg ? "text-[#0A1A2F]" : "text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center space-x-4 md:flex">
          <Button
            size="sm"
            className="rounded-full bg-[#D9CBB5] px-6 py-6 text-[#0A1A2F] transition-all hover:bg-[#C99663] hover:text-white"
            asChild
          >
            <a href="#waitlist">Get Started</a>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden transition-colors ${
            shouldShowWhiteBg ? "text-[#0A1A2F]" : "text-white"
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="h-10 w-10" />
          ) : (
            <Menu className="h-10 w-10" />
          )}
        </button>
      </div>

      {/* Mobile Menu – Smooth Animation */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-500 ease-in-out",
          isMobileMenuOpen
            ? "max-h-96 opacity-100"
            : "max-h-0 opacity-0"
        )}
      >
        <div className="border-t border-gray-200 bg-white/95 backdrop-blur-lg">
          <nav className="flex flex-col space-y-4 px-4 py-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-lg font-medium text-[#0A1A2F] transition-colors hover:text-[#C99663]"
                onClick={closeMobileMenu}
              >
                {link.label}
              </a>
            ))}
            <Button
              size="lg"
              className="w-full rounded-full bg-[#D9CBB5] py-7 text-[#0A1A2F] text-lg font-medium hover:bg-[#C99663] hover:text-white"
              asChild
            >
              <a href="#waitlist" onClick={closeMobileMenu}>
                Get Started
              </a>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
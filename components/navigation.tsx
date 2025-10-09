"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Menu, X } from "lucide-react"

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-lg" : "bg-background/80 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group cursor-pointer">
            <img
              src="/uct-logo.png"
              alt="UCT Groups Security Services"
              className="h-16 w-auto transition-transform group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link href="/services" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="/about" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link
              href="/industries"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Industries
            </Link>
            <Link
              href="/testimonials"
              className="text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Testimonials
            </Link>
            <Link href="/blog" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Security Tips
            </Link>
            <Link href="/contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </div>

          {/* Emergency Contact & CTA */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-destructive/10 rounded-lg border border-destructive/20">
              <Phone className="w-4 h-4 text-destructive animate-pulse" />
              <div>
                <div className="text-xs text-muted-foreground">Emergency 24/7</div>
                <a href="tel:1300828476" className="text-sm font-bold text-destructive hover:underline">
                  1300 UCT GRP
                </a>
              </div>
            </div>
            <Link href="/contact">
              <Button size="lg" className="font-semibold">
                Get Free Quote
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 hover:bg-accent rounded-lg transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-in slide-in-from-top-5">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-left px-4 py-2 hover:bg-accent rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-left px-4 py-2 hover:bg-accent rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/about"
                className="text-left px-4 py-2 hover:bg-accent rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/industries"
                className="text-left px-4 py-2 hover:bg-accent rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Industries
              </Link>
              <Link
                href="/testimonials"
                className="text-left px-4 py-2 hover:bg-accent rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                href="/blog"
                className="text-left px-4 py-2 hover:bg-accent rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Security Tips
              </Link>
              <Link
                href="/contact"
                className="text-left px-4 py-2 hover:bg-accent rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="px-4 py-3 bg-destructive/10 rounded-lg border border-destructive/20">
                <div className="text-xs text-muted-foreground mb-1">Emergency 24/7</div>
                <a href="tel:1300828476" className="text-lg font-bold text-destructive">
                  1300 UCT GRP
                </a>
              </div>
              <Link href="/contact">
                <Button size="lg" className="mx-4 w-[calc(100%-2rem)]">
                  Get Free Quote
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

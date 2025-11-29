"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  Users,
  Car,
  ShoppingBag,
  UserCheck,
  Camera,
  Bell,
  HardHat,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
  Award,
  AlertCircle,
  ArrowRight,
  Menu,
  X,
  Calculator,
  Star,
  Building2,
  Factory,
  Home,
  Calendar,
} from "lucide-react"
import ContactForm from "@/components/contact-form"
import ServiceRequestModal from "@/components/service-request-modal"
import QuoteCalculator from "@/components/quote-calculator"
import LiveChatWidget from "@/components/live-chat-widget"
import BlogPreview from "@/components/blog-preview"
import Link from "next/link"

export default function HomePage() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [serviceModalOpen, setServiceModalOpen] = useState(false)
  const [quoteCalculatorOpen, setQuoteCalculatorOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
    setMobileMenuOpen(false)
  }

  const services = [
    {
      icon: Shield,
      title: "VIP Bodyguards & Close Protection",
      slug: "vip-bodyguards",
      image: "/bodyguard-vip-protection.jpg",
      description:
        "Elite personal protection services for high-profile individuals, executives, and VIPs. Our trained operatives provide discreet, professional security with risk assessment and threat mitigation.",
      features: ["Risk Assessment", "Threat Analysis", "Discreet Protection"],
    },
    {
      icon: Users,
      title: "Static Security Guards",
      slug: "static-security-guards",
      image: "/security-guard-patrol.jpg",
      description:
        "Professional on-site security personnel for commercial, retail, and residential properties. Licensed guards providing access control, surveillance, and incident response 24/7.",
      features: ["Access Control", "24/7 Monitoring", "Incident Response"],
    },
    {
      icon: Car,
      title: "Mobile Patrol Services",
      slug: "mobile-patrol-services",
      image: "/security-guard-patrol.jpg",
      description:
        "Regular security patrols across multiple sites with GPS tracking and detailed reporting. Rapid response to alarms and security breaches across Sydney metropolitan area.",
      features: ["GPS Tracking", "Multi-Site Coverage", "Rapid Response"],
    },
    {
      icon: ShoppingBag,
      title: "Retail Security",
      slug: "retail-security",
      image: "/retail-security-guard.jpg",
      description:
        "Specialized retail loss prevention and customer safety services. Trained personnel in theft deterrence, conflict resolution, and emergency procedures compliant with Australian retail standards.",
      features: ["Loss Prevention", "Customer Safety", "Theft Deterrence"],
    },
    {
      icon: UserCheck,
      title: "Crowd Control",
      slug: "crowd-control",
      image: "/event-security-crowd.jpg",
      description:
        "Professional crowd management for events, venues, and public gatherings. Licensed personnel trained in de-escalation, emergency evacuation, and compliance with NSW event regulations.",
      features: ["Event Management", "De-escalation", "Emergency Protocols"],
    },
    {
      icon: Camera,
      title: "CCTV Installation & Monitoring",
      slug: "cctv-monitoring",
      image: "/cctv-monitoring-room.jpg",
      description:
        "State-of-the-art surveillance systems with 24/7 monitoring. HD cameras, remote access, and intelligent analytics for comprehensive property protection and evidence collection.",
      features: ["HD Surveillance", "Remote Access", "Intelligent Analytics"],
    },
    {
      icon: Bell,
      title: "Alarm Response Services",
      slug: "alarm-response",
      image: "/security-team-briefing.jpg",
      description:
        "Immediate response to security alarms with trained personnel dispatched within minutes. Verification, investigation, and coordination with emergency services as required.",
      features: ["Immediate Response", "Alarm Verification", "Emergency Coordination"],
    },
    {
      icon: HardHat,
      title: "Construction Site Security",
      slug: "construction-security",
      image: "/construction-site-security.jpg",
      description:
        "Specialized security for construction sites protecting equipment, materials, and work areas. Prevention of theft, vandalism, and unauthorized access with compliance to WHS regulations.",
      features: ["Asset Protection", "Theft Prevention", "WHS Compliance"],
    },
  ]

  const industries = [
    {
      icon: Building2,
      name: "Corporate",
      image: "/modern-corporate-office-building-security.jpg",
      description: "Office buildings, business parks, and corporate headquarters",
    },
    {
      icon: ShoppingBag,
      name: "Retail",
      image: "/retail-security-guard.jpg",
      description: "Shopping centers, stores, and retail complexes",
    },
    {
      icon: Factory,
      name: "Construction",
      image: "/construction-site-security.jpg",
      description: "Building sites, infrastructure projects, and developments",
    },
    {
      icon: Calendar,
      name: "Events",
      image: "/event-security-crowd.jpg",
      description: "Concerts, festivals, conferences, and public gatherings",
    },
    {
      icon: Home,
      name: "Residential",
      image: "/residential-apartment-complex-security-gate.jpg",
      description: "Apartment complexes, gated communities, and estates",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Mitchell",
      company: "Westfield Shopping Centre",
      role: "Security Manager",
      content:
        "UCT Groups has been our trusted security partner for over 5 years. Their professionalism and rapid response capabilities are unmatched. The team is always well-presented and handles situations with expertise.",
      rating: 5,
    },
    {
      name: "David Chen",
      company: "Lendlease Construction",
      role: "Project Director",
      content:
        "We've used UCT Groups for multiple construction sites across Sydney. Their understanding of WHS compliance and proactive approach to site security has prevented numerous incidents. Highly recommended.",
      rating: 5,
    },
    {
      name: "Emma Thompson",
      company: "Crown Events Group",
      role: "Operations Manager",
      content:
        "For large-scale events, UCT Groups is our go-to provider. Their crowd control expertise and ability to manage complex situations professionally gives us complete confidence. They've never let us down.",
      rating: 5,
    },
  ]

  const stats = [
    { value: "10+", label: "Years Combined Experience" },
    { value: "500+", label: "Clients Protected" },
    { value: "24/7", label: "Emergency Response" },
    { value: "100%", label: "Licensed & Insured" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Navigation */}
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
              <Link
                href="/services"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
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
              <Link
                href="/contact"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                Contact
              </Link>
            </div>

            {/* Emergency Contact & CTA */}
            <div className="hidden md:flex items-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-destructive/10 rounded-lg border border-destructive/20">
                <Phone className="w-4 h-4 text-destructive animate-pulse" />
                <div>
                  <div className="text-xs text-muted-foreground">Emergency 24/7</div>
                  <a href="tel:1300129456" className="text-sm font-bold text-destructive hover:underline">
                    1300 129 456
                  </a>
                </div>
              </div>
              <Button onClick={() => setQuoteCalculatorOpen(true)} size="lg" className="font-semibold">
                Get Free Quote
              </Button>
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
                  <a href="tel:1300129456" className="text-lg font-bold text-destructive">
                    1300 129 456
                  </a>
                </div>
                <Button onClick={() => setQuoteCalculatorOpen(true)} size="lg" className="mx-4">
                  Get Free Quote
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/5" />

        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Image and Logo */}
            <div className="order-2 md:order-1 animate-in fade-in slide-in-from-left-10 duration-700">
              <div className="relative">
                <div className="mb-8 flex justify-center md:justify-start">
                  <img
                    src="/uct-logo.png"
                    alt="UCT Groups Security Services"
                    className="h-32 w-auto animate-in fade-in zoom-in-50 duration-700 delay-100"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/bodyguard.png"
                    alt="Professional UCT Groups Security Team"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Right side - Text content */}
            <div className="order-1 md:order-2 animate-in fade-in slide-in-from-right-10 duration-700">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <Award className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Licensed & Certified Security Provider</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
                Professional Security Services Across Australia
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground mb-8 text-balance leading-relaxed">
                10+ Years of Combined Experience | Licensed & Trained Personnel | 24/7 Emergency Response
              </p>

              <div className="flex flex-col sm:flex-row items-start gap-4 mb-12">
                <Button
                  size="lg"
                  onClick={() => setQuoteCalculatorOpen(true)}
                  className="w-full sm:w-auto text-lg px-8 py-6 font-semibold group"
                >
                  Get Free Quote
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("services")}
                  className="w-full sm:w-auto text-lg px-8 py-6 font-semibold"
                >
                  Our Services
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="p-4 bg-card rounded-lg border border-border hover:border-primary/50 transition-all hover:shadow-lg"
                  >
                    <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="py-6 bg-destructive/10 border-y border-destructive/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <AlertCircle className="w-6 h-6 text-destructive animate-pulse" />
              <div>
                <div className="font-bold text-foreground">24/7 Emergency Security Response</div>
                <div className="text-sm text-muted-foreground">Immediate dispatch across Sydney metropolitan area</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <a href="tel:1300129456" className="text-2xl font-bold text-destructive hover:underline">
                1300 129 456
              </a>
              <Button variant="destructive" size="lg" className="font-semibold">
                <Phone className="mr-2 w-5 h-5" />
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge 
            variant="outline" 
            className="mb-4 text-sm py-2 px-4 rounded-full"
              >
                Our Services
              </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Comprehensive Security Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Professional security services tailored to your needs. Licensed, insured, and compliant with Australian
              security regulations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Link key={index} href={`/services/${service.slug}`}>
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border hover:border-primary/50 group cursor-pointer h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 bg-primary/90 rounded-lg flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">{service.description}</p>
                    <div className="space-y-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button
                      variant="ghost"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-20">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4">
                Our Team in Action
              </Badge>
              <h3 className="text-2xl md:text-4xl font-bold text-foreground mb-4 text-balance">
                Professional Security Personnel
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
                Highly trained, licensed professionals protecting what matters most
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <img
                  src="/event-security-crowd.jpg"
                  alt="Event Security and Crowd Control"
                  className="w-full h-[300px] object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Event Security</h3>
                    <p className="text-white/90 text-sm">Professional crowd management and event protection</p>
                  </div>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <img
                  src="/cctv-monitoring-room.jpg"
                  alt="CCTV Monitoring and Surveillance"
                  className="w-full h-[300px] object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">24/7 Monitoring</h3>
                    <p className="text-white/90 text-sm">Advanced CCTV surveillance and alarm response</p>
                  </div>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <img
                  src="/construction-site-security.jpg"
                  alt="Construction Site Security"
                  className="w-full h-[300px] object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Site Protection</h3>
                    <p className="text-white/90 text-sm">Construction and industrial site security</p>
                  </div>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <img
                  src="/retail-security-guard.jpg"
                  alt="Retail Security Services"
                  className="w-full h-[300px] object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Retail Security</h3>
                    <p className="text-white/90 text-sm">Loss prevention and customer safety</p>
                  </div>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <img
                  src="/bodyguard-vip-protection.jpg"
                  alt="VIP Bodyguard Services"
                  className="w-full h-[300px] object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">VIP Protection</h3>
                    <p className="text-white/90 text-sm">Elite bodyguard and close protection services</p>
                  </div>
                </div>
              </div>

              <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <img
                  src="/security-guard-patrol.jpg"
                  alt="Mobile Patrol Services"
                  className="w-full h-[300px] object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Mobile Patrols</h3>
                    <p className="text-white/90 text-sm">Regular security patrols and rapid response</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" onClick={() => setQuoteCalculatorOpen(true)} className="font-semibold">
              <Calculator className="mr-2 w-5 h-5" />
              Calculate Your Quote
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src="/bodyguard-vip-protection.jpg"
                alt="Professional VIP Bodyguard Protection Services"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <Badge variant="secondary" className="mb-4 bg-primary/20 text-primary-foreground border-primary/30">
                Elite Protection
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">VIP & Executive Protection Services</h2>
              <p className="text-lg text-secondary-foreground/80 mb-6 leading-relaxed">
                Our elite bodyguards provide discreet, professional close protection for high-profile individuals,
                executives, and VIPs. With advanced training in threat assessment and risk mitigation, we ensure your
                safety in any environment.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Former law enforcement and military personnel</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Advanced defensive driving and tactical training</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Discreet protection for public and private events</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>24/7 availability for domestic and international assignments</span>
                </li>
              </ul>
              <Button
                size="lg"
                variant="secondary"
                onClick={() => scrollToSection("contact")}
                className="font-semibold bg-primary hover:bg-primary/90"
              >
                Request VIP Protection
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-32 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                About UCT Groups
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                10+ Years of Combined Security Excellence
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                UCT Groups is a leading provider of professional security services across Australia. Our team of
                licensed and highly trained security personnel brings decades of combined experience in protecting
                people, property, and assets.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We specialize in comprehensive risk assessment, threat mitigation, and emergency response. Our
                commitment to excellence and compliance with Australian security regulations ensures your complete peace
                of mind.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-foreground mb-1">Fully Licensed & Insured</div>
                    <div className="text-muted-foreground">
                      All personnel hold current security licenses and comprehensive insurance coverage
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-foreground mb-1">Regulatory Compliance</div>
                    <div className="text-muted-foreground">
                      Adherence to NSW Security Industry Act and Australian Standards
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-foreground mb-1">Advanced Training</div>
                    <div className="text-muted-foreground">
                      Ongoing professional development in security protocols and emergency response
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-foreground mb-1">24/7 Availability</div>
                    <div className="text-muted-foreground">Round-the-clock emergency response and support services</div>
                  </div>
                </div>
              </div>

              <Button size="lg" onClick={() => scrollToSection("contact")} className="font-semibold">
                Contact Us Today
              </Button>
            </div>

            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted shadow-2xl">
                <img
                  src="/security-guard-patrol.jpg"
                  alt="Professional Security Guard on Patrol"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-xl border border-border">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">500+</div>
                    <div className="text-sm text-muted-foreground">Satisfied Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Our Team in Action
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Professional Security Personnel
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Highly trained, licensed professionals protecting what matters most
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img
                src="/event-security-crowd.jpg"
                alt="Event Security and Crowd Control"
                className="w-full h-[300px] object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Event Security</h3>
                  <p className="text-white/90 text-sm">Professional crowd management and event protection</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img
                src="/cctv-monitoring-room.jpg"
                alt="CCTV Monitoring and Surveillance"
                className="w-full h-[300px] object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">24/7 Monitoring</h3>
                  <p className="text-white/90 text-sm">Advanced CCTV surveillance and alarm response</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img
                src="/construction-site-security.jpg"
                alt="Construction Site Security"
                className="w-full h-[300px] object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Site Protection</h3>
                  <p className="text-white/90 text-sm">Construction and industrial site security</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img
                src="/retail-security-guard.jpg"
                alt="Retail Security Services"
                className="w-full h-[300px] object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Retail Security</h3>
                  <p className="text-white/90 text-sm">Loss prevention and customer safety</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img
                src="/bodyguard-vip-protection.jpg"
                alt="VIP Bodyguard Services"
                className="w-full h-[300px] object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">VIP Protection</h3>
                  <p className="text-white/90 text-sm">Elite bodyguard and close protection services</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <img
                src="/security-guard-patrol.jpg"
                alt="Mobile Patrol Services"
                className="w-full h-[300px] object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Mobile Patrols</h3>
                  <p className="text-white/90 text-sm">Regular security patrols and rapid response</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20 md:py-32 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Industries We Serve
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4 text-balance">Industries We Served</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              Tailored security solutions for diverse industries with sector-specific expertise and compliance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {industries.map((industry, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border hover:border-primary/50 group"
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={industry.image || "/placeholder.svg"}
                    alt={industry.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <div className="w-10 h-10 bg-primary/90 rounded-lg flex items-center justify-center">
                      <industry.icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                  </div>
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{industry.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 md:py-32 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Client Success Stories
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Trusted by Leading Organizations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
              See what our clients say about our professional security services and commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.company}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <BlogPreview />

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Badge variant="outline" className="mb-4">
                Get In Touch
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                Request Your Free Security Assessment
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Contact us today for a comprehensive risk assessment and customized security solution. Our team is
                available 24/7 for emergency response and consultations.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">Phone</div>
                    <a href="tel:1300129456" className="text-muted-foreground hover:text-primary transition-colors">
                      1300 129 456 (1300 828 476)
                    </a>
                    <div className="text-sm text-destructive font-semibold mt-1">24/7 Emergency Line</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">Email</div>
                    <a
                      href="mailto:info@uctgroups.com.au"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      info@uctgroups.com.au
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">Business Hours</div>
                    <div className="text-muted-foreground">Monday - Friday: 8:00 AM - 6:00 PM</div>
                    <div className="text-muted-foreground">Emergency Services: 24/7</div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">Service Area</div>
                    <div className="text-muted-foreground">Sydney Metropolitan Area</div>
                    <div className="text-muted-foreground">NSW & Australia-wide coverage available</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-primary/5 rounded-xl border border-primary/20">
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-foreground mb-2">Licensed & Insured</div>
                    <div className="text-sm text-muted-foreground leading-relaxed">
                      All UCT Groups personnel are fully licensed under the NSW Security Industry Act and carry
                      comprehensive insurance coverage. We maintain strict compliance with Australian security
                      regulations and industry standards.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src="/uct-logo.png" alt="UCT Groups" className="h-12 w-auto" />
              </div>
              <p className="text-secondary-foreground/80 text-sm leading-relaxed">
                Professional security services across Australia. Licensed, trained, and ready to protect what matters
                most.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-secondary-foreground/80">
                <li>
                  <Link href="/services" className="hover:text-secondary-foreground transition-colors">
                    VIP Protection
                  </Link>
                </li>
                <li>
                  <Link href="/services#static-guards" className="hover:text-secondary-foreground transition-colors">
                    Static Guards
                  </Link>
                </li>
                <li>
                  <Link href="/services#mobile-patrols" className="hover:text-secondary-foreground transition-colors">
                    Mobile Patrols
                  </Link>
                </li>
                <li>
                  <Link href="/services#cctv" className="hover:text-secondary-foreground transition-colors">
                    CCTV Systems
                  </Link>
                </li>
                <li>
                  <Link href="/services#event-security" className="hover:text-secondary-foreground transition-colors">
                    Event Security
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-secondary-foreground/80">
                <li>
                  <Link href="/about" className="hover:text-secondary-foreground transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-secondary-foreground transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/licensing" className="hover:text-secondary-foreground transition-colors">
                    Licensing
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:text-secondary-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className="hover:text-secondary-foreground transition-colors">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-sm text-secondary-foreground/80">
                <li>1300 129 456</li>
                <li>info@uctgroups.com.au</li>
                <li>Sydney, NSW</li>
                <li className="pt-2">
                  <div className="font-semibold text-secondary-foreground">24/7 Emergency Response</div>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-secondary-foreground/20 pt-8 text-center text-sm text-secondary-foreground/80">
            <p>
              &copy; {new Date().getFullYear()} UCT Groups. All rights reserved. Licensed Security Provider - NSW,
              Australia
            </p>
          </div>
        </div>
      </footer>

      {/* Modals and Widgets */}
      <ServiceRequestModal
        open={serviceModalOpen}
        onOpenChange={setServiceModalOpen}
        selectedService={selectedService}
      />
      <QuoteCalculator open={quoteCalculatorOpen} onOpenChange={setQuoteCalculatorOpen} />
      <LiveChatWidget />
    </div>
  )
}

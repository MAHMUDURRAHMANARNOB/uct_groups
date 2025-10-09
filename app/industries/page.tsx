"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Building2,
  ShoppingBag,
  Factory,
  Calendar,
  Home,
  CheckCircle2,
  ArrowRight,
  Shield,
  Users,
  Camera,
  Bell,
} from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import LiveChatWidget from "@/components/live-chat-widget"
import Link from "next/link"

export default function IndustriesPage() {
  const industries = [
    {
      icon: Building2,
      name: "Corporate & Commercial",
      description: "Comprehensive security solutions for office buildings, business parks, and corporate headquarters.",
      image: "/security-guard-patrol.jpg",
      services: [
        "Access Control & Visitor Management",
        "24/7 Security Personnel",
        "CCTV Surveillance Systems",
        "After-Hours Patrols",
        "Executive Protection",
        "Emergency Response Planning",
        "Security Risk Assessments",
        "Parking & Perimeter Security",
      ],
      challenges: [
        "Protecting sensitive business information",
        "Managing employee and visitor access",
        "Preventing corporate espionage",
        "Ensuring executive safety",
      ],
    },
    {
      icon: ShoppingBag,
      name: "Retail & Shopping Centers",
      description:
        "Specialized retail security protecting customers, staff, and merchandise from theft and security threats.",
      image: "/retail-security-guard.jpg",
      services: [
        "Loss Prevention Programs",
        "Customer Safety Management",
        "Theft Deterrence & Detection",
        "CCTV Monitoring",
        "Emergency Evacuation Procedures",
        "Conflict Resolution",
        "Cash Handling Security",
        "Opening & Closing Procedures",
      ],
      challenges: [
        "Reducing shrinkage and theft",
        "Managing shoplifting incidents",
        "Ensuring customer safety",
        "Handling aggressive customers",
      ],
    },
    {
      icon: Factory,
      name: "Construction & Industrial",
      description:
        "Robust security for construction sites, industrial facilities, and infrastructure projects across Australia.",
      image: "/construction-site-security.jpg",
      services: [
        "Site Access Control",
        "Equipment & Material Protection",
        "After-Hours Security",
        "Mobile Patrols",
        "WHS Compliance Support",
        "Theft & Vandalism Prevention",
        "Contractor Management",
        "Site Inspections & Reporting",
      ],
      challenges: [
        "Preventing equipment theft",
        "Securing valuable materials",
        "Managing unauthorized access",
        "Compliance with WHS regulations",
      ],
    },
    {
      icon: Calendar,
      name: "Events & Entertainment",
      description:
        "Professional event security and crowd management for concerts, festivals, conferences, and public gatherings.",
      image: "/event-security-crowd.jpg",
      services: [
        "Crowd Control & Management",
        "VIP & Backstage Security",
        "Ticket & Access Control",
        "Emergency Evacuation Planning",
        "Alcohol Management",
        "De-escalation Services",
        "Event Risk Assessment",
        "NSW Event Compliance",
      ],
      challenges: [
        "Managing large crowds safely",
        "Preventing gate crashers",
        "Handling intoxicated patrons",
        "Emergency response coordination",
      ],
    },
    {
      icon: Home,
      name: "Residential & Strata",
      description: "Dedicated security services for apartment complexes, gated communities, and residential estates.",
      image: "/security-guard-patrol.jpg",
      services: [
        "24/7 Concierge Security",
        "Access Control Systems",
        "Visitor Management",
        "Parking Enforcement",
        "Mobile Patrols",
        "CCTV Monitoring",
        "Package Management",
        "Emergency Response",
      ],
      challenges: [
        "Controlling resident and visitor access",
        "Preventing unauthorized entry",
        "Managing parking violations",
        "Ensuring resident safety",
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/5" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">
              Industries We Serve
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
              Specialized Security Across Multiple Sectors
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-balance">
              Tailored security solutions with sector-specific expertise, compliance, and industry best practices.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Overview */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="space-y-32">
            {industries.map((industry, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                    <industry.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{industry.name}</h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{industry.description}</p>

                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-foreground mb-4">Our Services</h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {industry.services.map((service, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 bg-accent/50 rounded-xl mb-8">
                    <h3 className="text-lg font-bold text-foreground mb-3">Industry Challenges We Solve</h3>
                    <ul className="space-y-2">
                      {industry.challenges.map((challenge, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Shield className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href="/contact">
                    <Button size="lg" className="font-semibold">
                      Get Industry-Specific Quote
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </div>

                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={industry.image || "/placeholder.svg"}
                      alt={industry.name}
                      className="w-full h-[500px] object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Industry Expertise Matters */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Why Industry Expertise Matters</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sector-specific knowledge ensures effective security solutions tailored to your unique challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Compliance Knowledge</h3>
              <p className="text-sm text-muted-foreground">
                Understanding of industry-specific regulations and compliance requirements
              </p>
            </Card>

            <Card className="p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Trained Personnel</h3>
              <p className="text-sm text-muted-foreground">
                Security staff with sector-specific training and experience
              </p>
            </Card>

            <Card className="p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Camera className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Tailored Solutions</h3>
              <p className="text-sm text-muted-foreground">
                Security strategies designed for your industry's unique challenges
              </p>
            </Card>

            <Card className="p-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Bell className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Risk Mitigation</h3>
              <p className="text-sm text-muted-foreground">
                Proactive identification and management of sector-specific risks
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Protect Your Industry with Expert Security</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Get a customized security solution designed specifically for your industry's unique needs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="font-semibold">
                Request Free Consultation
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="font-semibold bg-transparent border-white text-white hover:bg-white hover:text-primary"
              >
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <LiveChatWidget />
    </div>
  )
}

"use client"

import { useState } from "react"
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
  CheckCircle2,
  ArrowRight,
  Phone,
  Clock,
  Award,
} from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ServiceRequestModal from "@/components/service-request-modal"
import QuoteCalculator from "@/components/quote-calculator"
import LiveChatWidget from "@/components/live-chat-widget"
import Link from "next/link"

export default function ServicesPage() {
  const [serviceModalOpen, setServiceModalOpen] = useState(false)
  const [quoteCalculatorOpen, setQuoteCalculatorOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<string | null>(null)

  const services = [
    {
      icon: Shield,
      title: "VIP Bodyguards & Close Protection",
      description:
        "Elite personal protection services for high-profile individuals, executives, and VIPs. Our trained operatives provide discreet, professional security with risk assessment and threat mitigation.",
      features: [
        "Risk Assessment & Threat Analysis",
        "Discreet Protection Services",
        "Former Law Enforcement Personnel",
        "Advanced Defensive Driving",
        "Tactical Training & Certification",
        "24/7 Availability",
        "Domestic & International Coverage",
        "Emergency Response Protocols",
      ],
      image: "/bodyguard-vip-protection.jpg",
    },
    {
      icon: Users,
      title: "Static Security Guards",
      description:
        "Professional on-site security personnel for commercial, retail, and residential properties. Licensed guards providing access control, surveillance, and incident response 24/7.",
      features: [
        "Access Control & Visitor Management",
        "24/7 On-Site Presence",
        "Incident Response & Reporting",
        "CCTV Monitoring",
        "Patrol & Surveillance",
        "Emergency Procedures",
        "Customer Service Excellence",
        "Uniformed Professional Guards",
      ],
      image: "/security-guard-patrol.jpg",
    },
    {
      icon: Car,
      title: "Mobile Patrol Services",
      description:
        "Regular security patrols across multiple sites with GPS tracking and detailed reporting. Rapid response to alarms and security breaches across Sydney metropolitan area.",
      features: [
        "GPS Tracked Vehicles",
        "Multi-Site Coverage",
        "Rapid Response Teams",
        "Detailed Patrol Reports",
        "Lock-Up & Unlock Services",
        "Alarm Response",
        "Property Inspections",
        "Customized Patrol Schedules",
      ],
      image: "/security-guard-patrol.jpg",
    },
    {
      icon: ShoppingBag,
      title: "Retail Security",
      description:
        "Specialized retail loss prevention and customer safety services. Trained personnel in theft deterrence, conflict resolution, and emergency procedures compliant with Australian retail standards.",
      features: [
        "Loss Prevention Strategies",
        "Customer Safety Management",
        "Theft Deterrence",
        "Conflict Resolution",
        "Emergency Evacuation",
        "CCTV Monitoring",
        "Incident Documentation",
        "Staff Training Support",
      ],
      image: "/retail-security-guard.jpg",
    },
    {
      icon: UserCheck,
      title: "Crowd Control & Event Security",
      description:
        "Professional crowd management for events, venues, and public gatherings. Licensed personnel trained in de-escalation, emergency evacuation, and compliance with NSW event regulations.",
      features: [
        "Event Risk Assessment",
        "Crowd Management",
        "De-escalation Techniques",
        "Emergency Evacuation Plans",
        "VIP & Backstage Security",
        "Ticket & Access Control",
        "Alcohol Management",
        "NSW Event Compliance",
      ],
      image: "/event-security-crowd.jpg",
    },
    {
      icon: Camera,
      title: "CCTV Installation & Monitoring",
      description:
        "State-of-the-art surveillance systems with 24/7 monitoring. HD cameras, remote access, and intelligent analytics for comprehensive property protection and evidence collection.",
      features: [
        "HD Surveillance Systems",
        "24/7 Live Monitoring",
        "Remote Access & Control",
        "Intelligent Analytics",
        "Motion Detection",
        "Night Vision Capability",
        "Cloud Storage Solutions",
        "Evidence Collection",
      ],
      image: "/cctv-monitoring-room.jpg",
    },
    {
      icon: Bell,
      title: "Alarm Response Services",
      description:
        "Immediate response to security alarms with trained personnel dispatched within minutes. Verification, investigation, and coordination with emergency services as required.",
      features: [
        "Immediate Dispatch",
        "Alarm Verification",
        "On-Site Investigation",
        "Emergency Services Coordination",
        "Detailed Incident Reports",
        "False Alarm Reduction",
        "24/7 Response Team",
        "Multi-Site Coverage",
      ],
      image: "/security-guard-patrol.jpg",
    },
    {
      icon: HardHat,
      title: "Construction Site Security",
      description:
        "Specialized security for construction sites protecting equipment, materials, and work areas. Prevention of theft, vandalism, and unauthorized access with compliance to WHS regulations.",
      features: [
        "Asset Protection",
        "Theft Prevention",
        "Vandalism Deterrence",
        "Access Control",
        "WHS Compliance",
        "Site Inspections",
        "Equipment Monitoring",
        "After-Hours Security",
      ],
      image: "/construction-site-security.jpg",
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
              Our Services
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
              Comprehensive Security Solutions for Every Need
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-balance">
              Professional, licensed security services tailored to protect your people, property, and assets across
              Australia.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" onClick={() => setQuoteCalculatorOpen(true)} className="font-semibold group">
                Get Free Quote
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="font-semibold bg-transparent">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{service.title}</h2>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

                  <div className="grid sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <Button
                      size="lg"
                      onClick={() => {
                        setSelectedService(service.title)
                        setServiceModalOpen(true)
                      }}
                      className="font-semibold"
                    >
                      Request This Service
                    </Button>
                    <Button size="lg" variant="outline" onClick={() => setQuoteCalculatorOpen(true)}>
                      Get Quote
                    </Button>
                  </div>
                </div>

                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-[500px] object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Why Choose UCT Groups?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Industry-leading security services backed by experience, training, and commitment to excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Licensed & Certified</h3>
              <p className="text-muted-foreground text-sm">
                All personnel fully licensed under NSW Security Industry Act
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">24/7 Availability</h3>
              <p className="text-muted-foreground text-sm">Round-the-clock emergency response and support</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">30+ Years Experience</h3>
              <p className="text-muted-foreground text-sm">Combined expertise across all security sectors</p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Rapid Response</h3>
              <p className="text-muted-foreground text-sm">Immediate dispatch across Sydney metropolitan area</p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Secure Your Property?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Contact us today for a free security assessment and customized protection plan.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="font-semibold">
                Get Free Assessment
              </Button>
            </Link>
            <a href="tel:1300828476">
              <Button
                size="lg"
                variant="outline"
                className="font-semibold bg-transparent border-white text-white hover:bg-white hover:text-primary"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call 1300 UCT GRP
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
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

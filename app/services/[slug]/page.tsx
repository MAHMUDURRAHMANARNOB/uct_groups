"use client"

import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
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
  ArrowLeft,
  Phone,
  Mail,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import ServiceRequestModal from "@/components/service-request-modal"

const servicesData = {
  "vip-bodyguards": {
    icon: Shield,
    title: "VIP Bodyguards & Close Protection",
    image: "/bodyguard-vip-protection.jpg",
    description:
      "Elite personal protection services for high-profile individuals, executives, and VIPs. Our trained operatives provide discreet, professional security with risk assessment and threat mitigation.",
    fullDescription:
      "UCT Groups provides world-class VIP protection and close protection services for high-profile individuals, corporate executives, celebrities, and dignitaries. Our elite bodyguards are former law enforcement and military personnel with extensive training in threat assessment, risk mitigation, and defensive tactics. We offer discreet, professional protection tailored to your specific security needs, whether for daily routines, special events, or international travel.",
    features: [
      "Risk Assessment & Threat Analysis",
      "Discreet Personal Protection",
      "Advanced Defensive Driving",
      "Tactical Training & Response",
      "Event Security Planning",
      "Travel Security Coordination",
      "24/7 Availability",
      "Domestic & International Coverage",
    ],
    benefits: [
      "Former law enforcement and military personnel",
      "Comprehensive background checks and vetting",
      "Advanced training in close protection techniques",
      "Discreet and professional demeanor",
      "Customized security plans for each client",
      "Coordination with local law enforcement when needed",
    ],
  },
  "static-security-guards": {
    icon: Users,
    title: "Static Security Guards",
    image: "/security-guard-patrol.jpg",
    description:
      "Professional on-site security personnel for commercial, retail, and residential properties. Licensed guards providing access control, surveillance, and incident response 24/7.",
    fullDescription:
      "Our static security guards provide a visible deterrent and professional security presence for your property. All guards are fully licensed, trained, and experienced in access control, surveillance, incident response, and emergency procedures. We provide 24/7 coverage for commercial buildings, retail locations, residential complexes, and industrial facilities across Sydney and NSW.",
    features: [
      "Access Control & Visitor Management",
      "24/7 On-Site Presence",
      "Incident Response & Reporting",
      "CCTV Monitoring",
      "Patrol & Perimeter Checks",
      "Emergency Response Coordination",
      "Customer Service Excellence",
      "Detailed Shift Reports",
    ],
    benefits: [
      "Fully licensed and insured personnel",
      "Comprehensive training in security protocols",
      "Professional appearance and demeanor",
      "Excellent communication skills",
      "Compliance with Australian security regulations",
      "Flexible scheduling to meet your needs",
    ],
  },
  "mobile-patrol-services": {
    icon: Car,
    title: "Mobile Patrol Services",
    image: "/security-guard-patrol.jpg",
    description:
      "Regular security patrols across multiple sites with GPS tracking and detailed reporting. Rapid response to alarms and security breaches across Sydney metropolitan area.",
    fullDescription:
      "UCT Groups mobile patrol services provide cost-effective security coverage across multiple locations. Our marked patrol vehicles conduct regular inspections of your property, checking for security breaches, safety hazards, and unauthorized access. With GPS tracking and detailed reporting, you'll have complete visibility of our patrol activities and any incidents detected.",
    features: [
      "GPS-Tracked Patrol Vehicles",
      "Multi-Site Coverage",
      "Rapid Alarm Response",
      "Property Inspections",
      "Lock-Up & Opening Services",
      "Detailed Patrol Reports",
      "Random Patrol Timing",
      "Emergency Response Capability",
    ],
    benefits: [
      "Cost-effective security for multiple locations",
      "Visible deterrent to criminal activity",
      "Flexible patrol schedules",
      "Immediate response to alarms and incidents",
      "Comprehensive reporting and documentation",
      "Coverage across Sydney metropolitan area",
    ],
  },
  "retail-security": {
    icon: ShoppingBag,
    title: "Retail Security",
    image: "/retail-security-guard.jpg",
    description:
      "Specialized retail loss prevention and customer safety services. Trained personnel in theft deterrence, conflict resolution, and emergency procedures compliant with Australian retail standards.",
    fullDescription:
      "Our retail security specialists understand the unique challenges of the retail environment. We provide loss prevention, customer safety, and conflict resolution services tailored to shopping centers, department stores, and retail complexes. Our guards are trained in theft deterrence, emergency evacuation, and providing excellent customer service while maintaining security.",
    features: [
      "Loss Prevention & Theft Deterrence",
      "Customer Safety & Assistance",
      "Conflict Resolution",
      "Emergency Evacuation Procedures",
      "CCTV Monitoring",
      "Incident Documentation",
      "Shoplifting Prevention",
      "Professional Customer Interaction",
    ],
    benefits: [
      "Specialized retail security training",
      "Reduction in theft and shrinkage",
      "Enhanced customer safety and confidence",
      "Professional appearance and demeanor",
      "Compliance with retail industry standards",
      "Flexible coverage for peak shopping periods",
    ],
  },
  "crowd-control": {
    icon: UserCheck,
    title: "Crowd Control & Event Security",
    image: "/event-security-crowd.jpg",
    description:
      "Professional crowd management for events, venues, and public gatherings. Licensed personnel trained in de-escalation, emergency evacuation, and compliance with NSW event regulations.",
    fullDescription:
      "UCT Groups provides comprehensive event security and crowd control services for concerts, festivals, sporting events, conferences, and public gatherings. Our licensed crowd controllers are trained in de-escalation techniques, emergency response, and compliance with NSW event regulations. We work closely with event organizers, venue management, and local authorities to ensure safe and successful events.",
    features: [
      "Event Security Planning",
      "Crowd Management & Control",
      "Access Control & Ticketing",
      "De-escalation Techniques",
      "Emergency Evacuation Procedures",
      "VIP & Backstage Security",
      "Alcohol Management",
      "Incident Response & Reporting",
    ],
    benefits: [
      "Licensed crowd controllers",
      "Comprehensive event security planning",
      "Coordination with emergency services",
      "Professional and courteous staff",
      "Compliance with NSW event regulations",
      "Scalable security for events of any size",
    ],
  },
  "cctv-monitoring": {
    icon: Camera,
    title: "CCTV Installation & Monitoring",
    image: "/cctv-monitoring-room.jpg",
    description:
      "State-of-the-art surveillance systems with 24/7 monitoring. HD cameras, remote access, and intelligent analytics for comprehensive property protection and evidence collection.",
    fullDescription:
      "Our CCTV installation and monitoring services provide comprehensive surveillance coverage for your property. We install state-of-the-art HD camera systems with remote access, intelligent analytics, and 24/7 monitoring capabilities. Our monitoring center provides real-time surveillance and immediate response to security incidents, ensuring your property is protected around the clock.",
    features: [
      "HD Camera Installation",
      "24/7 Live Monitoring",
      "Remote Access & Viewing",
      "Intelligent Video Analytics",
      "Motion Detection & Alerts",
      "Evidence Collection & Storage",
      "Integration with Alarm Systems",
      "Professional System Design",
    ],
    benefits: [
      "Comprehensive property surveillance",
      "Deterrent to criminal activity",
      "Evidence collection for investigations",
      "Remote monitoring from anywhere",
      "Scalable systems for any property size",
      "Professional installation and support",
    ],
  },
  "alarm-response": {
    icon: Bell,
    title: "Alarm Response Services",
    image: "/security-team-briefing.jpg",
    description:
      "Immediate response to security alarms with trained personnel dispatched within minutes. Verification, investigation, and coordination with emergency services as required.",
    fullDescription:
      "UCT Groups provides rapid alarm response services across Sydney metropolitan area. When your security alarm is triggered, our trained personnel are dispatched immediately to investigate and respond. We verify the alarm, secure your property, and coordinate with emergency services if required. Our alarm response service provides peace of mind knowing that any security breach will be addressed promptly and professionally.",
    features: [
      "Immediate Dispatch",
      "Alarm Verification",
      "Property Investigation",
      "Emergency Services Coordination",
      "Property Securing",
      "Incident Documentation",
      "24/7 Availability",
      "GPS-Tracked Response Vehicles",
    ],
    benefits: [
      "Rapid response to security alarms",
      "Professional investigation and verification",
      "Coordination with police and emergency services",
      "Detailed incident reporting",
      "Coverage across Sydney metropolitan area",
      "Peace of mind for property owners",
    ],
  },
  "construction-security": {
    icon: HardHat,
    title: "Construction Site Security",
    image: "/construction-site-security.jpg",
    description:
      "Specialized security for construction sites protecting equipment, materials, and work areas. Prevention of theft, vandalism, and unauthorized access with compliance to WHS regulations.",
    fullDescription:
      "Construction sites face unique security challenges including theft of equipment and materials, vandalism, and unauthorized access. UCT Groups provides specialized construction site security services to protect your valuable assets and ensure compliance with WHS regulations. Our guards are trained in construction site safety and security protocols, providing both static and mobile patrol coverage tailored to your project needs.",
    features: [
      "Asset Protection",
      "Theft & Vandalism Prevention",
      "Access Control",
      "Site Perimeter Security",
      "Equipment & Material Protection",
      "WHS Compliance",
      "Incident Reporting",
      "24/7 Coverage Available",
    ],
    benefits: [
      "Specialized construction security training",
      "Reduction in theft and vandalism",
      "WHS compliance and safety",
      "Protection of valuable equipment and materials",
      "Flexible security solutions for project duration",
      "Experienced in construction site environments",
    ],
  },
}

export default function ServiceDetailPage() {
  const params = useParams()
  const slug = params.slug as string
  const service = servicesData[slug as keyof typeof servicesData]
  const [modalOpen, setModalOpen] = useState(false)

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
          <Link href="/services">
            <Button>Back to Services</Button>
          </Link>
        </div>
      </div>
    )
  }

  const ServiceIcon = service.icon

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-secondary text-secondary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src={service.image || "/placeholder.svg"} alt={service.title} className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/95 to-secondary/80" />

        <div className="container mx-auto px-4 relative">
          <Link href="/">
            <Button variant="ghost" className="mb-6 text-secondary-foreground hover:text-primary">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Back to Home
            </Button>
          </Link>

          <div className="max-w-4xl">
            <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center mb-6">
              <ServiceIcon className="w-8 h-8 text-primary-foreground" />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">{service.title}</h1>
            <p className="text-xl text-secondary-foreground/90 leading-relaxed mb-8">{service.description}</p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={() => setModalOpen(true)} className="font-semibold">
                Submit Service Request
              </Button>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="font-semibold w-full sm:w-auto bg-transparent">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Service Overview</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">{service.fullDescription}</p>

              <div className="p-6 bg-primary/5 rounded-xl border border-primary/20">
                <div className="flex items-start gap-3">
                  <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-foreground mb-2">Licensed & Compliant</div>
                    <div className="text-sm text-muted-foreground leading-relaxed">
                      All services are fully licensed and compliant with NSW Security Industry Act and Australian
                      security regulations.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                className="w-full h-[500px] object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Key Features</h3>
              <div className="space-y-3">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Benefits</h3>
              <div className="space-y-3">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <Card className="p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and customized security solution for your needs.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <Button size="lg" onClick={() => setModalOpen(true)} className="font-semibold">
                Submit Service Request
              </Button>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="font-semibold bg-transparent">
                  Contact Us
                </Button>
              </Link>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-8 border-t border-border">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <div className="text-left">
                  <div className="text-sm text-muted-foreground">24/7 Emergency</div>
                  <a href="tel:1300828476" className="text-lg font-bold text-foreground hover:text-primary">
                    1300 UCT GRP
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <div className="text-left">
                  <div className="text-sm text-muted-foreground">Email Us</div>
                  <a
                    href="mailto:info@uctgroups.com.au"
                    className="text-lg font-bold text-foreground hover:text-primary"
                  >
                    info@uctgroups.com.au
                  </a>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <ServiceRequestModal open={modalOpen} onOpenChange={setModalOpen} selectedService={service.title} />
    </div>
  )
}

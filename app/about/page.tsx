"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Award, Users, CheckCircle2, Target, Eye, Heart, ArrowRight } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import LiveChatWidget from "@/components/live-chat-widget"
import Link from "next/link"

export default function AboutPage() {
  const values = [
    {
      icon: Shield,
      title: "Integrity",
      description: "We uphold the highest ethical standards in all our operations and interactions.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Commitment to delivering superior security services through continuous improvement.",
    },
    {
      icon: Users,
      title: "Professionalism",
      description: "Trained, licensed personnel who represent the gold standard in security services.",
    },
    {
      icon: Heart,
      title: "Client Focus",
      description: "Your safety and peace of mind are at the center of everything we do.",
    },
  ]

  const stats = [
    { value: "30+", label: "Years Combined Experience" },
    { value: "500+", label: "Satisfied Clients" },
    { value: "24/7", label: "Emergency Response" },
    { value: "100%", label: "Licensed & Insured" },
  ]

  const certifications = [
    "NSW Security Industry License",
    "First Aid & CPR Certified",
    "Crowd Control Certification",
    "Fire Safety Training",
    "WHS Compliance",
    "Advanced Security Training",
    "Defensive Tactics Certification",
    "Emergency Response Training",
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
              About UCT Groups
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
              Protecting Australia for Over 30 Years
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-balance">
              A trusted leader in professional security services, committed to excellence, integrity, and your complete
              peace of mind.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="mb-4">
                Our Story
              </Badge>
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Built on Experience, Driven by Excellence
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                UCT Groups was founded with a simple mission: to provide Australia with the highest quality security
                services backed by professionalism, integrity, and unwavering commitment to client safety.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                With over 30 years of combined experience in the security industry, our team brings together expertise
                from law enforcement, military, and private security sectors. We've grown from a small local operation
                to one of Sydney's most trusted security providers.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Today, we protect hundreds of clients across corporate, retail, construction, events, and residential
                sectors. Our success is built on the trust our clients place in us and the dedication of our highly
                trained security personnel.
              </p>
              <Link href="/contact">
                <Button size="lg" className="font-semibold">
                  Work With Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/security-team-briefing.jpg"
                  alt="UCT Groups Security Team"
                  className="w-full h-[600px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To deliver exceptional security services that protect people, property, and assets through professional
                excellence, advanced training, and unwavering commitment to client safety. We strive to be Australia's
                most trusted security partner.
              </p>
            </Card>

            <Card className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To set the standard for professional security services across Australia, recognized for our integrity,
                innovation, and commitment to excellence. We envision a safer community through proactive security
                solutions and exceptional service delivery.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Our Values
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">What Drives Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every decision we make and every service we deliver.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Training */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/bodyguard-vip-protection.jpg"
                  alt="Professional Security Training"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>

            <div>
              <Badge variant="outline" className="mb-4">
                Certifications & Training
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Fully Licensed & Highly Trained Personnel
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Every member of the UCT Groups team holds current security licenses and undergoes rigorous training to
                ensure the highest standards of professional security service delivery.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{cert}</span>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-primary/5 rounded-xl border border-primary/20">
                <h4 className="font-bold text-foreground mb-2">Regulatory Compliance</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  UCT Groups maintains full compliance with the NSW Security Industry Act, Australian Standards for
                  Security Services, and all relevant workplace health and safety regulations. Our commitment to
                  regulatory excellence ensures your complete peace of mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Gallery */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Our Team
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Professional Security Experts You Can Trust
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Highly trained, licensed professionals dedicated to your safety and security.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img
                src="/security-guard-patrol.jpg"
                alt="Security Professional"
                className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Static Security Guards</h3>
                  <p className="text-white/90 text-sm">Professional on-site protection</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img
                src="/bodyguard-vip-protection.jpg"
                alt="VIP Protection Specialist"
                className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">VIP Protection Specialists</h3>
                  <p className="text-white/90 text-sm">Elite close protection services</p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-xl shadow-lg">
              <img
                src="/event-security-crowd.jpg"
                alt="Event Security Team"
                className="w-full h-[400px] object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Event Security Teams</h3>
                  <p className="text-white/90 text-sm">Expert crowd management</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Experience the UCT Groups Difference</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Partner with Australia's trusted security professionals. Contact us today for a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="font-semibold">
                Get Started Today
              </Button>
            </Link>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="font-semibold bg-transparent border-white text-white hover:bg-white hover:text-primary"
              >
                View Our Services
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

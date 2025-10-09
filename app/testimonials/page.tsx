"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Quote, Building2, ShoppingBag, Calendar, Factory, ArrowRight } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import LiveChatWidget from "@/components/live-chat-widget"
import Link from "next/link"

export default function TestimonialsPage() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      company: "Westfield Shopping Centre",
      role: "Security Manager",
      industry: "Retail",
      icon: ShoppingBag,
      content:
        "UCT Groups has been our trusted security partner for over 5 years. Their professionalism and rapid response capabilities are unmatched. The team is always well-presented and handles situations with expertise. We've seen a significant reduction in theft incidents since partnering with them.",
      rating: 5,
      image: "/retail-security-guard.jpg",
    },
    {
      name: "David Chen",
      company: "Lendlease Construction",
      role: "Project Director",
      industry: "Construction",
      icon: Factory,
      content:
        "We've used UCT Groups for multiple construction sites across Sydney. Their understanding of WHS compliance and proactive approach to site security has prevented numerous incidents. The mobile patrol service is excellent, and their reporting is detailed and timely. Highly recommended for any construction project.",
      rating: 5,
      image: "/construction-site-security.jpg",
    },
    {
      name: "Emma Thompson",
      company: "Crown Events Group",
      role: "Operations Manager",
      industry: "Events",
      icon: Calendar,
      content:
        "For large-scale events, UCT Groups is our go-to provider. Their crowd control expertise and ability to manage complex situations professionally gives us complete confidence. They've handled events with 10,000+ attendees flawlessly. The team's de-escalation skills are exceptional.",
      rating: 5,
      image: "/event-security-crowd.jpg",
    },
    {
      name: "Michael Roberts",
      company: "Barangaroo Corporate Tower",
      role: "Facilities Manager",
      industry: "Corporate",
      icon: Building2,
      content:
        "The static security guards from UCT Groups are professional, courteous, and vigilant. They've become an integral part of our building's operations. Their access control procedures are thorough, and they handle visitor management with efficiency and professionalism.",
      rating: 5,
      image: "/security-guard-patrol.jpg",
    },
    {
      name: "Jennifer Lee",
      company: "Sydney Harbour Residences",
      role: "Strata Manager",
      industry: "Residential",
      icon: Building2,
      content:
        "Our residents feel much safer since UCT Groups took over our security services. The 24/7 concierge security is professional and friendly. They've successfully managed several security incidents with discretion and effectiveness. Excellent communication and reporting.",
      rating: 5,
      image: "/security-guard-patrol.jpg",
    },
    {
      name: "Anthony Patel",
      company: "Pitt Street Mall Retailers Association",
      role: "President",
      industry: "Retail",
      icon: ShoppingBag,
      content:
        "UCT Groups provides outstanding retail security services. Their loss prevention strategies have significantly reduced shrinkage across our member stores. The guards are well-trained in customer service while maintaining strong security presence. Professional and reliable.",
      rating: 5,
      image: "/retail-security-guard.jpg",
    },
  ]

  const stats = [
    { value: "500+", label: "Satisfied Clients" },
    { value: "98%", label: "Client Retention Rate" },
    { value: "4.9/5", label: "Average Rating" },
    { value: "30+", label: "Years Experience" },
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
              Client Success Stories
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
              Trusted by Leading Organizations Across Australia
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-balance">
              See what our clients say about our professional security services and commitment to excellence.
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

      {/* Testimonials Grid */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <Card className="p-8 relative">
                    <Quote className="w-12 h-12 text-primary/20 absolute top-6 right-6" />
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed italic">"{testimonial.content}"</p>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                        <testimonial.icon className="w-8 h-8 text-primary" />
                      </div>
                      <div>
                        <div className="font-bold text-foreground text-lg">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                        <div className="text-sm font-semibold text-primary">{testimonial.company}</div>
                      </div>
                    </div>
                    <Badge variant="outline" className="mt-4">
                      {testimonial.industry}
                    </Badge>
                  </Card>
                </div>

                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={`${testimonial.company} Security Services`}
                      className="w-full h-[400px] object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Why Clients Choose UCT Groups</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Consistent excellence across all security services and industries.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center">
              <div className="text-5xl font-bold text-primary mb-2">98%</div>
              <div className="text-lg font-semibold text-foreground mb-2">Client Retention</div>
              <p className="text-muted-foreground">
                Our clients stay with us year after year because of our consistent, reliable service delivery.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="text-5xl font-bold text-primary mb-2">24/7</div>
              <div className="text-lg font-semibold text-foreground mb-2">Emergency Response</div>
              <p className="text-muted-foreground">
                Round-the-clock availability ensures we're always there when you need us most.
              </p>
            </Card>

            <Card className="p-8 text-center">
              <div className="text-5xl font-bold text-primary mb-2">100%</div>
              <div className="text-lg font-semibold text-foreground mb-2">Licensed & Insured</div>
              <p className="text-muted-foreground">
                Full compliance with NSW Security Industry Act and comprehensive insurance coverage.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Join Our Satisfied Clients</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Experience the UCT Groups difference. Contact us today for a free security assessment.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="font-semibold">
                Get Free Assessment
                <ArrowRight className="ml-2 w-5 h-5" />
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

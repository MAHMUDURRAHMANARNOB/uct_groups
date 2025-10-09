"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, Clock, Building2, MapPin, Shield, ArrowRight } from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ContactForm from "@/components/contact-form"
import LiveChatWidget from "@/components/live-chat-widget"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/5" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-6">
              Get In Touch
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
              Request Your Free Security Assessment
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-balance">
              Contact us today for a comprehensive risk assessment and customized security solution. Our team is
              available 24/7 for emergency response and consultations.
            </p>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="py-6 bg-destructive/10 border-y border-destructive/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
            <div className="flex items-center gap-3">
              <Phone className="w-8 h-8 text-destructive animate-pulse" />
              <div>
                <div className="font-bold text-foreground text-lg">24/7 Emergency Security Response</div>
                <div className="text-sm text-muted-foreground">Immediate dispatch across Sydney metropolitan area</div>
              </div>
            </div>
            <a href="tel:1300828476" className="text-3xl font-bold text-destructive hover:underline">
              1300 UCT GRP
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Send Us a Message</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Fill out the form below and one of our security experts will contact you within 24 hours to discuss your
                specific needs.
              </p>
              <ContactForm />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Contact Information</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Reach out to us directly through any of the following channels. We're here to help 24/7.
              </p>

              <div className="space-y-6">
                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">Phone</div>
                      <a
                        href="tel:1300828476"
                        className="text-muted-foreground hover:text-primary transition-colors text-lg"
                      >
                        1300 UCT GRP (1300 828 476)
                      </a>
                      <div className="text-sm text-destructive font-semibold mt-1">24/7 Emergency Line</div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
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
                      <div className="text-sm text-muted-foreground mt-1">Response within 24 hours</div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">Business Hours</div>
                      <div className="text-muted-foreground">Monday - Friday: 8:00 AM - 6:00 PM</div>
                      <div className="text-muted-foreground">Saturday: 9:00 AM - 4:00 PM</div>
                      <div className="text-sm text-primary font-semibold mt-1">Emergency Services: 24/7</div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">Service Area</div>
                      <div className="text-muted-foreground">Sydney Metropolitan Area</div>
                      <div className="text-muted-foreground">NSW & Australia-wide coverage available</div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">Office Location</div>
                      <div className="text-muted-foreground">Sydney, New South Wales</div>
                      <div className="text-sm text-muted-foreground mt-1">By appointment only</div>
                    </div>
                  </div>
                </Card>
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
          </div>
        </div>
      </section>

      {/* Why Contact Us */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">What Happens Next?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our streamlined process ensures you get the security solution you need quickly and efficiently.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl font-bold text-primary">1</div>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Contact Us</h3>
              <p className="text-sm text-muted-foreground">
                Reach out via phone, email, or contact form with your security needs
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl font-bold text-primary">2</div>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Free Assessment</h3>
              <p className="text-sm text-muted-foreground">
                Our experts conduct a comprehensive security risk assessment
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl font-bold text-primary">3</div>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Custom Proposal</h3>
              <p className="text-sm text-muted-foreground">
                Receive a tailored security solution with transparent pricing
              </p>
            </Card>

            <Card className="p-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl font-bold text-primary">4</div>
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Implementation</h3>
              <p className="text-sm text-muted-foreground">
                Professional deployment of your security solution with ongoing support
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Enhance Your Security?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Don't wait for a security incident. Contact UCT Groups today and protect what matters most.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:1300828476">
              <Button size="lg" variant="secondary" className="font-semibold">
                <Phone className="mr-2 w-5 h-5" />
                Call 1300 UCT GRP
              </Button>
            </a>
            <Link href="/services">
              <Button
                size="lg"
                variant="outline"
                className="font-semibold bg-transparent border-white text-white hover:bg-white hover:text-primary"
              >
                View Our Services
                <ArrowRight className="ml-2 w-5 h-5" />
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

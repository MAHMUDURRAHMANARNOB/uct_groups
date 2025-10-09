"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Shield,
  Camera,
  Lock,
  AlertTriangle,
  Home,
  Building2,
  Users,
  Bell,
  Clock,
  ArrowRight,
  Calendar,
} from "lucide-react"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import LiveChatWidget from "@/components/live-chat-widget"
import Link from "next/link"

export default function BlogPage() {
  const articles = [
    {
      icon: Shield,
      title: "10 Essential Security Measures for Your Business",
      excerpt:
        "Protect your business with these fundamental security practices. From access control to employee training, learn the critical steps every business should implement to safeguard assets and personnel.",
      category: "Business Security",
      readTime: "5 min read",
      date: "March 15, 2024",
      image: "/security-guard-patrol.jpg",
      content: [
        "Implement comprehensive access control systems",
        "Install high-quality CCTV surveillance",
        "Conduct regular security audits",
        "Train employees on security protocols",
        "Establish visitor management procedures",
        "Secure all entry and exit points",
        "Implement alarm systems with monitoring",
        "Create emergency response plans",
        "Maintain proper lighting around premises",
        "Partner with professional security services",
      ],
    },
    {
      icon: Camera,
      title: "CCTV Systems: What You Need to Know in 2024",
      excerpt:
        "Modern CCTV technology has evolved significantly. Discover the latest features, installation best practices, and how to choose the right surveillance system for your property's specific needs.",
      category: "Technology",
      readTime: "7 min read",
      date: "March 10, 2024",
      image: "/cctv-monitoring-room.jpg",
      content: [
        "HD and 4K camera resolution benefits",
        "Cloud storage vs. local storage options",
        "Intelligent analytics and motion detection",
        "Night vision and low-light capabilities",
        "Remote access and mobile monitoring",
        "Integration with alarm systems",
        "Privacy compliance and regulations",
        "Maintenance and system updates",
        "Cost considerations and ROI",
        "Professional installation importance",
      ],
    },
    {
      icon: Lock,
      title: "Construction Site Security: Preventing Theft and Vandalism",
      excerpt:
        "Construction sites are prime targets for theft and vandalism. Learn proven strategies to protect your equipment, materials, and work areas while maintaining WHS compliance.",
      category: "Construction",
      readTime: "6 min read",
      date: "March 5, 2024",
      image: "/construction-site-security.jpg",
      content: [
        "Secure perimeter fencing and barriers",
        "Implement site access control",
        "Use GPS tracking on equipment",
        "Install motion-activated lighting",
        "Deploy mobile patrol services",
        "Maintain detailed inventory records",
        "Secure tools and materials properly",
        "Install CCTV surveillance",
        "Conduct regular security inspections",
        "Partner with professional security",
      ],
    },
    {
      icon: AlertTriangle,
      title: "Emergency Response Planning: A Complete Guide",
      excerpt:
        "Every organization needs a comprehensive emergency response plan. Learn how to develop, implement, and maintain effective procedures that protect lives and minimize disruption.",
      category: "Emergency Planning",
      readTime: "8 min read",
      date: "February 28, 2024",
      image: "/security-team-briefing.jpg",
      content: [
        "Conduct thorough risk assessments",
        "Identify potential emergency scenarios",
        "Establish clear communication protocols",
        "Define roles and responsibilities",
        "Create evacuation procedures",
        "Implement emergency contact systems",
        "Conduct regular drills and training",
        "Maintain emergency equipment",
        "Review and update plans regularly",
        "Coordinate with emergency services",
      ],
    },
    {
      icon: Home,
      title: "Residential Security: Protecting Your Home and Family",
      excerpt:
        "Your home should be your sanctuary. Discover practical security measures that deter intruders, protect your family, and provide peace of mind without compromising your lifestyle.",
      category: "Residential",
      readTime: "5 min read",
      date: "February 20, 2024",
      image: "/security-guard-patrol.jpg",
      content: [
        "Install quality locks on all entry points",
        "Use smart home security systems",
        "Maintain proper outdoor lighting",
        "Secure windows and sliding doors",
        "Install video doorbells",
        "Trim landscaping for visibility",
        "Use timers for lights when away",
        "Get to know your neighbors",
        "Consider professional monitoring",
        "Create a family security plan",
      ],
    },
    {
      icon: Building2,
      title: "Corporate Security Best Practices for 2024",
      excerpt:
        "Modern corporate security goes beyond physical protection. Learn how to create a comprehensive security strategy that addresses physical, digital, and personnel security challenges.",
      category: "Corporate",
      readTime: "7 min read",
      date: "February 15, 2024",
      image: "/security-guard-patrol.jpg",
      content: [
        "Implement multi-layered access control",
        "Conduct employee background checks",
        "Establish visitor management protocols",
        "Secure sensitive information areas",
        "Install comprehensive CCTV coverage",
        "Provide security awareness training",
        "Create incident response procedures",
        "Conduct regular security audits",
        "Protect executive personnel",
        "Integrate physical and cyber security",
      ],
    },
    {
      icon: Users,
      title: "Event Security Planning: Ensuring Safe Gatherings",
      excerpt:
        "Successful events require meticulous security planning. From risk assessment to crowd management, learn the essential elements of professional event security.",
      category: "Events",
      readTime: "6 min read",
      date: "February 10, 2024",
      image: "/event-security-crowd.jpg",
      content: [
        "Conduct comprehensive risk assessments",
        "Plan crowd flow and capacity",
        "Establish access control points",
        "Coordinate with local authorities",
        "Implement emergency evacuation plans",
        "Train security staff thoroughly",
        "Use effective communication systems",
        "Manage alcohol service responsibly",
        "Monitor weather and conditions",
        "Conduct post-event reviews",
      ],
    },
    {
      icon: Bell,
      title: "Alarm Systems: Choosing the Right Protection",
      excerpt:
        "Not all alarm systems are created equal. Understand the different types of alarm systems, monitoring options, and how to select the best solution for your security needs.",
      category: "Technology",
      readTime: "5 min read",
      date: "February 5, 2024",
      image: "/cctv-monitoring-room.jpg",
      content: [
        "Understand alarm system types",
        "Choose between wired and wireless",
        "Select appropriate sensors",
        "Consider monitoring options",
        "Integrate with other systems",
        "Plan for false alarm prevention",
        "Understand response procedures",
        "Maintain systems properly",
        "Comply with local regulations",
        "Test systems regularly",
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
              Security Tips & Insights
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
              Expert Security Advice and Industry Insights
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-balance">
              Stay informed with the latest security best practices, tips, and industry updates from UCT Groups
              professionals.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                Featured Article
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{articles[0].title}</h2>
              <p className="text-lg mb-6 opacity-90">{articles[0].excerpt}</p>
              <div className="flex items-center gap-4 mb-6 text-sm opacity-80">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {articles[0].date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {articles[0].readTime}
                </div>
              </div>
              <Button size="lg" variant="secondary" className="font-semibold">
                Read Full Article
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={articles[0].image || "/placeholder.svg"}
                alt={articles[0].title}
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(1).map((article, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">{article.category}</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <article.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {article.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {article.readTime}
                    </div>
                  </div>
                  <Button variant="ghost" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                    Read More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-accent/30">
        <div className="container mx-auto px-4">
          <Card className="p-12 text-center max-w-3xl mx-auto">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Bell className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Stay Informed on Security Trends</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Subscribe to receive the latest security tips, industry insights, and updates from UCT Groups experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background"
              />
              <Button size="lg" className="font-semibold">
                Subscribe
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Need Professional Security Advice?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Our security experts are ready to help you develop a comprehensive protection strategy.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="font-semibold">
                Contact Our Experts
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

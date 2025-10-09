"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, Lock, Eye, AlertTriangle } from "lucide-react"

export default function BlogPreview() {
  const blogPosts = [
    {
      icon: Shield,
      title: "10 Essential Security Tips for Australian Businesses",
      excerpt:
        "Protect your business with these proven security strategies. Learn about access control, surveillance best practices, and risk assessment techniques used by industry professionals.",
      category: "Business Security",
      readTime: "5 min read",
      date: "March 2025",
    },
    {
      icon: Lock,
      title: "Understanding NSW Security Licensing Requirements",
      excerpt:
        "A comprehensive guide to security licensing in New South Wales. What you need to know about compliance, training requirements, and choosing licensed security providers.",
      category: "Compliance",
      readTime: "7 min read",
      date: "March 2025",
    },
    {
      icon: Eye,
      title: "CCTV Systems: What to Look for in 2025",
      excerpt:
        "Modern surveillance technology has evolved significantly. Discover the latest features in CCTV systems including AI analytics, cloud storage, and remote monitoring capabilities.",
      category: "Technology",
      readTime: "6 min read",
      date: "February 2025",
    },
    {
      icon: AlertTriangle,
      title: "Emergency Response Planning for Your Business",
      excerpt:
        "Every business needs a comprehensive emergency response plan. Learn how to prepare for security incidents, natural disasters, and other critical situations.",
      category: "Risk Management",
      readTime: "8 min read",
      date: "February 2025",
    },
  ]

  return (
    <section id="blog" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Security Insights
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Latest Security Tips & Industry News
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Stay informed with expert advice, industry updates, and best practices from our security professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-border hover:border-primary/50 group cursor-pointer"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all">
                  <post.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div className="flex-1">
                  <Badge variant="secondary" className="mb-2">
                    {post.category}
                  </Badge>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                </div>
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">{post.excerpt}</p>

              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-4">
                  <span>{post.readTime}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
                <Button variant="ghost" size="sm" className="group-hover:text-primary">
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="font-semibold bg-transparent">
            View All Security Tips
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}

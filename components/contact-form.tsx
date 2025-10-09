"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckCircle2, Loader2 } from "lucide-react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
    urgency: "normal",
    agreeToTerms: false,
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    } else if (!/^[\d\s+\-$$$$]+$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number"
    }

    if (!formData.service) {
      newErrors.service = "Please select a service"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }

    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = "You must agree to the terms"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log("[v0] Form submitted:", formData)
    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
        urgency: "normal",
        agreeToTerms: false,
      })
    }, 3000)
  }

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  if (isSubmitted) {
    return (
      <Card className="p-8 text-center">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-2">Thank You!</h3>
        <p className="text-muted-foreground">
          We've received your inquiry and will contact you within 24 hours. For urgent matters, please call our 24/7
          emergency line.
        </p>
      </Card>
    )
  }

  return (
    <Card className="p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name *</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            placeholder="John Smith"
            className={errors.name ? "border-destructive" : ""}
          />
          {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="email">Email Address *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="john@company.com"
              className={errors.email ? "border-destructive" : ""}
            />
            {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number *</Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              placeholder="0400 000 000"
              className={errors.phone ? "border-destructive" : ""}
            />
            {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="company">Company Name (Optional)</Label>
          <Input
            id="company"
            value={formData.company}
            onChange={(e) => handleChange("company", e.target.value)}
            placeholder="Your Company Pty Ltd"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="service">Service Required *</Label>
          <Select value={formData.service} onValueChange={(value) => handleChange("service", value)}>
            <SelectTrigger className={errors.service ? "border-destructive" : ""}>
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="vip-protection">VIP Bodyguards & Close Protection</SelectItem>
              <SelectItem value="static-guards">Static Security Guards</SelectItem>
              <SelectItem value="mobile-patrol">Mobile Patrol Services</SelectItem>
              <SelectItem value="retail-security">Retail Security</SelectItem>
              <SelectItem value="crowd-control">Crowd Control</SelectItem>
              <SelectItem value="cctv">CCTV Installation & Monitoring</SelectItem>
              <SelectItem value="alarm-response">Alarm Response Services</SelectItem>
              <SelectItem value="construction">Construction Site Security</SelectItem>
              <SelectItem value="other">Other / Multiple Services</SelectItem>
            </SelectContent>
          </Select>
          {errors.service && <p className="text-sm text-destructive">{errors.service}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="urgency">Request Urgency</Label>
          <Select value={formData.urgency} onValueChange={(value) => handleChange("urgency", value)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="emergency">Emergency - Immediate Response Required</SelectItem>
              <SelectItem value="urgent">Urgent - Within 24 Hours</SelectItem>
              <SelectItem value="normal">Normal - Within 2-3 Business Days</SelectItem>
              <SelectItem value="planning">Planning - Future Service</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Message / Requirements *</Label>
          <Textarea
            id="message"
            value={formData.message}
            onChange={(e) => handleChange("message", e.target.value)}
            placeholder="Please describe your security requirements, location, and any specific concerns..."
            rows={5}
            className={errors.message ? "border-destructive" : ""}
          />
          {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
        </div>

        <div className="flex items-start gap-2">
          <Checkbox
            id="terms"
            checked={formData.agreeToTerms}
            onCheckedChange={(checked) => handleChange("agreeToTerms", checked as boolean)}
            className={errors.agreeToTerms ? "border-destructive" : ""}
          />
          <Label htmlFor="terms" className="text-sm leading-relaxed cursor-pointer">
            I agree to be contacted by UCT Groups regarding my security inquiry and consent to the collection of my
            information in accordance with the Privacy Act 1988 (Cth).
          </Label>
        </div>
        {errors.agreeToTerms && <p className="text-sm text-destructive">{errors.agreeToTerms}</p>}

        <Button type="submit" size="lg" className="w-full font-semibold" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 w-5 h-5 animate-spin" />
              Submitting...
            </>
          ) : (
            "Submit Inquiry"
          )}
        </Button>

        <p className="text-xs text-muted-foreground text-center">
          For immediate emergency assistance, call <span className="font-bold text-destructive">1300 UCT GRP</span>{" "}
          (24/7)
        </p>
      </form>
    </Card>
  )
}

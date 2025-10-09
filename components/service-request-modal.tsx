"use client"

import type React from "react"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useState } from "react"
import { CheckCircle2, Loader2, Phone } from "lucide-react"

interface ServiceRequestModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  selectedService: string | null
}

export default function ServiceRequestModal({ open, onOpenChange, selectedService }: ServiceRequestModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: selectedService || "",
    urgency: "normal",
    details: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    console.log("[v0] Service request submitted:", formData)
    setIsSubmitting(false)
    setIsSubmitted(true)

    setTimeout(() => {
      setIsSubmitted(false)
      onOpenChange(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        urgency: "normal",
        details: "",
      })
    }, 2500)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        {isSubmitted ? (
          <div className="py-8 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-primary" />
            </div>
            <DialogTitle className="text-2xl mb-2">Request Received!</DialogTitle>
            <DialogDescription className="text-base">
              Our team will contact you shortly to discuss your security requirements.
            </DialogDescription>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl">Request Security Service</DialogTitle>
              <DialogDescription>
                {selectedService
                  ? `Requesting: ${selectedService}`
                  : "Fill out the form below and we'll contact you within 24 hours"}
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="modal-name">Full Name *</Label>
                  <Input
                    id="modal-name"
                    value={formData.name}
                    onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                    placeholder="John Smith"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="modal-phone">Phone Number *</Label>
                  <Input
                    id="modal-phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData((prev) => ({ ...prev, phone: e.target.value }))}
                    placeholder="0400 000 000"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="modal-email">Email Address *</Label>
                <Input
                  id="modal-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                  placeholder="john@company.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="modal-service">Service Type *</Label>
                <Select
                  value={formData.service}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, service: value }))}
                  required
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="VIP Bodyguards & Close Protection">VIP Bodyguards & Close Protection</SelectItem>
                    <SelectItem value="Static Security Guards">Static Security Guards</SelectItem>
                    <SelectItem value="Mobile Patrol Services">Mobile Patrol Services</SelectItem>
                    <SelectItem value="Retail Security">Retail Security</SelectItem>
                    <SelectItem value="Crowd Control">Crowd Control</SelectItem>
                    <SelectItem value="CCTV Installation & Monitoring">CCTV Installation & Monitoring</SelectItem>
                    <SelectItem value="Alarm Response Services">Alarm Response Services</SelectItem>
                    <SelectItem value="Construction Site Security">Construction Site Security</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="modal-urgency">Request Urgency</Label>
                <Select
                  value={formData.urgency}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, urgency: value }))}
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="emergency">Emergency - Immediate Response</SelectItem>
                    <SelectItem value="urgent">Urgent - Within 24 Hours</SelectItem>
                    <SelectItem value="normal">Normal - 2-3 Business Days</SelectItem>
                    <SelectItem value="planning">Planning - Future Service</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="modal-details">Additional Details</Label>
                <Textarea
                  id="modal-details"
                  value={formData.details}
                  onChange={(e) => setFormData((prev) => ({ ...prev, details: e.target.value }))}
                  placeholder="Describe your security requirements, location, and any specific concerns..."
                  rows={4}
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button type="submit" size="lg" className="flex-1 font-semibold" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Request"
                  )}
                </Button>
                <Button type="button" variant="outline" size="lg" onClick={() => onOpenChange(false)}>
                  Cancel
                </Button>
              </div>

              <div className="text-center pt-4 border-t border-border">
                <p className="text-sm text-muted-foreground mb-2">Need immediate assistance?</p>
                <a
                  href="tel:1300828476"
                  className="inline-flex items-center gap-2 text-destructive font-bold hover:underline"
                >
                  <Phone className="w-4 h-4" />
                  Call 1300 UCT GRP (24/7)
                </a>
              </div>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}

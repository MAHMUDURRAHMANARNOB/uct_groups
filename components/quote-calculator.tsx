"use client"

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Card } from "@/components/ui/card"
import { useState } from "react"
import { Calculator, CheckCircle2, DollarSign } from "lucide-react"

interface QuoteCalculatorProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function QuoteCalculator({ open, onOpenChange }: QuoteCalculatorProps) {
  const [serviceType, setServiceType] = useState("")
  const [duration, setDuration] = useState("ongoing")
  const [personnel, setPersonnel] = useState([1])
  const [hours, setHours] = useState([8])
  const [showQuote, setShowQuote] = useState(false)

  const calculateQuote = () => {
    const baseRates: Record<string, number> = {
      "static-guards": 45,
      "mobile-patrol": 55,
      "vip-protection": 85,
      "retail-security": 42,
      "crowd-control": 50,
      cctv: 65,
      "alarm-response": 60,
      construction: 48,
    }

    const rate = baseRates[serviceType] || 50
    const dailyCost = rate * personnel[0] * hours[0]
    const monthlyCost = dailyCost * 22 // Average working days per month

    return {
      hourlyRate: rate,
      dailyCost,
      monthlyCost,
    }
  }

  const quote = calculateQuote()

  const handleGetQuote = () => {
    setShowQuote(true)
  }

  const handleReset = () => {
    setServiceType("")
    setDuration("ongoing")
    setPersonnel([1])
    setHours([8])
    setShowQuote(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl flex items-center gap-2">
            <Calculator className="w-6 h-6 text-primary" />
            Security Service Quote Calculator
          </DialogTitle>
          <DialogDescription>Get an instant estimate for your security service requirements</DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="calc-service">Service Type *</Label>
            <Select value={serviceType} onValueChange={setServiceType}>
              <SelectTrigger>
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="static-guards">Static Security Guards</SelectItem>
                <SelectItem value="mobile-patrol">Mobile Patrol Services</SelectItem>
                <SelectItem value="vip-protection">VIP Bodyguards & Close Protection</SelectItem>
                <SelectItem value="retail-security">Retail Security</SelectItem>
                <SelectItem value="crowd-control">Crowd Control</SelectItem>
                <SelectItem value="cctv">CCTV Installation & Monitoring</SelectItem>
                <SelectItem value="alarm-response">Alarm Response Services</SelectItem>
                <SelectItem value="construction">Construction Site Security</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="calc-duration">Service Duration</Label>
            <Select value={duration} onValueChange={setDuration}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="one-time">One-Time Event</SelectItem>
                <SelectItem value="short-term">Short-Term (1-3 months)</SelectItem>
                <SelectItem value="ongoing">Ongoing Contract</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Number of Personnel: {personnel[0]}</Label>
              <Slider value={personnel} onValueChange={setPersonnel} min={1} max={20} step={1} className="w-full" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>1 person</span>
                <span>20 people</span>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Hours per Day: {hours[0]}</Label>
              <Slider value={hours} onValueChange={setHours} min={1} max={24} step={1} className="w-full" />
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>1 hour</span>
                <span>24 hours</span>
              </div>
            </div>
          </div>

          {!showQuote ? (
            <Button onClick={handleGetQuote} size="lg" className="w-full font-semibold" disabled={!serviceType}>
              <Calculator className="mr-2 w-5 h-5" />
              Calculate Quote
            </Button>
          ) : (
            <Card className="p-6 bg-primary/5 border-primary/20">
              <div className="text-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <DollarSign className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Estimated Quote</h3>
                <p className="text-sm text-muted-foreground">Based on your requirements</p>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-muted-foreground">Hourly Rate per Person</span>
                  <span className="text-xl font-bold text-foreground">${quote.hourlyRate}/hr</span>
                </div>

                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-muted-foreground">Daily Cost</span>
                  <span className="text-xl font-bold text-foreground">${quote.dailyCost.toLocaleString()}</span>
                </div>

                <div className="flex justify-between items-center py-3 bg-primary/10 rounded-lg px-4">
                  <span className="font-semibold text-foreground">Estimated Monthly Cost</span>
                  <span className="text-2xl font-bold text-primary">${quote.monthlyCost.toLocaleString()}</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-background rounded-lg border border-border">
                <div className="flex items-start gap-2 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-muted-foreground">
                    This is an estimate only. Final pricing depends on specific requirements, location, and service
                    complexity.
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-muted-foreground">
                    All personnel are fully licensed, insured, and compliant with Australian security regulations.
                  </div>
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <Button onClick={handleReset} variant="outline" className="flex-1 bg-transparent">
                  Recalculate
                </Button>
                <Button
                  onClick={() => {
                    onOpenChange(false)
                    // Scroll to contact form
                    setTimeout(() => {
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                    }, 300)
                  }}
                  className="flex-1 font-semibold"
                >
                  Request Detailed Quote
                </Button>
              </div>
            </Card>
          )}

          <p className="text-xs text-muted-foreground text-center">
            For accurate pricing and customized solutions, contact our team for a free consultation
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}

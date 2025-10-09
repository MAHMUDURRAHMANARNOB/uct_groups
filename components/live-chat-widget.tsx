"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { MessageCircle, X, Send } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")

  return (
    <>
      {/* Chat Widget Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          className="fixed bottom-6 right-6 w-16 h-16 rounded-full shadow-2xl z-40 animate-bounce hover:animate-none"
        >
          <MessageCircle className="w-7 h-7" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-[500px] shadow-2xl z-40 flex flex-col animate-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold">UCT Groups Support</div>
                <div className="text-xs text-primary-foreground/80 flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                  Online - We'll respond shortly
                </div>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-primary-foreground hover:bg-primary-foreground/20"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Chat Body */}
          <div className="flex-1 p-4 overflow-y-auto bg-accent/20">
            <div className="space-y-4">
              <div className="flex gap-2">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-4 h-4 text-primary-foreground" />
                </div>
                <div className="bg-card p-3 rounded-lg rounded-tl-none shadow-sm max-w-[80%]">
                  <p className="text-sm text-foreground">
                    Welcome to UCT Groups! How can we help you with your security needs today?
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    Our team typically responds within 2-3 minutes during business hours.
                  </p>
                </div>
              </div>

              <div className="bg-primary/10 p-3 rounded-lg border border-primary/20">
                <p className="text-sm font-semibold text-foreground mb-2">Quick Actions:</p>
                <div className="space-y-2">
                  <Button variant="outline" size="sm" className="w-full justify-start text-left bg-transparent">
                    Request a Quote
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start text-left bg-transparent">
                    Emergency Assistance
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start text-left bg-transparent">
                    Service Information
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Chat Input */}
          <div className="p-4 border-t border-border">
            <div className="flex gap-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1"
                onKeyPress={(e) => {
                  if (e.key === "Enter" && message.trim()) {
                    console.log("[v0] Chat message sent:", message)
                    setMessage("")
                  }
                }}
              />
              <Button
                size="icon"
                disabled={!message.trim()}
                onClick={() => {
                  console.log("[v0] Chat message sent:", message)
                  setMessage("")
                }}
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              For emergencies, call <span className="font-bold text-destructive">1300 UCT GRP</span>
            </p>
          </div>
        </Card>
      )}
    </>
  )
}

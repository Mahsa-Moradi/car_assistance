"use client"

import { useState } from "react"
import { AlertTriangle, Phone, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export function FloatingEmergencyButton() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  const scrollToHelpForm = () => {
    document.getElementById("help-request-form")?.scrollIntoView({ behavior: "smooth" })
    setIsDialogOpen(false)
  }

  return (
    <>
      <button
        onClick={() => setIsDialogOpen(true)}
        className="fixed bottom-6 left-6 z-50 flex items-center gap-2 rounded-full bg-cta-yellow px-4 py-3 text-text-dark shadow-lg hover:bg-cta-yellow/90 transition-all duration-300 animate-pulse hover:animate-none"
        aria-label="Emergency Contact"
      >
        <AlertTriangle className="h-5 w-5" />
        <span className="font-medium">Emergency Contact</span>
      </button>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-text-dark">Emergency Assistance</DialogTitle>
            <DialogDescription className="text-center text-text-dark/70">
              Contact our emergency support team immediately
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center justify-center space-y-6 p-4">
            <div className="rounded-full bg-accent-green/20 p-6">
              <AlertTriangle className="h-12 w-12 text-accent-green" />
            </div>
            <div className="text-center">
              <p className="text-lg font-medium text-text-dark">Need immediate help?</p>
              <p className="text-text-dark/70">Our support team is available 24/7</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <a
                href="tel:+989120379961"
                className="flex flex-1 items-center justify-center gap-2 rounded-md bg-cta-yellow px-4 py-3 font-medium text-text-dark hover:bg-cta-yellow/90"
              >
                <Phone className="h-5 w-5" />
                Call Us Now
              </a>
              <Button
                onClick={scrollToHelpForm}
                className="flex-1 bg-accent-green text-text-dark hover:bg-accent-green/90"
              >
                <Wrench className="mr-2 h-5 w-5" />
                Request Help Online
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

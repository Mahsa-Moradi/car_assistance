"use client"

import { useState } from "react"
import { AlertTriangle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export function EmergencyContactButton() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)

  return (
    <>
      <Button
        onClick={() => setIsDialogOpen(true)}
        className="flex items-center gap-2 rounded-md bg-cta-yellow px-4 py-2 font-medium text-text-dark hover:bg-cta-yellow/90"
      >
        <AlertTriangle className="h-5 w-5" />
        <span>Emergency Contact</span>
      </Button>

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
                Call Now
              </a>
              <Button
                onClick={() => {
                  setIsDialogOpen(false)
                  // Scroll to the help request form
                  document.getElementById("help-request-form")?.scrollIntoView({ behavior: "smooth" })
                }}
                className="flex-1 bg-button-blue text-text-dark hover:bg-button-blue/90"
              >
                Request Help Online
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

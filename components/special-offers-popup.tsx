"use client"

import { useEffect, useState } from "react"
import { Tag, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export function SpecialOffersPopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Check if the popup has been shown before in this session
    const hasShownPopup = sessionStorage.getItem("hasShownSpecialOffersPopup")

    if (!hasShownPopup) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsOpen(true)
        // Mark that we've shown the popup in this session
        sessionStorage.setItem("hasShownSpecialOffersPopup", "true")
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [])

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md border-2 border-accent-green/20 bg-bg-lavender">
        <DialogHeader className="text-center">
          <div className="mx-auto w-fit rounded-full bg-accent-green/20 p-3">
            <Tag className="h-6 w-6 text-accent-green" />
          </div>
          <DialogTitle className="text-2xl font-bold text-text-dark mt-2">Special Offer!</DialogTitle>
          <DialogDescription className="text-text-dark/70">
            Limited time offers for new RoadAssist users
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <div className="rounded-lg border border-accent-green/20 p-4 bg-white">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-text-dark">First-Time User Discount</h3>
              <span className="bg-cta-yellow text-text-dark text-xs font-bold px-2 py-1 rounded-full">50% OFF</span>
            </div>
            <p className="text-sm text-text-dark/70 mb-3">
              Sign up today and get 50% off your first roadside assistance service!
            </p>
            <Link href="/signup">
              <Button variant="secondary" size="sm" className="w-full">
                Sign Up Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="rounded-lg border border-accent-green/20 p-4 bg-white">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-bold text-text-dark">Premium Membership</h3>
              <span className="bg-accent-green text-text-dark text-xs font-bold px-2 py-1 rounded-full">SAVE 25%</span>
            </div>
            <p className="text-sm text-text-dark/70 mb-3">
              Join our premium plan for just $9.99/month and save 25% on all services
            </p>
            <Link href="/signup?plan=premium">
              <Button variant="outline" size="sm" className="w-full">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex justify-between items-center border-t pt-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(false)}
            className="text-text-dark/70 hover:text-text-dark"
          >
            Maybe Later
          </Button>
          <Link href="/special-offers">
            <Button variant="link" className="text-accent-green">
              View All Offers
            </Button>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  )
}

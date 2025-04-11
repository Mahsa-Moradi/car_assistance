"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Tag, Gift, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useToast } from "@/components/ui/use-toast"

// Array of possible discount values and their probabilities
const DISCOUNT_OPTIONS = [
  { value: 5, code: "WELCOME5", probability: 0.4 },
  { value: 10, code: "WELCOME10", probability: 0.3 },
  { value: 15, code: "WELCOME15", probability: 0.2 },
  { value: 20, code: "WELCOME20", probability: 0.08 },
  { value: 50, code: "WELCOME50", probability: 0.02 },
]

export function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedDiscount, setGeneratedDiscount] = useState<{ value: number; code: string } | null>(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  useEffect(() => {
    // Check if the popup has been shown before in this session
    const hasShownPopup = sessionStorage.getItem("hasShownWelcomePopup")

    // Check if user is logged in (in a real app, this would use your auth system)
    // For demo purposes, we'll check localStorage
    const userLoggedIn = localStorage.getItem("userLoggedIn") === "true"
    setIsLoggedIn(userLoggedIn)

    if (!hasShownPopup) {
      // Show popup immediately
      setIsOpen(true)
      // Mark that we've shown the popup in this session
      sessionStorage.setItem("hasShownWelcomePopup", "true")
    }
  }, [])

  const generateDiscountCode = () => {
    if (!isLoggedIn) {
      // If not logged in, redirect to login page
      setIsOpen(false)
      router.push("/login?redirect=welcome-discount")
      return
    }

    setIsGenerating(true)

    // Simulate API call with a delay
    setTimeout(() => {
      // Generate a random number between 0 and 1
      const random = Math.random()

      // Find the discount based on probability
      let cumulativeProbability = 0
      let selectedDiscount = DISCOUNT_OPTIONS[0]

      for (const discount of DISCOUNT_OPTIONS) {
        cumulativeProbability += discount.probability
        if (random <= cumulativeProbability) {
          selectedDiscount = discount
          break
        }
      }

      // Set the generated discount
      setGeneratedDiscount(selectedDiscount)

      // Store the discount code in localStorage
      const existingCodes = JSON.parse(localStorage.getItem("discountCodes") || "[]")
      if (!existingCodes.some((code: string) => code === selectedDiscount.code)) {
        localStorage.setItem("discountCodes", JSON.stringify([...existingCodes, selectedDiscount.code]))
      }

      // Show success toast
      toast({
        title: "Discount code generated!",
        description: `Your ${selectedDiscount.value}% discount code has been saved to your account.`,
      })

      setIsGenerating(false)
    }, 1500)
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md border-2 border-accent-green/20 bg-bg-lavender">
        <DialogHeader className="text-center">
          <div className="mx-auto w-fit rounded-full bg-accent-green/20 p-3">
            <Tag className="h-6 w-6 text-accent-green" />
          </div>
          <DialogTitle className="text-2xl font-bold text-text-dark mt-2">Welcome to RoadAssist!</DialogTitle>
          <DialogDescription className="text-text-dark/70">
            Special offers for roadside assistance services! Get discounts on your first request or assistance packages.
            Don't miss out!
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          {generatedDiscount ? (
            <div className="flex flex-col items-center space-y-4 bg-white rounded-lg p-6 border border-accent-green/20">
              <div className="rounded-full bg-accent-green/20 p-4">
                <Gift className="h-8 w-8 text-accent-green" />
              </div>
              <h3 className="text-xl font-bold text-text-dark">Congratulations!</h3>
              <div className="text-center">
                <p className="text-text-dark/70 mb-1">You've received a</p>
                <p className="text-3xl font-bold text-accent-green">{generatedDiscount.value}% DISCOUNT</p>
                <p className="text-text-dark/70 mt-1">on your next service request</p>
              </div>
              <div className="bg-bg-lavender rounded-lg p-3 border border-accent-green/20 w-full text-center">
                <p className="text-sm text-text-dark/70 mb-1">Your discount code:</p>
                <code className="font-mono text-lg font-bold text-text-dark">{generatedDiscount.code}</code>
              </div>
              <p className="text-xs text-text-dark/70 text-center">
                This code has been saved to your account and can be used at checkout
              </p>
            </div>
          ) : (
            <>
              <div className="rounded-lg border border-accent-green/20 p-4 bg-white">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-text-dark">First-Time User Discount</h3>
                  <span className="bg-cta-yellow text-text-dark text-xs font-bold px-2 py-1 rounded-full">
                    UP TO 50% OFF
                  </span>
                </div>
                <p className="text-sm text-text-dark/70 mb-4">
                  Get an exclusive discount on your first roadside assistance service! Click the button below to
                  generate your personal discount code.
                </p>
                <Button
                  onClick={generateDiscountCode}
                  className="w-full bg-cta-yellow text-text-dark hover:bg-cta-yellow/90"
                  disabled={isGenerating}
                >
                  {isGenerating ? (
                    <div className="flex items-center">
                      <div className="h-4 w-4 animate-spin rounded-full border-2 border-accent-green border-t-transparent mr-2" />
                      Generating...
                    </div>
                  ) : (
                    <>
                      Get My Discount
                      <Gift className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </div>

              <div className="rounded-lg border border-accent-green/20 p-4 bg-white">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-text-dark">Premium Membership</h3>
                  <span className="bg-accent-green text-text-dark text-xs font-bold px-2 py-1 rounded-full">
                    SAVE 25%
                  </span>
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
            </>
          )}
        </div>

        <div className="flex justify-between items-center border-t pt-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(false)}
            className="text-text-dark/70 hover:text-text-dark"
          >
            {generatedDiscount ? "Close" : "Maybe Later"}
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

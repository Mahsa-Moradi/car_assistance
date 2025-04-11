"use client"

import { useState } from "react"
import { Ticket, Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useToast } from "@/components/ui/use-toast"

// Array of possible discount values and their probabilities
const DISCOUNT_OPTIONS = [
  { value: 5, code: "LUCKY5", probability: 0.4 },
  { value: 10, code: "LUCKY10", probability: 0.3 },
  { value: 15, code: "LUCKY15", probability: 0.2 },
  { value: 20, code: "LUCKY20", probability: 0.08 },
  { value: 50, code: "JACKPOT50", probability: 0.02 },
]

export function RandomDiscountButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [generatedDiscount, setGeneratedDiscount] = useState<{ value: number; code: string } | null>(null)
  const [isCopied, setIsCopied] = useState(false)
  const [isGenerating, setIsGenerating] = useState(false)
  const { toast } = useToast()

  const generateRandomDiscount = () => {
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

      setIsGenerating(false)
    }, 2000)
  }

  const copyToClipboard = () => {
    if (generatedDiscount) {
      navigator.clipboard.writeText(generatedDiscount.code)
      setIsCopied(true)
      setTimeout(() => setIsCopied(false), 2000)

      toast({
        title: "Discount code copied!",
        description: "The code has been copied to your clipboard and saved to your account.",
      })
    }
  }

  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 bg-cta-yellow text-text-dark hover:bg-cta-yellow/90"
      >
        <Ticket className="h-4 w-4" />
        Get Random Discount
      </Button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md border-2 border-accent-green/20 bg-bg-lavender">
          <DialogHeader>
            <DialogTitle className="text-center text-text-dark">Try Your Luck!</DialogTitle>
            <DialogDescription className="text-center text-text-dark/70">
              Click the button to generate a random discount code
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-col items-center justify-center py-6 space-y-6">
            {!generatedDiscount ? (
              <Button
                onClick={generateRandomDiscount}
                className="bg-cta-yellow text-text-dark hover:bg-cta-yellow/90 h-16 w-16 rounded-full"
                disabled={isGenerating}
              >
                {isGenerating ? (
                  <div className="h-8 w-8 animate-spin rounded-full border-4 border-accent-green border-t-transparent" />
                ) : (
                  <Ticket className="h-8 w-8" />
                )}
              </Button>
            ) : (
              <div className="flex flex-col items-center space-y-4">
                <div className="rounded-full bg-accent-green/20 p-6">
                  <span className="text-4xl font-bold text-accent-green">{generatedDiscount.value}%</span>
                </div>
                <h3 className="text-xl font-bold text-text-dark">Congratulations!</h3>
                <p className="text-text-dark/70 text-center">
                  You've won a {generatedDiscount.value}% discount on your next service!
                </p>
                <div className="flex items-center gap-2 bg-white rounded-lg p-3 border border-accent-green/20">
                  <code className="font-mono text-lg font-bold text-text-dark">{generatedDiscount.code}</code>
                  <Button size="icon" variant="ghost" onClick={copyToClipboard} className="h-8 w-8 rounded-full">
                    {isCopied ? <Check className="h-4 w-4 text-accent-green" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
                <p className="text-xs text-text-dark/70 text-center">
                  This code has been saved to your account and can be used at checkout
                </p>
              </div>
            )}
          </div>

          <div className="flex justify-center border-t pt-4">
            <Button
              variant="ghost"
              onClick={() => {
                setIsOpen(false)
                setGeneratedDiscount(null)
              }}
              className="text-text-dark/70 hover:text-text-dark"
            >
              {generatedDiscount ? "Close" : "Maybe Later"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

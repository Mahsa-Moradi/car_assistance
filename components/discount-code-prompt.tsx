"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Ticket, X, ChevronDown, ChevronUp, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"

interface DiscountCodePromptProps {
  subtotal: number
  onDiscountApplied: (discountAmount: number, discountCode: string) => void
}

export function DiscountCodePrompt({ subtotal, onDiscountApplied }: DiscountCodePromptProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [manualCode, setManualCode] = useState("")
  const [savedCodes, setSavedCodes] = useState<string[]>([])
  const [appliedCode, setAppliedCode] = useState<string | null>(null)
  const [discountAmount, setDiscountAmount] = useState(0)
  const [error, setError] = useState("")
  const [showAutoPrompt, setShowAutoPrompt] = useState(false)
  const [selectedAutoCode, setSelectedAutoCode] = useState<string | null>(null)

  // Discount code validation and percentage mapping
  const discountMap: Record<string, number> = {
    LUCKY5: 5,
    LUCKY10: 10,
    LUCKY15: 15,
    LUCKY20: 20,
    JACKPOT50: 50,
    WELCOME5: 5,
    WELCOME10: 10,
    WELCOME15: 15,
    WELCOME20: 20,
    WELCOME50: 50,
    SUMMER23: 30,
  }

  useEffect(() => {
    // Load saved discount codes from localStorage
    const storedCodes = JSON.parse(localStorage.getItem("discountCodes") || "[]")
    setSavedCodes(storedCodes)

    // If there are saved codes and no code is applied yet, show the auto-prompt
    if (storedCodes.length > 0 && !appliedCode) {
      // Select the highest value discount code
      let highestValue = 0
      let bestCode = storedCodes[0]

      storedCodes.forEach((code: string) => {
        const value = discountMap[code] || 0
        if (value > highestValue) {
          highestValue = value
          bestCode = code
        }
      })

      setSelectedAutoCode(bestCode)
      setShowAutoPrompt(true)
    }
  }, [appliedCode])

  const applyDiscountCode = (code: string) => {
    // Reset error state
    setError("")

    // Check if code is valid
    if (discountMap[code]) {
      const discountPercentage = discountMap[code]
      const calculatedDiscount = (subtotal * discountPercentage) / 100

      // Set the applied code and discount amount
      setAppliedCode(code)
      setDiscountAmount(calculatedDiscount)

      // Call the parent callback
      onDiscountApplied(calculatedDiscount, code)

      // Remove the code from saved codes (one-time use)
      const updatedCodes = savedCodes.filter((c) => c !== code)
      setSavedCodes(updatedCodes)
      localStorage.setItem("discountCodes", JSON.stringify(updatedCodes))

      // Close the auto-prompt if it's open
      setShowAutoPrompt(false)
    } else {
      setError("Invalid discount code")
    }
  }

  const removeDiscount = () => {
    setAppliedCode(null)
    setDiscountAmount(0)
    onDiscountApplied(0, "")
  }

  const handleManualSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (manualCode.trim()) {
      applyDiscountCode(manualCode.trim())
      setManualCode("")
    }
  }

  const handleAutoPromptApply = () => {
    if (selectedAutoCode) {
      applyDiscountCode(selectedAutoCode)
    }
    setShowAutoPrompt(false)
  }

  return (
    <>
      {/* Auto-prompt dialog */}
      <Dialog open={showAutoPrompt} onOpenChange={setShowAutoPrompt}>
        <DialogContent className="sm:max-w-md border-2 border-accent-green/20 bg-bg-lavender">
          <DialogHeader>
            <DialogTitle className="text-center text-text-dark">Discount Available!</DialogTitle>
            <DialogDescription className="text-center text-text-dark/70">
              Would you like to use your discount code now?
            </DialogDescription>
          </DialogHeader>

          <div className="py-4">
            <div className="flex items-center justify-between bg-white p-4 rounded-lg border border-accent-green/20">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-accent-green/20 p-2">
                  <Ticket className="h-5 w-5 text-accent-green" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono font-medium text-text-dark">{selectedAutoCode}</span>
                    <span className="bg-cta-yellow text-text-dark text-xs px-2 py-0.5 rounded-full">
                      {selectedAutoCode ? discountMap[selectedAutoCode] : 0}% OFF
                    </span>
                  </div>
                  <p className="text-sm text-text-dark/70">
                    Save ${((subtotal * (selectedAutoCode ? discountMap[selectedAutoCode] : 0)) / 100).toFixed(2)} on
                    this order
                  </p>
                </div>
              </div>
            </div>
          </div>

          <DialogFooter className="flex sm:justify-between">
            <Button
              variant="ghost"
              onClick={() => setShowAutoPrompt(false)}
              className="text-text-dark/70 hover:text-text-dark"
            >
              No, Thanks
            </Button>
            <Button onClick={handleAutoPromptApply} className="bg-cta-yellow text-text-dark hover:bg-cta-yellow/90">
              <Check className="mr-2 h-4 w-4" />
              Yes, Apply Discount
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Regular discount section */}
      <div className="border rounded-lg overflow-hidden bg-bg-lavender border-accent-green/20 mb-6">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full flex items-center justify-between p-4 text-left"
        >
          <div className="flex items-center gap-2">
            <Ticket className="h-5 w-5 text-accent-green" />
            <span className="font-medium text-text-dark">
              {appliedCode ? "Discount Applied" : "Apply Discount Code"}
            </span>
          </div>
          {isExpanded ? (
            <ChevronUp className="h-5 w-5 text-text-dark/70" />
          ) : (
            <ChevronDown className="h-5 w-5 text-text-dark/70" />
          )}
        </button>

        {isExpanded && (
          <div className="p-4 border-t border-accent-green/20">
            {appliedCode ? (
              <div className="flex items-center justify-between bg-white p-3 rounded-lg border border-accent-green/20">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-text-dark">{appliedCode}</span>
                    <span className="bg-accent-green text-text-dark text-xs px-2 py-0.5 rounded-full">
                      {discountMap[appliedCode]}% OFF
                    </span>
                  </div>
                  <p className="text-sm text-text-dark/70">Discount: ${discountAmount.toFixed(2)}</p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={removeDiscount}
                  className="h-8 w-8 rounded-full hover:bg-red-100"
                >
                  <X className="h-4 w-4 text-red-500" />
                </Button>
              </div>
            ) : (
              <>
                {savedCodes.length > 0 && (
                  <div className="mb-4">
                    <Label className="text-text-dark mb-2 block">Your Saved Discount Codes</Label>
                    <div className="space-y-2">
                      {savedCodes.map((code) => (
                        <div
                          key={code}
                          className="flex items-center justify-between bg-white p-3 rounded-lg border border-accent-green/20"
                        >
                          <div className="flex items-center gap-2">
                            <span className="font-mono font-medium text-text-dark">{code}</span>
                            <span className="bg-cta-yellow text-text-dark text-xs px-2 py-0.5 rounded-full">
                              {discountMap[code]}% OFF
                            </span>
                          </div>
                          <Button
                            size="sm"
                            onClick={() => applyDiscountCode(code)}
                            className="bg-button-blue text-text-dark hover:bg-button-blue/90"
                          >
                            Apply
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <form onSubmit={handleManualSubmit} className="flex flex-col gap-2">
                  <Label htmlFor="discount-code" className="text-text-dark">
                    Enter a discount code
                  </Label>
                  <div className="flex gap-2">
                    <Input
                      id="discount-code"
                      value={manualCode}
                      onChange={(e) => setManualCode(e.target.value)}
                      placeholder="Enter code"
                      className="flex-1 bg-white border-accent-green/20"
                    />
                    <Button type="submit" className="bg-button-blue text-text-dark hover:bg-button-blue/90">
                      Apply
                    </Button>
                  </div>
                  {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
                </form>
              </>
            )}
          </div>
        )}
      </div>
    </>
  )
}

"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, CreditCard, Loader2, Shield, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { DiscountCodePrompt } from "@/components/discount-code-prompt"

// Mock service data
const serviceDetails = {
  name: "Flat Tire Replacement",
  provider: "Mike's Auto Repair",
  basePrice: 85.0,
  serviceFee: 5.0,
  tax: 7.2,
}

export default function CheckoutPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isComplete, setIsComplete] = useState(false)
  const [discountAmount, setDiscountAmount] = useState(0)
  const [appliedDiscountCode, setAppliedDiscountCode] = useState("")

  const subtotal = serviceDetails.basePrice + serviceDetails.serviceFee
  const total = subtotal + serviceDetails.tax - discountAmount

  const handleDiscountApplied = (amount: number, code: string) => {
    setDiscountAmount(amount)
    setAppliedDiscountCode(code)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate payment processing
    setTimeout(() => {
      setIsSubmitting(false)
      setIsComplete(true)
    }, 2000)
  }

  if (isComplete) {
    return (
      <div className="max-w-2xl mx-auto py-12">
        <Card className="border-2 border-accent-green/20">
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 rounded-full bg-accent-green/20 flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-accent-green" />
            </div>
            <CardTitle className="text-2xl font-bold text-text-dark">Payment Successful!</CardTitle>
            <CardDescription className="text-text-dark/70">
              Your payment has been processed successfully
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-lg border border-accent-green/20 p-4 bg-bg-lavender">
              <h3 className="font-medium text-text-dark mb-2">Order Summary</h3>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-text-dark/70">Service:</span>
                  <span className="text-text-dark">{serviceDetails.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-dark/70">Provider:</span>
                  <span className="text-text-dark">{serviceDetails.provider}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-dark/70">Order ID:</span>
                  <span className="text-text-dark">
                    RA-
                    {Math.floor(Math.random() * 10000)
                      .toString()
                      .padStart(4, "0")}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-dark/70">Date:</span>
                  <span className="text-text-dark">{new Date().toLocaleDateString()}</span>
                </div>
                {appliedDiscountCode && (
                  <div className="flex justify-between">
                    <span className="text-text-dark/70">Discount Code:</span>
                    <span className="text-text-dark">{appliedDiscountCode}</span>
                  </div>
                )}
                <div className="flex justify-between font-medium pt-2">
                  <span className="text-text-dark">Total Paid:</span>
                  <span className="text-text-dark">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="text-center text-text-dark/70 text-sm">
              <p>A receipt has been sent to your email address.</p>
              <p>The provider will contact you shortly with service details.</p>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Link href="/dashboard">
              <Button className="bg-button-blue text-text-dark hover:bg-button-blue/90">Return to Dashboard</Button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto py-12">
      <div className="flex items-center mb-8">
        <Link href="/dashboard">
          <Button variant="ghost" className="gap-1">
            <ArrowLeft className="h-4 w-4" />
            Back to Dashboard
          </Button>
        </Link>
        <h1 className="text-2xl font-bold text-text-dark ml-4">Checkout</h1>
      </div>

      <div className="grid gap-8 md:grid-cols-[1fr_350px]">
        <div>
          <Card className="mb-6 border-2 border-accent-green/20">
            <CardHeader>
              <CardTitle className="text-text-dark">Payment Information</CardTitle>
              <CardDescription className="text-text-dark/70">
                Enter your payment details to complete your order
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="card-name" className="text-text-dark">
                      Name on Card
                    </Label>
                    <Input
                      id="card-name"
                      placeholder="John Doe"
                      required
                      className="bg-bg-lavender border-accent-green/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="card-number" className="text-text-dark">
                      Card Number
                    </Label>
                    <Input
                      id="card-number"
                      placeholder="1234 5678 9012 3456"
                      required
                      className="bg-bg-lavender border-accent-green/20"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiry" className="text-text-dark">
                        Expiry Date
                      </Label>
                      <Input
                        id="expiry"
                        placeholder="MM/YY"
                        required
                        className="bg-bg-lavender border-accent-green/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvc" className="text-text-dark">
                        CVC
                      </Label>
                      <Input id="cvc" placeholder="123" required className="bg-bg-lavender border-accent-green/20" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-text-dark">Payment Method</Label>
                  <RadioGroup defaultValue="credit-card" className="flex flex-col space-y-2">
                    <div className="flex items-center space-x-2 rounded-md border border-accent-green/20 p-3 bg-bg-lavender">
                      <RadioGroupItem value="credit-card" id="credit-card" />
                      <Label htmlFor="credit-card" className="flex-1 cursor-pointer">
                        <div className="flex items-center gap-2">
                          <CreditCard className="h-4 w-4 text-accent-green" />
                          <span className="text-text-dark">Credit / Debit Card</span>
                        </div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 rounded-md border border-accent-green/20 p-3 bg-bg-lavender opacity-50">
                      <RadioGroupItem value="paypal" id="paypal" disabled />
                      <Label htmlFor="paypal" className="flex-1 cursor-not-allowed">
                        <div className="flex items-center gap-2">
                          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M19.5 8.5H18.5C18.5 5.74 16.26 3.5 13.5 3.5H7.5C4.74 3.5 2.5 5.74 2.5 8.5C2.5 11.26 4.74 13.5 7.5 13.5H13.5C16.26 13.5 18.5 15.74 18.5 18.5C18.5 21.26 16.26 23.5 13.5 23.5H7.5"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M7.5 8.5H13.5"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                            <path
                              d="M7.5 18.5H13.5"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span className="text-text-dark">PayPal (Coming Soon)</span>
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-cta-yellow text-text-dark hover:bg-cta-yellow/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    `Pay $${total.toFixed(2)}`
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card className="border-2 border-accent-green/20">
            <CardHeader>
              <CardTitle className="text-text-dark">Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="rounded-full bg-accent-green/20 p-2">
                  <Wrench className="h-4 w-4 text-accent-green" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-text-dark">{serviceDetails.name}</h3>
                  <p className="text-sm text-text-dark/70">{serviceDetails.provider}</p>
                </div>
              </div>

              {/* Discount Code Prompt */}
              <DiscountCodePrompt subtotal={subtotal} onDiscountApplied={handleDiscountApplied} />

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-text-dark/70">Service Price</span>
                  <span className="text-text-dark">${serviceDetails.basePrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-text-dark/70">Service Fee</span>
                  <span className="text-text-dark">${serviceDetails.serviceFee.toFixed(2)}</span>
                </div>
                {discountAmount > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-green-600">Discount</span>
                    <span className="text-green-600">-${discountAmount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm">
                  <span className="text-text-dark/70">Tax</span>
                  <span className="text-text-dark">${serviceDetails.tax.toFixed(2)}</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between font-medium">
                  <span className="text-text-dark">Total</span>
                  <span className="text-text-dark">${total.toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

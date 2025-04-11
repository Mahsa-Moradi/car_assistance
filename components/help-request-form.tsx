"use client"

import type React from "react"

import { useState } from "react"
import { Loader2, MapPin, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export function HelpRequestForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    location: "",
    assistanceType: "",
    details: "",
    name: "",
    phone: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          location: "",
          assistanceType: "",
          details: "",
          name: "",
          phone: "",
        })
      }, 5000)
    }, 1500)
  }

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords
          setFormData((prev) => ({
            ...prev,
            location: `Lat: ${latitude.toFixed(6)}, Long: ${longitude.toFixed(6)}`,
          }))
        },
        (error) => {
          console.error("Error getting location:", error)
          alert("Unable to retrieve your location. Please enter it manually.")
        },
      )
    } else {
      alert("Geolocation is not supported by your browser. Please enter your location manually.")
    }
  }

  return (
    <section id="help-request-form" className="w-full py-12 md:py-24 bg-button-blue/10">
      <div className="container px-4 md:px-6 max-w-[70%] mx-auto">
        <div className="flex flex-col items-center text-center space-y-4 mb-8">
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-accent-green text-text-dark">
            Emergency Assistance
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-text-dark">Need Help Now?</h2>
          <p className="max-w-[700px] text-text-dark/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Fill out this form for immediate roadside assistance. Our team will respond quickly to your request.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto border-2 border-accent-green/20 bg-bg-lavender">
          <CardHeader>
            <CardTitle className="text-text-dark">Request Roadside Assistance</CardTitle>
            <CardDescription className="text-text-dark/70">
              We'll dispatch help to your location as soon as possible
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-8 space-y-4">
                <div className="rounded-full bg-accent-green/20 p-4">
                  <Wrench className="h-8 w-8 text-accent-green" />
                </div>
                <h3 className="text-xl font-bold text-text-dark">Help is on the way!</h3>
                <p className="text-center text-text-dark/70 max-w-md">
                  We've received your request and our team will contact you shortly. Please keep your phone nearby.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="location" className="text-text-dark">
                    Your Location
                  </Label>
                  <div className="flex gap-2">
                    <Input
                      id="location"
                      name="location"
                      placeholder="Enter your address or coordinates"
                      required
                      value={formData.location}
                      onChange={handleChange}
                      className="flex-1 bg-bg-lavender border-accent-green/20 text-text-dark"
                    />
                    <Button
                      type="button"
                      onClick={handleGetLocation}
                      variant="outline"
                      className="border-accent-green/20"
                    >
                      <MapPin className="h-4 w-4 text-accent-green" />
                    </Button>
                  </div>
                  <p className="text-xs text-text-dark/70">Click the pin icon to use your current location</p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="assistanceType" className="text-text-dark">
                    Type of Assistance Needed
                  </Label>
                  <Select
                    value={formData.assistanceType}
                    onValueChange={(value) => handleSelectChange("assistanceType", value)}
                    required
                  >
                    <SelectTrigger className="bg-bg-lavender border-accent-green/20 text-text-dark">
                      <SelectValue placeholder="Select assistance type" />
                    </SelectTrigger>
                    <SelectContent className="bg-bg-lavender text-text-dark">
                      <SelectItem value="breakdown">Car Breakdown</SelectItem>
                      <SelectItem value="flat-tire">Flat Tire</SelectItem>
                      <SelectItem value="battery">Dead Battery</SelectItem>
                      <SelectItem value="fuel">Out of Fuel</SelectItem>
                      <SelectItem value="tow">Need Tow Truck</SelectItem>
                      <SelectItem value="lockout">Locked Out of Vehicle</SelectItem>
                      <SelectItem value="other">Other Emergency</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="details" className="text-text-dark">
                    Additional Details
                  </Label>
                  <Textarea
                    id="details"
                    name="details"
                    placeholder="Please provide any additional information about your situation"
                    rows={3}
                    value={formData.details}
                    onChange={handleChange}
                    className="bg-bg-lavender border-accent-green/20 text-text-dark"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-text-dark">
                      Your Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-bg-lavender border-accent-green/20 text-text-dark"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-text-dark">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="bg-bg-lavender border-accent-green/20 text-text-dark"
                    />
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-cta-yellow text-text-dark hover:bg-cta-yellow/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Request Emergency Assistance"
                  )}
                </Button>
              </form>
            )}
          </CardContent>
          <CardFooter className="flex justify-center border-t pt-4">
            <p className="text-sm text-text-dark/70">
              For immediate assistance, call{" "}
              <a href="tel:+989120379961" className="font-medium text-accent-green hover:underline">
                +989120379961
              </a>
            </p>
          </CardFooter>
        </Card>
      </div>
    </section>
  )
}

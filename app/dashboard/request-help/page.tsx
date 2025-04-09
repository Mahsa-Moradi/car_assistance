"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Car, Loader2, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function RequestHelpPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    issueType: "",
    description: "",
    location: "",
    vehicleType: "",
    vehicleModel: "",
    vehicleYear: "",
    serviceType: "standard",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleServiceTypeChange = (value: string) => {
    setFormData((prev) => ({ ...prev, serviceType: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      router.push("/dashboard")
    }, 1500)
  }

  const nextStep = () => setStep((prev) => prev + 1)
  const prevStep = () => setStep((prev) => prev - 1)

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold tracking-tight mb-6">Request Assistance</h2>

      <Card>
        <CardHeader>
          <CardTitle>
            {step === 1 && "Describe Your Issue"}
            {step === 2 && "Vehicle Information"}
            {step === 3 && "Service Options"}
          </CardTitle>
          <CardDescription>
            {step === 1 && "Tell us what's wrong with your vehicle"}
            {step === 2 && "Provide details about your vehicle"}
            {step === 3 && "Choose your service preferences"}
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            {step === 1 && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="issueType">Type of Issue</Label>
                  <Select onValueChange={(value) => handleSelectChange("issueType", value)} value={formData.issueType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select issue type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="flat-tire">Flat Tire</SelectItem>
                      <SelectItem value="battery">Battery Issues</SelectItem>
                      <SelectItem value="engine">Engine Problems</SelectItem>
                      <SelectItem value="keys">Locked Out / Lost Keys</SelectItem>
                      <SelectItem value="fuel">Out of Fuel</SelectItem>
                      <SelectItem value="accident">Accident / Towing Needed</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    name="description"
                    placeholder="Please describe your issue in detail"
                    rows={4}
                    value={formData.description}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="location">Your Location</Label>
                  <div className="flex gap-2">
                    <Input
                      id="location"
                      name="location"
                      placeholder="Enter your address or location"
                      value={formData.location}
                      onChange={handleChange}
                      className="flex-1"
                    />
                    <Button type="button" variant="outline" size="icon">
                      <MapPin className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-muted-foreground">Or use the button to share your current location</p>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="vehicleType">Vehicle Type</Label>
                  <Select
                    onValueChange={(value) => handleSelectChange("vehicleType", value)}
                    value={formData.vehicleType}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select vehicle type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sedan">Sedan</SelectItem>
                      <SelectItem value="suv">SUV</SelectItem>
                      <SelectItem value="truck">Truck</SelectItem>
                      <SelectItem value="van">Van</SelectItem>
                      <SelectItem value="motorcycle">Motorcycle</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="vehicleModel">Make and Model</Label>
                  <Input
                    id="vehicleModel"
                    name="vehicleModel"
                    placeholder="e.g., Toyota Camry"
                    value={formData.vehicleModel}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="vehicleYear">Year</Label>
                  <Input
                    id="vehicleYear"
                    name="vehicleYear"
                    placeholder="e.g., 2019"
                    value={formData.vehicleYear}
                    onChange={handleChange}
                  />
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <div className="space-y-2">
                  <Label>Service Type</Label>
                  <RadioGroup
                    defaultValue={formData.serviceType}
                    onValueChange={handleServiceTypeChange}
                    className="flex flex-col space-y-3"
                  >
                    <div className="flex items-start space-x-3 space-y-0">
                      <RadioGroupItem value="standard" id="standard" className="mt-1" />
                      <div className="flex flex-col">
                        <Label htmlFor="standard" className="font-medium">
                          Standard Service
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Connect with the next available service provider in your area.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 space-y-0">
                      <RadioGroupItem value="premium" id="premium" className="mt-1" />
                      <div className="flex flex-col">
                        <Label htmlFor="premium" className="font-medium">
                          Premium Service (+$20)
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          Priority service with highly-rated providers and faster response times.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3 space-y-0">
                      <RadioGroupItem value="specialized" id="specialized" className="mt-1" />
                      <div className="flex flex-col">
                        <Label htmlFor="specialized" className="font-medium">
                          Specialized Service (+$35)
                        </Label>
                        <p className="text-sm text-muted-foreground">
                          For complex issues requiring specialized tools or expertise.
                        </p>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                <div className="rounded-lg border p-4 bg-muted/50 mt-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Car className="h-5 w-5 text-primary" />
                    <h3 className="font-medium">Estimated Service Details</h3>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Estimated arrival time:</span>
                      <span className="font-medium">15-30 minutes</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Available providers nearby:</span>
                      <span className="font-medium">8</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Estimated service cost:</span>
                      <span className="font-medium">$75 - $120</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Note: Final cost will depend on the specific service required and provider rates.
                    </p>
                  </div>
                </div>
              </>
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            {step > 1 ? (
              <Button type="button" variant="outline" onClick={prevStep}>
                Back
              </Button>
            ) : (
              <div></div>
            )}

            {step < 3 ? (
              <Button type="button" onClick={nextStep}>
                Next
              </Button>
            ) : (
              <Button type="submit" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Request"
                )}
              </Button>
            )}
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

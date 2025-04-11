"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Car, Clock, MapPin, Phone, Shield, Truck, Wrench } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LiveTrackingMap } from "@/components/live-tracking-map"

export default function ActiveRequestPage() {
  const [activeTab, setActiveTab] = useState("tracking")

  // Mock request data
  const requestData = {
    id: "REQ-2023-04-11",
    status: "In Progress",
    type: "Engine Won't Start",
    createdAt: "Today at 2:15 PM",
    location: "123 Main St, Los Angeles, CA",
    description: "Car won't start. Battery seems fine but engine doesn't turn over.",
    provider: {
      name: "Mike's Auto Repair",
      rating: 4.8,
      reviews: 42,
      phone: "+1 (555) 123-4567",
    },
    vehicle: {
      make: "Toyota",
      model: "Camry",
      year: "2019",
      color: "Silver",
    },
    service: {
      type: "Standard",
      price: "$85.00",
      eta: "15 minutes",
    },
  }

  return (
    <div className="container mx-auto max-w-5xl">
      <div className="mb-6 flex items-center gap-2">
        <Link href="/dashboard">
          <Button variant="ghost" size="icon" className="mr-2">
            <ArrowLeft className="h-5 w-5" />
            <span className="sr-only">Back</span>
          </Button>
        </Link>
        <h1 className="text-2xl font-bold">Active Request</h1>
        <div className="ml-auto flex items-center gap-2">
          <div className="rounded-full bg-accent-green/20 px-3 py-1 text-xs font-medium text-accent-green">
            {requestData.status}
          </div>
          <Button variant="outline" size="sm" className="gap-1">
            <Phone className="h-4 w-4" />
            Call Provider
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-[1fr_350px]">
        <div className="space-y-6">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="tracking">Live Tracking</TabsTrigger>
              <TabsTrigger value="details">Request Details</TabsTrigger>
            </TabsList>
            <TabsContent value="tracking" className="mt-4">
              <LiveTrackingMap />
              <Card className="mt-4">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Clock className="h-5 w-5 text-accent-green" />
                      ETA Information
                    </CardTitle>
                    <div className="rounded-full bg-accent-green/20 px-3 py-1 text-xs font-medium text-accent-green">
                      Live Updates
                    </div>
                  </div>
                  <CardDescription>Real-time arrival estimates based on current traffic conditions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between rounded-lg border border-accent-green/20 bg-bg-lavender p-3">
                      <span className="font-medium text-text-dark">Original Estimate:</span>
                      <span className="text-text-dark">15 minutes</span>
                    </div>
                    <div className="flex items-center justify-between rounded-lg border border-accent-green/20 bg-bg-lavender p-3">
                      <span className="font-medium text-text-dark">Current Traffic:</span>
                      <div className="flex items-center gap-2">
                        <div className="h-3 w-3 rounded-full bg-orange-500" />
                        <span className="text-text-dark">Moderate</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between rounded-lg border border-accent-green/20 bg-bg-lavender p-3">
                      <span className="font-medium text-text-dark">Distance Remaining:</span>
                      <span className="text-text-dark">1.2 miles</span>
                    </div>
                  </div>
                  <div className="mt-4 text-sm text-text-dark/70">
                    <p>
                      Our ETA is continuously updated based on the agent's real-time location and current traffic
                      conditions. You'll be notified of any significant changes to the arrival time.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="details" className="mt-4">
              <Card>
                <CardHeader>
                  <CardTitle>Request Information</CardTitle>
                  <CardDescription>Details about your service request</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-3 md:grid-cols-2">
                    <div>
                      <p className="text-sm font-medium text-text-dark">Request ID</p>
                      <p className="text-sm text-text-dark/70">{requestData.id}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text-dark">Created</p>
                      <p className="text-sm text-text-dark/70">{requestData.createdAt}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text-dark">Service Type</p>
                      <p className="text-sm text-text-dark/70">{requestData.type}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text-dark">Service Level</p>
                      <p className="text-sm text-text-dark/70">{requestData.service.type}</p>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <p className="text-sm font-medium text-text-dark">Description</p>
                    <p className="text-sm text-text-dark/70">{requestData.description}</p>
                  </div>

                  <div>
                    <p className="text-sm font-medium text-text-dark">Location</p>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-accent-green" />
                      <p className="text-sm text-text-dark/70">{requestData.location}</p>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <p className="text-sm font-medium text-text-dark">Vehicle Information</p>
                    <div className="mt-2 grid gap-2 md:grid-cols-2">
                      <div className="flex items-center gap-2">
                        <Car className="h-4 w-4 text-accent-green" />
                        <p className="text-sm text-text-dark/70">
                          {requestData.vehicle.year} {requestData.vehicle.make} {requestData.vehicle.model}
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 rounded-full bg-gray-300" />
                        <p className="text-sm text-text-dark/70">{requestData.vehicle.color}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <Card>
            <CardHeader>
              <CardTitle>Service Provider</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 rounded-full bg-button-blue/20 flex items-center justify-center">
                  <Truck className="h-8 w-8 text-button-blue" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-medium">{requestData.provider.name}</h3>
                  <div className="flex items-center gap-1">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          className={`h-4 w-4 ${
                            star <= Math.floor(requestData.provider.rating)
                              ? "text-yellow-500 fill-current"
                              : "text-gray-300"
                          }`}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-sm text-text-dark/70">
                      {requestData.provider.rating} ({requestData.provider.reviews} reviews)
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" className="gap-1">
                <Phone className="h-4 w-4" />
                Call
              </Button>
              <Button variant="outline" className="gap-1">
                Message
              </Button>
              <Button variant="outline" className="gap-1">
                View Profile
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Service Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-accent-green/20 p-2">
                  <Wrench className="h-5 w-5 text-accent-green" />
                </div>
                <div>
                  <h3 className="font-medium">{requestData.type}</h3>
                  <p className="text-sm text-text-dark/70">{requestData.service.type} Service</p>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-text-dark/70">Service Fee</span>
                  <span className="text-sm font-medium">{requestData.service.price}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-text-dark/70">Platform Fee</span>
                  <span className="text-sm font-medium">$5.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-text-dark/70">Tax</span>
                  <span className="text-sm font-medium">$7.20</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="font-medium">Total</span>
                  <span className="font-medium">$97.20</span>
                </div>
              </div>

              <div className="rounded-lg border border-accent-green/20 bg-bg-lavender p-3">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-accent-green" />
                  <div>
                    <p className="text-sm font-medium">Payment Protected</p>
                    <p className="text-xs text-text-dark/70">You'll only be charged after the service is completed</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Estimated Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div className="h-6 w-6 rounded-full bg-accent-green flex items-center justify-center text-white text-xs">
                      ✓
                    </div>
                    <div className="h-full w-0.5 bg-accent-green/20"></div>
                  </div>
                  <div>
                    <p className="font-medium">Request Submitted</p>
                    <p className="text-sm text-text-dark/70">Today at 2:15 PM</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div className="h-6 w-6 rounded-full bg-accent-green flex items-center justify-center text-white text-xs">
                      ✓
                    </div>
                    <div className="h-full w-0.5 bg-accent-green/20"></div>
                  </div>
                  <div>
                    <p className="font-medium">Provider Assigned</p>
                    <p className="text-sm text-text-dark/70">Today at 2:17 PM</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div className="h-6 w-6 rounded-full bg-button-blue flex items-center justify-center">
                      <Clock className="h-3 w-3 text-text-dark" />
                    </div>
                    <div className="h-full w-0.5 bg-accent-green/20"></div>
                  </div>
                  <div>
                    <p className="font-medium">Provider En Route</p>
                    <p className="text-sm text-text-dark/70">Today at 2:20 PM</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <div className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center text-gray-400 text-xs">
                      4
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-text-dark/70">Service Completed</p>
                    <p className="text-sm text-text-dark/70">Estimated: Today at 3:00 PM</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Button variant="outline" className="w-full">
            Cancel Request
          </Button>
        </div>
      </div>
    </div>
  )
}

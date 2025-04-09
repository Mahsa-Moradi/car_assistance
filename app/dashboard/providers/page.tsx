"use client"

import type React from "react"

import { useState } from "react"
import { Car, Filter, MapPin, Search, Star } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock data for service providers
const providers = [
  {
    id: 1,
    name: "Mike's Auto Repair",
    type: "Mechanic",
    rating: 4.8,
    reviews: 42,
    distance: 2.3,
    services: ["Engine Repair", "Battery Service", "Tire Change"],
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "Quick Tow Services",
    type: "Towing",
    rating: 4.9,
    reviews: 78,
    distance: 3.1,
    services: ["Towing", "Jump Start", "Lockout Service"],
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "Sarah's Mobile Mechanics",
    type: "Mechanic",
    rating: 4.7,
    reviews: 36,
    distance: 4.5,
    services: ["Diagnostics", "Oil Change", "Brake Repair"],
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 4,
    name: "City Towing Inc.",
    type: "Towing",
    rating: 4.6,
    reviews: 92,
    distance: 5.2,
    services: ["Towing", "Winching", "Flatbed Transport"],
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 5,
    name: "John's Roadside Assistance",
    type: "Mechanic",
    rating: 4.9,
    reviews: 64,
    distance: 6.8,
    services: ["Tire Change", "Battery Service", "Fuel Delivery"],
    image: "/placeholder.svg?height=80&width=80",
  },
]

export default function ProvidersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [serviceType, setServiceType] = useState("all")
  const [maxDistance, setMaxDistance] = useState([10])
  const [filteredProviders, setFilteredProviders] = useState(providers)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()

    // Filter providers based on search term, service type, and distance
    const filtered = providers.filter((provider) => {
      const matchesSearch =
        provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        provider.services.some((service) => service.toLowerCase().includes(searchTerm.toLowerCase()))
      const matchesType = serviceType === "all" || provider.type.toLowerCase() === serviceType.toLowerCase()
      const matchesDistance = provider.distance <= maxDistance[0]

      return matchesSearch && matchesType && matchesDistance
    })

    setFilteredProviders(filtered)
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Nearby Service Providers</h2>
        <p className="text-muted-foreground">Find and connect with service providers in your area</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Search Providers</CardTitle>
          <CardDescription>Filter by service type, distance, and more</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSearch} className="space-y-4">
            <div className="flex flex-col gap-4 md:flex-row">
              <div className="flex-1">
                <Input
                  placeholder="Search by name or service..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full"
                  icon={Search}
                />
              </div>
              <div className="w-full md:w-[180px]">
                <Select value={serviceType} onValueChange={setServiceType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Service Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="mechanic">Mechanic</SelectItem>
                    <SelectItem value="towing">Towing</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label>Maximum Distance: {maxDistance[0]} miles</Label>
              </div>
              <Slider defaultValue={[10]} max={20} step={1} value={maxDistance} onValueChange={setMaxDistance} />
            </div>

            <Button type="submit" className="w-full md:w-auto">
              <Filter className="mr-2 h-4 w-4" />
              Apply Filters
            </Button>
          </form>
        </CardContent>
      </Card>

      <Tabs defaultValue="list" className="space-y-4">
        <TabsList>
          <TabsTrigger value="list">List View</TabsTrigger>
          <TabsTrigger value="map">Map View</TabsTrigger>
        </TabsList>

        <TabsContent value="list" className="space-y-4">
          {filteredProviders.length > 0 ? (
            filteredProviders.map((provider) => (
              <Card key={provider.id}>
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4 md:flex-row md:items-center">
                    <div className="flex-shrink-0">
                      <div className="h-20 w-20 rounded-full bg-muted flex items-center justify-center overflow-hidden">
                        <img
                          src={provider.image || "/placeholder.svg"}
                          alt={provider.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                    <div className="flex-1 space-y-1">
                      <h3 className="font-bold text-lg">{provider.name}</h3>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Car className="mr-1 h-4 w-4" />
                        <span>{provider.type}</span>
                        <span className="mx-2">•</span>
                        <MapPin className="mr-1 h-4 w-4" />
                        <span>{provider.distance} miles away</span>
                      </div>
                      <div className="flex items-center">
                        <div className="flex items-center">
                          <Star className="h-4 w-4 fill-current text-yellow-500" />
                          <span className="ml-1 font-medium">{provider.rating}</span>
                        </div>
                        <span className="mx-1 text-muted-foreground">•</span>
                        <span className="text-sm text-muted-foreground">{provider.reviews} reviews</span>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {provider.services.map((service, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 md:items-end">
                      <Button>Request Service</Button>
                      <Button variant="outline">View Profile</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No service providers found matching your criteria.</p>
              <Button
                variant="link"
                onClick={() => {
                  setSearchTerm("")
                  setServiceType("all")
                  setMaxDistance([10])
                  setFilteredProviders(providers)
                }}
              >
                Reset filters
              </Button>
            </div>
          )}
        </TabsContent>

        <TabsContent value="map">
          <Card>
            <CardContent className="p-6">
              <div className="rounded-lg border h-[500px] flex items-center justify-center bg-muted/50">
                <p className="text-muted-foreground">Interactive map would be displayed here with provider locations</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
      {children}
    </div>
  )
}

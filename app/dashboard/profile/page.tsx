"use client"

import type React from "react"

import { useState } from "react"
import { Clock, Edit, MapPin, Save, Star, Upload, Wrench } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [profileData, setProfileData] = useState({
    name: "Mike's Auto Repair",
    email: "mike@autorepair.com",
    phone: "(555) 123-4567",
    address: "123 Main St, Anytown, USA",
    bio: "Professional mechanic with over 15 years of experience. Specializing in emergency roadside repairs, battery replacements, and tire changes.",
    serviceRadius: "10",
    serviceTypes: ["Tire Change", "Battery Service", "Engine Repair"],
    availability: true,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setProfileData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setProfileData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSwitchChange = (checked: boolean) => {
    setProfileData((prev) => ({ ...prev, availability: checked }))
  }

  const toggleEdit = () => {
    setIsEditing(!isEditing)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Service Provider Profile</h2>
          <p className="text-muted-foreground">Manage your profile and service information</p>
        </div>
        <Button onClick={toggleEdit} variant={isEditing ? "default" : "outline"}>
          {isEditing ? (
            <>
              <Save className="mr-2 h-4 w-4" />
              Save Changes
            </>
          ) : (
            <>
              <Edit className="mr-2 h-4 w-4" />
              Edit Profile
            </>
          )}
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-[1fr_300px]">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
              <CardDescription>Your public profile information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="md:w-[120px] flex flex-col items-center">
                  <div className="h-24 w-24 rounded-full bg-muted flex items-center justify-center overflow-hidden">
                    <img
                      src="/placeholder.svg?height=96&width=96"
                      alt="Profile"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  {isEditing && (
                    <Button variant="outline" size="sm" className="mt-2">
                      <Upload className="mr-2 h-4 w-4" />
                      Upload
                    </Button>
                  )}
                </div>
                <div className="flex-1 space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name">Business Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={profileData.name}
                        onChange={handleChange}
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={profileData.email}
                        onChange={handleChange}
                        disabled={!isEditing}
                      />
                    </div>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={profileData.phone}
                        onChange={handleChange}
                        disabled={!isEditing}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Input
                        id="address"
                        name="address"
                        value={profileData.address}
                        onChange={handleChange}
                        disabled={!isEditing}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      name="bio"
                      rows={4}
                      value={profileData.bio}
                      onChange={handleChange}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Service Information</CardTitle>
              <CardDescription>Details about the services you provide</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="serviceRadius">Service Radius (miles)</Label>
                  <Input
                    id="serviceRadius"
                    name="serviceRadius"
                    type="number"
                    value={profileData.serviceRadius}
                    onChange={handleChange}
                    disabled={!isEditing}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Service Types</Label>
                  <div className="flex flex-wrap gap-2">
                    {profileData.serviceTypes.map((service, index) => (
                      <div
                        key={index}
                        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold"
                      >
                        {service}
                        {isEditing && <button className="ml-1 text-muted-foreground hover:text-foreground">×</button>}
                      </div>
                    ))}
                    {isEditing && (
                      <Button variant="outline" size="sm" className="rounded-full h-6">
                        + Add
                      </Button>
                    )}
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="availability">Available for Service</Label>
                  <Switch
                    id="availability"
                    checked={profileData.availability}
                    onCheckedChange={handleSwitchChange}
                    disabled={!isEditing}
                  />
                </div>
                <p className="text-sm text-muted-foreground">When turned off, you won't receive new service requests</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Vehicle Information</CardTitle>
              <CardDescription>Details about your service vehicle</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="space-y-2">
                  <Label htmlFor="vehicleType">Vehicle Type</Label>
                  <Select disabled={!isEditing} defaultValue="truck">
                    <SelectTrigger>
                      <SelectValue placeholder="Select vehicle type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="truck">Truck</SelectItem>
                      <SelectItem value="van">Van</SelectItem>
                      <SelectItem value="suv">SUV</SelectItem>
                      <SelectItem value="car">Car</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="vehicleModel">Make and Model</Label>
                  <Input id="vehicleModel" defaultValue="Ford F-150" disabled={!isEditing} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="vehicleYear">Year</Label>
                  <Input id="vehicleYear" defaultValue="2020" disabled={!isEditing} />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Equipment</Label>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                    Jump Starter
                    {isEditing && <button className="ml-1 text-muted-foreground hover:text-foreground">×</button>}
                  </div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                    Tire Changing Kit
                    {isEditing && <button className="ml-1 text-muted-foreground hover:text-foreground">×</button>}
                  </div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                    Basic Tools
                    {isEditing && <button className="ml-1 text-muted-foreground hover:text-foreground">×</button>}
                  </div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">
                    Diagnostic Equipment
                    {isEditing && <button className="ml-1 text-muted-foreground hover:text-foreground">×</button>}
                  </div>
                  {isEditing && (
                    <Button variant="outline" size="sm" className="rounded-full h-6">
                      + Add
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Profile Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500" />
                <div className="flex-1">
                  <div className="flex items-baseline justify-between">
                    <span className="font-medium">Rating</span>
                    <span className="text-lg font-bold">4.8/5</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Based on 42 reviews</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Wrench className="h-5 w-5 text-primary" />
                <div className="flex-1">
                  <div className="flex items-baseline justify-between">
                    <span className="font-medium">Completed Jobs</span>
                    <span className="text-lg font-bold">128</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Since joining</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <div className="flex-1">
                  <div className="flex items-baseline justify-between">
                    <span className="font-medium">Response Time</span>
                    <span className="text-lg font-bold">5 min</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Average</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <div className="flex-1">
                  <div className="flex items-baseline justify-between">
                    <span className="font-medium">Service Area</span>
                    <span className="text-lg font-bold">10 mi</span>
                  </div>
                  <p className="text-xs text-muted-foreground">Radius from base</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Reviews</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Sarah Johnson</span>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-4 w-4 ${star <= 5 ? "text-yellow-500 fill-current" : "text-muted"}`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm">Quick response and fixed my flat tire in no time. Very professional!</p>
                  <p className="text-xs text-muted-foreground">2 days ago</p>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">Michael Brown</span>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-4 w-4 ${star <= 4 ? "text-yellow-500 fill-current" : "text-muted"}`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-sm">Helped me with a dead battery. Arrived within 20 minutes.</p>
                  <p className="text-xs text-muted-foreground">1 week ago</p>
                </div>
              </div>
              <Button variant="link" className="px-0">
                View all reviews
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Earnings Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm">This Week</span>
                  <span className="font-medium">$345.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">This Month</span>
                  <span className="font-medium">$1,245.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Total Earnings</span>
                  <span className="font-medium">$12,480.00</span>
                </div>
              </div>
              <Button variant="link" className="px-0">
                View earnings details
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

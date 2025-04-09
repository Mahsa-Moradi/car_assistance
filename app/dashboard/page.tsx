import Link from "next/link"
import { ArrowRight, Car, Clock, MapPin, Wrench } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">Welcome back! Here's an overview of your activity.</p>
      </div>

      <Tabs defaultValue="car-owner" className="space-y-4">
        <TabsList>
          <TabsTrigger value="car-owner">Car Owner View</TabsTrigger>
          <TabsTrigger value="service-provider">Service Provider View</TabsTrigger>
        </TabsList>

        <TabsContent value="car-owner" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Requests</CardTitle>
                <Wrench className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">12</div>
                <p className="text-xs text-muted-foreground">+2 from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Requests</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1</div>
                <p className="text-xs text-muted-foreground">Currently in progress</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Nearby Providers</CardTitle>
                <MapPin className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8</div>
                <p className="text-xs text-muted-foreground">Within 10 miles</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$1,234</div>
                <p className="text-xs text-muted-foreground">+$340 from last month</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <Wrench className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">Flat Tire Repair</p>
                      <p className="text-sm text-muted-foreground">Completed yesterday by John's Roadside Assistance</p>
                    </div>
                    <div className="text-sm font-medium">$85.00</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <Car className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">Battery Jump Start</p>
                      <p className="text-sm text-muted-foreground">Completed 3 days ago by Quick Jump Services</p>
                    </div>
                    <div className="text-sm font-medium">$45.00</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <Car className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">Towing Service</p>
                      <p className="text-sm text-muted-foreground">Completed last week by City Towing Inc.</p>
                    </div>
                    <div className="text-sm font-medium">$120.00</div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/dashboard/history">
                  <Button variant="ghost" className="gap-1">
                    View all history
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Current Request</CardTitle>
                <CardDescription>Your active service request</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <Wrench className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">Engine Won't Start</p>
                      <p className="text-sm text-muted-foreground">Mike's Auto Repair is on the way</p>
                    </div>
                    <div className="text-sm font-medium text-green-600">Active</div>
                  </div>
                  <div className="rounded-lg border p-3">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Estimated arrival:</span>
                      <span className="text-sm">15 minutes</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Provider rating:</span>
                      <span className="text-sm flex items-center">
                        4.8
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-4 h-4 text-yellow-500 ml-1"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/dashboard/request-help">
                  <Button className="w-full">Track Request</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Nearby Service Providers</CardTitle>
              <CardDescription>Service providers in your area</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg border h-[300px] flex items-center justify-center bg-muted/50">
                <p className="text-muted-foreground">Interactive map would be displayed here</p>
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/dashboard/providers">
                <Button variant="outline" className="gap-1">
                  View all providers
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="service-provider" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Jobs</CardTitle>
                <Wrench className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">48</div>
                <p className="text-xs text-muted-foreground">+8 from last month</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Jobs</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2</div>
                <p className="text-xs text-muted-foreground">Currently in progress</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Rating</CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 text-muted-foreground"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">4.9</div>
                <p className="text-xs text-muted-foreground">Based on 42 reviews</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Earnings</CardTitle>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$4,320</div>
                <p className="text-xs text-muted-foreground">+$720 from last month</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Recent Jobs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <Wrench className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">Battery Replacement</p>
                      <p className="text-sm text-muted-foreground">Completed yesterday for Sarah Johnson</p>
                    </div>
                    <div className="text-sm font-medium">$120.00</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <Car className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">Flat Tire Change</p>
                      <p className="text-sm text-muted-foreground">Completed 2 days ago for Michael Brown</p>
                    </div>
                    <div className="text-sm font-medium">$75.00</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <Car className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">Towing Service</p>
                      <p className="text-sm text-muted-foreground">Completed 3 days ago for David Wilson</p>
                    </div>
                    <div className="text-sm font-medium">$150.00</div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/dashboard/history">
                  <Button variant="ghost" className="gap-1">
                    View all jobs
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Current Jobs</CardTitle>
                <CardDescription>Your active service requests</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <Wrench className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">Engine Won't Start</p>
                      <p className="text-sm text-muted-foreground">En route to James Taylor</p>
                    </div>
                    <div className="text-sm font-medium text-green-600">Active</div>
                  </div>
                  <div className="rounded-lg border p-3">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Customer location:</span>
                      <span className="text-sm">2.3 miles away</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium">Estimated arrival:</span>
                      <span className="text-sm">15 minutes</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-primary/10 p-2">
                      <Car className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">Flat Tire</p>
                      <p className="text-sm text-muted-foreground">Scheduled for 3:00 PM with Lisa Chen</p>
                    </div>
                    <div className="text-sm font-medium text-yellow-600">Scheduled</div>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Link href="/dashboard/requests">
                  <Button className="w-full">Manage Jobs</Button>
                </Link>
              </CardFooter>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Your Service Area</CardTitle>
              <CardDescription>Your current location and service radius</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg border h-[300px] flex items-center justify-center bg-muted/50">
                <p className="text-muted-foreground">Interactive map would be displayed here</p>
              </div>
            </CardContent>
            <CardFooter>
              <Link href="/dashboard/location">
                <Button variant="outline" className="gap-1">
                  Update location
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

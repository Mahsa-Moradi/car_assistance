import { ArrowRight, Clock, Percent, Shield, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export function SpecialOffers() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 max-w-[70%] mx-auto">
        <div className="flex flex-col items-center text-center space-y-4 mb-8">
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-accent-green text-text-dark">
            Limited Time
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-text-dark">Special Offers</h2>
          <p className="max-w-[700px] text-text-dark/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Take advantage of our exclusive deals and save on roadside assistance services
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* First-Time User Offer */}
          <Card className="bg-bg-lavender border-2 border-accent-green/20 overflow-hidden relative">
            <div className="absolute top-0 right-0">
              <div className="bg-cta-yellow text-text-dark font-medium py-1 px-3 rounded-bl-lg">50% OFF</div>
            </div>
            <CardHeader>
              <div className="rounded-full bg-accent-green/20 p-3 w-fit">
                <Tag className="h-6 w-6 text-accent-green" />
              </div>
              <CardTitle className="text-text-dark mt-2">First-Time User Discount</CardTitle>
              <CardDescription className="text-text-dark/70">
                New to RoadAssist? Get 50% off your first service request
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-text-dark/70">
                <li className="flex items-center gap-2">
                  <div className="rounded-full bg-accent-green/20 p-1">
                    <Percent className="h-3 w-3 text-accent-green" />
                  </div>
                  <span>Valid for all service types</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="rounded-full bg-accent-green/20 p-1">
                    <Percent className="h-3 w-3 text-accent-green" />
                  </div>
                  <span>No minimum service fee</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="rounded-full bg-accent-green/20 p-1">
                    <Percent className="h-3 w-3 text-accent-green" />
                  </div>
                  <span>Automatically applied at checkout</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/signup" className="w-full">
                <Button className="w-full bg-button-blue text-text-dark hover:bg-button-blue/90">
                  Sign Up Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>

          {/* Premium Membership */}
          <Card className="bg-bg-lavender border-2 border-accent-green/20 overflow-hidden relative">
            <div className="absolute top-0 right-0">
              <div className="bg-accent-green text-text-dark font-medium py-1 px-3 rounded-bl-lg">POPULAR</div>
            </div>
            <CardHeader>
              <div className="rounded-full bg-accent-green/20 p-3 w-fit">
                <Shield className="h-6 w-6 text-accent-green" />
              </div>
              <CardTitle className="text-text-dark mt-2">Premium Membership</CardTitle>
              <CardDescription className="text-text-dark/70">
                Join our premium plan and save on every service
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <span className="text-3xl font-bold text-text-dark">$9.99</span>
                <span className="text-text-dark/70">/month</span>
              </div>
              <ul className="space-y-2 text-text-dark/70">
                <li className="flex items-center gap-2">
                  <div className="rounded-full bg-accent-green/20 p-1">
                    <Percent className="h-3 w-3 text-accent-green" />
                  </div>
                  <span>25% off all service requests</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="rounded-full bg-accent-green/20 p-1">
                    <Percent className="h-3 w-3 text-accent-green" />
                  </div>
                  <span>Priority response time</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="rounded-full bg-accent-green/20 p-1">
                    <Percent className="h-3 w-3 text-accent-green" />
                  </div>
                  <span>Free towing up to 10 miles</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/signup?plan=premium" className="w-full">
                <Button className="w-full bg-cta-yellow text-text-dark hover:bg-cta-yellow/90">
                  Get Premium
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>

          {/* Limited Time Offer */}
          <Card className="bg-bg-lavender border-2 border-accent-green/20 overflow-hidden relative">
            <div className="absolute top-0 right-0">
              <div className="bg-button-blue text-text-dark font-medium py-1 px-3 rounded-bl-lg">LIMITED</div>
            </div>
            <CardHeader>
              <div className="rounded-full bg-accent-green/20 p-3 w-fit">
                <Clock className="h-6 w-6 text-accent-green" />
              </div>
              <CardTitle className="text-text-dark mt-2">Summer Special</CardTitle>
              <CardDescription className="text-text-dark/70">Limited time offer for the summer season</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-text-dark/70">
                <li className="flex items-center gap-2">
                  <div className="rounded-full bg-accent-green/20 p-1">
                    <Percent className="h-3 w-3 text-accent-green" />
                  </div>
                  <span>30% off battery replacement</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="rounded-full bg-accent-green/20 p-1">
                    <Percent className="h-3 w-3 text-accent-green" />
                  </div>
                  <span>20% off tire changes</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="rounded-full bg-accent-green/20 p-1">
                    <Percent className="h-3 w-3 text-accent-green" />
                  </div>
                  <span>Offer ends September 30, 2023</span>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/dashboard/request-help?promo=SUMMER23" className="w-full">
                <Button className="w-full bg-button-blue text-text-dark hover:bg-button-blue/90">
                  Claim Offer
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}

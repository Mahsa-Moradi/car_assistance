import Image from "next/image"
import Link from "next/link"
import { Car, CheckCircle, Clock, MapPin, Shield, Star, Users, Wrench } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-bg-lavender/95 backdrop-blur supports-[backdrop-filter]:bg-bg-lavender/60">
        <div className="container flex h-16 items-center justify-between max-w-[70%] mx-auto">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Car className="h-6 w-6 text-accent-green" />
            <span className="text-text-dark">RoadAssist</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/#features" className="text-text-dark/70 hover:text-text-dark transition-colors">
              Features
            </Link>
            <Link href="/#how-it-works" className="text-text-dark/70 hover:text-text-dark transition-colors">
              How it works
            </Link>
            <Link href="/#pricing" className="text-text-dark/70 hover:text-text-dark transition-colors">
              Pricing
            </Link>
            <Link href="/about" className="text-text-dark font-medium transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="text-text-dark/70 hover:text-text-dark transition-colors">
              Contact Us
            </Link>
            <Link href="/terms" className="text-text-dark/70 hover:text-text-dark transition-colors">
              Terms & Conditions
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline">Log in</Button>
            </Link>
            <Link href="/signup">
              <Button variant="secondary">Sign up</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 max-w-[70%] mx-auto">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-accent-green text-text-dark">
                About RoadAssist
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-text-dark">Our Mission</h1>
              <p className="max-w-[700px] text-text-dark/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We're on a mission to revolutionize roadside assistance by connecting drivers with service providers
                quickly, transparently, and reliably.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-button-blue/10">
          <div className="container px-4 md:px-6 max-w-[70%] mx-auto">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-text-dark">Our Story</h2>
                <p className="text-text-dark/70 md:text-lg">
                  RoadAssist was founded in 2023 by a team of automotive enthusiasts who experienced firsthand the
                  frustration of being stranded on the road with no reliable help in sight.
                </p>
                <p className="text-text-dark/70 md:text-lg">
                  After one particularly challenging breakdown on a remote highway, our founders decided there had to be
                  a better way to connect drivers with the help they need. They envisioned a platform that would
                  leverage technology to make roadside assistance more accessible, transparent, and efficient.
                </p>
                <p className="text-text-dark/70 md:text-lg">
                  Today, RoadAssist has grown into a nationwide network of verified service providers, helping thousands
                  of drivers get back on the road quickly and safely.
                </p>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="RoadAssist team"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 max-w-[70%] mx-auto">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-text-dark">Our Values</h2>
              <p className="max-w-[700px] text-text-dark/70 md:text-lg">
                These core principles guide everything we do at RoadAssist
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-bg-lavender border-2 border-accent-green/20 shadow-md">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-accent-green/20 p-3">
                    <Clock className="h-6 w-6 text-accent-green" />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark">Reliability</h3>
                  <p className="text-text-dark/70">
                    We understand that when you're stranded, you need help you can count on. Our providers are vetted
                    for reliability and professionalism.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-bg-lavender border-2 border-accent-green/20 shadow-md">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-accent-green/20 p-3">
                    <Shield className="h-6 w-6 text-accent-green" />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark">Safety</h3>
                  <p className="text-text-dark/70">
                    Your safety is our top priority. All service providers undergo background checks and must maintain
                    high safety standards.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-bg-lavender border-2 border-accent-green/20 shadow-md">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="rounded-full bg-accent-green/20 p-3">
                    <CheckCircle className="h-6 w-6 text-accent-green" />
                  </div>
                  <h3 className="text-xl font-bold text-text-dark">Transparency</h3>
                  <p className="text-text-dark/70">
                    No hidden fees or surprises. We believe in clear communication and upfront pricing for all services.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-button-blue/10">
          <div className="container px-4 md:px-6 max-w-[70%] mx-auto">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-text-dark">Our Team</h2>
              <p className="max-w-[700px] text-text-dark/70 md:text-lg">Meet the passionate people behind RoadAssist</p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4">
                <div className="h-32 w-32 overflow-hidden rounded-full bg-button-blue">
                  <Image
                    src="/placeholder.svg?height=128&width=128"
                    width={128}
                    height={128}
                    alt="Team member"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-text-dark">Sarah Johnson</h3>
                  <p className="text-text-dark/70">Co-Founder & CEO</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="h-32 w-32 overflow-hidden rounded-full bg-button-blue">
                  <Image
                    src="/placeholder.svg?height=128&width=128"
                    width={128}
                    height={128}
                    alt="Team member"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-text-dark">Michael Chen</h3>
                  <p className="text-text-dark/70">Co-Founder & CTO</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <div className="h-32 w-32 overflow-hidden rounded-full bg-button-blue">
                  <Image
                    src="/placeholder.svg?height=128&width=128"
                    width={128}
                    height={128}
                    alt="Team member"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-bold text-text-dark">David Rodriguez</h3>
                  <p className="text-text-dark/70">Head of Operations</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 max-w-[70%] mx-auto">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex justify-center">
                <div className="grid grid-cols-2 gap-4 max-w-[500px]">
                  <div className="flex flex-col items-center space-y-2 rounded-lg border border-accent-green/20 p-4 bg-bg-lavender">
                    <Users className="h-8 w-8 text-accent-green" />
                    <div className="text-center">
                      <h3 className="text-3xl font-bold text-text-dark">10,000+</h3>
                      <p className="text-sm text-text-dark/70">Registered Users</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center space-y-2 rounded-lg border border-accent-green/20 p-4 bg-bg-lavender">
                    <Wrench className="h-8 w-8 text-accent-green" />
                    <div className="text-center">
                      <h3 className="text-3xl font-bold text-text-dark">2,500+</h3>
                      <p className="text-sm text-text-dark/70">Service Providers</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center space-y-2 rounded-lg border border-accent-green/20 p-4 bg-bg-lavender">
                    <MapPin className="h-8 w-8 text-accent-green" />
                    <div className="text-center">
                      <h3 className="text-3xl font-bold text-text-dark">200+</h3>
                      <p className="text-sm text-text-dark/70">Cities Covered</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center space-y-2 rounded-lg border border-accent-green/20 p-4 bg-bg-lavender">
                    <Star className="h-8 w-8 text-accent-green" />
                    <div className="text-center">
                      <h3 className="text-3xl font-bold text-text-dark">4.8</h3>
                      <p className="text-sm text-text-dark/70">Average Rating</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-text-dark">
                  Join Our Community
                </h2>
                <p className="text-text-dark/70 md:text-lg">
                  RoadAssist is more than just a service platform—it's a community of drivers and service providers
                  committed to making roadside assistance better for everyone.
                </p>
                <p className="text-text-dark/70 md:text-lg">
                  Whether you're a driver looking for reliable help or a service provider wanting to grow your business,
                  we invite you to join our growing network.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                  <Link href="/signup">
                    <Button size="lg" variant="secondary">
                      Join RoadAssist Today
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row max-w-[70%] mx-auto">
          <div className="flex items-center gap-2 font-bold">
            <Car className="h-5 w-5 text-accent-green" />
            <span className="text-text-dark">RoadAssist</span>
          </div>
          <p className="text-center text-sm text-text-dark/70 md:text-left">
            © {new Date().getFullYear()} RoadAssist. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/terms" className="text-text-dark/70 hover:text-text-dark">
              Terms
            </Link>
            <Link href="/privacy" className="text-text-dark/70 hover:text-text-dark">
              Privacy
            </Link>
            <Link href="/contact" className="text-text-dark/70 hover:text-text-dark">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

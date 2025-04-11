import Link from "next/link"
import Image from "next/image"
import { Car, MapPin, Star, Wrench } from "lucide-react"

import { Button } from "@/components/ui/button"
import { HeroSlider } from "@/components/hero-slider"
import { LiveChat } from "@/components/live-chat"
import { EmergencyContactButton } from "@/components/emergency-contact-button"
import { HelpRequestForm } from "@/components/help-request-form"
import { SpecialOffers } from "@/components/special-offers"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-bg-lavender/95 backdrop-blur supports-[backdrop-filter]:bg-bg-lavender/60">
        <div className="container flex h-16 items-center justify-between max-w-[70%] mx-auto">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Car className="h-6 w-6 text-accent-green" />
            <span className="text-text-dark">RoadAssist</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-text-dark/70 hover:text-text-dark transition-colors">
              Features
            </Link>
            <Link href="#how-it-works" className="text-text-dark/70 hover:text-text-dark transition-colors">
              How it works
            </Link>
            <Link href="#pricing" className="text-text-dark/70 hover:text-text-dark transition-colors">
              Pricing
            </Link>
            <Link href="/about" className="text-text-dark/70 hover:text-text-dark transition-colors">
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
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6 max-w-[70%] mx-auto">
            <HeroSlider />
          </div>
        </section>

        {/* Help Request Form */}
        <HelpRequestForm />

        {/* Special Offers Section */}
        <SpecialOffers />

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-button-blue/10">
          <div className="container px-4 md:px-6 max-w-[70%] mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-accent-green px-3 py-1 text-sm font-medium text-text-dark">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-text-dark">
                  Everything you need on the road
                </h2>
                <p className="max-w-[900px] text-text-dark/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform connects drivers with service providers quickly and efficiently, ensuring you're never
                  stranded for long.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border border-accent-green/20 p-6 shadow-sm bg-bg-lavender">
                <div className="rounded-full bg-accent-green/20 p-3">
                  <MapPin className="h-6 w-6 text-accent-green" />
                </div>
                <h3 className="text-xl font-bold text-text-dark">Real-time Location</h3>
                <p className="text-center text-text-dark/70">
                  Find nearby service providers with live location tracking
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border border-accent-green/20 p-6 shadow-sm bg-bg-lavender">
                <div className="rounded-full bg-accent-green/20 p-3">
                  <Wrench className="h-6 w-6 text-accent-green" />
                </div>
                <h3 className="text-xl font-bold text-text-dark">Verified Providers</h3>
                <p className="text-center text-text-dark/70">All mechanics and tow trucks are vetted and verified</p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border border-accent-green/20 p-6 shadow-sm bg-bg-lavender">
                <div className="rounded-full bg-accent-green/20 p-3">
                  <Star className="h-6 w-6 text-accent-green" />
                </div>
                <h3 className="text-xl font-bold text-text-dark">Rating System</h3>
                <p className="text-center text-text-dark/70">
                  Choose providers based on ratings and reviews from other users
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 max-w-[70%] mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-text-dark">How it works</h2>
                <p className="max-w-[900px] text-text-dark/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Getting help is simple and straightforward with our platform.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-green text-xl font-bold text-text-dark">
                  1
                </div>
                <h3 className="text-xl font-bold text-text-dark">Request Help</h3>
                <p className="text-center text-text-dark/70">
                  Describe your issue and location through our simple form
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-green text-xl font-bold text-text-dark">
                  2
                </div>
                <h3 className="text-xl font-bold text-text-dark">Get Connected</h3>
                <p className="text-center text-text-dark/70">We'll match you with nearby available service providers</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent-green text-xl font-bold text-text-dark">
                  3
                </div>
                <h3 className="text-xl font-bold text-text-dark">Problem Solved</h3>
                <p className="text-center text-text-dark/70">
                  Get your vehicle fixed or towed and pay securely through our platform
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-button-blue/10">
          <div className="container px-4 md:px-6 max-w-[70%] mx-auto">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-text-dark">
                  Transparent Pricing
                </h2>
                <p className="max-w-[900px] text-text-dark/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  No hidden fees. Pay only for the services you receive.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
              <div className="flex flex-col items-center space-y-2 rounded-lg border border-accent-green/20 p-6 shadow-sm bg-bg-lavender">
                <h3 className="text-xl font-bold text-text-dark">For Car Owners</h3>
                <p className="text-center text-text-dark/70 mb-4">Free to sign up and request assistance</p>
                <ul className="space-y-2 text-left w-full">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-accent-green"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="text-text-dark">No subscription fees</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-accent-green"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="text-text-dark">Pay only for services rendered</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-accent-green"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="text-text-dark">Secure payment through our platform</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border border-accent-green/20 p-6 shadow-sm bg-bg-lavender">
                <h3 className="text-xl font-bold text-text-dark">For Service Providers</h3>
                <p className="text-center text-text-dark/70 mb-4">Grow your business with our platform</p>
                <ul className="space-y-2 text-left w-full">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-accent-green"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="text-text-dark">10% platform fee on completed services</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-accent-green"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="text-text-dark">Weekly payouts</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4 text-accent-green"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="text-text-dark">Build your reputation with ratings and reviews</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 max-w-[70%] mx-auto">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-text-dark">
                    Join our growing network
                  </h2>
                  <p className="max-w-[600px] text-text-dark/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Whether you're a driver in need or a service provider, RoadAssist connects you with the right people
                    at the right time.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/signup">
                    <Button size="lg" variant="secondary">
                      Sign up now
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="Car assistance network"
                  className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
                />
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

      {/* Live Chat Component */}
      <LiveChat />

      {/* Emergency Contact Button */}
      <EmergencyContactButton />
    </div>
  )
}

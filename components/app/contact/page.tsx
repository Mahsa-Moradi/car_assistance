"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Car, CheckCircle, Mail, MapPin, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormState((prev) => ({ ...prev, subject: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    }, 1500)
  }

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
            <Link href="/about" className="text-text-dark/70 hover:text-text-dark transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="text-text-dark font-medium transition-colors">
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
                Get in Touch
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-text-dark">Contact Us</h1>
              <p className="max-w-[700px] text-text-dark/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Have questions or feedback? We'd love to hear from you. Our team is here to help.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-button-blue/10">
          <div className="container px-4 md:px-6 max-w-[70%] mx-auto">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-text-dark">Get in Touch</h2>
                  <p className="mt-2 text-text-dark/70 md:text-lg">
                    We're here to help with any questions or concerns you may have.
                  </p>
                </div>

                <div className="grid gap-4">
                  <Card className="bg-bg-lavender border border-accent-green/20">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="rounded-full bg-accent-green/20 p-3">
                        <Mail className="h-6 w-6 text-accent-green" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-text-dark">Email Us</h3>
                        <p className="text-text-dark/70">For general inquiries and support</p>
                        <a
                          href="mailto:support@roadassist.com"
                          className="text-accent-green hover:underline mt-1 block"
                        >
                          support@roadassist.com
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-bg-lavender border border-accent-green/20">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="rounded-full bg-accent-green/20 p-3">
                        <Phone className="h-6 w-6 text-accent-green" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-text-dark">Call Us</h3>
                        <p className="text-text-dark/70">Monday to Friday, 9am to 5pm EST</p>
                        <a href="tel:+18005551234" className="text-accent-green hover:underline mt-1 block">
                          +1 (800) 555-1234
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-bg-lavender border border-accent-green/20">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="rounded-full bg-accent-green/20 p-3">
                        <MapPin className="h-6 w-6 text-accent-green" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-text-dark">Visit Us</h3>
                        <p className="text-text-dark/70">Our headquarters</p>
                        <address className="not-italic text-accent-green mt-1 block">
                          123 Main Street, Suite 100
                          <br />
                          Anytown, CA 12345
                        </address>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <Card className="border-2 border-accent-green/20 bg-bg-lavender">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-6 text-text-dark">Send Us a Message</h2>
                    {isSubmitted ? (
                      <div className="flex flex-col items-center justify-center space-y-4 py-12">
                        <div className="rounded-full bg-accent-green/20 p-3">
                          <CheckCircle className="h-8 w-8 text-accent-green" />
                        </div>
                        <h3 className="text-xl font-bold text-text-dark">Message Sent!</h3>
                        <p className="text-center text-text-dark/70">
                          Thank you for reaching out. We'll get back to you as soon as possible.
                        </p>
                        <Button onClick={() => setIsSubmitted(false)} variant="outline" className="mt-4">
                          Send Another Message
                        </Button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-text-dark">
                            Full Name
                          </Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            required
                            value={formState.name}
                            onChange={handleChange}
                            className="bg-bg-lavender border-accent-green/20 text-text-dark"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-text-dark">
                            Email
                          </Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="john@example.com"
                            required
                            value={formState.email}
                            onChange={handleChange}
                            className="bg-bg-lavender border-accent-green/20 text-text-dark"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subject" className="text-text-dark">
                            Subject
                          </Label>
                          <Select value={formState.subject} onValueChange={handleSelectChange}>
                            <SelectTrigger className="bg-bg-lavender border-accent-green/20 text-text-dark">
                              <SelectValue placeholder="Select a subject" />
                            </SelectTrigger>
                            <SelectContent className="bg-bg-lavender text-text-dark">
                              <SelectItem value="general">General Inquiry</SelectItem>
                              <SelectItem value="support">Technical Support</SelectItem>
                              <SelectItem value="billing">Billing Question</SelectItem>
                              <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                              <SelectItem value="feedback">Feedback</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="message" className="text-text-dark">
                            Message
                          </Label>
                          <Textarea
                            id="message"
                            name="message"
                            placeholder="How can we help you?"
                            rows={5}
                            required
                            value={formState.message}
                            onChange={handleChange}
                            className="bg-bg-lavender border-accent-green/20 text-text-dark"
                          />
                        </div>
                        <Button type="submit" className="w-full cta-button" disabled={isSubmitting}>
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 max-w-[70%] mx-auto">
            <div className="flex flex-col items-center text-center space-y-4 mb-12">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-text-dark">
                Frequently Asked Questions
              </h2>
              <p className="max-w-[700px] text-text-dark/70 md:text-lg">
                Find answers to common questions about our services
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <div className="space-y-2 p-4 rounded-lg bg-bg-lavender border border-accent-green/20">
                  <h3 className="text-xl font-bold text-text-dark">How quickly can I expect help to arrive?</h3>
                  <p className="text-text-dark/70">
                    Response times vary based on your location and provider availability, but our average response time
                    is 30 minutes or less in urban areas.
                  </p>
                </div>
                <div className="space-y-2 p-4 rounded-lg bg-bg-lavender border border-accent-green/20">
                  <h3 className="text-xl font-bold text-text-dark">What types of payment do you accept?</h3>
                  <p className="text-text-dark/70">
                    We accept all major credit cards, debit cards, and digital payment methods like Apple Pay and Google
                    Pay.
                  </p>
                </div>
                <div className="space-y-2 p-4 rounded-lg bg-bg-lavender border border-accent-green/20">
                  <h3 className="text-xl font-bold text-text-dark">Is there a membership fee?</h3>
                  <p className="text-text-dark/70">
                    No, RoadAssist is free to join. You only pay for the services you use when you need them.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="space-y-2 p-4 rounded-lg bg-bg-lavender border border-accent-green/20">
                  <h3 className="text-xl font-bold text-text-dark">How do I become a service provider?</h3>
                  <p className="text-text-dark/70">
                    Sign up as a service provider on our platform, complete the verification process, and start
                    accepting service requests in your area.
                  </p>
                </div>
                <div className="space-y-2 p-4 rounded-lg bg-bg-lavender border border-accent-green/20">
                  <h3 className="text-xl font-bold text-text-dark">What areas do you serve?</h3>
                  <p className="text-text-dark/70">
                    We currently operate in over 200 cities across the United States, with plans to expand
                    internationally soon.
                  </p>
                </div>
                <div className="space-y-2 p-4 rounded-lg bg-bg-lavender border border-accent-green/20">
                  <h3 className="text-xl font-bold text-text-dark">What if I'm not satisfied with the service?</h3>
                  <p className="text-text-dark/70">
                    We have a satisfaction guarantee. If you're not happy with the service provided, contact our support
                    team and we'll make it right.
                  </p>
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

"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const slides = [
  {
    id: 1,
    title: "Roadside Assistance Made Simple",
    description:
      "Connect with nearby mechanics and tow trucks instantly. Get help when you need it most, with transparent pricing and reliable service.",
    image: "/What Not to Say at the Scene of a Car Accident.jpeg",
    buttonText: "Get Started",
    buttonLink: "/login",
  },
  {
    id: 2,
    title: "24/7 Emergency Support",
    description:
      "Our network of service providers is available around the clock. No matter when you need help, we've got you covered.",
    image: "/It’s Worth Spending More on These 14 Purchases.jpeg",
    buttonText: "Learn More",
    buttonLink: "/about",
  },
  {
    id: 3,
    title: "Join Our Provider Network",
    description:
      "Are you a mechanic or tow truck operator? Join our platform to connect with customers and grow your business.",
    image: "/4 Simple Ways to Prevent Parking Lot Accidents - Cars Fellow.jpeg",
    buttonText: "Sign Up",
    buttonLink: "/signup",
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative overflow-hidden rounded-xl bg-bg-lavender">
      <div className="relative h-[500px] md:h-[600px]">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={cn(
              "absolute inset-0 flex items-center transition-opacity duration-1000",
              index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none",
            )}
          >
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-text-dark">
                    {slide.title}
                  </h1>
                  <p className="max-w-[600px] text-text-dark/70 md:text-xl">{slide.description}</p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href={slide.buttonLink}>
                    <Button size="lg" className="cta-button gap-1.5">
                      {slide.buttonText}
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <Image
                src={slide.image || "/placeholder.svg"}
                width={550}
                height={550}
                alt="Slide illustration"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "h-2 w-2 rounded-full transition-all",
              index === currentSlide ? "bg-accent-green w-6" : "bg-text-dark/30",
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-button-blue p-2 text-text-dark shadow-md hover:bg-button-blue/90"
        aria-label="Previous slide"
      >
        <ArrowLeft className="h-5 w-5" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-button-blue p-2 text-text-dark shadow-md hover:bg-button-blue/90"
        aria-label="Next slide"
      >
        <ArrowRight className="h-5 w-5" />
      </button>
    </div>
  )
}

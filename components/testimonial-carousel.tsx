"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Manager",
    content:
      "This course completely transformed my approach to digital marketing. The strategies I learned helped me increase our company's social media engagement by 150% in just two months.",
    avatar: "https://i.imgur.com/4pGBzla.png?height=60&width=60&text=SJ",
  },
  {
    name: "Michael Chen",
    role: "Entrepreneur",
    content:
      "As someone starting a new business, I needed practical marketing knowledge fast. This course delivered exactly what I needed with actionable steps I could implement immediately.",
    avatar: "https://i.imgur.com/TMLZvH3.png?height=60&width=60&text=MC",
  },
  {
    name: "Jessica Williams",
    role: "Freelance Consultant",
    content:
      "The instructor's teaching style made complex concepts easy to understand. I've taken many courses, but this one stands out for its clarity and practical examples.",
    avatar: "https://i.imgur.com/nkTI9y5.png?height=60&width=60&text=JW",
  },
]

export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0)

  const next = () => {
    setCurrent((current + 1) % testimonials.length)
  }

  const previous = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length)
  }

  // Auto-advance the carousel
  useEffect(() => {
    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [current])

  return (
    <div className="relative">
      <Card className="border-purple-100">
        <CardContent className="p-6 sm:p-10">
          <div className="flex flex-col items-center space-y-4 text-center">
            <Quote className="h-10 w-10 text-purple-200" />
            <p className="text-lg sm:text-xl text-gray-700 italic">"{testimonials[current].content}"</p>
            <div className="flex items-center space-x-4">
              <div className="relative h-12 w-12 rounded-full overflow-hidden">
                <Image
                  src={testimonials[current].avatar || "/placeholder.svg"}
                  alt={testimonials[current].name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <h4 className="font-semibold">{testimonials[current].name}</h4>
                <p className="text-sm text-gray-500">{testimonials[current].role}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="absolute top-1/2 left-0 -translate-y-1/2 flex space-x-2 -translate-x-1/2">
        <button
          onClick={previous}
          className="rounded-full bg-white p-2 shadow-md hover:bg-gray-100"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-5 w-5 text-gray-600" />
        </button>
      </div>
      <div className="absolute top-1/2 right-0 -translate-y-1/2 flex space-x-2 translate-x-1/2">
        <button
          onClick={next}
          className="rounded-full bg-white p-2 shadow-md hover:bg-gray-100"
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-5 w-5 text-gray-600" />
        </button>
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 w-2 rounded-full ${current === index ? "bg-purple-600" : "bg-purple-200"}`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight, Play } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { SignupForm } from "@/components/signup-form"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TestimonialCarousel } from "@/components/testimonial-carousel"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-purple-50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-purple-900">
                    Free 3-Part Mini-Course: Learn Digital Marketing Fast
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Kickstart your journey with expert-guided videos—no cost, no catch.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    href="/signup"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-purple-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-purple-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    Start Learning Now
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="https://i.imgur.com/TeGHK7m.png?height=400&width=400"
                  width={400}
                  height={400}
                  alt="Course Preview"
                  className="aspect-video overflow-hidden rounded-xl object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Course Preview Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white" id="preview">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-900">
                  What You'll Learn
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Our 3-part mini-course covers everything you need to get started with digital marketing.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              {[
                {
                  title: "Foundations of Digital Marketing",
                  description: "Learn the core principles and strategies that drive successful online campaigns.",
                },
                {
                  title: "Social Media Mastery",
                  description: "Discover how to leverage social platforms to grow your audience and engagement.",
                },
                {
                  title: "Analytics & Optimization",
                  description: "Understand how to measure results and continuously improve your marketing efforts.",
                },
              ].map((video, index) => (
                <Card key={index} className="overflow-hidden border-purple-100 transition-all hover:shadow-md">
                  <div className="relative aspect-video">
                    <Image
                      src={`https://i.imgur.com/9Nbo9LA.png?height=200&width=350&text=Video ${index + 1}`}
                      alt={video.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <div className="rounded-full bg-white/90 p-3">
                        <Play className="h-6 w-6 text-purple-600" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-bold">{video.title}</h3>
                    <p className="text-sm text-gray-500">{video.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-900">
                  What Our Students Say
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Hear from people who have transformed their skills with our courses.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <TestimonialCarousel />
            </div>
          </div>
        </section>

        {/* About Instructor Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-900">
                    Meet Your Instructor
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    With over 10 years of experience in digital marketing, I've helped hundreds of businesses grow their
                    online presence.
                  </p>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    I've worked with startups, small businesses, and Fortune 500 companies to develop and implement
                    effective digital marketing strategies.
                  </p>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    My teaching approach focuses on practical, actionable strategies that you can implement immediately
                    to see results.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[400px] w-[300px] overflow-hidden rounded-xl">
                  <Image
                    src="https://i.imgur.com/Z4rGx6P.png?height=400&width=300&text=Instructor"
                    alt="Instructor"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Signup Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-900 text-white" id="signup">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get Instant Access</h2>
                  <p className="max-w-[600px] text-purple-100 md:text-xl">
                    Sign up now to receive all three videos directly to your inbox. Start learning today!
                  </p>
                </div>
                <ul className="grid gap-2">
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-purple-300" />
                    <span>Instant access to all 3 video lessons</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-purple-300" />
                    <span>Downloadable resources and checklists</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ChevronRight className="h-4 w-4 text-purple-300" />
                    <span>No credit card required</span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <Card className="w-full max-w-md border-0 shadow-xl">
                  <CardContent className="p-6">
                    <SignupForm />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

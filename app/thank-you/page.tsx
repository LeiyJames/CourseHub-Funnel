import { Card, CardContent } from "@/components/ui/card"
import { Check, ChevronRight, Clock } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CountdownTimer } from "@/components/countdown-timer"
import { VideoPlayer } from "@/components/video-player"

export default function ThankYouPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        {/* Thank You Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-purple-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-900">
                  You're In! Check Your Email
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Your first video is on its way to your inbox. While you wait, check out our complete course below.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Upsell Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px]">
              <div className="flex flex-col justify-center space-y-6">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-900">
                    Ready to Master Digital Marketing?
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Upgrade to our complete 10-module course and transform your marketing skills.
                  </p>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-bold">What's Included:</h3>
                  <ul className="grid gap-3">
                    {[
                      "10 comprehensive video modules",
                      "Lifetime access to all course materials",
                      "Downloadable resources and templates",
                      "Private community access",
                      "Certificate of completion",
                      "Email support from the instructor",
                    ].map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-green-500 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-orange-500" />
                    <p className="font-medium text-orange-700">Special offer expires in:</p>
                  </div>
                  <CountdownTimer hours={48} />
                </div>

                <div className="flex flex-col gap-2 sm:flex-row">
                  <Link
                    href="/checkout"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-purple-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-purple-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    Upgrade to Full Course for $49
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <Card className="overflow-hidden border-purple-100">
                  <div className="aspect-video">
                    <VideoPlayer
                      src="https://streamable.com/pd8i9t"
                      poster="?height=300&width=500&text=Course Preview"
                      title="Complete Digital Marketing Masterclass"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-bold">Preview: Complete Digital Marketing Masterclass</h3>
                    <p className="text-sm text-gray-500">
                      Watch this preview of our comprehensive course that has helped thousands of students.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Course Modules Preview */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-900">
                  Course Curriculum
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Here's what you'll learn in our complete 10-module course.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12">
              {[
                "Digital Marketing Fundamentals",
                "Building Your Marketing Strategy",
                "Content Marketing Mastery",
                "Social Media Marketing",
                "Email Marketing Campaigns",
                "Search Engine Optimization",
                "Paid Advertising Strategies",
                "Analytics and Data-Driven Marketing",
                "Conversion Rate Optimization",
                "Building Your Marketing Career",
              ].map((module, index) => (
                <Card key={index} className="overflow-hidden border-purple-100">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 text-purple-900 font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-medium">{module}</h3>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Link
                href="/checkout"
                className="inline-flex h-10 items-center justify-center rounded-md bg-purple-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-purple-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Get Started Now for $49
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

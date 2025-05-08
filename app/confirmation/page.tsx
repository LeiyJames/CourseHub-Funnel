import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, ChevronRight, Share2 } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ConfirmationPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header minimal />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-white to-purple-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="rounded-full bg-green-100 p-3">
                <Check className="h-6 w-6 text-green-600" />
              </div>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-900">
                  Welcome to the Full Course!
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Your purchase was successful. You now have access to the complete Digital Marketing Masterclass.
                </p>
              </div>
              <div className="flex flex-col gap-2 sm:flex-row">
                <Link
                  href="/dashboard"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-purple-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-purple-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                >
                  Access Your Course Dashboard
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Next Steps Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-purple-900">Next Steps</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Here's how to get the most out of your course experience.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-3">
              {[
                {
                  title: "Access Your Materials",
                  description: "Log in to your dashboard to access all course videos and resources.",
                  cta: "Go to Dashboard",
                  href: "/dashboard",
                },
                {
                  title: "Join Our Community",
                  description: "Connect with fellow students in our private Discord community.",
                  cta: "Join Discord",
                  href: "#",
                },
                {
                  title: "Set Your Schedule",
                  description: "Plan your learning journey with our recommended study schedule.",
                  cta: "View Schedule",
                  href: "/schedule",
                },
              ].map((step, index) => (
                <Card key={index} className="overflow-hidden border-purple-100">
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                    <div className="rounded-full bg-purple-100 p-3">
                      <span className="text-xl font-bold text-purple-900">{index + 1}</span>
                    </div>
                    <h3 className="text-lg font-bold">{step.title}</h3>
                    <p className="text-sm text-gray-500">{step.description}</p>
                    <Link
                      href={step.href}
                      className="inline-flex h-9 items-center justify-center rounded-md border border-purple-200 bg-white px-4 text-sm font-medium text-purple-900 shadow-sm transition-colors hover:bg-purple-50 hover:text-purple-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-purple-950"
                    >
                      {step.cta}
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Referral Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-purple-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl text-purple-900">
                  Share With Friends & Earn Rewards
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                  Refer a friend and you'll both get a $10 credit towards future courses.
                </p>
              </div>
              <div className="w-full max-w-md">
                <div className="flex items-center space-x-2">
                  <div className="flex-1 rounded-md border border-purple-200 bg-white px-3 py-2 text-sm">
                    https://course.example.com/ref/your-username
                  </div>
                  <Button variant="outline" size="sm" className="gap-1">
                    <Share2 className="h-4 w-4" />
                    Copy
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

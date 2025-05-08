import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Clock, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function SchedulePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header minimal />
      <main className="flex-1 py-6 md:py-10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold tracking-tight text-purple-900">Study Schedule</h1>
              <p className="text-gray-500">Your recommended learning path for the Digital Marketing Masterclass.</p>
            </div>

            <Card className="border-purple-100">
              <CardHeader className="bg-purple-50 border-b border-purple-100">
                <div className="flex items-center justify-between">
                  <CardTitle>8-Week Study Plan</CardTitle>
                  <Badge className="bg-purple-100 text-purple-900">Recommended</Badge>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-500 mb-6">
                  This schedule is designed to help you complete the course in 8 weeks, studying approximately 3-4 hours
                  per week. Feel free to adjust the pace to fit your personal schedule.
                </p>

                <div className="flex items-center gap-2 mb-4">
                  <Calendar className="h-5 w-5 text-purple-600" />
                  <h2 className="text-lg font-medium">Weekly Schedule</h2>
                </div>

                <Tabs defaultValue="week1" className="w-full">
                  <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8">
                    <TabsTrigger value="week1">Week 1</TabsTrigger>
                    <TabsTrigger value="week2">Week 2</TabsTrigger>
                    <TabsTrigger value="week3">Week 3</TabsTrigger>
                    <TabsTrigger value="week4">Week 4</TabsTrigger>
                    <TabsTrigger value="week5">Week 5</TabsTrigger>
                    <TabsTrigger value="week6">Week 6</TabsTrigger>
                    <TabsTrigger value="week7">Week 7</TabsTrigger>
                    <TabsTrigger value="week8">Week 8</TabsTrigger>
                  </TabsList>

                  <TabsContent value="week1" className="mt-6 space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                        <h3 className="text-lg font-medium">Module 1: Digital Marketing Fundamentals</h3>
                      </div>

                      <Card className="border-gray-100">
                        <CardContent className="p-4">
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-medium">Day 1-2: Introduction to Digital Marketing</h4>
                              <ul className="mt-2 space-y-2 text-sm text-gray-500">
                                <li className="flex items-start gap-2">
                                  <span className="rounded-full bg-purple-100 p-1 mt-0.5">
                                    <Clock className="h-3 w-3 text-purple-600" />
                                  </span>
                                  <span>Watch Lesson 1: What is Digital Marketing (25 min)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="rounded-full bg-purple-100 p-1 mt-0.5">
                                    <Clock className="h-3 w-3 text-purple-600" />
                                  </span>
                                  <span>Watch Lesson 2: Digital Marketing Channels (30 min)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="rounded-full bg-purple-100 p-1 mt-0.5">
                                    <Clock className="h-3 w-3 text-purple-600" />
                                  </span>
                                  <span>Complete the Digital Marketing Landscape worksheet</span>
                                </li>
                              </ul>
                            </div>

                            <div>
                              <h4 className="font-medium">Day 3-4: Understanding Your Audience</h4>
                              <ul className="mt-2 space-y-2 text-sm text-gray-500">
                                <li className="flex items-start gap-2">
                                  <span className="rounded-full bg-purple-100 p-1 mt-0.5">
                                    <Clock className="h-3 w-3 text-purple-600" />
                                  </span>
                                  <span>Watch Lesson 3: Audience Research (20 min)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="rounded-full bg-purple-100 p-1 mt-0.5">
                                    <Clock className="h-3 w-3 text-purple-600" />
                                  </span>
                                  <span>Create your target audience persona</span>
                                </li>
                              </ul>
                            </div>

                            <div>
                              <h4 className="font-medium">Day 5-7: Marketing Goals and Metrics</h4>
                              <ul className="mt-2 space-y-2 text-sm text-gray-500">
                                <li className="flex items-start gap-2">
                                  <span className="rounded-full bg-purple-100 p-1 mt-0.5">
                                    <Clock className="h-3 w-3 text-purple-600" />
                                  </span>
                                  <span>Watch Lesson 4: Setting Marketing Goals (25 min)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="rounded-full bg-purple-100 p-1 mt-0.5">
                                    <Clock className="h-3 w-3 text-purple-600" />
                                  </span>
                                  <span>Watch Lesson 5: Key Performance Indicators (25 min)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="rounded-full bg-purple-100 p-1 mt-0.5">
                                    <Clock className="h-3 w-3 text-purple-600" />
                                  </span>
                                  <span>Complete the Marketing Goals worksheet</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="rounded-full bg-purple-100 p-1 mt-0.5">
                                    <Clock className="h-3 w-3 text-purple-600" />
                                  </span>
                                  <span>Take Module 1 quiz</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <div className="flex justify-end">
                        <Link href="/dashboard" className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                          Go to Module 1
                        </Link>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="week2" className="mt-6 space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                        <h3 className="text-lg font-medium">Module 2: Building Your Marketing Strategy</h3>
                      </div>

                      <Card className="border-gray-100">
                        <CardContent className="p-4">
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-medium">Day 1-3: Strategic Planning</h4>
                              <ul className="mt-2 space-y-2 text-sm text-gray-500">
                                <li className="flex items-start gap-2">
                                  <span className="rounded-full bg-purple-100 p-1 mt-0.5">
                                    <Clock className="h-3 w-3 text-purple-600" />
                                  </span>
                                  <span>Watch Lesson 1: Marketing Strategy Framework (30 min)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="rounded-full bg-purple-100 p-1 mt-0.5">
                                    <Clock className="h-3 w-3 text-purple-600" />
                                  </span>
                                  <span>Watch Lesson 2: Competitive Analysis (25 min)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="rounded-full bg-purple-100 p-1 mt-0.5">
                                    <Clock className="h-3 w-3 text-purple-600" />
                                  </span>
                                  <span>Complete the Competitive Analysis worksheet</span>
                                </li>
                              </ul>
                            </div>

                            <div>
                              <h4 className="font-medium">Day 4-7: Creating Your Strategy</h4>
                              <ul className="mt-2 space-y-2 text-sm text-gray-500">
                                <li className="flex items-start gap-2">
                                  <span className="rounded-full bg-purple-100 p-1 mt-0.5">
                                    <Clock className="h-3 w-3 text-purple-600" />
                                  </span>
                                  <span>Watch Lesson 3: Channel Selection (20 min)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="rounded-full bg-purple-100 p-1 mt-0.5">
                                    <Clock className="h-3 w-3 text-purple-600" />
                                  </span>
                                  <span>Watch Lesson 4: Budget Allocation (20 min)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="rounded-full bg-purple-100 p-1 mt-0.5">
                                    <Clock className="h-3 w-3 text-purple-600" />
                                  </span>
                                  <span>Create your marketing strategy document</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="rounded-full bg-purple-100 p-1 mt-0.5">
                                    <Clock className="h-3 w-3 text-purple-600" />
                                  </span>
                                  <span>Take Module 2 quiz</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <div className="flex justify-end">
                        <Link href="/dashboard" className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                          Go to Module 2
                        </Link>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="week3" className="mt-6 space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-purple-600" />
                        <h3 className="text-lg font-medium">Module 3: Content Marketing Mastery</h3>
                      </div>

                      <Card className="border-purple-100">
                        <CardContent className="p-4">
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-medium">Day 1-3: Content Strategy</h4>
                              <ul className="mt-2 space-y-2 text-sm text-gray-500">
                                <li className="flex items-start gap-2">
                                  <span className="rounded-full bg-purple-100 p-1 mt-0.5">
                                    <Clock className="h-3 w-3 text-purple-600" />
                                  </span>
                                  <span>Watch Lesson 1: Introduction to Content Marketing (10 min)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="rounded-full bg-purple-100 p-1 mt-0.5">
                                    <Clock className="h-3 w-3 text-purple-600" />
                                  </span>
                                  <span>Watch Lesson 2: Content Strategy Development (15 min)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="rounded-full bg-purple-100 p-1 mt-0.5">
                                    <Clock className="h-3 w-3 text-purple-600" />
                                  </span>
                                  <span>Create your content calendar</span>
                                </li>
                              </ul>
                            </div>

                            <div>
                              <h4 className="font-medium">Day 4-7: Content Creation</h4>
                              <ul className="mt-2 space-y-2 text-sm text-gray-500">
                                <li className="flex items-start gap-2">
                                  <span className="rounded-full bg-purple-100 p-1 mt-0.5">
                                    <Clock className="h-3 w-3 text-purple-600" />
                                  </span>
                                  <span>Watch Lesson 3: Creating Engaging Blog Posts (12 min)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="rounded-full bg-purple-100 p-1 mt-0.5">
                                    <Clock className="h-3 w-3 text-purple-600" />
                                  </span>
                                  <span>Watch Lesson 4: Video Content Creation (18 min)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="rounded-full bg-purple-100 p-1 mt-0.5">
                                    <Clock className="h-3 w-3 text-purple-600" />
                                  </span>
                                  <span>Watch Lesson 5: Content Distribution Channels (14 min)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                  <span className="rounded-full bg-purple-100 p-1 mt-0.5">
                                    <Clock className="h-3 w-3 text-purple-600" />
                                  </span>
                                  <span>Create a sample blog post</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      <div className="flex justify-end">
                        <Link href="/dashboard" className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                          Go to Module 3
                        </Link>
                      </div>
                    </div>
                  </TabsContent>

                  {/* Weeks 4-8 would follow the same pattern */}
                  <TabsContent value="week4" className="mt-6">
                    <Card className="border-gray-100">
                      <CardContent className="p-6 text-center">
                        <h3 className="text-lg font-medium text-gray-500">Module 4: Social Media Marketing</h3>
                        <p className="mt-2 text-sm text-gray-500">Coming up in your schedule</p>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="week5" className="mt-6">
                    <Card className="border-gray-100">
                      <CardContent className="p-6 text-center">
                        <h3 className="text-lg font-medium text-gray-500">Module 5: Email Marketing Campaigns</h3>
                        <p className="mt-2 text-sm text-gray-500">Coming up in your schedule</p>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="week6" className="mt-6">
                    <Card className="border-gray-100">
                      <CardContent className="p-6 text-center">
                        <h3 className="text-lg font-medium text-gray-500">Module 6: Search Engine Optimization</h3>
                        <p className="mt-2 text-sm text-gray-500">Coming up in your schedule</p>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="week7" className="mt-6">
                    <Card className="border-gray-100">
                      <CardContent className="p-6 text-center">
                        <h3 className="text-lg font-medium text-gray-500">
                          Module 7: Paid Advertising & Module 8: Analytics
                        </h3>
                        <p className="mt-2 text-sm text-gray-500">Coming up in your schedule</p>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="week8" className="mt-6">
                    <Card className="border-gray-100">
                      <CardContent className="p-6 text-center">
                        <h3 className="text-lg font-medium text-gray-500">
                          Module 9: Conversion Optimization & Module 10: Career Building
                        </h3>
                        <p className="mt-2 text-sm text-gray-500">Coming up in your schedule</p>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-purple-100">
                <CardHeader>
                  <CardTitle>Study Tips</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5" />
                      <span>Set aside dedicated time each day for learning</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5" />
                      <span>Take notes while watching the video lessons</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5" />
                      <span>Complete all exercises and worksheets</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5" />
                      <span>Join the community discussions for each module</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5" />
                      <span>Apply what you learn to a real project</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-purple-100">
                <CardHeader>
                  <CardTitle>Need Help?</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-500 mb-4">
                    If you're having trouble keeping up with the schedule or need assistance with any of the course
                    materials, we're here to help.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Join Office Hours</h4>
                        <p className="text-sm text-gray-500">Every Tuesday and Thursday at 3 PM EST</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Ask in the Community</h4>
                        <p className="text-sm text-gray-500">Post your questions in our Discord channel</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-purple-600 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Email Support</h4>
                        <p className="text-sm text-gray-500">support@coursehub.com</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-center">
              <Link
                href="/dashboard"
                className="inline-flex h-10 items-center justify-center rounded-md bg-purple-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-purple-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Return to Dashboard
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Check, Clock, Play, BookOpen, Award, FileText } from "lucide-react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { VideoPlayer } from "@/components/video-player"

export default function DashboardPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header minimal />
      <main className="flex-1 py-6 md:py-10">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold tracking-tight text-purple-900">Course Dashboard</h1>
              <p className="text-gray-500">Welcome to your Digital Marketing Masterclass dashboard.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Course Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">20%</span>
                    <Badge variant="outline" className="bg-purple-50 text-purple-900">
                      2 of 10 modules
                    </Badge>
                  </div>
                  <Progress value={20} className="h-2 mt-2" />
                  <p className="text-xs text-gray-500 mt-2">Keep going! You're making great progress.</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Time Spent</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">1h 45m</span>
                    <Clock className="h-5 w-5 text-gray-400" />
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Total time spent learning</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Next Session</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-base font-medium">Module 3: Content Marketing</span>
                    <Link href="#module-3" className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                      Continue
                    </Link>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Pick up where you left off</p>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="modules" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="modules">Course Modules</TabsTrigger>
                <TabsTrigger value="resources">Resources</TabsTrigger>
                <TabsTrigger value="community">Community</TabsTrigger>
              </TabsList>

              <TabsContent value="modules" className="space-y-6">
                <div className="grid gap-6 lg:grid-cols-2">
                  <div>
                    <h2 className="text-xl font-bold mb-4">Current Module</h2>
                    <Card className="overflow-hidden">
                      <div className="aspect-video">
                        <VideoPlayer
                          src="https://streamable.com/pd8i9t"
                          poster="?height=300&width=500&text=Module 3: Content Marketing"
                          title="Module 3: Content Marketing Mastery"
                        />
                      </div>
                      <CardContent className="p-4">
                        <h3 className="text-lg font-bold">Content Marketing Mastery</h3>
                        <p className="text-sm text-gray-500 mt-1">
                          Learn how to create compelling content that drives engagement and conversions.
                        </p>
                        <div className="flex items-center justify-between mt-4">
                          <span className="text-sm text-gray-500">Duration: 45 minutes</span>
                          <Badge className="bg-purple-100 text-purple-900 hover:bg-purple-200">In Progress</Badge>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div>
                    <h2 className="text-xl font-bold mb-4">Module Lessons</h2>
                    <div className="space-y-3">
                      {[
                        { title: "Introduction to Content Marketing", duration: "10:25", completed: true },
                        { title: "Content Strategy Development", duration: "15:40", completed: true },
                        { title: "Creating Engaging Blog Posts", duration: "12:15", completed: false, current: true },
                        { title: "Video Content Creation", duration: "18:30", completed: false },
                        { title: "Content Distribution Channels", duration: "14:20", completed: false },
                      ].map((lesson, index) => (
                        <Card
                          key={index}
                          className={`overflow-hidden ${lesson.current ? "border-purple-300 shadow-sm" : ""}`}
                        >
                          <CardContent className="p-3 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div
                                className={`rounded-full p-1.5 ${lesson.completed ? "bg-green-100" : lesson.current ? "bg-purple-100" : "bg-gray-100"}`}
                              >
                                {lesson.completed ? (
                                  <Check className="h-4 w-4 text-green-600" />
                                ) : (
                                  <Play className="h-4 w-4 text-purple-600" />
                                )}
                              </div>
                              <div>
                                <h4 className="text-sm font-medium">{lesson.title}</h4>
                                <p className="text-xs text-gray-500">{lesson.duration}</p>
                              </div>
                            </div>
                            {lesson.current && (
                              <Badge variant="outline" className="bg-purple-50 text-purple-900">
                                Current
                              </Badge>
                            )}
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </div>

                <h2 className="text-xl font-bold mt-8 mb-4">All Modules</h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      id: 1,
                      title: "Digital Marketing Fundamentals",
                      lessons: 5,
                      duration: "1h 15m",
                      status: "completed",
                      icon: BookOpen,
                    },
                    {
                      id: 2,
                      title: "Building Your Marketing Strategy",
                      lessons: 4,
                      duration: "55m",
                      status: "completed",
                      icon: FileText,
                    },
                    {
                      id: 3,
                      title: "Content Marketing Mastery",
                      lessons: 5,
                      duration: "1h 10m",
                      status: "in-progress",
                      icon: Play,
                    },
                    {
                      id: 4,
                      title: "Social Media Marketing",
                      lessons: 6,
                      duration: "1h 30m",
                      status: "locked",
                      icon: Clock,
                    },
                    {
                      id: 5,
                      title: "Email Marketing Campaigns",
                      lessons: 4,
                      duration: "50m",
                      status: "locked",
                      icon: Clock,
                    },
                    {
                      id: 6,
                      title: "Search Engine Optimization",
                      lessons: 5,
                      duration: "1h 20m",
                      status: "locked",
                      icon: Clock,
                    },
                    {
                      id: 7,
                      title: "Paid Advertising Strategies",
                      lessons: 4,
                      duration: "1h 5m",
                      status: "locked",
                      icon: Clock,
                    },
                    {
                      id: 8,
                      title: "Analytics and Data-Driven Marketing",
                      lessons: 5,
                      duration: "1h 15m",
                      status: "locked",
                      icon: Clock,
                    },
                    {
                      id: 9,
                      title: "Conversion Rate Optimization",
                      lessons: 4,
                      duration: "55m",
                      status: "locked",
                      icon: Clock,
                    },
                    {
                      id: 10,
                      title: "Building Your Marketing Career",
                      lessons: 3,
                      duration: "45m",
                      status: "locked",
                      icon: Award,
                    },
                  ].map((module) => {
                    const ModuleIcon = module.icon
                    return (
                      <Card key={module.id} className="overflow-hidden">
                        <CardContent className="p-4">
                          <div className="flex items-start gap-3">
                            <div
                              className={`rounded-full p-2 ${
                                module.status === "completed"
                                  ? "bg-green-100"
                                  : module.status === "in-progress"
                                    ? "bg-purple-100"
                                    : "bg-gray-100"
                              }`}
                            >
                              <ModuleIcon
                                className={`h-5 w-5 ${
                                  module.status === "completed"
                                    ? "text-green-600"
                                    : module.status === "in-progress"
                                      ? "text-purple-600"
                                      : "text-gray-400"
                                }`}
                              />
                            </div>
                            <div>
                              <h3 className="font-medium">{module.title}</h3>
                              <div className="flex items-center gap-3 mt-1 text-sm text-gray-500">
                                <span>{module.lessons} lessons</span>
                                <span>•</span>
                                <span>{module.duration}</span>
                              </div>
                              <div className="mt-3">
                                {module.status === "completed" && (
                                  <Badge className="bg-green-100 text-green-800 hover:bg-green-200">Completed</Badge>
                                )}
                                {module.status === "in-progress" && (
                                  <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">
                                    In Progress
                                  </Badge>
                                )}
                                {module.status === "locked" && (
                                  <Badge variant="outline" className="text-gray-500">
                                    Locked
                                  </Badge>
                                )}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </TabsContent>

              <TabsContent value="resources" className="space-y-6">
                <h2 className="text-xl font-bold mb-4">Course Resources</h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {[
                    { title: "Digital Marketing Strategy Template", type: "PDF", size: "1.2 MB" },
                    { title: "Content Calendar Template", type: "Excel", size: "850 KB" },
                    { title: "Social Media Checklist", type: "PDF", size: "750 KB" },
                    { title: "SEO Keyword Research Tool", type: "Web Tool", size: "Online" },
                    { title: "Email Marketing Templates", type: "ZIP", size: "3.5 MB" },
                    { title: "Analytics Dashboard Setup Guide", type: "PDF", size: "1.8 MB" },
                  ].map((resource, index) => (
                    <Card key={index} className="overflow-hidden">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium">{resource.title}</h3>
                          <Badge variant="outline">{resource.type}</Badge>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">{resource.size}</p>
                        <Link
                          href="#"
                          className="text-purple-600 hover:text-purple-700 text-sm font-medium mt-3 inline-block"
                        >
                          Download
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="community" className="space-y-6">
                <h2 className="text-xl font-bold mb-4">Community</h2>
                <Card>
                  <CardContent className="p-6">
                    <div className="text-center space-y-4">
                      <h3 className="text-lg font-bold">Join Our Private Discord Community</h3>
                      <p className="text-gray-500">
                        Connect with fellow students, ask questions, and get feedback on your marketing projects.
                      </p>
                      <Link
                        href="#"
                        className="inline-flex h-10 items-center justify-center rounded-md bg-purple-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-purple-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                      >
                        Join Discord
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                <h2 className="text-xl font-bold mt-8 mb-4">Upcoming Live Sessions</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    {
                      title: "Q&A: Content Marketing Strategies",
                      date: "May 15, 2025",
                      time: "2:00 PM EST",
                      host: "Jane Smith",
                    },
                    {
                      title: "Workshop: Creating Viral Social Media Content",
                      date: "May 22, 2025",
                      time: "1:00 PM EST",
                      host: "John Davis",
                    },
                  ].map((session, index) => (
                    <Card key={index} className="overflow-hidden">
                      <CardContent className="p-4">
                        <h3 className="font-medium">{session.title}</h3>
                        <div className="flex items-center gap-3 mt-1 text-sm text-gray-500">
                          <span>{session.date}</span>
                          <span>•</span>
                          <span>{session.time}</span>
                        </div>
                        <p className="text-sm text-gray-500 mt-1">Host: {session.host}</p>
                        <Link
                          href="#"
                          className="text-purple-600 hover:text-purple-700 text-sm font-medium mt-3 inline-block"
                        >
                          Add to Calendar
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

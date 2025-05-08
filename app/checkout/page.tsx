import { Card, CardContent } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Shield, Lock } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckoutForm } from "@/components/checkout-form"

export default function CheckoutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header minimal />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2">
              <div className="space-y-6">
                <div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl text-purple-900">
                    Complete Your Purchase
                  </h1>
                  <p className="mt-2 text-gray-500">
                    You're just one step away from accessing the complete Digital Marketing Masterclass.
                  </p>
                </div>

                <Card className="border-purple-100">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium">Digital Marketing Masterclass</h3>
                        <span className="text-lg font-bold">$49.00</span>
                      </div>
                      <Separator />
                      <div className="flex items-center gap-2">
                        <Checkbox id="upsell" />
                        <div className="grid gap-1.5">
                          <Label htmlFor="upsell" className="font-medium">
                            Add a 1:1 Zoom session with the instructor
                          </Label>
                          <p className="text-sm text-gray-500">
                            Get personalized feedback and guidance on your marketing strategy.
                          </p>
                        </div>
                        <span className="ml-auto font-medium">$79.00</span>
                      </div>
                      <Separator />
                      <div className="flex items-center justify-between font-bold">
                        <span>Total</span>
                        <span>$49.00</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <div className="flex flex-col gap-2 sm:flex-row">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Shield className="h-4 w-4" />
                    <span>30-Day Money-Back Guarantee</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Lock className="h-4 w-4" />
                    <span>Secure Checkout</span>
                  </div>
                </div>
              </div>

              <div>
                <Card className="border-purple-100">
                  <CardContent className="p-6">
                    <CheckoutForm />
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer minimal />
    </div>
  )
}

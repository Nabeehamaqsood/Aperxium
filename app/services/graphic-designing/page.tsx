"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Palette,
  ArrowRight,
  CheckCircle,
  Brush,
  Layers,
  Globe,
  Layout,
  Eye,
  Users,
  Zap,
  Shield,
  BarChart3,
} from "lucide-react"
import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/Landing_page/Footer"
import { useRouter } from "next/navigation"

export default function GraphicDesignPage() {
  const router = useRouter()
  
  

  const features = [
    { icon: <Eye className="w-6 h-6" />, title: "Visual Excellence", description: "Designs that capture attention and communicate effectively" },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Audience Focused",
      description: "Designs tailored to your target audience and business goals",
    },
    { icon: <Zap className="w-6 h-6" />, title: "Fast Turnaround", description: "Efficient processes without compromising quality" },
    { icon: <Shield className="w-6 h-6" />, title: "Brand Consistency", description: "Designs that strengthen your brand identity" },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Results Driven",
      description: "Designs that help achieve your business objectives",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Creative Innovation",
      description: "Fresh, innovative ideas that set you apart from competitors",
    },
  ]

  const handleContactRedirect = () => {
    router.push('/contact')
  }

  const handleWhatsAppRedirect = () => {
    window.open('https://wa.me/923405542097', '_blank')
  }

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <Navbar />

        {/* Hero Section */}
        <section className="pt-32 pb-24 md:pt-40 md:pb-32 text-gray-900 bg-gradient-to-b from-[#f0f9f8] to-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-5xl mx-auto text-center">
              <div className="flex justify-center mb-6 md:mb-8">
                <Palette className="w-16 h-16 md:w-24 md:h-24 text-[#3db1a2]" />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 md:mb-8">
                Graphic Design Services
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-8 md:mb-10 opacity-90 max-w-3xl mx-auto">
                Transforming ideas into visually stunning designs that communicate, engage, and convert.
              </p>
              <Button
                onClick={handleContactRedirect}
                size="lg"
                className="bg-[#3db1a2] hover:bg-[#2e8f7f] text-white px-8 py-4 md:px-10 md:py-5 text-lg md:text-xl"
              >
                Start Your Project <ArrowRight className="ml-2 md:ml-3 w-5 h-5 md:w-6 md:h-6" />
              </Button>
            </div>
          </div>
        </section>

 
        {/* Features Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Professional design solutions that make your brand stand out and connect with your audience.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-4 md:p-6 rounded-lg bg-gray-50 hover:bg-[#f0f9f8] transition-colors">
                  <div className="bg-[#e6f4f2] w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-[#3db1a2]">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gradient-to-r from-[#3db1a2] to-[#2e8f7f] text-white">
          <div className="container mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Elevate Your Brand with Stunning Design?</h2>
            <p className="text-lg sm:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let's create visual solutions that make your brand unforgettable and drive real results.
            </p>
            <Button 
              onClick={handleWhatsAppRedirect}
              size="lg" 
              className="bg-white text-[#2e8f7f] hover:bg-gray-100 px-6 py-3 md:px-8 md:py-4 text-base md:text-lg"
            >
              Start Your Design Project <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
            </Button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
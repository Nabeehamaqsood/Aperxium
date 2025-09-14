"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Layout,
  ArrowRight,
  CheckCircle,
  Figma,
  Code,
  Smartphone,
  Globe,
  Eye,
  Users,
  Zap,
  Shield,
  BarChart3,
  Palette,
} from "lucide-react"
import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/Landing_page/Footer"
import { useRouter } from "next/navigation"

export default function UXUIDesignPage() {
  const router = useRouter()
  
  

  const features = [
    { icon: <Eye className="w-6 h-6" />, title: "User-Centered Design", description: "Solutions focused on real user needs and behaviors" },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Intuitive Interactions",
      description: "Seamless experiences that feel natural and effortless",
    },
    { icon: <Palette className="w-6 h-6" />, title: "Visual Appeal", description: "Aesthetically pleasing designs that enhance usability" },
    { icon: <Shield className="w-6 h-6" />, title: "Consistency", description: "Cohesive design systems that maintain brand integrity" },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Data-Driven",
      description: "Design decisions backed by research and analytics",
    },
    {
      icon: <Code className="w-6 h-6" />,
      title: "Developer Friendly",
      description: "Clean handoff with all assets and specifications",
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
                <Figma className="w-16 h-16 md:w-24 md:h-24 text-[#3db1a2]" />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 md:mb-8">
                UX/UI Design Services
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl mb-8 md:mb-10 opacity-90 max-w-3xl mx-auto">
                Creating intuitive, beautiful digital experiences that users love and businesses thrive on.
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

        {/* Our Design Stack Section - 3 Centered Cards */}
        <section className="py-16 md:py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Design Stack</h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                We use industry-leading tools to create exceptional user experiences and interfaces.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl">
                {[
                  { 
                    name: "Figma", 
                    description: "Collaborative interface design tool for prototyping and design systems",
                    icon: <Figma className="w-8 h-8" />
                  },
                  { 
                    name: "Adobe XD", 
                    description: "Vector-based design and prototyping tool for web and mobile apps",
                    icon: <Layout className="w-8 h-8" />
                  },
                  { 
                    name: "Marvel", 
                    description: "Prototyping and user testing platform for creating interactive experiences",
                    icon: <Globe className="w-8 h-8" />
                  },
                ].map((tool, index) => (
                  <Card key={index} className="text-center p-6 bg-white hover:shadow-lg transition-shadow flex flex-col items-center">
                    <div className="bg-[#e6f4f2] w-16 h-16 rounded-full flex items-center justify-center mb-4 text-[#3db1a2]">
                      {tool.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{tool.name}</h3>
                    <p className="text-gray-600 flex-grow">{tool.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Why Choose Our UX/UI Design</h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Professional design solutions that create meaningful connections between users and products.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-4 md:p-6 rounded-lg bg-white hover:bg-[#f0f9f8] transition-colors">
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Create Exceptional User Experiences?</h2>
            <p className="text-lg sm:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let's design intuitive interfaces that delight users and drive business growth.
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
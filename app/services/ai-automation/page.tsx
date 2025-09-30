"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Brain,
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  Cpu,
  Cloud,
  Database,
  Settings,
  Globe,
} from "lucide-react"
import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/Landing_page/Footer"
import { useRouter } from "next/navigation"

export default function AIAutomationPage() {
  const router = useRouter()

  const services = [
    {
      name: "VI Path Automation",
      description: "Advanced computer vision solutions for process automation and quality control.",
      features: ["Image Recognition", "Object Detection", "Quality Assurance", "Visual Inspection"],
      icon: <Cpu className="w-10 h-10 md:w-12 md:h-12 mx-auto" style={{ color: "#2e8f7f" }} />,
    },
    {
      name: "Zapier Automation",
      description: "Connect your apps and automate workflows without coding using Zapier's powerful integration platform.",
      features: ["Multi-app Integration", "Custom Zaps", "Data Synchronization", "Workflow Automation"],
      icon: <Zap className="w-10 h-10 md:w-12 md:h-12 mx-auto" style={{ color: "#2e8f7f" }} />,
    },
    {
      name: "Microsoft Power Automate",
      description: "Create automated workflows between your favorite apps and services to synchronize files and notifications.",
      features: ["Workflow Automation", "Office 365 Integration", "Approval Processes", "Data Collection"],
      icon: <Settings className="w-10 h-10 md:w-12 md:h-12 mx-auto" style={{ color: "#2e8f7f" }} />,
    },
  ]

  const features = [
    { icon: <Zap className="w-6 h-6 md:w-8 md:h-8 mx-auto" style={{ color: "#2e8f7f" }} />, title: "Increased Efficiency", description: "Automate repetitive tasks to save time and resources" },
    {
      icon: <Brain className="w-6 h-6 md:w-8 md:h-8 mx-auto" style={{ color: "#2e8f7f" }} />,
      title: "Intelligent Decision Making",
      description: "AI-powered insights for better business decisions",
    },
    { icon: <Shield className="w-6 h-6 md:w-8 md:h-8 mx-auto" style={{ color: "#2e8f7f" }} />, title: "Enhanced Accuracy", description: "Reduce human error with precision automation" },
    { icon: <Cloud className="w-6 h-6 md:w-8 md:h-8 mx-auto" style={{ color: "#2e8f7f" }} />, title: "Scalable Solutions", description: "Grow your automation with your business needs" },
    {
      icon: <Database className="w-6 h-6 md:w-8 md:h-8 mx-auto" style={{ color: "#2e8f7f" }} />,
      title: "Data-Driven Insights",
      description: "Transform raw data into actionable intelligence",
    },
    {
      icon: <Globe className="w-6 h-6 md:w-8 md:h-8 mx-auto" style={{ color: "#2e8f7f" }} />,
      title: "24/7 Operation",
      description: "Round-the-clock automation without downtime",
    },
  ]

  const redirectToWhatsApp = () => {
    window.open(`https://wa.me/923405542097`, '_blank')
  }

  const redirectToContact = () => {
    router.push('/contact')
  }

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <Navbar />

        {/* Hero Section */}
        <section className="pt-28 md:pt-32 lg:pt-40 pb-16 md:pb-24 lg:pb-32 text-gray-900 bg-gradient-to-b from-blue-50 to-white px-4">
          <div className="container mx-auto">
            <div className="max-w-5xl mx-auto text-center">
              <div className="flex justify-center mb-6 md:mb-8">
                <Brain className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24" style={{ color: "#2e8f7f" }} />
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8">
                AI Automation Services
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 md:mb-10 opacity-90 px-2">
                Transform your business with intelligent automation solutions powered by artificial intelligence.
              </p>
              <Button
                onClick={redirectToContact}
                size="lg"
                className="bg-[#3db1a2] hover:bg-[#2e8f7f] text-white px-6 py-4 md:px-8 md:py-4 lg:px-10 lg:py-5 text-base md:text-lg lg:text-xl"
              >
                Automate Your Processes <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-20 bg-gray-50 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our AI Automation Services</h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                We design and implement intelligent automation solutions that streamline operations and drive innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services.map((service, index) => (
                <Card key={index} className="bg-white hover:shadow-lg transition-shadow h-full flex flex-col">
                  <CardContent className="p-6 md:p-8 flex flex-col items-center text-center flex-grow">
                    <div className="mb-4 md:mb-6">{service.icon}</div>
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 md:mb-4">{service.name}</h3>
                    <p className="text-gray-600 mb-4 md:mb-6 flex-grow">{service.description}</p>

                    <div className="w-full mb-4 md:mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3 md:mb-4 text-lg">Key Features:</h4>
                      <div className="space-y-2 md:space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center justify-start md:justify-center">
                            <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-[#3db1a2] mr-2 md:mr-3 flex-shrink-0" />
                            <span className="text-sm md:text-base text-gray-700 text-left">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-20 bg-white px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Benefits of AI Automation</h2>
              <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                Transform your business operations with intelligent automation powered by artificial intelligence.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-5 md:p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                  <div className="bg-purple-50 w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 md:mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-gray-50 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-900">Ready to Transform Your Business with AI?</h2>
            <p className="text-lg md:text-xl mb-6 md:mb-8 opacity-90 max-w-2xl mx-auto text-gray-700 px-4">
              Let's implement intelligent automation solutions that increase efficiency, reduce costs, and drive innovation.
            </p>
            <Button 
              onClick={redirectToWhatsApp}
              size="lg" 
              className="bg-[#3db1a2] hover:bg-[#2e8f7f] text-white px-6 py-4 md:px-8 md:py-4 text-base md:text-lg"
            >
              Start Your AI Journey <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
            </Button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}
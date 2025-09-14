import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Smartphone,
  Apple,
  ArrowRight,
  CheckCircle,
  Code,
  Palette,
  Zap,
  Shield,
  Users,
  Clock,
  Star,
} from "lucide-react"
import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/Landing_page/Footer"

export default function MobileDevelopmentPage() {
  const platforms = [
    {
      name: "Android Development",
      description: "Native Android apps using Kotlin and Java",
      features: [
        "Material Design",
        "Google Play Store",
        "Firebase Integration",
        "Performance Optimization",
      ],
      icon: <Smartphone className="w-10 h-10 text-[#3db1a2] hover:text-[#2e8f7f]" />,
    },
    {
      name: "iOS Development",
      description: "Native iOS apps using Swift and Objective-C",
      features: [
        "Human Interface Guidelines",
        "App Store Distribution",
        "Core Data",
        "Push Notifications",
      ],
      icon: <Apple className="w-10 h-10 text-[#3db1a2] hover:text-[#2e8f7f]" />,
    },
  ]

  const process = [
    {
      step: "01",
      title: "Requirements Analysis & UI/UX Design",
      description:
        "We start by understanding your business goals, target audience, and technical requirements. Our design team creates intuitive user interfaces and seamless user experiences.",
      deliverables: [
        "Project Scope Document",
        "User Journey Maps",
        "Wireframes & Mockups",
        "Technical Architecture",
      ],
    },
    {
      step: "02",
      title: "Platform Selection & Architecture Planning",
      description:
        "Based on your requirements, we recommend the best platform approach and design a scalable architecture that ensures optimal performance and maintainability.",
      deliverables: [
        "Platform Recommendation",
        "Technical Architecture",
        "Database Design",
        "API Specifications",
      ],
    },
    {
      step: "03",
      title: "Development & Testing",
      description:
        "Our experienced developers build your app using industry best practices, while our QA team ensures quality through comprehensive testing at every stage.",
      deliverables: [
        "MVP Development",
        "Feature Implementation",
        "Quality Assurance",
        "Performance Testing",
      ],
    },
    {
      step: "04",
      title: "App Store Deployment & Maintenance",
      description:
        "We handle the complete deployment process and provide ongoing maintenance, updates, and support to ensure your app stays current and performs optimally.",
      deliverables: [
        "App Store Submission",
        "Launch Support",
        "Monitoring Setup",
        "Maintenance Plan",
      ],
    },
  ]

  const features = [
    {
      icon: <Code className="w-6 h-6 text-[#3db1a2] hover:text-[#2e8f7f]" />,
      title: "Clean Code",
      description: "Maintainable and scalable code architecture",
    },
    {
      icon: <Palette className="w-6 h-6 text-[#3db1a2] hover:text-[#2e8f7f]" />,
      title: "Modern UI/UX",
      description: "Beautiful and intuitive user interfaces",
    },
    {
      icon: <Zap className="w-6 h-6 text-[#3db1a2] hover:text-[#2e8f7f]" />,
      title: "High Performance",
      description: "Optimized for speed and efficiency",
    },
    {
      icon: <Shield className="w-6 h-6 text-[#3db1a2] hover:text-[#2e8f7f]" />,
      title: "Security First",
      description: "Built with security best practices",
    },
    {
      icon: <Users className="w-6 h-6 text-[#3db1a2] hover:text-[#2e8f7f]" />,
      title: "User-Centric",
      description: "Designed with user experience in mind",
    },
    {
      icon: <Clock className="w-6 h-6 text-[#3db1a2] hover:text-[#2e8f7f]" />,
      title: "Timely Delivery",
      description: "On-time project completion",
    },
  ]

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Fixed Navbar */}
        <Navbar />

        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-white text-gray-900">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <Smartphone className="w-16 h-16 text-[#3db1a2] hover:text-[#2e8f7f]" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Mobile Development Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                Create powerful, user-friendly mobile applications that engage
                your audience and drive business growth
              </p>
              <a
                href="https://wa.me/923405542097?text=Hello%20I%20want%20to%20start%20a%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#3db1a2] hover:bg-[#2e8f7f] text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-md transition-all duration-300"
              >
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </section>
{/* Platforms Section */}
<section className="py-20 bg-white">
  <div className="container mx-auto px-6">
    <div className="text-center mb-16">
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        Mobile Platforms We Master
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        From native iOS and Android apps to cross-platform solutions, we
        deliver exceptional mobile experiences
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-8">
      {platforms.map((platform, index) => (
        <Card
          key={index}
          className="bg-white hover:shadow-lg transition-shadow"
        >
          <CardContent className="p-8 flex flex-col items-center text-center">
            <div className="text-4xl mb-4">{platform.icon}</div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              {platform.name}
            </h3>
            <p className="text-gray-600 mb-6">{platform.description}</p>
            <div className="space-y-2 w-full">
              {platform.features.map((feature, featureIndex) => (
                <div
                  key={featureIndex}
                  className="flex items-center justify-center"
                >
                  <CheckCircle className="w-5 h-5 text-[#3db1a2] hover:text-[#2e8f7f] mr-3" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>


        {/* Process Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Our Development Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A proven methodology that ensures successful project delivery
                from concept to launch
              </p>
            </div>

            <div className="space-y-12">
              {process.map((step, index) => (
                <div
                  key={index}
                  className="flex flex-col lg:flex-row items-start gap-8"
                >
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-r from-[#3db1a2] to-[#2e8f7f] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 mb-6 text-lg">
                      {step.description}
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {step.deliverables.map((deliverable, deliverableIndex) => (
                        <div key={deliverableIndex} className="flex items-center">
                          <Star className="w-4 h-4 text-[#3db1a2] hover:text-[#2e8f7f] mr-2" />
                          <span className="text-gray-700">{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Mobile Development
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We combine technical expertise with creative design to deliver
                mobile apps that users love
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="bg-[#e6f4f2] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-[#3db1a2] hover:text-[#2e8f7f]">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#3db1a2] to-[#2e8f7f] text-white">
          <div className="container mx-auto px-6 text-center">
            <a
              href="https://wa.me/923405542097"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2 className="text-4xl font-bold mb-4">
                Ready to Build Your Mobile App?
              </h2>
            </a>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let's discuss your mobile app idea and create a solution that
              drives your business forward
            </p>
            <a
              href="https://wa.me/923405542097"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-white text-[#3db1a2] hover:bg-gray-100 px-8 py-4 text-lg font-semibold shadow-md transition-all duration-300"
              >
                Get Started Today <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>
        </section>
      </div>

      <Footer />
    </>
  )
}

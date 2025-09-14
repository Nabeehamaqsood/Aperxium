"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Globe,
  ArrowRight,
  CheckCircle,
  Code,
  ShoppingCart,
  User,
  Zap,
  Search,
  Shield,
  BarChart3,
  Palette,
  Smartphone,
  Layout,
} from "lucide-react"
import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/Landing_page/Footer"

export default function WebDevelopmentPage() {
  const services = [
    {
      name: "Full Stack Applications",
      description: "Complete web applications with a modern frontend and robust backend.",
      features: ["React/Next.js Frontend", "Node.js/Express Backend", "API Development", "Database Integration"],
      icon: <Code className="w-8 h-8" />,
      technologies: ["Next.js", "React", "Node.js", "MongoDB", "PostgreSQL"],
    },
    {
      name: "Custom WordPress Development",
      description: "Tailored WordPress websites with custom themes, plugins, and functionality.",
      features: ["Custom Theme Design", "Plugin Development", "E-commerce Integration", "Performance Optimization"],
      icon: <Layout className="w-8 h-8" />,
      technologies: ["WordPress", "Elementor", "WooCommerce", "PHP", "MySQL"],
    },
    {
      name: "E-commerce Solutions",
      description: "Complete online stores with secure payment processing and inventory management.",
      features: ["Shopping Cart", "Payment Gateway", "Inventory Management", "Order Tracking"],
      icon: <ShoppingCart className="w-8 h-8" />,
      technologies: ["Next.js", "Stripe", "Shopify", "WooCommerce"],
    },
    {
      name: "Portfolio & Marketing Sites",
      description: "Professional websites that effectively showcase your work and brand identity.",
      features: ["Responsive Design", "SEO Optimized", "Content Management", "Fast Loading"],
      icon: <User className="w-8 h-8" />,
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "WordPress"],
    },
  ]

  const techStack = [
    { category: "Frontend", technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"] },
    { category: "Backend", technologies: ["Node.js", "Express", "Python", "PHP", "Laravel"] },
    { category: "CMS", technologies: ["WordPress", "Headless CMS", "Sanity.io"] },
    { category: "Database", technologies: ["MongoDB", "PostgreSQL", "MySQL", "Redis"] },
    { category: "Cloud & DevOps", technologies: ["Vercel", "AWS", "Docker", "Cloudflare"] },
  ]

  const process = [
    {
      step: "01",
      title: "Discovery & Planning",
      description:
        "We begin with a detailed consultation to understand your project goals, audience, and technical requirements, creating a solid roadmap.",
      deliverables: ["Project Requirements", "Wireframes", "Design System", "Project Roadmap"],
    },
    {
      step: "02",
      title: "Design & Development",
      description:
        "Our team crafts a unique, user-friendly design and then builds a responsive, performant, and secure application using modern technologies.",
      deliverables: ["Custom UI/UX Design", "Frontend Development", "Backend Logic", "Database Setup"],
    },
    {
      step: "03",
      title: "Testing & Deployment",
      description:
        "We perform comprehensive testing to ensure quality and then deploy your application to a reliable hosting environment with minimal downtime.",
      deliverables: ["Quality Assurance", "Performance Testing", "Secure Deployment", "Launch Plan"],
    },
    {
      step: "04",
      title: "Maintenance & Support",
      description:
        "Post-launch, we provide ongoing maintenance, security updates, and technical support to ensure your application remains in top condition.",
      deliverables: ["Regular Backups", "Security Patches", "Feature Updates", "Technical Support"],
    },
  ]

  const features = [
    { icon: <Zap className="w-6 h-6" />, title: "Lightning Fast", description: "Optimized for speed and performance" },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Responsive Design",
      description: "Flawless experience on all devices",
    },
    { icon: <Search className="w-6 h-6" />, title: "SEO Optimized", description: "Built for search engine visibility" },
    { icon: <Shield className="w-6 h-6" />, title: "Secure & Reliable", description: "Protected with security best practices" },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Analytics Ready",
      description: "Integrated with analytics and tracking tools",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Modern Design",
      description: "Aesthetics that match your brand identity",
    },
  ]

  return (
    <>
      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <Navbar />

        {/* Hero Section */}
        <section className="pt-40 pb-32 text-gray-900">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto text-center">
              <div className="flex justify-center mb-8">
                <Globe className="w-24 h-24 text-[#3db1a2]" />
              </div>
              <h1 className="text-6xl md:text-7xl font-bold mb-8">
                Web Development Services
              </h1>
              <p className="text-2xl md:text-3xl mb-10 opacity-90">
                From custom full-stack apps to powerful WordPress sites, we build web
                solutions that work for you.
              </p>
              <Button
                size="lg"
                className="bg-[#3db1a2] hover:bg-[#2e8f7f] text-white px-10 py-5 text-xl"
              >
                Start Your Project <ArrowRight className="ml-3 w-6 h-6" />
              </Button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Web Development Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We provide a range of solutions to meet your business needs, from custom builds to CMS-driven websites.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                  <CardContent className="p-8 flex flex-col items-center text-center">
                    <div className="text-[#3db1a2] mb-4">{service.icon}</div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.name}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>

                    <div className="mb-6 w-full">
                      <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                      <div className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center justify-center">
                            <CheckCircle className="w-5 h-5 text-[#3db1a2] mr-3" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="w-full">
                      <h4 className="font-semibold text-gray-900 mb-3">Technologies:</h4>
                      <div className="flex flex-wrap justify-center gap-2">
                        {service.technologies.map((tech, techIndex) => (
                          <Badge
                            key={techIndex}
                            variant="secondary"
                            className="text-xs bg-[#3db1a2] text-white"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Technology Stack</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We use modern, proven technologies to build scalable and maintainable web applications.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {techStack.map((stack, index) => (
                <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{stack.category}</h3>
                    <div className="space-y-2">
                      {stack.technologies.map((tech, techIndex) => (
                        <div key={techIndex} className="flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-[#3db1a2] mr-2" />
                          <span className="text-gray-700">{tech}</span>
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Development Process</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A systematic approach that ensures quality, performance, and timely delivery.
              </p>
            </div>

            <div className="space-y-12">
              {process.map((step, index) => (
                <div key={index} className="flex flex-col lg:flex-row items-start gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-r from-[#3db1a2] to-[#2e8f7f] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600 mb-6 text-lg">{step.description}</p>
                    <div className="grid md:grid-cols-2 gap-4">
                      {step.deliverables.map((deliverable, deliverableIndex) => (
                        <div key={deliverableIndex} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-[#3db1a2] mr-2" />
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
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Web Development</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Modern web applications built with performance, security, and user experience in mind.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="bg-[#3db1a2]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-[#3db1a2]">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Ready to Build Your Web Application?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto text-gray-700">
              Let's create a powerful web solution that drives your business forward with modern technologies.
            </p>
            <Button size="lg" className="bg-[#3db1a2] hover:bg-[#2e8f7f] text-white px-8 py-4 text-lg">
              Start Development <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  )
}

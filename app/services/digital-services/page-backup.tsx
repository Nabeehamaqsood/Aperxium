"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Palette,
  ArrowRight,
  CheckCircle,
  Video,
  Megaphone,
  BarChart3,
  Edit,
  TrendingUp,
  Target,
  Users,
  Zap,
  Star,
} from "lucide-react"
import  Navbar  from "@/components/navbar/Navbar"
import Footer from "@/components/Landing_page/Footer"




export default function DigitalServicesPage() {
  const services = [
    {
      name: "Facebook & Instagram Marketing",
      description: "Strategic social media campaigns that drive engagement and conversions",
      features: ["Ad Campaign Management", "Content Strategy", "Audience Targeting", "Performance Analytics"],
      icon: <Users className="w-8 h-8" />,
      platforms: ["Facebook Ads", "Instagram Ads", "Meta Business", "Creator Studio"],
    },
    {
      name: "Google Marketing & SEO",
      description: "Search engine optimization and Google Ads management",
      features: ["Google Ads", "SEO Optimization", "Keyword Research", "Local SEO"],
      icon: <Target className="w-8 h-8" />,
      platforms: ["Google Ads", "Google Analytics", "Search Console", "Google My Business"],
    },
    {
      name: "Video Production & Editing",
      description: "Professional video content for marketing and brand storytelling",
      features: ["Video Production", "Post-Production", "Motion Graphics", "Video SEO"],
      icon: <Video className="w-8 h-8" />,
      platforms: ["Adobe Premiere", "After Effects", "DaVinci Resolve", "Final Cut Pro"],
    },
    {
      name: "Graphic Design & Branding",
      description: "Visual identity and graphic design that captures your brand essence",
      features: ["Logo Design", "Brand Identity", "Marketing Materials", "Web Graphics"],
      icon: <Palette className="w-8 h-8" />,
      platforms: ["Adobe Creative Suite", "Figma", "Canva Pro", "Sketch"],
    },
  ]

  const marketingServices = [
    {
      category: "Social Media Marketing",
      services: ["Content Creation", "Community Management", "Influencer Partnerships", "Social Media Strategy"],
    },
    {
      category: "Search Engine Marketing",
      services: ["Google Ads Management", "Bing Ads", "Shopping Campaigns", "Display Advertising"],
    },
    {
      category: "Content Marketing",
      services: ["Blog Writing", "Email Marketing", "Newsletter Design", "Content Strategy"],
    },
    {
      category: "Analytics & Reporting",
      services: ["Performance Tracking", "ROI Analysis", "Custom Dashboards", "Monthly Reports"],
    },
  ]

  const process = [
    {
      step: "01",
      title: "Brand Analysis & Strategy Development",
      description:
        "We analyze your brand, target audience, and competition to develop a comprehensive digital marketing strategy that aligns with your business goals.",
      deliverables: ["Brand Audit", "Competitor Analysis", "Target Audience Research", "Marketing Strategy"],
    },
    {
      step: "02",
      title: "Content Creation & Campaign Design",
      description:
        "Our creative team develops compelling content, designs engaging visuals, and creates campaigns that resonate with your audience across all platforms.",
      deliverables: ["Content Calendar", "Creative Assets", "Campaign Materials", "Brand Guidelines"],
    },
    {
      step: "03",
      title: "Multi-platform Deployment",
      description:
        "We launch and manage your campaigns across multiple platforms, ensuring consistent messaging and optimal performance on each channel.",
      deliverables: ["Campaign Launch", "Platform Setup", "Ad Management", "Content Publishing"],
    },
    {
      step: "04",
      title: "Analytics & Performance Optimization",
      description:
        "Continuous monitoring, analysis, and optimization of your campaigns to maximize ROI and achieve your marketing objectives.",
      deliverables: ["Performance Reports", "Optimization Recommendations", "A/B Testing", "ROI Analysis"],
    },
  ]

  const portfolioItems = [
    {
      title: "E-commerce Brand Campaign",
      description: "Increased online sales by 300% through targeted Facebook and Google ads",
      metrics: ["300% Sales Increase", "150% ROAS", "50K+ Reach"],
      services: ["Facebook Ads", "Google Ads", "Video Content"],
    },
    {
      title: "SaaS Product Launch",
      description: "Successful product launch with comprehensive digital marketing strategy",
      metrics: ["10K+ Sign-ups", "25% Conversion Rate", "500K+ Impressions"],
      services: ["Content Marketing", "SEO", "Social Media"],
    },
    {
      title: "Restaurant Chain Branding",
      description: "Complete brand redesign and digital presence overhaul",
      metrics: ["200% Social Growth", "40% More Bookings", "Brand Recognition"],
      services: ["Branding", "Video Production", "Social Media"],
    },
  ]

  const features = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Data-Driven Results",
      description: "Decisions based on analytics and performance data",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast Turnaround",
      description: "Quick delivery without compromising quality",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Creative Excellence",
      description: "Award-winning creative and design work",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "ROI Focused",
      description: "Campaigns designed to maximize return on investment",
    },
    {
      icon: <Megaphone className="w-6 h-6" />,
      title: "Multi-Channel",
      description: "Integrated campaigns across all digital platforms",
    },
    {
      icon: <Edit className="w-6 h-6" />,
      title: "Custom Solutions",
      description: "Tailored strategies for your unique business needs",
    },
  ]

  return (
  <>
   <Navbar />
    <div className="min-h-screen bg-white">
      {/* Navigation */}
     

      {/* Hero Section */}
            {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-purple-50 text-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
                            <Palette className="w-16 h-16 text-[#3db1a2]" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Digital Marketing Services</h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Comprehensive digital marketing solutions including Facebook ads, Google marketing, video production, and
              graphic design
            </p>
            <Button size="lg" className="bg-white text-cyan-900 hover:bg-gray-100 px-8 py-4 text-lg">
              Grow Your Brand <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Digital Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From social media marketing to video production, we provide comprehensive digital solutions that drive
              results
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                                    <div className="text-[#3db1a2] mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.name}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                                                    <CheckCircle className="w-5 h-5 text-[#3db1a2] mr-3" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                    <h4 className="font-semibold text-gray-900 mb-3">Platforms & Tools:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.platforms.map((platform, platformIndex) => (
                        <Badge key={platformIndex} variant="secondary" className="text-xs">
                          {platform}
                        </Badge>
                
                      ))}
                    </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Marketing Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Comprehensive Marketing Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Full-service digital marketing across all major platforms and channels
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {marketingServices.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">{category.category}</h3>
                  <div className="space-y-2">
                    {category.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-teal-500 mr-2" />
                        <span className="text-gray-700 text-sm">{service}</span>
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Marketing Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A strategic approach that delivers measurable results and sustainable growth
            </p>
          </div>

          <div className="space-y-12">
            {process.map((step, index) => (
              <div key={index} className="flex flex-col lg:flex-row items-start gap-8">
                <div className="flex-shrink-0">
                                    <div className="w-20 h-20 bg-gradient-to-r from-[#3db1a2] to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {step.step}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 mb-6 text-lg">{step.description}</p>
                  <div className="grid md:grid-cols-2 gap-4">
                    {step.deliverables.map((deliverable, deliverableIndex) => (
                      <div key={deliverableIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-teal-500 mr-2" />
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

      {/* Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Real results from our digital marketing campaigns</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Metrics:</h4>
                    <div className="space-y-1">
                      {item.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="flex items-center text-sm">
                          <Star className="w-3 h-3 text-yellow-500 mr-2" />
                          <span className="text-gray-700">{metric}</span>
                        </div>
                      ))}
                  </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Services Used:</h4>
                    <div className="flex flex-wrap gap-1">
                      {item.services.map((service, serviceIndex) => (
                        <Badge key={serviceIndex} variant="outline" className="text-xs">
                          {service}
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

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Digital Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional digital marketing that delivers measurable results and business growth
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
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Ready to Grow Your Digital Presence?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto text-gray-700">
            Let's create a comprehensive digital marketing strategy that drives real results for your business
          </p>
          <Button size="lg" className="bg-[#3db1a2] hover:bg-[#2e8f7f] text-white px-8 py-4 text-lg">
            Start Marketing Campaign <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>    </div>
<Footer />
</>
  )
}
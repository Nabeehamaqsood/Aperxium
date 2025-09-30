"use client"

import { useEffect, useRef, useState } from "react"
import { Smartphone, Shield, Brain, Globe, Palette, Cloud } from "lucide-react"

const services = [
  {
  id: 1,
  title: "Mobile App Development",
  description: "Native and cross-platform mobile applications for Android and iOS.",
  technologies: ["IOS", "Dart", "Java", "Kotlin", "Flutter" , "PHP", "Firebase", "Andriod"],
  icon: <Smartphone className="w-8 h-8" />,
  link: "/services/mobile-developmentt",
},
{
  id: 2,
  title: "Website Development",
  description: "Full-stack, responsive, and modern web solutions tailored to your needs.",
  technologies: ["HTML/CSS", "Node.js", "Javascript" , "Java" , "React", "Wordpress", "Monogo DB", "PHP", "Laravel"],
  icon: <Globe className="w-8 h-8" />,
  link: "/services/web-development",
},
{
  id: 3,
  title: "AI Automation",
  description: "Automation with AI agents, chatbots, and workflow optimization solutions.",
  technologies: ["VI Path", "Microsoft Power Automate", "Zapier Automation"],
  icon: <Brain className="w-8 h-8" />,
  link: "/services/ai-automation",
},
{
  id: 4,
  title: "Digital Marketing",
  description: "Marketing campaigns, SEO, and social media strategies to grow your brand.",
  technologies: ["SocialMedia Acccount handling", "Facebook Ads", "Instagram Ads", "Google Ads", "Tiktok Ads"],
  icon: <Cloud className="w-8 h-8" />,
  link: "/services/digital-services",
},
{
  id: 5,
  title: "Graphic Designing",
  description: "Creative designs, branding, and visual content to enhance your identity.",
  technologies: ["Logo Design", "Canva", "Banner Desiging", "Illustrate", "Invitation Cards", "Flex Desiging"],
  icon: <Palette className="w-8 h-8" />,
  link: "/services/graphic-designing",
},
{
  id: 6,
  title: "UI/UX Designing",
  description: "User-focused designs that ensure seamless experience and engagement.",
  technologies: ["Adrobe XD", "Marvel", "Figma"],
  icon: <Shield className="w-8 h-8" />,
  link: "/services/UIUX",
},

]

const ServicesSection = () => {
  const [visibleCards, setVisibleCards] = useState(new Set<number>())
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    
    cardRefs.current.forEach((card, index) => {
      if (card) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setVisibleCards(prev => new Set([...prev, index]))
              }
            })
          },
          { threshold: 0.1, rootMargin: '50px' }
        )
        observer.observe(card)
        observers.push(observer)
      }
    })

    return () => observers.forEach(observer => observer.disconnect())
  }, [])

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-50 to-white py-20 px-6" id="services">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #3db1a2 2px, transparent 2px), 
                           radial-gradient(circle at 75% 75%, #3db1a2 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-teal-500 to-transparent mx-auto mb-6"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology solutions to drive your business forward with innovation and expertise
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={el => { cardRefs.current[index] = el }}
              className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-teal-200 transform hover:-translate-y-2 ${
                visibleCards.has(index) 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: visibleCards.has(index) ? `${index * 100}ms` : '0ms'
              }}
            >
              {/* Card Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-50/50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Service Icon */}
              <div className="relative mb-6 flex justify-center">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-xl flex items-center justify-center text-white shadow-lg group-hover:shadow-teal-500/25 transition-all duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
              </div>

              {/* Service Content */}
              <div className="relative text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Technologies (No Slider, Clean Wrap) */}
                <div className="flex flex-wrap justify-center gap-2 mb-6">
                  {service.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm font-medium bg-teal-50 text-teal-700 rounded-full border border-teal-200 hover:bg-teal-100 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Learn More Button */}
                <a
                  href={service.link}
                  className="inline-flex items-center space-x-2 text-teal-600 font-semibold hover:text-teal-700 transition-all duration-300 group/btn"
                >
                  <span>Learn More</span>
                  <svg
                    className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-teal-200 transition-all duration-300 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Bottom CTA Section - Fixed WhatsApp link */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-white rounded-full px-8 py-4 shadow-lg border border-gray-100">
            <span className="text-gray-600">Ready to get started?</span>
            <a
              href="https://wa.me/923405542097"
              className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-6 py-2 rounded-full font-semibold hover:from-teal-600 hover:to-teal-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
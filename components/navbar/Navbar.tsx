"use client"
import { useState, useEffect } from "react"
import { Menu, X, Phone, Mail, Clock } from "lucide-react"
import { DesktopDropdown } from "./DesktopDropdown"
import { MobileMenu } from "./MobileMenu"

const services = [
  { name: "Mobile Development", href: "/services/mobile-development" },
  { name: "Web Development", href: "/services/web-development" },
  { name: "Digital Marketing", href: "/services/digital-services" },
  { name: "AI Automation", href: "/services/ai-automation" },
  { name: "Graphic Designing", href: "/services/graphic-designing" },
  { name: "UI/UX Designing", href: "/services/UIUX" },
]

const industries = [
  { name: "E-commerce", href: "/industries/ecommerce" },
  { name: "Education", href: "/industries/education" },
  { name: "Portfolio", href: "/industries/portfolio" },
  { name: "Healthcare", href: "/industries/healthcare" },
  { name: "Finance", href: "/industries/finance" },
  { name: "Retail", href: "/industries/retail" },
  { name: "Manufacturing", href: "/industries/manufacturing" },
  { name: "Logistics & Supply Chain", href: "/industries/logistics" },
]

const about = [
  { name: "Our Team", href: "/team" },
  { name: "Leadership", href: "/leadership" },
]

export default function Navbar({ onGetStartedClick }: { onGetStartedClick?: () => void }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const sections = [
    { title: "Services", items: services },
    { title: "Industries", items: industries },
    { title: "About", items: about },
    { title: "More", items: [
        { name: "Blog", href: "/blog" },
        { name: "Projects", href: "/projects" },
        { name: "Contact", href: "/contact" },
      ]
    }
  ]

  return (
    <>
      {/* Top Contact Bar - Desktop Only */}
      <div
        className={`hidden lg:block fixed top-0 w-full bg-[#3db1a2] text-white text-sm z-[60] transition-transform duration-300 ${
          isScrolled ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        <div className="container mx-auto px-6 py-2 flex justify-center items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+92 340 5542097</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>apexium.space@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>24/7 hours</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "top-0 bg-white backdrop-blur-md border-b border-gray-200 shadow-sm"
            : "top-0 lg:top-10 bg-white backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <img
              src="/images/2.jpg"
              alt="Apexium"
              className="h-12 w-auto object-contain"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex space-x-8">
            <DesktopDropdown title="About" items={about} basePath="/about" />
            <DesktopDropdown title="Services" items={services} basePath="/services" />
            <DesktopDropdown title="Industries" items={industries} basePath="/industries" />
            <a href="/blog" className="text-gray-800 hover:text-[#3db1a2] font-medium">Blog</a>
            <a href="/projects" className="text-gray-800 hover:text-[#3db1a2] font-medium">Projects</a>
            <a href="/contact" className="text-gray-800 hover:text-[#3db1a2] font-medium">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-gray-800 hover:text-[#3db1a2] transition-colors"
          >
            {isMobileMenuOpen 
              ? <X className="w-7 h-7 text-black" /> 
              : <Menu className="w-7 h-7 text-black" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onGetStartedClick={() => {
          onGetStartedClick?.()
          setIsMobileMenuOpen(false)
        }}
        sections={sections}
        logo={
          <a href="/" className="flex items-center">
            <img
              src="/images/2.jpg"
              alt="Apexium"
              className="h-10 w-auto object-contain"
            />
          </a>
        }
      />
    </>
  )
}
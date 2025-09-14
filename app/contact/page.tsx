// app/contact/page.tsx 
"use client"
import { useState } from "react"
import { 
  Mail,
  Phone, 
  Send, 
  Clock, 
  CheckCircle
} from "lucide-react"
import Footer from "@/components/Landing_page/Footer";
import Navbar from "@/components/navbar/Navbar";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    service: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Create mailto link with form data - properly encoded
      const subject = encodeURIComponent(`Contact Form: ${formData.service} Inquiry from ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nService: ${formData.service}\nMessage: ${formData.message}`);
      
      // Open default email client
      window.location.href = `mailto:apexium.space@gmail.com?subject=${subject}&body=${body}`;
      
      setIsSubmitted(true)
      setFormData({ name: "", service: "", message: "" })
      
      // Reset submitted status after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error("Email error:", error)
      alert("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      value: "apexium.space@gmail.com",
      description: "Send us an email anytime"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      value: "+92 340 5542097",
      description: "24/7 hours"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Response Time",
      value: "Within 24 hours",
      description: "We respond quickly"
    }
  ]

  const services = [
    "Website Development",
    "Mobile App Development",
    "Digital Marketing",
    "AI Automation",
    "UI/UX Designing",
    "Graphic Designing",
    "Other"
  ]

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
        
        {/* Hero Section */}
        <section className="pt-32 pb-24 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
                Let's Build Something
                <span className="text-[#3db1a2] block mt-2">Amazing Together</span>
              </h1>
              <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                Ready to transform your ideas into reality? Get in touch with our team of experts 
                and let's discuss how we can help grow your business.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="px-6 mb-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {contactInfo.map((info, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up border border-gray-100 text-center w-full max-w-sm"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-center w-14 h-14 bg-[#3db1a2]/10 rounded-lg mb-6 mx-auto">
                    <div className="text-[#3db1a2]">
                      {info.icon}
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-3 text-lg">{info.title}</h3>
                  <p className="text-[#3db1a2] font-medium mb-2">{info.value}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{info.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Main Contact Form */}
        <section className="px-6 pb-32">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="grid lg:grid-cols-2">

                {/* Form Side */}
                <div className="p-10 lg:p-16">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Started Today</h2>
                  <p className="text-gray-600 mb-12 text-lg leading-relaxed">
                    Tell us about your project and we'll get back to you within 24 hours.
                  </p>

                  {isSubmitted ? (
                    <div className="animate-fade-in text-center py-16">
                      <div className="flex justify-center mb-6">
                        <CheckCircle className="w-20 h-20 text-green-500" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent!</h3>
                      <p className="text-gray-600 text-lg">
                        We've opened your email client. Please send the pre-filled email to contact us.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-8">
                      
                      {/* Name */}
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3db1a2]/20 focus:border-[#3db1a2] transition-colors text-lg text-black"
                          placeholder="Name"
                        />
                      </div>

                      {/* Select Service */}
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Select Service</label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3db1a2]/20 focus:border-[#3db1a2] transition-colors text-lg text-black"
                        >
                          <option value=""></option>
                          {services.map(service => (
                            <option key={service} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-gray-700 font-medium mb-2">Message</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={6}
                          required
                          className="w-full px-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3db1a2]/20 focus:border-[#3db1a2] transition-colors resize-none text-lg leading-relaxed text-black"
                          placeholder="Your Project Requirements..."
                        />
                      </div>

                      {/* Submit */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-[#3db1a2] hover:bg-[#2e8f7f] text-white font-semibold py-5 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-3 disabled:opacity-70 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98] text-lg"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                            <span>Sending...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-6 h-6" />
                            <span>Send Message</span>
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>

                {/* Info Side */}
                <div className="bg-gradient-to-br from-[#3db1a2] to-[#2e8f7f] p-10 lg:p-16 text-white relative overflow-hidden">
                  <div className="relative z-10">
                    <h3 className="text-3xl font-bold mb-10">Why Choose Apexium?</h3>
                    
                    <div className="space-y-8">
                      <div className="flex items-start space-x-5">
                        <CheckCircle className="w-7 h-7 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold mb-2 text-lg">Expert Team</h4>
                          <p className="text-white/90 leading-relaxed">Skilled developers and designers with proven track records</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-5">
                        <CheckCircle className="w-7 h-7 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold mb-2 text-lg">Fast Delivery</h4>
                          <p className="text-white/90 leading-relaxed">Quick turnaround times without compromising quality</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-5">
                        <CheckCircle className="w-7 h-7 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold mb-2 text-lg">24/7 Support</h4>
                          <p className="text-white/90 leading-relaxed">Ongoing support and maintenance for your projects</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-5">
                        <CheckCircle className="w-7 h-7 mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold mb-2 text-lg">Competitive Pricing</h4>
                          <p className="text-white/90 leading-relaxed">High-quality solutions at affordable rates</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-16 p-8 bg-white/10 rounded-lg backdrop-blur-sm">
                      <h4 className="font-semibold mb-3 text-lg">Quick Response Guarantee</h4>
                      <p className="text-white/90 leading-relaxed">
                        We respond to all inquiries within 24 hours, often much sooner. 
                        Your project is our priority.
                      </p>
                    </div>
                  </div>

                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-16 right-16 w-32 h-32 border border-white rounded-full"></div>
                    <div className="absolute bottom-16 left-16 w-24 h-24 border border-white rounded-full"></div>
                    <div className="absolute top-1/2 left-1/2 w-40 h-40 border border-white rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        <style jsx global>{`
          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes fade-in {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          .animate-fade-in-up {
            animation: fade-in-up 0.6s ease-out forwards;
          }

          .animate-fade-in {
            animation: fade-in 0.5s ease-out forwards;
          }
        `}</style>
      </div>
      <Footer />
    </>
  )
}
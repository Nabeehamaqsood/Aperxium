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
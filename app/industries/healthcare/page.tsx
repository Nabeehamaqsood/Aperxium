"use client"

import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/Landing_page/Footer"
import Image from "next/image"
import Link from "next/link"

export default function HealthcarePage() {
  // Function to handle WhatsApp redirect
  const redirectToWhatsApp = () => {
    window.open("https://wa.me/923405542097", "_blank")
  }

  return (
    <>
      <Navbar />
      
      {/* Hero Banner Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #3db1a2 0%, #2e8f7f 100%)",
          color: "white",
          paddingTop: 150,
          paddingBottom: 64,
        }}
      >
        <div className="max-w-5xl mx-auto text-center px-6">
          <h1 className="text-4xl font-bold mb-4">Healthcare Solutions</h1>
          <p className="text-lg opacity-90">
            Empowering hospitals, clinics, and research centers with digital-first
            healthcare technology — from patient apps to secure data systems.
          </p>
        </div>
      </section>

      {/* Content Section with Image and Description */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Left side - Description */}
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-[#2e8f7f]">Transforming Healthcare with Technology</h2>
              <div className="space-y-4 text-gray-700">
                <p>We specialize in developing cutting-edge healthcare solutions that streamline operations and improve patient care.</p>
                <p>Our team combines medical industry knowledge with technical expertise to create systems that meet regulatory requirements while enhancing efficiency.</p>
                <p>From electronic health records (EHR) to telemedicine platforms, we build solutions that connect patients with providers seamlessly.</p>
                <p>Our security-first approach ensures that sensitive health data remains protected while being accessible to authorized personnel.</p>
                <p>We focus on creating intuitive interfaces that reduce training time and increase adoption rates across healthcare organizations.</p>
              </div>
            </div>
            
            {/* Right side - Image */}
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-lg">
            <Image 
            src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1074&q=80" 
            alt="Healthcare Data Analytics" 
            width={400} 
            height={250}
            className="w-full h-48 object-cover"
          />
              </div>
              <p className="mt-4 text-sm text-gray-600 text-center">
                Our healthcare solutions integrate seamlessly with existing systems to improve patient outcomes.
              </p>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
            <Link 
              href="/contact" 
              className="bg-[#3db1a2] text-white font-semibold py-3 px-8 rounded-full text-center hover:bg-[#2e8f7f] transition-colors"
            >
              Get more
            </Link>
            <button 
              onClick={redirectToWhatsApp}
              className="bg-[#3db1a2] text-white font-semibold py-3 px-8 rounded-full text-center hover:bg-[#2e8f7f] transition-colors"
            >
              Contact us
            </button>
          </div>
        </div>
      </section>

      {/* Healthcare Expertise Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12 text-[#2e8f7f]">Healthcare Industry Expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <Image 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1074&q=80" 
                alt="Medical Technology" 
                width={400} 
                height={250} 
                unoptimized
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Medical Technology</h3>
                <p className="text-gray-600">Innovative solutions for diagnostics, treatment, and patient monitoring.</p>
              </div>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <Image 
                src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1173&q=80" 
                alt="Healthcare Data Management" 
                width={400} 
                height={250} 
                unoptimized
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Data Management</h3>
                <p className="text-gray-600">Secure and efficient handling of patient records and medical data.</p>
              </div>
            </div>
            
            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <Image 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1180&q=80" 
                alt="Telemedicine" 
                width={400} 
                height={250} 
                unoptimized
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Telemedicine</h3>
                <p className="text-gray-600">Remote healthcare services that connect patients with providers.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Ready to transform your business?</h2>
          <p className="text-gray-600 mb-10">Start your digital transformation journey with us today</p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button 
              onClick={redirectToWhatsApp}
              className="bg-[#3db1a2] text-white font-semibold py-3 px-8 rounded-full hover:bg-[#2e8f7f] transition-colors"
            >
              Start calling
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}

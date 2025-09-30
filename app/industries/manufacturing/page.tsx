"use client"

import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/Landing_page/Footer"
import Image from "next/image"
import Link from "next/link"

export default function ManufacturingPage() {
  // WhatsApp redirect function
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
          <h1 className="text-4xl font-bold mb-4">Manufacturing Solutions</h1>
          <p className="text-lg opacity-90">
            Empowering manufacturers with digital transformation — from smart 
            factories to supply chain automation and predictive maintenance.
          </p>
        </div>
      </section>

      {/* Content Section with Image and Description */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-10">
            {/* Left side - Description */}
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-[#2e8f7f]">
                Revolutionizing Manufacturing with Technology
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We build intelligent manufacturing platforms that optimize production processes,
                  reduce operational costs, and enhance product quality.
                </p>
                <p>
                  Our solutions include everything from factory automation systems to production
                  monitoring and quality control applications.
                </p>
                <p>
                  We integrate IoT sensors, AI-powered analytics, and real-time monitoring
                  to provide actionable insights and predictive maintenance capabilities.
                </p>
                <p>
                  With a focus on reliability and efficiency, we ensure your manufacturing systems
                  operate at peak performance with minimal downtime.
                </p>
                <p>
                  From small workshops to large industrial plants, our solutions are designed
                  to meet the evolving demands of modern manufacturing.
                </p>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://images.pexels.com/photos/3786215/pexels-photo-3786215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Manufacturing Technology"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
              </div>
              <p className="mt-4 text-sm text-gray-600 text-center">
                Our manufacturing platforms combine automation with intelligent analytics for optimized production processes.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
            <Link
              href="/contact"
              className="bg-[#3db1a2] text-white font-semibold py-3 px-8 rounded-full text-center hover:bg-[#2e8f7f] transition-colors"
            >
              Learn More
            </Link>
            <button
              onClick={redirectToWhatsApp}
              className="bg-[#3db1a2] text-white font-semibold py-3 px-8 rounded-full text-center hover:bg-[#2e8f7f] transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Manufacturing Expertise Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12 text-[#2e8f7f]">
            Manufacturing Industry Expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <Image
                src="https://images.pexels.com/photos/3786215/pexels-photo-3786215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Smart Factory Solutions"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Smart Factory Solutions</h3>
                <p className="text-gray-600">
                  Integrated systems for automated production lines, robotics, and real-time process monitoring.
                </p>
              </div>
            </div>

            {/* Card 2 - Updated Image URL */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <Image
                src="https://images.pexels.com/photos/3862632/pexels-photo-3862632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Predictive Maintenance"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Predictive Maintenance</h3>
                <p className="text-gray-600">
                  AI-driven systems that predict equipment failures before they occur, reducing downtime.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <Image
                src="https://images.pexels.com/photos/7562013/pexels-photo-7562013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Quality Control Systems"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Quality Control Systems
                </h3>
                <p className="text-gray-600">
                  Automated inspection and quality assurance solutions that ensure product excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">
            Ready to transform your manufacturing operations?
          </h2>
          <p className="text-gray-600 mb-10">
            Let us help you build intelligent manufacturing technology solutions that increase efficiency and drive growth.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button
              onClick={redirectToWhatsApp}
              className="bg-[#3db1a2] text-white font-semibold py-3 px-8 rounded-full hover:bg-[#2e8f7f] transition-colors"
            >
              Start Now
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
"use client"

import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/Landing_page/Footer"
import Image from "next/image"
import Link from "next/link"

export default function PortfolioPage() {
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
          <h1 className="text-4xl font-bold mb-4">Our Portfolio</h1>
          <p className="text-lg opacity-90">
            Explore our successful projects across industries including Healthcare,
            Finance, Retail, Manufacturing, and Logistics.
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
                Showcasing Our Diverse Projects
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We've delivered innovative solutions across multiple industries, 
                  helping businesses transform their operations and achieve their goals.
                </p>
                <p>
                  Our portfolio includes everything from custom software development 
                  to comprehensive digital transformation initiatives.
                </p>
                <p>
                  Each project is tailored to our clients' specific needs, with a focus 
                  on user experience, performance, and scalability.
                </p>
                <p>
                  We take pride in our collaborative approach, working closely with clients 
                  to ensure their vision becomes reality.
                </p>
                <p>
                  From startups to enterprise-level organizations, our solutions are designed 
                  to drive growth and create lasting value.
                </p>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Portfolio Overview"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
              </div>
              <p className="mt-4 text-sm text-gray-600 text-center">
                Our diverse portfolio showcases innovative solutions across multiple industries and technologies.
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 mt-12">
            <Link
              href="/projects"
              className="bg-[#3db1a2] text-white font-semibold py-3 px-8 rounded-full text-center hover:bg-[#2e8f7f] transition-colors"
            >
              View Projects
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

      {/* Portfolio Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12 text-[#2e8f7f]">
            Industries We Serve
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 - Healthcare */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <Image
                src="https://images.pexels.com/photos/3845810/pexels-photo-3845810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Healthcare Solutions"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Healthcare</h3>
                <p className="text-gray-600">
                  Patient management systems, telemedicine platforms, and healthcare analytics solutions.
                </p>
              </div>
            </div>

            {/* Card 2 - Finance */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <Image
                src="https://images.pexels.com/photos/4386159/pexels-photo-4386159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Finance Solutions"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Finance</h3>
                <p className="text-gray-600">
                  Banking applications, payment processing systems, and financial analytics platforms.
                </p>
              </div>
            </div>

            {/* Card 3 - Retail */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <Image
                src="https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Retail Solutions"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Retail</h3>
                <p className="text-gray-600">
                  E-commerce platforms, inventory management systems, and customer engagement tools.
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
            Ready to start your next project?
          </h2>
          <p className="text-gray-600 mb-10">
            Let us help you build innovative technology solutions that drive your business forward.
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
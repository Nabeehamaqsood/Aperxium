"use client"

import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/Landing_page/Footer"
import Image from "next/image"
import Link from "next/link"

export default function RetailPage() {
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
          <h1 className="text-4xl font-bold mb-4">Retail Solutions</h1>
          <p className="text-lg opacity-90">
            Revolutionizing retail with cutting-edge technology solutions - 
            from seamless e-commerce platforms to intelligent inventory management and customer engagement systems.
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
                Transforming Retail Experiences
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We develop comprehensive retail technology solutions that bridge the gap between 
                  physical and digital shopping experiences.
                </p>
                <p>
                  Our platforms include omnichannel retail systems, inventory management, 
                  point-of-sale (POS) solutions, and customer loyalty programs.
                </p>
                <p>
                  We leverage data analytics and AI to provide personalized shopping experiences 
                  and actionable insights into customer behavior and preferences.
                </p>
                <p>
                  With a focus on scalability and user experience, we ensure your retail systems 
                  can grow with your business while delighting customers at every touchpoint.
                </p>
                <p>
                  From boutique stores to retail chains, our solutions are designed to meet 
                  the diverse needs of modern retailers in a competitive market.
                </p>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Retail Technology"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
              </div>
              <p className="mt-4 text-sm text-gray-600 text-center">
                Our retail solutions integrate physical and digital shopping experiences for seamless customer journeys.
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

      {/* Retail Expertise Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12 text-[#2e8f7f]">
            Retail Industry Expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <Image
                src="https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="E-commerce Platforms"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">E-commerce Platforms</h3>
                <p className="text-gray-600">
                  Custom online stores with seamless checkout, inventory sync, and personalized shopping experiences.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <Image
                src="https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="POS Systems"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">POS Systems</h3>
                <p className="text-gray-600">
                  Modern point-of-sale solutions that integrate with inventory, CRM, and analytics platforms.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <Image
                src="https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Inventory Management"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Inventory Management
                </h3>
                <p className="text-gray-600">
                  Real-time inventory tracking across multiple locations with automated restocking alerts.
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
            Ready to transform your retail business?
          </h2>
          <p className="text-gray-600 mb-10">
            Let us help you build innovative retail technology solutions that enhance customer experiences and drive sales.
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
"use client"

import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/Landing_page/Footer"
import Image from "next/image"
import Link from "next/link"

export default function FinancePage() {
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
          <h1 className="text-4xl font-bold mb-4">Finance Solutions</h1>
          <p className="text-lg opacity-90">
            Secure, scalable, and innovative digital platforms for banks,
            fintech companies, and financial institutions.
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
                Transforming Finance with Technology
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We build secure, high-performance financial platforms that
                  help institutions serve customers with cutting-edge digital solutions.
                </p>
                <p>
                  Our solutions include everything from mobile banking applications
                  to secure payment processing and financial analytics systems.
                </p>
                <p>
                  We integrate advanced security protocols and regulatory compliance
                  measures to protect sensitive financial data.
                </p>
                <p>
                  With a focus on reliability and performance, we ensure your financial
                  systems operate seamlessly 24/7.
                </p>
                <p>
                  From startups to enterprise-level financial institutions, our solutions
                  are designed to meet strict industry standards while scaling with your needs.
                </p>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Finance Technology"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
              </div>
              <p className="mt-4 text-sm text-gray-600 text-center">
                Our financial platforms combine robust security with innovative functionality for seamless banking experiences.
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

      {/* Finance Expertise Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12 text-[#2e8f7f]">
            Financial Industry Expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <Image
                src="https://images.pexels.com/photos/4386366/pexels-photo-4386366.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Digital Banking"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Digital Banking</h3>
                <p className="text-gray-600">
                  Modern, user-friendly banking applications with seamless transaction capabilities.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <Image
                src="https://images.pexels.com/photos/4386159/pexels-photo-4386159.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Payment Processing"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Payment Processing</h3>
                <p className="text-gray-600">
                  Secure and efficient payment gateway integrations with multiple currency support.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <Image
                src="https://images.pexels.com/photos/7567443/pexels-photo-7567443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Financial Analytics"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Financial Analytics
                </h3>
                <p className="text-gray-600">
                  Advanced data analysis and visualization tools for informed financial decision-making.
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
            Ready to transform your financial services?
          </h2>
          <p className="text-gray-600 mb-10">
            Let us help you build secure, innovative financial technology solutions tailored to your institution's needs.
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
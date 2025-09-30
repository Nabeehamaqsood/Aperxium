"use client"

import { useState, useEffect } from "react"
import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/Landing_page/Footer"

export default function Leadership() {
  const [showVision, setShowVision] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setShowVision((prev) => !prev)
    }, 3000) // switch every 3 sec
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Main Leadership Section */}
      <main className="flex-grow">
        {/* Banner Section */}
      <div
          className="relative h-120 flex flex-col items-center justify-center text-center mt-16 bg-gradient-to-r from-[#2e8f7f] to-[#3db1a2]"
        >
            <h2 className="text-3xl md:text-4xl font-semibold text-white mt-8">
          Leadership
        </h2>
        <p className="text-lg md:text-xl text-white opacity-85 max-w-2xl px-4 mt-4">
          Our leadership team is dedicated to guiding our vision, fostering growth, 
          and ensuring we continue delivering exceptional value to our clients and partners.
        </p>
        </div>


        {/* Content Section */}
        <div className="container mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Left Side - Profile */}
            <div className="flex flex-col items-center text-center md:pl-10 lg:pl-20">
              <img
                src="/images/4.jpg"
                alt="Muhammad Amman Idrees"
                className="w-72 h-72 md:w-80 md:h-80 object-cover shadow-2xl mb-6 rounded"
              />
              <div className="w-full flex flex-col items-center">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 whitespace-nowrap">
                  Muhammad Amman Idrees
                </h3>
                <p className="text-teal-500 font-medium text-center mt-2">
                  Founder / CEO
                </p>
              </div>
            </div>

            {/* Right Side - Vision/Mission */}
            <div className="pr-0 md:pr-10">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
                {/* Left teal line */}
                <span className="bg-teal-500 w-2 h-10 mr-3 rounded-sm"></span>
                {showVision ? "Our Vision" : "Our Mission"}
              </h2>

              <div className="space-y-6 text-gray-700 leading-relaxed text-lg font-medium max-w-xl transition-all duration-1000">
                {showVision ? (
                  <>
                    <p>
                      At Apexium, our vision is to redefine the future of
                      technology by delivering digital solutions that are not
                      only innovative, scalable, and reliable but also
                      meaningful to the businesses and communities we serve.
                    </p>
                    <p>
                      We believe in creating technology that empowers
                      organizations to grow, adapt, and succeed in an
                      ever-evolving digital landscape—making advanced solutions
                      accessible and practical for everyone.
                    </p>
                    <p>
                      At the heart of our vision lies a strong commitment to
                      collaboration, trust, and long-term partnerships. We aim
                      to build not just software, but opportunities for people
                      and businesses to thrive.
                    </p>
                  </>
                ) : (
                  <p>
                    Our mission is to deliver innovative, reliable, and scalable
                    software solutions that empower businesses and individuals
                    to achieve their goals in the digital age. We are committed
                    to turning ideas into reality by leveraging cutting-edge
                    technologies, modern design principles, and agile
                    development practices.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}

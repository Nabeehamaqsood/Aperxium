"use client"

import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/Landing_page/Footer"
import { Laptop, Globe, PenTool, Image, BarChart3 } from "lucide-react" // icons

export default function CareersPage() {
  const positions = [
    { title: "App Developer", icon: <Laptop className="w-6 h-6 text-[#3db1a2]" /> },
    { title: "Web Developer", icon: <Globe className="w-6 h-6 text-[#3db1a2]" /> },
    { title: "UX/UI Designer", icon: <PenTool className="w-6 h-6 text-[#3db1a2]" /> },
    { title: "Graphic Designer", icon: <Image className="w-6 h-6 text-[#3db1a2]" /> },
    { title: "Digital Marketing Specialist", icon: <BarChart3 className="w-6 h-6 text-[#3db1a2]" /> },
  ]

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #3db1a2 0%, #2e8f7f 100%)",
          color: "white",
          paddingTop: 150,
          paddingBottom: 64,
        }}
      >
        <div className="max-w-5xl mx-auto text-center px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Open Positions
          </h1>
          <p className="text-base sm:text-lg lg:text-xl opacity-90">
            Explore career opportunities and be part of our growing team.
          </p>
        </div>
      </section>

      {/* Positions Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {positions.map((pos, index) => (
              <li
                key={index}
                className="p-6 border rounded-2xl shadow-sm hover:shadow-lg transition bg-gray-50 text-center flex flex-col justify-between"
              >
                <div className="flex flex-col items-center">
                  <div className="mb-3">{pos.icon}</div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">
                    {pos.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 mb-6">
                    Apply now and join our team!
                  </p>
                </div>
                <a
                  href="https://wa.me/923405542097?text=Hello%20I%20want%20to%20apply%20for%20a%20position"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 bg-[#3db1a2] text-white rounded-lg hover:bg-[#2e8f7f] transition text-sm sm:text-base"
                >
                  Apply Now
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </>
  )
}

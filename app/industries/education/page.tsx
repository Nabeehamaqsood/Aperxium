"use client"

import { useState } from "react"
import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/Landing_page/Footer"
import Image from "next/image"
import Link from "next/link"

const EducationPage = () => {
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
          <h1 className="text-4xl font-bold mb-4">Education Technology Solutions</h1>
          <p className="text-lg opacity-90">
            Empowering educational institutions, edtech platforms, and learning management systems with innovative digital solutions.
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
                Transforming Education with Technology
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  We develop innovative educational platforms that facilitate seamless learning experiences for students and educators alike.
                </p>
                <p>
                  Our solutions include Learning Management Systems (LMS), virtual classrooms, and interactive educational content delivery systems.
                </p>
                <p>
                  We integrate advanced analytics to track student progress and personalize learning pathways for improved outcomes.
                </p>
                <p>
                  With a focus on accessibility and engagement, we ensure educational resources are available to learners everywhere.
                </p>
                <p>
                  From K-12 to higher education and corporate training, our solutions adapt to diverse educational needs.
                </p>
              </div>
            </div>

            {/* Right side - Image */}
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://images.pexels.com/photos/4145354/pexels-photo-4145354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Education Technology"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover"
                />
              </div>
              <p className="mt-4 text-sm text-gray-600 text-center">
                Our educational platforms combine intuitive design with powerful functionality for enhanced learning experiences.
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

      {/* Education Expertise Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12 text-[#2e8f7f]">
            Education Technology Expertise
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <Image
                src="https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Learning Management Systems"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Learning Management Systems</h3>
                <p className="text-gray-600">
                  Comprehensive platforms for course management, content delivery, and student assessment.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <Image
                src="https://images.pexels.com/photos/4144225/pexels-photo-4144225.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Virtual Classrooms"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Virtual Classrooms</h3>
                <p className="text-gray-600">
                  Interactive online learning environments with real-time collaboration tools.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
              <Image
                src="https://images.pexels.com/photos/5905446/pexels-photo-5905446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Educational Analytics"
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Educational Analytics
                </h3>
                <p className="text-gray-600">
                  Data-driven insights to track student progress and optimize learning outcomes.
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
            Ready to transform educational experiences?
          </h2>
          <p className="text-gray-600 mb-10">
            Let us help you build innovative educational technology solutions tailored to your institution's needs.
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

export default EducationPage
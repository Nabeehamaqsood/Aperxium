"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Footer from "@/components/Landing_page/Footer";
import Navbar from "@/components/navbar/Navbar";

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Muhammad Afnan",
      role: "App Developer",
      image: "images/Afn.jpg",
    },
    {
      name: "Muhammad Shahzaib",
      role: "Web developer",
      image: "images/Sha.jpg",
    },
    {
      name: "Muhammad Waled",
      role: "Graphic Designer",
      image: "images/Waleed.jpg",
    },
    {
      name: "Muhammad Abdullah ",
      role: "App Developer",
      image: "images/Abdullah .jpg",
    },
    {
      name: "Aryan Nawaz Abbasi",
      role: "Web Developer",
      image: "images/Aryan.jpg",
    },
    {
      name: "Muhammad Adil Ameer",
      role: "Web Developer",
      image: "images/Adil .jpg",
    },
    {
      name: "Sayyam shahid",
      role: "Web Developer",
      image: "images/Sayyam.jpg",
    },
  ]

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-white ">
        {/* Hero Section */}
        <section className="pt-40 pb-16 bg-gradient-to-br from-[#3db1a2] to-[#2e8f7f] text-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Meet Our Team</h1>
              <p className="text-xl md:text-2xl mb-8 opacity-90">
                The talented professionals who bring innovation and expertise to every project we deliver
              </p>
            </div>
          </div>
        </section>

        {/* Team Grid */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 md:px-12 lg:px-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
              {teamMembers.map((member, index) => (
                <Card
                  key={index}
                  className="rounded-full w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 
                             bg-gradient-to-br from-[#2e8f7f] to-[#3db1a2] 
                             text-white text-center shadow-lg hover:shadow-2xl 
                             hover:scale-105 transition-all duration-300 flex items-center justify-center mx-auto"
                >
                  <CardContent className="flex flex-col items-center text-center">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full object-cover mb-4 border-4 border-white shadow-md"
                    />
                    <h3 className="text-base sm:text-lg font-semibold">{member.name}</h3>
                    <p className="text-xs sm:text-sm font-medium opacity-90">{member.role}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Join Our Team CTA */}
        <section className="py-20 bg-gradient-to-r from-[#3db1a2] to-[#2e8f7f] text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold mb-4">Join Our Team</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for innovation and excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#2e8f7f] bg-transparent"
                asChild
              >
                <a href="/careers">View Open Positions</a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#2e8f7f] bg-transparent"
                asChild
              >
                <a
                  href="https://wa.me/923405542097?text=Hello%20I%20want%20to%20send%20my%20resume"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Send Your Resume
                </a>
              </Button>

            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  )
}

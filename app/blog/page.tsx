"use client"

import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/Landing_page/Footer"

export default function BlogPage() {
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
        <div className="max-w-5xl mx-auto text-center px-6">
          <h1 className="text-4xl font-bold mb-4">Blog</h1>
          <p className="text-lg opacity-90">
            Explore our latest articles, updates, and insights on technology, business,
            and innovation.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Stay Updated</h2>
          <p className="text-gray-700">
            Discover expert opinions, company updates, and thought-leadership content
            crafted to keep you ahead in the digital era.
          </p>
        </div>
      </section>

      <Footer />
    </>
  )
}

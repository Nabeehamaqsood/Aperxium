"use client"

import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/Landing_page/Footer"

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section
        style={{
          background: "linear-gradient(135deg, #3db1a2 0%, #2e8f7f 100%)",
          color: "white",
          paddingTop: "12rem",
          paddingBottom: "7rem",
        }}
        className="w-full"
      >
        <div className="max-w-5xl mx-auto text-center px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
          <p className="text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
            Showcasing our innovative solutions, success stories, and creative work
            across industries.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">What We Build</h2>
          <p className="text-gray-700">
            From cutting-edge apps to enterprise platforms, explore some of our most
            impactful projects designed to transform businesses.
          </p>
        </div>
      </section>
{/* Projects Showcase Section */}
<section className="py-16 bg-gray-50">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-2xl font-bold text-center text-gray-900 mb-10">
      Featured Projects
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Project 1 */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1 duration-300 border-2 border-gray-200">
        <div className="w-full h-64 flex items-center justify-center bg-gray-100 overflow-hidden p-4">
          <div className="w-full h-full border-4 border-gray-300 rounded-lg overflow-hidden">
            <img 
              src="/images/pro1.jpg" 
              alt="Project 1" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Project 2 */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1 duration-300 border-2 border-gray-200">
        <div className="w-full h-64 flex items-center justify-center bg-gray-100 overflow-hidden p-4">
          <div className="w-full h-full border-4 border-gray-300 rounded-lg overflow-hidden">
            <img 
              src="/images/pro2.jpg" 
              alt="Project 2" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Project 3 */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1 duration-300 border-2 border-gray-200">
        <div className="w-full h-64 flex items-center justify-center bg-gray-100 overflow-hidden p-4">
          <div className="w-full h-full border-4 border-gray-300 rounded-lg overflow-hidden">
            <img 
              src="/images/pro3.jpg" 
              alt="Project 3" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Project 4 */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1 duration-300 border-2 border-gray-200">
        <div className="w-full h-64 flex items-center justify-center bg-gray-100 overflow-hidden p-4">
          <div className="w-full h-full border-4 border-gray-300 rounded-lg overflow-hidden">
            <img 
              src="/images/pro4.jpg" 
              alt="Project 4" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Project 5 */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1 duration-300 border-2 border-gray-200">
        <div className="w-full h-64 flex items-center justify-center bg-gray-100 overflow-hidden p-4">
          <div className="w-full h-full border-4 border-gray-300 rounded-lg overflow-hidden">
            <img 
              src="/images/pro5.jpg" 
              alt="Project 5" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Project 6 */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1 duration-300 border-2 border-gray-200">
        <div className="w-full h-64 flex items-center justify-center bg-gray-100 overflow-hidden p-4">
          <div className="w-full h-full border-4 border-gray-300 rounded-lg overflow-hidden">
            <img 
              src="/images/pro6.jpg" 
              alt="Project 6" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Project 7 */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1 duration-300 border-2 border-gray-200">
        <div className="w-full h-64 flex items-center justify-center bg-gray-100 overflow-hidden p-4">
          <div className="w-full h-full border-4 border-gray-300 rounded-lg overflow-hidden">
            <img 
              src="/images/pro7.jpg" 
              alt="Project 7" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Project 8 */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1 duration-300 border-2 border-gray-200">
        <div className="w-full h-64 flex items-center justify-center bg-gray-100 overflow-hidden p-4">
          <div className="w-full h-full border-4 border-gray-300 rounded-lg overflow-hidden">
            <img 
              src="/images/pro8.jpg" 
              alt="Project 8" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Project 9 */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1 duration-300 border-2 border-gray-200">
        <div className="w-full h-64 flex items-center justify-center bg-gray-100 overflow-hidden p-4">
          <div className="w-full h-full border-4 border-gray-300 rounded-lg overflow-hidden">
            <img 
              src="/images/pro9.jpg" 
              alt="Project 9" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Project 10 */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1 duration-300 border-2 border-gray-200">
        <div className="w-full h-64 flex items-center justify-center bg-gray-100 overflow-hidden p-4">
          <div className="w-full h-full border-4 border-gray-300 rounded-lg overflow-hidden">
            <img 
              src="/images/pro10.jpg" 
              alt="Project 10" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Project 11 */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1 duration-300 border-2 border-gray-200">
        <div className="w-full h-64 flex items-center justify-center bg-gray-100 overflow-hidden p-4">
          <div className="w-full h-full border-4 border-gray-300 rounded-lg overflow-hidden">
            <img 
              src="/images/pro11.jpg" 
              alt="Project 11" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Project 12 */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition transform hover:-translate-y-1 duration-300 border-2 border-gray-200">
        <div className="w-full h-64 flex items-center justify-center bg-gray-100 overflow-hidden p-4">
          <div className="w-full h-full border-4 border-gray-300 rounded-lg overflow-hidden">
            <img 
              src="/images/pro12.jpg" 
              alt="Project 12" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      <Footer />
    </>
  )
}
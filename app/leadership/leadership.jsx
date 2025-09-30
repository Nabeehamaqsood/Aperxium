"use client"

export default function Leadership() {
  return (
    <section id="leadership" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <img
              src="/images/CEO.jpeg"   // 👈 make sure this file exists in public/images/CEO.jpeg
              alt="Muhammad Amman Idrees"
              className="w-80 h-80 object-cover rounded-2xl shadow-lg mb-6"
            />
            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                Muhammad Amman Idrees
              </h3>
              <p className="text-purple-600 font-medium">Founder / CEO</p>
            </div>
          </div>

          {/* Right Side */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Vision</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              Our vision is to establish ourselves as a leading global software house that not only delivers
              world-class digital solutions but also redefines how technology shapes businesses and communities...
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              We aim to create software that is not just functional but also scalable, reliable, and user-friendly...
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              At the core of our vision lies a commitment to building strong, lasting partnerships with clients...
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

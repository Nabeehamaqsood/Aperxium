import { Building, Globe, TrendingUp } from "lucide-react";

export default function AboutUs() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            {/* Removed dark:text-white */}
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Apexium</h2>
            {/* Removed dark:text-gray-300 */}
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              We are a forward-thinking technology company dedicated to delivering innovative solutions that drive
              business growth and digital transformation. Founded with a vision to bridge the gap between cutting-edge
              technology and practical business solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center group">
              <div className="bg-purple-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-100 transition-colors duration-300">
                {/* Fixed duplicate w-8 and wrong bg class */}
                <Building className="w-8 h-8 text-teal-500" />
              </div>
              {/* Removed dark:text-white */}
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Founded in 2025</h3>
              {/* Removed dark:text-gray-300 */}
              <p className="text-gray-700">
                Established with a mission to revolutionize how businesses leverage technology for growth
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-purple-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-100 transition-colors duration-300">
                {/* Fixed duplicate w-8 and wrong bg class */}
                <Globe className="w-8 h-8 text-teal-500" />
              </div>
              {/* Removed dark:text-white */}
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Global Reach</h3>
              {/* Removed dark:text-gray-300 */}
              <p className="text-gray-700">
                Serving clients across multiple continents with 24/7 support and localized expertise
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-purple-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-100 transition-colors duration-300">
                {/* Fixed duplicate w-8 and wrong bg class */}
                <TrendingUp className="w-8 h-8 text-teal-500" />
              </div>
              {/* Removed dark:text-white */}
              <h3 className="text-xl font-semibold mb-3 text-gray-900">50+ Projects</h3>
              {/* Removed dark:text-gray-300 */}
              <p className="text-gray-700">
                Successfully delivered innovative solutions across various industries and business sizes
              </p>
            </div>
          </div>

          {/* Removed dark:from-purple-900/20 dark:to-pink-900/20 and dark:border-purple-800 */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg border border-purple-100">
            {/* Removed dark:text-white */}
            <h3 className="text-2xl font-semibold text-gray-900 mb-4 text-center">Our Mission</h3>
            {/* Removed dark:text-gray-300 */}
            <p className="text-gray-700 text-lg leading-relaxed text-center">
              To empower businesses with innovative technology solutions that drive growth, enhance efficiency, and
              create lasting competitive advantages. We believe in the transformative power of technology when applied
              with strategic insight and technical excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

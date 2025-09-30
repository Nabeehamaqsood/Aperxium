import { industries } from "@/data/industries";
import { Button } from "@/components/ui/button";

export default function Industries() {
  return (
    <section id="industries" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've helped businesses across various sectors achieve digital
            transformation and growth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative bg-gray-100 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 max-w-md mx-auto"
            >
              <div className="relative h-72 overflow-hidden"> 
                <img
                  src={industry.image || "/placeholder.svg"}
                  alt={industry.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/10 to-transparent" />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8 text-gray-900">
                <h3 className="text-2xl font-semibold mb-3">
                  {industry.title}
                </h3>
                <p className="text-gray-700 text-base">{industry.description}</p>
              </div>

            
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

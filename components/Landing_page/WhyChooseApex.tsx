import { Zap, Target, Award } from "lucide-react";

export default function WhyChooseApex() {
  return (
    <section className="py-20 bg-white"> {/* Changed background to white */}
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Apexium?</h2> {/* Changed text to gray-900 */}
          <p className="text-xl text-gray-700 max-w-3xl mx-auto"> {/* Changed text to gray-700 */}
            We combine technical expertise with innovative thinking to deliver solutions that exceed expectations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center group">
            {/* Changed background to light purple, removed /30 opacity */}
            <div className="bg-purple-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-100 transition-colors duration-300">
              {/* Fixed duplicate w-8 and wrong bg class */}
              <Zap className="w-8 h-8 text-teal-500" />
            </div>
            {/* Changed text to dark gray */}
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Cutting-Edge Technology</h3>
            {/* Changed text to a darker gray for readability */}
            <p className="text-gray-700">
              We leverage the latest technologies and frameworks to build future-ready solutions
            </p>
          </div>

          <div className="text-center group">
            {/* Changed background to light purple, removed /30 opacity */}
            <div className="bg-purple-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-100 transition-colors duration-300">
              {/* Fixed duplicate w-8 and wrong bg class */}
              <Target className="w-8 h-8 text-teal-500" />
            </div>
            {/* Changed text to dark gray */}
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Results-Driven Approach</h3>
            {/* Changed text to a darker gray for readability */}
            <p className="text-gray-700">
              Every project is executed with precision and focus on measurable business outcomes
            </p>
          </div>

          <div className="text-center group">
            {/* Changed background to light purple, removed /30 opacity */}
            <div className="bg-purple-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-100 transition-colors duration-300">
              {/* Fixed duplicate w-8 and wrong bg class */}
              <Award className="w-8 h-8 text-teal-500" />
            </div>
            {/* Changed text to dark gray */}
            <h3 className="text-xl font-semibold mb-3 text-gray-900">Expert Team</h3>
            {/* Changed text to a darker gray for readability */}
            <p className="text-gray-700">
              Our certified professionals bring years of experience and industry expertise
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import { teamMembers } from "@/data/team"
import { Card, CardContent } from "@/components/ui/card"

export default function TeamSection() {
  return (
    <section className="py-20 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Meet the Apexium Team</h2>
        <p className="text-lg text-gray-700 mb-10">
          A diverse group of passionate innovators driving the future of technology.
        </p>

        {/* ✅ Team Grid with 3 members per row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {teamMembers.slice(0, 3).map((member, index) => (
            <Card
              key={index}
              className="rounded-full w-60 h-60 sm:w-64 sm:h-64 lg:w-72 lg:h-72 
                         bg-gradient-to-br from-[#2e8f7f] to-[#3db1a2] 
                         text-white text-center shadow-lg hover:shadow-2xl 
                         hover:scale-105 transition-all duration-300 flex items-center justify-center mx-auto"
            >
              <CardContent className="flex flex-col items-center text-center">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 
                             rounded-full object-cover mb-4 border-4 border-white shadow-md"
                />
                <h3 className="text-base sm:text-lg font-semibold">{member.name}</h3>
                <p className="text-xs sm:text-sm font-medium opacity-90">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-12">
          <a
            href="/team"
            className="inline-block px-6 py-3 text-lg font-medium text-white bg-[#3db1a2] rounded-md hover:bg-[#2e8f7f] transition-colors"
          >
            View More Team Members
          </a>
        </div>
      </div>
    </section>
  )
}

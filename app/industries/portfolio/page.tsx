import Navbar from "@/components/navbar/Navbar"
import Footer from "@/components/Landing_page/Footer"

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <section
        style={{
          background: "linear-gradient(135deg, #3db1a2 0%, #2e8f7f 100%)",
          color: "white",
          paddingTop: 150,
          paddingBottom: 64,
        }}
      >
        <div className="max-w-5xl mx-auto text-center px-6">
          <h1 className="text-4xl font-bold mb-4">Our Portfolio</h1>
          <p className="text-lg opacity-90">
            Explore our successful projects across industries including Healthcare,
            Finance, Retail, Manufacturing, and Logistics.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-4">Industries We Serve</h2>
          <p className="text-gray-700">
            From healthcare platforms to retail automation, we deliver tailored
            technology solutions that create real business impact.
          </p>
        </div>
      </section>

      <Footer />
    </>
  )
}

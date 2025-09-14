import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CTA() {
  const handleWhatsAppRedirect = () => {
    // Open WhatsApp with the specified number
    window.open("https://wa.me/923405542097", "_blank", "noopener,noreferrer");
  };

  return (
    <section className="py-20 bg-white text-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-700 opacity-90">
          Let's discuss how we can help you achieve your digital transformation goals with our innovative solutions.
        </p>
        <Button
          size="lg"
          onClick={handleWhatsAppRedirect}
          className="bg-[#3db1a2] text-white hover:bg-[#2e8f7f] px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300 shadow-lg"
        >
          Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
        </Button>
      </div>
    </section>
  );
}
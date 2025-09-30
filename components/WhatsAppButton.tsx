import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/+923405542097"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-10 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
    >
      <FaWhatsapp className="w-7 h-7" />
    </a>
  )
}

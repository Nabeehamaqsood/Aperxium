"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { ChevronDown } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface AccordionSectionProps {
  title: string
  items: { name: string; href: string }[]
  onLinkClick: () => void
}

export function AccordionSection({ title, items, onLinkClick }: AccordionSectionProps) {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => pathname.startsWith(href)

  return (
    // Border color changed for light theme
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        // Header text, hover background, and transition for light theme
        className="flex justify-between items-center w-full px-2 py-3 text-gray-800 font-medium hover:bg-gray-50 transition-colors"
      >
        <span>{title}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Chevron icon color for light theme */}
          <ChevronDown className="w-4 h-4 text-gray-700" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pl-4 pb-2 space-y-2">
              {items.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onLinkClick}
                  className={`block text-sm py-1 px-2 rounded-md transition-colors ${ // Added padding and rounded corners for better appearance
                    isActive(item.href)
                      ? "text-[#3db1a2] bg-gray-100" // Active link: brand color text, light gray background
                      : "text-gray-700 hover:text-gray-900 hover:bg-gray-50" // Normal link: dark gray text, hover to darker gray text and light gray background
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
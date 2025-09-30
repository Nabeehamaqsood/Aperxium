"use client"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "../theme-toggle"
import { AccordionSection } from "./AccordionSection"

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  onGetStartedClick: () => void
  sections: {
    title: string
    items: { name: string; href: string }[]
  }[]
  logo: React.ReactNode
}

export function MobileMenu({ isOpen, onClose, onGetStartedClick, sections, logo }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="backdrop"
            className="fixed inset-0 bg-black/70 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            key="menu"
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 left-0 w-full h-screen bg-white text-gray-800 z-50 shadow-lg overflow-y-auto"
          >
            <div className="p-6 pt-4">
              <div className="flex justify-between items-center mb-6">
                {logo}
                <button onClick={onClose} className="text-black hover:text-gray-700">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-4">
                {sections.map((section) => (
                  <AccordionSection
                    key={section.title}
                    title={section.title}
                    items={section.items}
                    onLinkClick={onClose}
                  />
                ))}

                <div className="pt-6 border-t border-gray-200 space-y-4 mt-4">
                  <div className="flex justify-center">
                    <ThemeToggle />
                  </div>
                  <Button
                    size="sm"
                    className="w-full bg-gradient-to-r from-[#3db1a2] to-[#2d9689] hover:from-[#2d9689] hover:to-[#1f7a6d] text-white"
                    onClick={() => {
                      onGetStartedClick()
                      onClose()
                    }}
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
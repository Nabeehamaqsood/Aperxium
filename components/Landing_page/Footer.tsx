"use client"

import { Button } from "@/components/ui/button"
import React from "react"
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin, Clock } from "lucide-react"
import Link from "next/link"
import { FaWhatsapp } from "react-icons/fa"

export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white py-12 lg:py-16 border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          
          {/* Company Intro + Social */}
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="flex items-center space-x-3 mb-4">
              <span className="text-lg font-semibold">Apexium</span>
            </div>

            <p className="text-gray-400 mb-4 text-sm lg:text-base max-w-xs">
              Transforming businesses through innovation and technology excellence.
            </p>

            <div className="flex items-center space-x-3 mb-4">
              <span className="text-lg font-semibold">Get in touch now!</span>
            </div>

            <div className="flex space-x-4 items-center justify-center sm:justify-start"> 
              {/* WhatsApp */}
              <Link 
                href="https://chat.whatsapp.com/JmjQdbqFlVJ7ZuZtvhTTfj" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <FaWhatsapp className="w-6 h-6 text-white hover:text-green-500 transition" />
              </Link>

              {/* Facebook */}
              <Link 
                href="https://web.facebook.com/profile.php?id=61578011475053" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <Facebook className="w-6 h-6 text-white hover:text-blue-600 transition" />
              </Link>

              {/* TikTok */}
              <Link 
                href="https://www.tiktok.com/@apexium_technologies" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="w-6 h-6 text-white hover:text-pink-500 transition" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2c1.9 0 3.6.7 5 2 1 1 1.8 2.3 2 3.7-1.5-.1-3-.6-4.2-1.5v8c0 3.3-2.7 6-6 6S3 17.5 3 14.2c0-3.1 2.4-5.7 5.5-6 0 .6.1 1.2.3 1.8-1.4.2-2.5 1.4-2.5 2.9 0 1.7 1.4 3.1 3.1 3.1 1.6 0 2.9-1.2 3-2.7V2z" />
                </svg>
              </Link>

              {/* Instagram */}
              <Link 
                href="https://www.instagram.com/apexium.space/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
              >
                <Instagram className="w-6 h-6 text-white hover:text-pink-500 transition" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/services/mobile-development" className="hover:text-purple-400 transition-colors text-sm lg:text-base">
                  Mobile Development
                </a>
              </li>
              <li>
                <a href="/services/web-development" className="hover:text-purple-400 transition-colors text-sm lg:text-base">
                  Web Development
                </a>
              </li>
              <li>
                <a href="/services/ai-automation" className="hover:text-purple-400 transition-colors text-sm lg:text-base">
                  AI Automation
                </a>
              </li>
              <li>
                <a href="/services/digital-services" className="hover:text-purple-400 transition-colors text-sm lg:text-base">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="/services/graphic-designing" className="hover:text-purple-400 transition-colors text-sm lg:text-base">
                  Graphic Designing
                </a>
              </li>
              <li>
                <a href="/services/UIUX" className="hover:text-purple-400 transition-colors text-sm lg:text-base">
                  UI/UX Designing
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <div className="space-y-3 text-gray-400">
              {/* Emails */}
              <div className="flex items-center sm:items-start space-x-2 flex-col sm:flex-row text-center sm:text-left">
                <Mail className="w-4 h-4 lg:w-5 lg:h-5 text-white flex-shrink-0 mb-1 sm:mb-0" />
                <div className="flex flex-col">
                  <p className="text-sm lg:text-base break-words">apexiumtechnologies@gmail.com</p>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-center sm:items-start space-x-2 flex-col sm:flex-row text-center sm:text-left">
                <Phone className="w-4 h-4 lg:w-5 lg:h-5 text-white flex-shrink-0 mb-1 sm:mb-0" />
                <div className="flex flex-col">
                  <p className="text-sm lg:text-base">+92 340 5542097</p>
                </div>
              </div>

              {/* Timing */}
              <div className="flex items-center sm:items-start space-x-2 flex-col sm:flex-row text-center sm:text-left">
                <Clock className="w-4 h-4 text-white flex-shrink-0 mb-1 sm:mb-0" />
                <p className="text-sm lg:text-base">24/7 hours</p>
              </div>

              {/* Address */}
              <div className="flex items-center sm:items-start space-x-2 flex-col sm:flex-row text-center sm:text-left">
                <MapPin className="w-4 h-4 lg:w-5 lg:h-5 text-white flex-shrink-0 mb-1 sm:mb-0" />
                <p className="text-sm lg:text-base">Apexium, Islamabad, Pakistan</p>
              </div>
            </div>
          </div>

          {/* Company */}
          <div className="sm:col-span-2 lg:col-span-1 flex flex-col items-center sm:items-start text-center sm:text-left">
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/team" className="hover:text-purple-400 transition-colors text-sm lg:text-base">
                  Our Team
                </a>
              </li>
              <li>
                <a href="/careers" className="hover:text-purple-400 transition-colors text-sm lg:text-base">
                  Careers
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-purple-400 transition-colors text-sm lg:text-base">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="border-t border-gray-800 mt-8 lg:mt-12 pt-6 lg:pt-8 text-center text-gray-400">
          <p className="text-sm lg:text-base">&copy; 2025 Apexium Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
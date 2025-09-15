"use client"

import { Button } from "@/components/ui/button"
import React from "react"
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin, Clock } from "lucide-react"
import Link from "next/link"
import { FaWhatsapp } from "react-icons/fa"

export default function Footer() {
  return (
    <footer id="contact" className="bg-black text-white py-16 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          
       {/* Company Intro + Social */}
<div>
  <div className="flex items-center space-x-3 mb-4">
    <span className="text-lg font-semibold">Apexium</span>
  </div>

  <p className="text-gray-400 mb-4">
    Transforming businesses through innovation and technology excellence.
  </p>

  <div className="flex items-center space-x-3 mb-4">
    <span className="text-lg font-semibold">Get in touch now!</span>
  </div>

  <div className="flex space-x-4 items-center"> 
    {/* WhatsApp */}
    <Link 
      href="https://chat.whatsapp.com/JmjQdbqFlVJ7ZuZtvhTTfj" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <FaWhatsapp className="w-6 h-6 text-white hover:text-green-500 transition" />
    </Link>

    {/* Facebook */}
    <Link 
      href="https://web.facebook.com/profile.php?id=61578011475053" 
      target="_blank" 
      rel="noopener noreferrer"
    >
      <Facebook className="w-6 h-6 text-white hover:text-blue-600 transition" />
    </Link>

    {/* TikTok */}
    <Link 
      href="https://www.tiktok.com/@apexium_technologies" 
      target="_blank" 
      rel="noopener noreferrer"
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
    >
      <Instagram className="w-6 h-6 text-white hover:text-pink-500 transition" />
    </Link>
  </div>
</div>

      {/* Services */}
      <div>
        <h4 className="text-lg font-semibold mb-4">Services</h4>
        <ul className="space-y-2 text-gray-400">
          <li>
            <a href="/services/mobile-development" className="hover:text-purple-400 transition-colors">
              Mobile Development
            </a>
          </li>
          <li>
            <a href="/services/web-development" className="hover:text-purple-400 transition-colors">
              Web Development
            </a>
          </li>
          <li>
            <a href="/services/ai-automation" className="hover:text-purple-400 transition-colors">
              AI Automation
            </a>
          </li>
          <li>
            <a href="/services/digital-services" className="hover:text-purple-400 transition-colors">
              Digital Marketing
            </a>
          </li>
          <li>
            <a href="/services/graphic-designing" className="hover:text-purple-400 transition-colors">
              Graphic Designing
            </a>
          </li>
          <li>
            <a href="/services/UIUX" className="hover:text-purple-400 transition-colors">
              UI/UX Designing
            </a>
          </li>
        </ul>
      </div>



          {/* Support */}
         <div>
          <h4 className="text-lg font-semibold mb-4">Support</h4>

          <div className="space-y-3 text-gray-400">
            {/* Emails */}
            <div className="flex items-start space-x-2">
              <Mail className="w-5 h-5 text-white mt-1" />
              <div className="flex flex-col">
                <p>apexium.space@gmail.com</p>
              </div>
            </div>

            {/* Phone Numbers */}
            <div className="flex items-start space-x-2">
              <Phone className="w-5 h-5 text-white mt-1" />
              <div className="flex flex-col">
                <p>+92 340 5542097</p>
              </div>
            </div>

            {/* Timing */}
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4 text-white" />
              <p>24/7 hours</p>
            </div>

            {/* Address */}
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-white" />
              <p>Apexium, Islamabad, Pakistan</p>
            </div>
          </div>
        </div>


          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/team" className="hover:text-purple-400 transition-colors">
                  Our Team
                </a>
              </li>
              <li>
                <a href="/careers" className="hover:text-purple-400 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-purple-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Apexium Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

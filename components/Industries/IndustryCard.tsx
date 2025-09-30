"use client"

import React from "react"

export const IndustryCard = ({
  title,
  isActive,
  onClick,
}: {
  title: string
  isActive: boolean
  onClick: () => void
}) => {
  return (
    <div
      onClick={onClick}
      className={`
        group relative cursor-pointer p-6 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105
        ${isActive
          ? 'bg-gradient-to-br from-teal-500 to-teal-600 border-teal-400 text-white shadow-2xl shadow-teal-500/25'
          : 'bg-white border-gray-200 text-gray-700 hover:border-teal-300 hover:shadow-lg'}
      `}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 rounded-2xl overflow-hidden">
        <div className={`
          absolute inset-0 bg-gradient-to-br transition-opacity duration-300
          ${isActive
            ? 'from-white/20 to-transparent'
            : 'from-teal-50 to-transparent opacity-0 group-hover:opacity-100'}
        `} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h3 className={`
          text-lg font-semibold transition-all duration-300
          ${isActive ? 'text-white' : 'text-gray-800 group-hover:text-teal-600'}
        `}>
          {title}
        </h3>

        <div className={`
          mt-3 h-1 bg-gradient-to-r from-teal-400 to-teal-600 rounded-full transition-all duration-300
          ${isActive ? 'w-full opacity-100' : 'w-0 group-hover:w-full opacity-0 group-hover:opacity-100'}
        `} />
      </div>

      {/* Floating Decorative Elements */}
      <div className={`
        absolute -top-1 -right-1 w-4 h-4 bg-teal-400 rounded-full transition-all duration-300
        ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100'}
      `} />

      <div className={`
        absolute -bottom-1 -left-1 w-3 h-3 bg-teal-300 rounded-full transition-all duration-300 delay-75
        ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100'}
      `} />
    </div>
  )
}

"use client"

import { useState, useEffect } from "react"
import { ArrowRight } from "lucide-react"

const heroSlides = [
  {
    id: 1,
    title: "Innovation at the",
    highlight: "Apexium",
    subtitle: "Transforming businesses through cutting-edge technology, AI innovation, and digital excellence",
    buttonText: "Get Started",
    backgroundGradient: "from-teal-50 via-white to-cyan-50"
  },
  {
    id: 2,
    title: "AI-Powered",
    highlight: "Solutions",
    subtitle: "Harness the power of artificial intelligence to automate processes and drive intelligent decision-making",
    buttonText: "Explore AI",
    backgroundGradient: "from-blue-50 via-white to-teal-50"
  },
  {
    id: 3,
    title: "Digital",
    highlight: "Excellence",
    subtitle: "Comprehensive digital transformation services that elevate your business to new heights of success",
    buttonText: "Start Journey",
    backgroundGradient: "from-emerald-50 via-white to-teal-50"
  }
]

interface HeroProps {
  scrollY: number
  onGetStartedClick: () => void
}

export default function Hero({ scrollY, onGetStartedClick }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000) // Resume auto-play after 10s
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  // Touch handlers
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextSlide()
    }
    if (isRightSwipe) {
      prevSlide()
    }
  }

  // Mouse handlers for desktop
  const [mouseStart, setMouseStart] = useState<number | null>(null)
  const [mouseEnd, setMouseEnd] = useState<number | null>(null)
  const [isDragging, setIsDragging] = useState(false)

  const onMouseDown = (e: React.MouseEvent) => {
    setMouseEnd(null)
    setMouseStart(e.clientX)
    setIsDragging(true)
  }

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    setMouseEnd(e.clientX)
  }

  const onMouseUp = () => {
    if (!mouseStart || !mouseEnd || !isDragging) {
      setIsDragging(false)
      return
    }
    
    const distance = mouseStart - mouseEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50

    if (isLeftSwipe) {
      nextSlide()
    }
    if (isRightSwipe) {
      prevSlide()
    }
    setIsDragging(false)
  }

  const onMouseLeave = () => {
    setIsDragging(false)
  }

  const currentHero = heroSlides[currentSlide]
  
  // Calculate transform for sticky effect
  const heroTransform = scrollY > 100 ? `translateY(${scrollY * 0.3}px) scale(${Math.max(0.8, 1 - scrollY * 0.0002)})` : 'translateY(0) scale(1)'
  const heroOpacity = scrollY > 100 ? Math.max(0.3, 1 - scrollY * 0.001) : 1

  return (
    <section 
      className="min-h-screen flex items-center justify-center overflow-hidden sticky top-0 z-0 cursor-grab active:cursor-grabbing select-none"
      style={{
        transform: heroTransform,
        opacity: heroOpacity
      }}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
    >
      {/* Dynamic Background */}
      <div className={`absolute inset-0 bg-gradient-to-br ${currentHero.backgroundGradient} transition-all duration-1000`} />
      
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-transparent"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 80%, #3db1a2 1px, transparent 1px),
                             radial-gradient(circle at 80% 20%, #3db1a2 1px, transparent 1px),
                             radial-gradient(circle at 40% 40%, #3db1a2 1px, transparent 1px)`,
            backgroundSize: '100px 100px, 150px 150px, 80px 80px',
            animation: 'float 20s ease-in-out infinite'
          }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 text-center text-gray-900 px-6 pt-20 max-w-6xl mx-auto">
        {/* Slide Content with Animation */}
        <div key={currentSlide} className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {currentHero.title}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-600 relative">
              {currentHero.highlight}
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full transform scale-x-0 animate-scale-x" />
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-700 leading-relaxed">
            {currentHero.subtitle}
          </p>
          
      <div className="flex justify-center">
        <button
          onClick={onGetStartedClick}
          className="group bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-12 py-4 text-lg font-semibold rounded-full transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-teal-500/25 flex items-center justify-center space-x-2 min-w-[220px]"
        >
          <span>{currentHero.buttonText}</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

        </div>

        {/* Swipe Indicator */}
        <div className="flex justify-center items-center space-x-2 mt-8 text-gray-500">
          <div className="w-8 h-0.5 bg-gray-300 rounded-full" />
          <span className="text-sm font-medium">Swipe to explore</span>
          <div className="w-8 h-0.5 bg-gray-300 rounded-full" />
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center space-x-3 mt-12">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-teal-500 w-8'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-64 h-1 bg-gray-200 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full transition-all duration-300"
          style={{ 
            width: `${((currentSlide + 1) / heroSlides.length) * 100}%` 
          }}
        />
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes scale-x {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(5px) rotate(-1deg); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        
        .animate-scale-x {
          animation: scale-x 0.8s ease-out 0.3s both;
        }
      `}</style>
    </section>
  )
}
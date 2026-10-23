import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import CustomCursor from './components/Cursor/CustomCursor'
import Navbar from './components/Navigation/Navbar'
import ParticleField from './components/Background/ParticleField'

import CoverSection from './sections/CoverSection'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import SkillsSection from './sections/SkillsSection'
import ProjectsSection from './sections/ProjectsSection'
import ExperienceSection from './sections/ExperienceSection'
import FieldGallerySection from './sections/FieldGallerySection'
import CertificatesSection from './sections/CertificatesSection'
import WhyMeSection from './sections/WhyMeSection'
import ContactSection from './sections/ContactSection'

const sections = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'gallery', label: 'Field Work' },
  { id: 'certificates', label: 'Credentials' },
  { id: 'why-me', label: 'Differentiators' },
  { id: 'contact', label: 'Contact' },
]

export default function App() {
  const [activeSection, setActiveSection] = useState('')
  const [showIntroBanner, setShowIntroBanner] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200
      for (const section of sections) {
        const el = document.getElementById(section.id)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Allow scrolling to also dismiss the intro banner
  useEffect(() => {
    if (!showIntroBanner) return

    const handleWheel = (e) => {
      if (Math.abs(e.deltaY) > 20) {
        setShowIntroBanner(false)
      }
    }

    const handleKeyDown = (e) => {
      if (['Space', 'Enter', 'ArrowDown', 'PageDown'].includes(e.code)) {
        setShowIntroBanner(false)
      }
    }

    window.addEventListener('wheel', handleWheel, { passive: true })
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('wheel', handleWheel)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [showIntroBanner])

  return (
    <div className="relative min-h-screen bg-[#070913] text-slate-100 font-sans selection:bg-teal-500/30 selection:text-teal-200 overflow-x-hidden">
      {/* Sleek Custom Cursor */}
      <CustomCursor />

      {/* 3D Ambient WebGL Fluid Smoke Shader Background (Always active & interactive) */}
      <ParticleField />

      {/* Radial Glow Ambient Effect */}
      <div className="fixed inset-0 bg-radial-gradient pointer-events-none z-0" />
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-15 z-0" />

      {/* Pure Fullscreen Magazine Intro Cover Banner */}
      <AnimatePresence>
        {showIntroBanner && (
          <CoverSection onEnter={() => setShowIntroBanner(false)} />
        )}
      </AnimatePresence>

      {/* Main Website Contents: Completely hidden during intro so zero silhouettes bleed through */}
      <motion.div
        initial={false}
        animate={{
          opacity: showIntroBanner ? 0 : 1,
          pointerEvents: showIntroBanner ? 'none' : 'auto',
          transition: { duration: 0.6, delay: showIntroBanner ? 0 : 0.2 }
        }}
        className={showIntroBanner ? 'hidden' : 'block'}
      >
        {/* Navigation Bar (Appears only after entering) */}
        <Navbar sections={sections} activeSection={activeSection} />

        
        {/* Main Content Sections */}
        <main className="relative z-10">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <FieldGallerySection />
          <CertificatesSection />
          <WhyMeSection />
          <ContactSection />
        </main>
      </motion.div>
    </div>
  )
}

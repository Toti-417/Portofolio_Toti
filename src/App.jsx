import { useState, useEffect } from 'react'
import CustomCursor from './components/Cursor/CustomCursor'
import Navbar from './components/Navigation/Navbar'
import ParticleField from './components/Background/ParticleField'
import LiveEditorToolbar from './components/LiveEditorToolbar'

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

  return (
    <div className="relative min-h-screen bg-[#070913] text-slate-100 font-sans selection:bg-teal-500/30 selection:text-teal-200 overflow-x-hidden">
      {/* Sleek Custom Cursor */}
      <CustomCursor />

      {/* 3D Ambient Particle Mesh Background */}
      <ParticleField />

      {/* Radial Glow Ambient Effect */}
      <div className="fixed inset-0 bg-radial-gradient pointer-events-none z-0" />
      <div className="fixed inset-0 bg-grid-pattern pointer-events-none opacity-40 z-0" />

      {/* Navigation */}
      <Navbar sections={sections} activeSection={activeSection} />

      {/* Live Visual Editor Dock */}
      <LiveEditorToolbar />

      {/* Main Content Layout */}
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
    </div>
  )
}


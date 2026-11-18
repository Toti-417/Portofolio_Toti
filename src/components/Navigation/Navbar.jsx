import { useState, useEffect, useRef } from 'react'
import { useLanguage } from '../../context/LanguageContext'

export default function Navbar({ sections, activeSection }) {
  const { lang, toggleLanguage, t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [cvMenuOpen, setCvMenuOpen] = useState(false)
  const cvDropdownRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    const handleClickOutside = (event) => {
      if (cvDropdownRef.current && !cvDropdownRef.current.contains(event.target)) {
        setCvMenuOpen(false)
      }
    }
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setCvMenuOpen(false)
    }

    window.addEventListener('scroll', handleScroll)
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#070913]/85 backdrop-blur-md border-b border-white/10 py-3 shadow-lg shadow-black/40'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#top" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-teal-400 to-blue-600 p-[1.5px] flex items-center justify-center shadow-md shadow-teal-500/30 group-hover:scale-105 transition-transform overflow-hidden shrink-0">
            <img
              src="/assets/toti-photo.png"
              alt="Toti Putra Pratama"
              className="w-full h-full object-cover object-top rounded-[10px]"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-slate-100 text-sm tracking-wide font-sans group-hover:text-teal-300 transition-colors">
              Toti Putra Pratama
            </span>
            <span className="text-[10px] text-slate-400 font-mono tracking-wider">
              PROJECT ENGINEER · DATA ANALYST
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
          {sections.map((section) => {
            const isActive = activeSection === section.id
            const labelKey = section.id === 'why-me' ? 'whyMe' : section.id
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-gradient-to-r from-teal-500/20 to-blue-500/20 text-teal-300 border border-teal-500/30 shadow-sm shadow-teal-500/20'
                    : 'text-slate-300 hover:text-slate-100 hover:bg-white/5'
                }`}
              >
                {t.nav[labelKey] || section.label}
              </a>
            )
          })}
        </div>

        {/* Right CTA + Language Switcher */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Language Switcher Toggle */}
          <button
            onClick={toggleLanguage}
            className="px-3 py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800 border border-white/10 text-xs font-mono text-slate-200 transition-all flex items-center gap-1.5"
            title="Switch Language / Ganti Bahasa"
          >
            <span className="text-teal-400">🌐</span>
            <span className={lang === 'en' ? 'font-bold text-teal-300' : 'text-slate-400'}>EN</span>
            <span className="text-slate-600">|</span>
            <span className={lang === 'id' ? 'font-bold text-teal-300' : 'text-slate-400'}>ID</span>
          </button>

          <div className="relative group/cv" ref={cvDropdownRef}>
            <button
              type="button"
              onClick={() => setCvMenuOpen(prev => !prev)}
              aria-expanded={cvMenuOpen}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-800/80 hover:bg-slate-800 text-slate-200 border transition-all flex items-center gap-1.5 cursor-pointer select-none ${
                cvMenuOpen ? 'border-teal-400 bg-slate-800 text-teal-300 shadow-md shadow-teal-500/20' : 'border-white/10 hover:border-teal-500/40'
              }`}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
              <span>{t.nav.downloadCv}</span>
              <span className="text-[10px] font-mono text-teal-300 bg-teal-500/10 px-1 py-0.2 rounded border border-teal-500/20">ID/EN</span>
              <svg className={`w-3 h-3 text-slate-400 transition-transform duration-200 ${cvMenuOpen ? 'rotate-180 text-teal-300' : ''}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
            <div className={`absolute right-0 top-full pt-1.5 w-52 transition-all duration-200 z-50 ${
              cvMenuOpen 
                ? 'opacity-100 pointer-events-auto translate-y-0 scale-100' 
                : 'opacity-0 pointer-events-none -translate-y-1 scale-95 group-hover/cv:opacity-100 group-hover/cv:pointer-events-auto group-hover/cv:translate-y-0 group-hover/cv:scale-100'
            }`}>
              <div className="bg-[#0b0f1f]/95 backdrop-blur-xl border border-teal-500/40 rounded-xl p-1.5 shadow-2xl shadow-black/80">
                <a
                  href="/assets/CV_Toti_Putra_Pratama_ID.pdf"
                  download="CV_Toti_Putra_Pratama_ID.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setCvMenuOpen(false)}
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-xs text-slate-200 hover:text-teal-300 hover:bg-slate-800/80 transition-all group/item cursor-pointer"
                >
                  <span className="text-base">🇮🇩</span>
                  <div className="flex flex-col">
                    <span className="font-semibold text-slate-100 group-hover/item:text-teal-300">Versi Indonesia (ID)</span>
                    <span className="text-[10px] text-slate-400 font-mono">Format ATS Resmi (PDF)</span>
                  </div>
                </a>
                <a
                  href="/assets/CV_Toti_Putra_Pratama_EN.pdf"
                  download="CV_Toti_Putra_Pratama_EN.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setCvMenuOpen(false)}
                  className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-xs text-slate-200 hover:text-teal-300 hover:bg-slate-800/80 transition-all group/item border-t border-white/5 mt-1 pt-2 cursor-pointer"
                >
                  <span className="text-base">🇬🇧</span>
                  <div className="flex flex-col">
                    <span className="font-semibold text-slate-100 group-hover/item:text-teal-300">English Version (EN)</span>
                    <span className="text-[10px] text-slate-400 font-mono">Official ATS Format (PDF)</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <a
            href="#contact"
            className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 shadow-md shadow-teal-500/20 hover:shadow-teal-500/30 transition-all"
          >
            {t.nav.letsTalk}
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="sm:hidden flex items-center gap-2">
          {/* Mobile Language Switcher */}
          <button
            onClick={toggleLanguage}
            className="px-2.5 py-1 rounded bg-slate-900 border border-white/10 text-xs font-mono text-teal-300"
          >
            {lang.toUpperCase()}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-slate-800/60 border border-white/10 text-slate-200 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0e1c]/95 border-b border-white/10 px-4 py-4 space-y-2 backdrop-blur-xl">
          {sections.map((section) => {
            const labelKey = section.id === 'why-me' ? 'whyMe' : section.id
            return (
              <a
                key={section.id}
                href={`#${section.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-sm text-slate-300 hover:text-teal-300 hover:bg-white/5 font-medium"
              >
                {t.nav[labelKey] || section.label}
              </a>
            )
          })}
          <div className="pt-3 border-t border-white/10 flex gap-2">
            <div className="flex-1 flex gap-1.5">
              <a
                href="/assets/CV_Toti_Putra_Pratama_ID.pdf" target="_blank" rel="noopener noreferrer"
                download="CV_Toti_Putra_Pratama_ID.pdf"
                className="flex-1 py-2 text-center rounded-lg text-xs font-medium bg-slate-800 text-teal-300 border border-teal-500/30 flex items-center justify-center gap-1"
              >
                <span>🇮🇩</span>
                <span>CV (ID)</span>
              </a>
              <a
                href="/assets/CV_Toti_Putra_Pratama_EN.pdf" target="_blank" rel="noopener noreferrer"
                download="CV_Toti_Putra_Pratama_EN.pdf"
                className="flex-1 py-2 text-center rounded-lg text-xs font-medium bg-slate-800 text-slate-200 border border-white/10 flex items-center justify-center gap-1"
              >
                <span>🇬🇧</span>
                <span>CV (EN)</span>
              </a>
            </div>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 py-2 text-center rounded-lg text-xs font-semibold bg-teal-500 text-slate-950"
            >
              {t.nav.letsTalk}
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

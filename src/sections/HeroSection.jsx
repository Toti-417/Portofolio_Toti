import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import EditableText from '../components/EditableText'

export default function HeroSection() {
  const { t } = useLanguage()
  const heroT = t.hero

  const [countValues, setCountValues] = useState([0, 0, 0, 0])

  const statsData = [
    { value: 40, prefix: 'IDR ', suffix: 'B+', label: heroT.stats[0].label, sub: heroT.stats[0].sub },
    { value: 30, suffix: '%', label: heroT.stats[1].label, sub: heroT.stats[1].sub },
    { value: 85, suffix: '%', label: heroT.stats[2].label, sub: heroT.stats[2].sub },
    { value: 70, suffix: '%', label: heroT.stats[3].label, sub: heroT.stats[3].sub },
  ]

  useEffect(() => {
    const duration = 2000
    const steps = 40
    const intervalTime = duration / steps
    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++
      const progress = currentStep / steps
      const easeProgress = 1 - Math.pow(1 - progress, 3)

      setCountValues(
        statsData.map((s) => Math.round(s.value * easeProgress))
      )

      if (currentStep >= steps) clearInterval(timer)
    }, intervalTime)

    return () => clearInterval(timer)
  }, [heroT])

  return (
    <section id="overview" className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center my-auto">
        
        {/* Left Column: Headline & Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-6"
        >
          {/* High-tech badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-300 text-xs font-mono tracking-wide">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse shadow-[0_0_8px_rgba(45,212,191,0.8)]" />
            <EditableText path="hero.badge" value={heroT.badge} />
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-slate-100">
            <EditableText path="hero.titleStart" value={heroT.titleStart} />{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-400 to-blue-500">
              <EditableText path="hero.titleEnd" value={heroT.titleEnd} />
            </span>
          </h1>

          {/* Role bio */}
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-body">
            <strong className="text-white font-semibold">4+ years</strong>{' '}
            <EditableText path="hero.bio" value={heroT.bio} multiline />{' '}
            <span className="text-amber-400 font-semibold">
              <EditableText path="hero.bioMid" value={heroT.bioMid} />
            </span>
            <EditableText path="hero.bioEnd" value={heroT.bioEnd} multiline />{' '}
            <span className="text-teal-300 font-medium">Power BI</span>,{' '}
            <span className="text-teal-300 font-medium">Python</span>,{' '}
            <span className="text-teal-300 font-medium">SQL</span>, and{' '}
            <span className="text-teal-300 font-medium">N8N</span>.
          </p>


          {/* Actions */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
            >
              <span>{heroT.exploreBtn}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>

            <div className="relative group/cv">
              <button
                type="button"
                className="px-6 py-3.5 rounded-xl font-medium text-sm bg-slate-900/80 hover:bg-slate-800 text-slate-200 border border-white/10 hover:border-teal-500/40 hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                <span>{heroT.downloadCv}</span>
                <span className="text-[11px] font-mono text-teal-400 bg-teal-500/10 px-1.5 py-0.5 rounded border border-teal-500/20">ID / EN</span>
              </button>
              <div className="absolute left-0 top-full mt-2 w-56 bg-[#0b0f1f] border border-teal-500/30 rounded-xl p-1.5 shadow-2xl opacity-0 pointer-events-none group-hover/cv:opacity-100 group-hover/cv:pointer-events-auto transition-all duration-200 z-50">
                <a
                  href="./assets/CV_Toti_Putra_Pratama_ID.pdf"
                  download="CV_Toti_Putra_Pratama_ID.pdf"
                  className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs text-slate-200 hover:text-teal-300 hover:bg-slate-800 transition-colors"
                >
                  <span className="text-sm">🇮🇩</span>
                  <div>
                    <span className="font-semibold block">Unduh Versi Indonesia</span>
                    <span className="text-[10px] text-slate-400 font-mono">Format ATS Resmi (PDF)</span>
                  </div>
                </a>
                <a
                  href="./assets/CV_Toti_Putra_Pratama_EN.pdf"
                  download="CV_Toti_Putra_Pratama_EN.pdf"
                  className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs text-slate-200 hover:text-teal-300 hover:bg-slate-800 transition-colors"
                >
                  <span className="text-sm">🇬🇧</span>
                  <div>
                    <span className="font-semibold block">Download English Version</span>
                    <span className="text-[10px] text-slate-400 font-mono">ATS-Friendly Format (PDF)</span>
                  </div>
                </a>
              </div>
            </div>

            <a
              href="#contact"
              className="px-5 py-3.5 rounded-xl font-medium text-sm text-slate-400 hover:text-teal-300 transition-colors"
            >
              {heroT.connectBtn}
            </a>
          </div>

          {/* Quick tech chips */}
          <div className="pt-4 flex items-center gap-3 text-xs text-slate-400 font-mono">
            <span className="text-slate-500">{heroT.coreArsenal}</span>
            <div className="flex flex-wrap gap-2">
              <span className="px-2.5 py-1 rounded bg-slate-900/60 border border-white/5 text-slate-300">Power BI</span>
              <span className="px-2.5 py-1 rounded bg-slate-900/60 border border-white/5 text-slate-300">Python</span>
              <span className="px-2.5 py-1 rounded bg-slate-900/60 border border-white/5 text-slate-300">MySQL</span>
              <span className="px-2.5 py-1 rounded bg-slate-900/60 border border-white/5 text-slate-300">N8N</span>
              <span className="px-2.5 py-1 rounded bg-slate-900/60 border border-white/5 text-slate-300">Huawei iMAE</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: User Photo & Executive Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <div className="relative w-full max-w-md">
            {/* Glowing background halo */}
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-teal-500 to-blue-600 opacity-25 blur-xl group-hover:opacity-40 transition duration-1000 animate-pulse" />
            
            {/* Photo Card */}
            <div className="relative glass-card rounded-2xl p-4 sm:p-5 border border-white/10 shadow-2xl">
              <div className="relative aspect-[4/4.8] rounded-xl overflow-hidden bg-slate-950 border border-white/10 group">
                <img
                  src="/assets/toti-photo.png"
                  alt="Toti Putra Pratama — Project Engineer & Data Analyst"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070913] via-transparent to-transparent opacity-60" />
                
                {/* Photo Tag Overlay */}
                <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-teal-500/30 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-[11px] font-mono text-emerald-300 tracking-wider font-semibold">
                    {heroT.openToOpportunities}
                  </span>
                </div>
              </div>

              {/* Card Footer Details */}
              <div className="mt-4 flex items-center justify-between px-1">
                <div>
                  <h3 className="font-bold text-slate-100 text-base">Toti Putra Pratama</h3>
                  <p className="text-xs text-slate-400 font-mono">ID // TELCOM-DATA-2025</p>
                </div>
                <div className="text-right">
                  <span className="text-xs text-teal-400 font-medium block">{heroT.roleSubtitle}</span>
                  <span className="text-[11px] text-amber-400 font-mono">{heroT.roleTransition}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Impact Stats Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
      >
        {statsData.map((stat, index) => (
          <div
            key={index}
            className="glass-card glass-card-hover rounded-xl p-5 border border-white/10 relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-teal-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-emerald-400 font-mono">
              {stat.prefix}{countValues[index]}{stat.suffix}
            </div>
            <div className="text-sm font-semibold text-slate-200 mt-1">
              {stat.label}
            </div>
            <div className="text-xs text-slate-400 font-mono mt-0.5">
              {stat.sub}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  )
}

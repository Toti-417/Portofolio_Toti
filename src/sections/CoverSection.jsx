import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

/**
 * Pure Fullscreen Magazine Intro Cover
 * - ZERO page bleed-through / no silhouettes
 * - Giant Toti Cutout with "Head Over Title" editorial hierarchy
 * - Giant "PORTOFOLIO" typography layered behind the subject
 * - Click anywhere to enter main portfolio
 */
export default function CoverSection({ onEnter }) {
  const { language } = useLanguage()
  const isId = language === 'id'

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.05,
        filter: 'blur(12px)',
        transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
      }}
      onClick={onEnter}
      className="fixed inset-0 z-[100] w-full h-full flex flex-col justify-between items-center px-4 pt-4 sm:pt-6 pb-6 sm:pb-8 cursor-pointer select-none overflow-hidden bg-transparent"
    >
      {/* Top Role Subtitle */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="z-30 flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-950/70 border border-teal-500/30 backdrop-blur-md shadow-xl"
      >
        <span className="w-2 h-2 rounded-full bg-teal-400 animate-ping" />
        <span className="text-xs sm:text-sm font-semibold tracking-wider text-slate-200 uppercase font-sans">
          {isId ? 'Project Engineer · Telecom Data Analyst' : 'Project Engineer · Telecom Data Analyst'}
        </span>
      </motion.div>

      {/* Center Magazine Canvas: Mega Title BEHIND + Elevated Subject Cutout IN FRONT */}
      <div className="relative w-full max-w-7xl mx-auto flex-1 flex items-center justify-center my-auto overflow-visible">
        
        {/* Giant "PORTOFOLIO" Typography - Deep Layer (Z-0) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0"
        >
          <h1 className="text-[20vw] sm:text-[18vw] lg:text-[16vw] font-black tracking-tight leading-none uppercase text-white/80 drop-shadow-[0_25px_60px_rgba(0,0,0,0.95)] font-sans select-none scale-y-105">
            PORTOFOLIO
          </h1>
        </motion.div>

        {/* ELEVATED HEROIC CUTOUT OF TOTI - Reaching higher over the title */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.3, ease: 'easeOut' }}
          className="relative z-10 flex flex-col items-center justify-end h-full max-h-[88vh]"
        >
          {/* Subtle Backlight Glow */}
          <div className="absolute top-1/4 w-96 h-96 rounded-full bg-teal-500/25 blur-3xl pointer-events-none" />

          {/* Cutout Image: Elevated upwards (-translate-y) with preserved natural aspect ratio */}
          <img
            src="/assets/toti-cutout.png"
            alt="Toti Putra Pratama"
            className="h-[74vh] sm:h-[82vh] md:h-[88vh] max-h-[860px] w-auto object-contain filter drop-shadow-[0_30px_60px_rgba(0,0,0,0.95)] pointer-events-none transition-transform duration-500 hover:scale-[1.02] -translate-y-4 sm:-translate-y-8"
          />

          {/* "Presented by Toti Putra Pratama" Pill Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="-mt-8 sm:-mt-12 z-30 px-5 py-2 rounded-full bg-slate-950/95 border border-teal-500/40 shadow-2xl shadow-black backdrop-blur-md flex items-center gap-2 hover:border-teal-400 transition-colors"
          >
            <span className="text-teal-400 text-xs">✨</span>
            <span className="text-xs sm:text-sm font-medium text-slate-300">
              Presented by <strong className="text-white font-bold tracking-wide">Toti Putra Pratama</strong>
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Floating Enter Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.65 }}
        className="z-30 flex flex-col items-center gap-1.5"
      >
        <div className="flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-slate-900/95 border border-teal-500/40 text-teal-300 text-xs sm:text-sm font-semibold shadow-2xl shadow-teal-500/20 backdrop-blur-md hover:bg-slate-800 transition-all">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>{isId ? 'Klik di mana saja untuk masuk ke portofolio' : 'Click anywhere to enter portfolio'}</span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </div>
        <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase">
          {isId ? '[ Tekan Layar / Scroll untuk Buka ]' : '[ Tap Anywhere / Scroll to Open ]'}
        </span>
      </motion.div>
    </motion.div>
  )
}

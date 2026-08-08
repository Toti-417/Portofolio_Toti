import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import EditableText from '../components/EditableText'

export default function AboutSection() {
  const { t } = useLanguage()
  const aboutT = t.about

  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Visual Highlight Cards */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 space-y-4"
        >
          <div className="glass-card rounded-2xl p-6 border border-white/10 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 font-mono text-lg">
                📡
              </div>
              <div>
                <h3 className="text-slate-100 font-bold text-base">
                  <EditableText path="about.card1Title" value={aboutT.card1Title} />
                </h3>
                <p className="text-xs text-slate-400 font-mono">
                  <EditableText path="about.card1Sub" value={aboutT.card1Sub} />
                </p>
              </div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              <EditableText path="about.card1Desc" value={aboutT.card1Desc} multiline />
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-white/10 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 font-mono text-lg">
                📊
              </div>
              <div>
                <h3 className="text-slate-100 font-bold text-base">
                  <EditableText path="about.card2Title" value={aboutT.card2Title} />
                </h3>
                <p className="text-xs text-slate-400 font-mono">
                  <EditableText path="about.card2Sub" value={aboutT.card2Sub} />
                </p>
              </div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              <EditableText path="about.card2Desc" value={aboutT.card2Desc} multiline />
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-white/10 relative overflow-hidden">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 font-mono text-lg">
                🎯
              </div>
              <div>
                <h3 className="text-slate-100 font-bold text-base">
                  <EditableText path="about.card3Title" value={aboutT.card3Title} />
                </h3>
                <p className="text-xs text-slate-400 font-mono">
                  <EditableText path="about.card3Sub" value={aboutT.card3Sub} />
                </p>
              </div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              <EditableText path="about.card3Desc" value={aboutT.card3Desc} multiline />
            </p>
          </div>
        </motion.div>

        {/* Right Column: Executive Narrative */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-7 space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-teal-400 font-mono text-xs">
            <EditableText path="about.badge" value={aboutT.badge} />
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            <EditableText path="about.titleStart" value={aboutT.titleStart} />{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-400">
              <EditableText path="about.titleEnd" value={aboutT.titleEnd} />
            </span>
          </h2>

          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p><EditableText path="about.p1" value={aboutT.p1} multiline /></p>
            <p><EditableText path="about.p2" value={aboutT.p2} multiline /></p>
            <p><EditableText path="about.p3" value={aboutT.p3} multiline /></p>
          </div>

          {/* Current Status Card */}
          <div className="pt-2">
            <div className="p-4 rounded-xl bg-slate-900/80 border border-amber-500/30 flex items-start gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-amber-400 mt-1.5 shrink-0 animate-pulse" />
              <div className="text-xs sm:text-sm">
                <span className="font-semibold text-slate-100 block">
                  <EditableText path="about.currentStatusTitle" value={aboutT.currentStatusTitle} />
                </span>
                <span className="text-slate-300">
                  <EditableText path="about.currentStatusDesc" value={aboutT.currentStatusDesc} multiline />
                </span>
              </div>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  )
}


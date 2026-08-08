import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import EditableText from '../components/EditableText'

export default function ExperienceSection() {
  const { t } = useLanguage()
  const expT = t.experience

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-teal-400 font-mono text-xs">
          <EditableText path="experience.badge" value={expT.badge} />
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
          <EditableText path="experience.titleStart" value={expT.titleStart} />{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-400">
            <EditableText path="experience.titleEnd" value={expT.titleEnd} />
          </span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          <EditableText path="experience.subtitle" value={expT.subtitle} multiline />
        </p>
      </div>

      <div className="max-w-4xl mx-auto relative pl-6 sm:pl-8 border-l-2 border-slate-800 space-y-12">
        {expT.items.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="relative group"
          >
            {/* Timeline Dot */}
            <div className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 bg-slate-950 transition-colors ${
              exp.isCurrent
                ? 'border-teal-400 shadow-[0_0_12px_rgba(45,212,191,0.8)]'
                : 'border-slate-600 group-hover:border-teal-400'
            }`} />

            <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-teal-500/30 transition-all space-y-4">
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4">
                <div>
                  <span className="text-xs font-mono text-amber-400 block mb-1">
                    <EditableText path={`experience.items.${idx}.period`} value={exp.period} />
                  </span>
                  <h3 className="text-xl font-bold text-slate-100">
                    <EditableText path={`experience.items.${idx}.role`} value={exp.role} />
                  </h3>
                  <span className="text-sm font-medium text-teal-400">
                    <EditableText path={`experience.items.${idx}.company`} value={exp.company} />
                  </span>
                </div>
                {exp.isCurrent && (
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-teal-500/10 text-teal-300 border border-teal-500/30 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
                    <EditableText path="experience.currentRoleBadge" value={expT.currentRoleBadge} />
                  </span>
                )}
              </div>

              {/* Highlights */}
              <ul className="space-y-2 text-slate-300 text-sm">
                {exp.highlights.map((item, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="text-teal-400 font-mono mt-0.5">▸</span>
                    <span className="leading-relaxed">
                      <EditableText path={`experience.items.${idx}.highlights.${i}`} value={item} multiline />
                    </span>
                  </li>
                ))}
              </ul>

              {/* Award Badge if any */}
              {exp.award && (
                <div className="pt-2">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold">
                    <EditableText path={`experience.items.${idx}.award`} value={exp.award} />
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}


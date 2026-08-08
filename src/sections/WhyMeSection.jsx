import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import EditableText from '../components/EditableText'

export default function WhyMeSection() {
  const { t } = useLanguage()
  const whyT = t.whyMe

  return (
    <section id="why-me" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-teal-400 font-mono text-xs">
          <EditableText path="whyMe.badge" value={whyT.badge} />
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
          <EditableText path="whyMe.titleStart" value={whyT.titleStart} />{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-400">
            <EditableText path="whyMe.titleEnd" value={whyT.titleEnd} />
          </span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          <EditableText path="whyMe.subtitle" value={whyT.subtitle} multiline />
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {whyT.items.map((diff, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="glass-card glass-card-hover rounded-2xl p-6 sm:p-8 border border-white/10 relative overflow-hidden flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-2xl">
                  {diff.icon}
                </div>
                <span className="text-xs font-mono font-semibold text-teal-300 bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/20">
                  {diff.metric}
                </span>
              </div>

              <h3 className="text-xl font-bold text-slate-100">{diff.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{diff.description}</p>
            </div>

            <div className="pt-6 border-t border-white/10 mt-6 flex items-center justify-between text-xs font-mono text-slate-400">
              <span>{whyT.valuePropLabel}</span>
              <span className="text-amber-400 font-semibold">{diff.highlight}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

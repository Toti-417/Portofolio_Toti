import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import EditableText from '../components/EditableText'

export default function CertificatesSection() {
  const { t } = useLanguage()
  const certT = t.certificates
  const [selectedCert, setSelectedCert] = useState(null)

  return (
    <section id="certificates" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-teal-400 font-mono text-xs">
          <EditableText path="certificates.badge" value={certT.badge} />
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
          <EditableText path="certificates.titleStart" value={certT.titleStart} />{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-400">
            <EditableText path="certificates.titleEnd" value={certT.titleEnd} />
          </span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          <EditableText path="certificates.subtitle" value={certT.subtitle} multiline />
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certT.items.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            onClick={() => setSelectedCert(cert)}
            className="glass-card glass-card-hover rounded-2xl p-6 border border-white/10 flex flex-col justify-between cursor-pointer group"
          >
            <div>
              {/* Category */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono text-teal-400 bg-teal-500/10 px-2.5 py-0.5 rounded border border-teal-500/20">
                  {cert.category}
                </span>
                <span className="text-xs text-slate-400 font-mono">{cert.year}</span>
              </div>

              {/* Icon Frame */}
              <div className="w-14 h-14 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:border-teal-500/40 transition-all overflow-hidden p-2">
                {cert.icon && (cert.icon.startsWith('/') || cert.icon.endsWith('.png')) ? (
                  <img src={cert.icon} alt={cert.name} className="w-full h-full object-contain" />
                ) : (
                  <span className="text-3xl">{cert.icon}</span>
                )}
              </div>

              {/* Title & Issuer */}
              <h3 className="text-base font-bold text-slate-100 mb-1 group-hover:text-teal-300 transition-colors">
                {cert.name}
              </h3>
              <p className="text-xs text-slate-400 font-medium">{cert.issuer}</p>
            </div>

            <div className="pt-5 flex items-center text-xs text-teal-400 font-medium group-hover:text-teal-300">
              <span>{certT.previewText}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certificate Preview Lightbox */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-[200] bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0b0f1f] border border-teal-500/30 rounded-2xl p-6 sm:p-8 max-w-lg w-full text-center shadow-2xl space-y-5"
            >
              <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-teal-500/30 flex items-center justify-center mx-auto overflow-hidden p-2.5">
                {selectedCert.icon && (selectedCert.icon.startsWith('/') || selectedCert.icon.endsWith('.png')) ? (
                  <img src={selectedCert.icon} alt={selectedCert.name} className="w-full h-full object-contain" />
                ) : (
                  <span className="text-4xl">{selectedCert.icon}</span>
                )}
              </div>

              <div>
                <span className="text-xs font-mono text-teal-400">{selectedCert.category}</span>
                <h3 className="text-xl font-bold text-slate-100 mt-1">{selectedCert.name}</h3>
                <p className="text-xs text-slate-400 font-medium mt-1">{selectedCert.issuer} — {selectedCert.year}</p>
              </div>

              <div className="aspect-[4/2.5] rounded-xl border border-dashed border-white/20 bg-slate-900/60 flex items-center justify-center text-xs text-slate-400">
                {certT.verificationPlaceholder}
              </div>

              <button
                onClick={() => setSelectedCert(null)}
                className="w-full py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-semibold text-xs transition-colors"
              >
                {certT.closePreview}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

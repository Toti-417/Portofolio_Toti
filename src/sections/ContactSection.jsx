import { useState } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import EditableText from '../components/EditableText'

export default function ContactSection() {
  const { t } = useLanguage()
  const contactT = t.contact
  const [formState, setFormState] = useState('idle') // idle, sending, sent

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormState('sending')
    setTimeout(() => {
      setFormState('sent')
      setTimeout(() => setFormState('idle'), 4000)
    }, 1200)
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5 relative">
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-teal-400 font-mono text-xs">
          <EditableText path="contact.badge" value={contactT.badge} />
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
          <EditableText path="contact.titleStart" value={contactT.titleStart} />{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-400">
            <EditableText path="contact.titleEnd" value={contactT.titleEnd} />
          </span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          <EditableText path="contact.subtitle" value={contactT.subtitle} multiline />
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Direct Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 space-y-6"
        >
          <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-mono mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {contactT.availableStatus}
              </div>
              <h3 className="text-xl font-bold text-slate-100">{contactT.directHeader}</h3>
              <p className="text-xs text-slate-400 mt-1">
                {contactT.directSub}
              </p>
            </div>

            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-4 p-3 rounded-xl bg-slate-950/60 border border-white/5">
                <div className="w-10 h-10 rounded-lg bg-teal-500/10 border border-teal-500/30 flex items-center justify-center text-teal-400 shrink-0">
                  ✉
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block">{contactT.emailLabel}</span>
                  <a href="mailto:Totiputra08@gmail.com" className="font-semibold text-slate-200 hover:text-teal-300 transition-colors">
                    Totiputra08@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3 rounded-xl bg-slate-950/60 border border-white/5">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                  📱
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block">{contactT.phoneLabel}</span>
                  <a href="https://wa.me/628985903141" target="_blank" rel="noopener noreferrer" className="font-semibold text-slate-200 hover:text-teal-300 transition-colors">
                    +62 898-5903-141
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3 rounded-xl bg-slate-950/60 border border-white/5">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                  📍
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block">{contactT.locationLabel}</span>
                  <span className="font-semibold text-slate-200">
                    {contactT.locationVal}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3 rounded-xl bg-slate-950/60 border border-white/5">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                  💼
                </div>
                <div>
                  <span className="text-[11px] font-mono text-slate-400 block">{contactT.linkedinLabel}</span>
                  <a href="https://linkedin.com/in/toti-putra-669490249" target="_blank" rel="noopener noreferrer" className="font-semibold text-slate-200 hover:text-teal-300 transition-colors">
                    linkedin.com/in/toti-putra
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-7"
        >
          <div className="glass-card rounded-2xl p-6 sm:p-8 border border-white/10">
            <h3 className="text-xl font-bold text-slate-100 mb-1">{contactT.formTitle}</h3>
            <p className="text-xs text-slate-400 mb-6">
              {contactT.formSub}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono text-slate-400 block mb-1.5">{contactT.nameLabel}</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jane Doe"
                    className="w-full bg-slate-950/80 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-all"
                  />
                </div>
                <div>
                  <label className="text-xs font-mono text-slate-400 block mb-1.5">{contactT.emailFieldLabel}</label>
                  <input
                    type="email"
                    required
                    placeholder="jane@company.com"
                    className="w-full bg-slate-950/80 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-mono text-slate-400 block mb-1.5">{contactT.subjectLabel}</label>
                <input
                  type="text"
                  placeholder="e.g. Job Opportunity / Project Discussion"
                  className="w-full bg-slate-950/80 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-all"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-slate-400 block mb-1.5">{contactT.messageLabel}</label>
                <textarea
                  rows={5}
                  required
                  placeholder="..."
                  className="w-full bg-slate-950/80 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={formState !== 'idle'}
                className={`w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 ${
                  formState === 'sent'
                    ? 'bg-emerald-500 text-slate-950'
                    : formState === 'sending'
                    ? 'bg-slate-800 text-slate-400 cursor-wait'
                    : 'bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 shadow-lg shadow-teal-500/20'
                }`}
              >
                {formState === 'sending' && (
                  <>
                    <span className="w-4 h-4 rounded-full border-2 border-slate-950 border-t-transparent animate-spin" />
                    <span>{contactT.sendingBtn}</span>
                  </>
                )}
                {formState === 'sent' && (
                  <>
                    <span>{contactT.sentBtn}</span>
                  </>
                )}
                {formState === 'idle' && (
                  <>
                    <span>{contactT.sendBtn}</span>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                  </>
                )}
              </button>
            </form>
          </div>
        </motion.div>
      </div>

      {/* Footer Bar */}
      <footer className="mt-24 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <span className="font-bold text-slate-200 font-sans">Toti Putra Pratama</span>
          <span>•</span>
          <span className="font-mono text-teal-400">{contactT.tagline}</span>
        </div>
        <div>
          © 2026 Toti Putra Pratama. {contactT.copyright}
        </div>
      </footer>
    </section>
  )
}

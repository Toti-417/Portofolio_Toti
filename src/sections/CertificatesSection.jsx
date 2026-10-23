import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import EditableText from '../components/EditableText'

// Comprehensive technical competency breakdown for each certificate
const CERT_DETAILS = {
  0: { // Power BI
    code: 'MS-PBI-8842',
    issuerFull: 'Microsoft Certified Professional / Industry Standard',
    issuedDate: 'October 2024',
    competencies: [
      'DAX Measures & Advanced Time Intelligence',
      'Star Schema Relational Data Modeling',
      'Executive Rollout KPI Dashboards',
      'Power Query M-Code Data Transformation'
    ],
    summary: 'Demonstrated mastery in end-to-end business intelligence, multi-table telecom data warehousing, and interactive executive reporting.'
  },
  1: { // Python Data Science
    code: 'PY-DS-5521',
    issuerFull: 'Python Software Foundation & Industry Curriculum',
    issuedDate: 'August 2024',
    competencies: [
      'Pandas & NumPy High-Performance Analytics',
      'Automated Data Cleaning & ETL Pipelines',
      'Statistical Hypothesis & Regression Analysis',
      'REST API Integration & JSON Parsing'
    ],
    summary: 'Proficiency in data manipulation, exploratory data analysis, automation scripts, and quantitative dataset processing.'
  },
  2: { // SQL HackerRank
    code: 'HR-SQL-9104',
    issuerFull: 'HackerRank Verified Skill Assessment',
    issuedDate: 'July 2024',
    competencies: [
      'Complex Multi-Table INNER / LEFT JOINs',
      'Window Functions (ROW_NUMBER, RANK, DENSE_RANK)',
      'Subqueries, CTEs & Temporary Tables',
      'Index Optimization & High-Volume Query Tuning'
    ],
    summary: 'Validated proficiency in relational database querying, complex aggregations, telecom site metrics analysis, and schema query optimization.'
  },
  3: { // Project Management
    code: 'PM-ENG-40B',
    issuerFull: 'Professional Engineering Standards / Telkomsel Scope',
    issuedDate: 'December 2023',
    competencies: [
      'CAPEX & OPEX Budget Allocation (IDR 40B)',
      'WBS Scheduling & Critical Path Management',
      'Vendor SLA & Subcontractor Compliance',
      'Telkomsel eATP & Site Acceptance Standards'
    ],
    summary: 'Execution mastery over large-scale wireless infrastructure deployment, resource forecasting, and executive milestone governance.'
  },
  4: { // N8N Automation
    code: 'N8N-AUTO-771',
    issuerFull: 'Workflow Automation & Systems Integration',
    issuedDate: 'November 2024',
    competencies: [
      'Custom Webhook Listeners & Trigger Logic',
      'Multi-System API Orchestration (WhatsApp/MySQL)',
      'Fault-Tolerant Error Handling & Retry Policies',
      'Automated Telegram / Slack Event Notifiers'
    ],
    summary: 'Architecture and deployment of automated enterprise workflows connecting cellular monitoring nodes with instant messaging interfaces.'
  },
  5: { // Telecom Network Assurance
    code: 'RAN-OPT-2023',
    issuerFull: 'Radio Access Network & Transmission Standards',
    issuedDate: 'May 2023',
    competencies: [
      'RAN KPI Diagnostics (PRB, Payload, Drop Rate)',
      'RET Antenna Tilt & Azimuth Alignment Audit',
      'Balmon Spectrum Interference Spectrum Radar',
      'Fiber Optic / Microwave Backhaul Validation'
    ],
    summary: 'Comprehensive competency in cellular RF spectrum optimization, base station transmission integrity, and mobile network QoS assurance.'
  }
}

export default function CertificatesSection() {
  const { t, language } = useLanguage()
  const certT = t.certificates
  const [selectedCert, setSelectedCert] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(null)
  const isId = language === 'id'

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedCert(null)
        setSelectedIndex(null)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const handleOpen = (cert, idx) => {
    setSelectedCert(cert)
    setSelectedIndex(idx)
  }

  const handleClose = () => {
    setSelectedCert(null)
    setSelectedIndex(null)
  }

  const currentDetails = selectedIndex !== null ? (CERT_DETAILS[selectedIndex] || CERT_DETAILS[0]) : null

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
            onClick={() => handleOpen(cert, idx)}
            className="glass-card glass-card-hover rounded-2xl p-6 border border-white/10 flex flex-col justify-between cursor-pointer group hover:border-teal-500/40 transition-all duration-300"
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

            <div className="pt-5 flex items-center justify-between text-xs text-teal-400 font-medium group-hover:text-teal-300">
              <span className="flex items-center gap-1.5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                {certT.previewText}
              </span>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                {isId ? 'Terverifikasi' : 'Verified'}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Deluxe Digital Credential Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && currentDetails && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 z-[200] bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-gradient-to-b from-[#0b1022] to-[#070a14] border border-teal-500/40 rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden my-8"
            >
              {/* Decorative top ambient bar */}
              <div className="h-1.5 w-full bg-gradient-to-r from-teal-500 via-emerald-400 to-blue-500" />

              {/* Close Button Top Right */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-slate-900/80 hover:bg-slate-800 border border-white/10 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Close"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>

              <div className="p-6 sm:p-8 space-y-6">
                {/* Certificate Header Banner */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 pb-4 border-b border-white/10 text-center sm:text-left">
                  <div className="w-16 h-16 rounded-xl bg-slate-900 border border-teal-500/30 flex items-center justify-center shrink-0 p-2.5 shadow-lg shadow-teal-500/10">
                    {selectedCert.icon && (selectedCert.icon.startsWith('/') || selectedCert.icon.endsWith('.png')) ? (
                      <img src={selectedCert.icon} alt={selectedCert.name} className="w-full h-full object-contain" />
                    ) : (
                      <span className="text-3xl">{selectedCert.icon}</span>
                    )}
                  </div>
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                      <span className="text-[11px] font-mono text-teal-400 bg-teal-500/10 px-2.5 py-0.5 rounded border border-teal-500/20">
                        {selectedCert.category}
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/20">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                        {isId ? 'KREDENSIAL TEKNIK TERVALIDASI' : 'OFFICIAL TECHNICAL CREDENTIAL'}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-100 tracking-tight">
                      {selectedCert.name}
                    </h3>
                    <p className="text-xs text-slate-400 font-mono">
                      {currentDetails.issuerFull} · {currentDetails.issuedDate}
                    </p>
                  </div>
                </div>

                {/* Deluxe Certificate Presentation Card */}
                <div className="relative rounded-xl border border-teal-500/30 bg-[#090d1c] p-5 sm:p-6 shadow-inner overflow-hidden">
                  {/* Subtle watermarked background logo */}
                  <div className="absolute -right-12 -bottom-12 opacity-5 pointer-events-none select-none">
                    <svg width="240" height="240" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                  </div>

                  {/* Recipient Ribbon */}
                  <div className="text-center pb-4 border-b border-white/5 space-y-1">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-slate-400">
                      {isId ? 'Diberikan Kepada Praktisi Teknik' : 'Conferred Upon Technical Practitioner'}
                    </span>
                    <div className="text-lg sm:text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-200 via-emerald-300 to-teal-100">
                      Toti Putra Pratama
                    </div>
                    <div className="text-[11px] font-mono text-slate-400">
                      ID: <span className="text-teal-400 font-semibold">{currentDetails.code}</span> // STATUS: <span className="text-emerald-400">PERMANENT STANDING</span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-4 text-center sm:text-left">
                    {currentDetails.summary}
                  </p>

                  {/* Competencies Validated Grid */}
                  <div className="space-y-2 pt-2">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-teal-400 font-semibold flex items-center gap-1.5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                      {isId ? 'Kompetensi Inti yang Divalidasi:' : 'Core Competencies Validated:'}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {currentDetails.competencies.map((comp, cIdx) => (
                        <div
                          key={cIdx}
                          className="flex items-start gap-2 text-xs text-slate-200 bg-slate-900/80 rounded-lg p-2.5 border border-white/5"
                        >
                          <span className="text-emerald-400 mt-0.5 shrink-0">✓</span>
                          <span>{comp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Holographic Verification Stamp */}
                  <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 font-mono">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                      <span className="text-[11px] text-emerald-300 font-semibold">
                        {isId ? 'Sesuai Standar Industri & Proyek Telko' : 'Telco & Analytics Engineering Compliant'}
                      </span>
                    </div>
                    <div className="px-3 py-1 rounded-md bg-teal-500/10 border border-teal-500/30 text-[10px] text-teal-300 font-semibold tracking-wider">
                      VERIFIED REPOSITORY RECORD
                    </div>
                  </div>
                </div>

                {/* Footer Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-2">
                  <a
                    href="#projects"
                    onClick={handleClose}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/10 text-slate-300 hover:text-white text-xs font-semibold text-center transition-colors"
                  >
                    {isId ? 'Lihat Bukti Proyek Terkait →' : 'View Related Project Proofs →'}
                  </a>
                  <button
                    onClick={handleClose}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-slate-950 font-bold text-xs transition-all shadow-lg shadow-teal-500/25"
                  >
                    {certT.closePreview}
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

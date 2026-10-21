import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import EditableText from '../components/EditableText'

const styles = [
  { accent: 'from-teal-500/20 via-cyan-500/10 to-transparent', border: 'border-teal-500/40', glow: 'hover:shadow-teal-500/20' },
  { accent: 'from-blue-500/20 via-indigo-500/10 to-transparent', border: 'border-blue-500/40', glow: 'hover:shadow-blue-500/20' },
  { accent: 'from-purple-500/20 via-pink-500/10 to-transparent', border: 'border-purple-500/40', glow: 'hover:shadow-purple-500/20' },
  { accent: 'from-emerald-500/20 via-teal-500/10 to-transparent', border: 'border-emerald-500/40', glow: 'hover:shadow-emerald-500/20' },
  { accent: 'from-amber-500/20 via-orange-500/10 to-transparent', border: 'border-amber-500/40', glow: 'hover:shadow-amber-500/20' },
  { accent: 'from-rose-500/20 via-red-500/10 to-transparent', border: 'border-rose-500/40', glow: 'hover:shadow-rose-500/20' },
  { accent: 'from-cyan-500/20 via-teal-500/10 to-transparent', border: 'border-cyan-500/40', glow: 'hover:shadow-cyan-500/20' },
]

export default function ProjectsSection() {
  const { t, lang } = useLanguage()
  const projectsT = t.projects
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeImageTab, setActiveImageTab] = useState('primary') // 'primary' | 'secondary'

  const openProject = (project) => {
    setSelectedProject(project)
    setActiveImageTab('primary')
  }

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-teal-500/30 text-teal-400 font-mono text-xs">
          <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
          <EditableText path="projects.badge" value={projectsT.badge} />
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
          <EditableText path="projects.titleStart" value={projectsT.titleStart} />{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-300 to-blue-400">
            <EditableText path="projects.titleEnd" value={projectsT.titleEnd} />
          </span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          <EditableText path="projects.subtitle" value={projectsT.subtitle} multiline />
        </p>
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsT.items.map((project, idx) => {
          const styleObj = styles[idx % styles.length]
          return (
            <motion.div
              key={project.id || idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 6) * 0.1 }}
              className={`glass-card glass-card-hover rounded-2xl p-5 border ${styleObj.border} bg-gradient-to-b ${styleObj.accent} flex flex-col justify-between relative group hover:shadow-xl transition-all duration-300`}
            >
              <div>
                {/* Category & Project Index */}
                <div className="flex items-center justify-between mb-3.5">
                  <span className="text-[11px] font-mono text-teal-300 bg-teal-500/10 px-2.5 py-1 rounded-md border border-teal-500/30">
                    {project.category}
                  </span>
                  <span className="text-[11px] text-slate-400 font-mono">
                    PROJ-0{idx + 1}
                  </span>
                </div>

                {/* Screenshot / Proof Banner (if available) */}
                {project.image ? (
                  <div
                    onClick={() => openProject(project)}
                    className="relative mb-4 h-44 w-full rounded-xl overflow-hidden border border-white/10 group-hover:border-teal-400/50 cursor-pointer bg-slate-950 transition-all duration-300 shadow-md group-hover:shadow-teal-500/20"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20 opacity-90 group-hover:opacity-60 transition-opacity"></div>
                    <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-900/90 backdrop-blur-md border border-teal-500/30 text-[10px] font-mono text-teal-300 shadow-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                      <span>{lang === 'id' ? 'BUKTI DASHBOARD' : 'LIVE DASHBOARD'}</span>
                    </div>
                    {project.secondaryImage && (
                      <div className="absolute bottom-2.5 left-2.5 px-2 py-0.5 rounded bg-black/70 backdrop-blur-sm border border-white/10 text-[10px] font-mono text-slate-300">
                        {lang === 'id' ? '2 Tampilan Bukti' : '2 Views Available'}
                      </div>
                    )}
                  </div>
                ) : null}

                {/* Title */}
                <h3 className="text-lg font-bold text-slate-100 mb-2.5 group-hover:text-teal-300 transition-colors line-clamp-2">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Impact Callout */}
                <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5 mb-4">
                  <span className="text-[11px] font-semibold text-amber-400 block mb-0.5">
                    {projectsT.impactLabel}
                  </span>
                  <span className="text-xs text-slate-300 line-clamp-2">
                    {project.impact}
                  </span>
                </div>
              </div>

              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-white/10 text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900/60 text-slate-400">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

                {/* Action Button */}
                <button
                  onClick={() => openProject(project)}
                  className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/10 hover:border-teal-500/40 text-xs font-medium text-slate-200 transition-all flex items-center justify-center gap-2 group-hover:text-teal-300 shadow-sm"
                >
                  <span>{project.image ? (lang === 'id' ? 'Lihat Bukti & Detail Dashboard' : 'View Dashboard Proof & Details') : projectsT.viewDetails}</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Project Detail Modal with Dashboard Screenshot Proof */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[200] bg-slate-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-5 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0b0f1f] border border-teal-500/40 rounded-2xl p-5 sm:p-7 max-w-3xl w-full shadow-2xl space-y-5 my-auto max-h-[92vh] overflow-y-auto"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between border-b border-white/10 pb-4">
                <div className="pr-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-teal-400 bg-teal-500/10 px-2.5 py-0.5 rounded border border-teal-500/30">
                      {selectedProject.category}
                    </span>
                    {selectedProject.image && (
                      <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/30 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        {lang === 'id' ? 'Terverifikasi Sistem' : 'System Verified'}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-100 mt-2">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors shrink-0"
                >
                  ✕
                </button>
              </div>

              {/* Visual Proof / Dashboard Screenshot Display */}
              {selectedProject.image && (
                <div className="space-y-3">
                  {/* Secondary Image Switcher Tabs */}
                  {selectedProject.secondaryImage && (
                    <div className="flex items-center gap-2 bg-slate-900/90 p-1.5 rounded-xl border border-white/10">
                      <button
                        onClick={() => setActiveImageTab('primary')}
                        className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-mono transition-all flex items-center justify-center gap-1.5 ${
                          activeImageTab === 'primary'
                            ? 'bg-teal-500 text-slate-950 font-bold shadow-md'
                            : 'text-slate-300 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        <span>🗺️</span>
                        <span>{selectedProject.imageLabel || (lang === 'id' ? 'Tampilan 1: Peta Radar' : 'View 1: Radar Map')}</span>
                      </button>
                      <button
                        onClick={() => setActiveImageTab('secondary')}
                        className={`flex-1 py-1.5 px-3 rounded-lg text-xs font-mono transition-all flex items-center justify-center gap-1.5 ${
                          activeImageTab === 'secondary'
                            ? 'bg-teal-500 text-slate-950 font-bold shadow-md'
                            : 'text-slate-300 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        <span>📊</span>
                        <span>{selectedProject.secondaryImageLabel || (lang === 'id' ? 'Tampilan 2: Matrix 24 Jam' : 'View 2: 24-Hr Matrix')}</span>
                      </button>
                    </div>
                  )}

                  {/* Screenshot Container */}
                  <div className="relative rounded-xl overflow-hidden border border-white/15 bg-slate-950 shadow-2xl max-h-[380px] flex items-center justify-center group">
                    <img
                      src={activeImageTab === 'secondary' && selectedProject.secondaryImage ? selectedProject.secondaryImage : selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-auto max-h-[380px] object-contain mx-auto"
                    />
                    <a
                      href={activeImageTab === 'secondary' && selectedProject.secondaryImage ? selectedProject.secondaryImage : selectedProject.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-black/80 hover:bg-teal-500 hover:text-slate-950 backdrop-blur-md border border-white/20 text-xs font-mono text-slate-200 transition-all flex items-center gap-1.5 shadow-lg"
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                      <span>{lang === 'id' ? 'Buka Gambar Resolusi Penuh' : 'Open Full Resolution'}</span>
                    </a>
                  </div>
                </div>
              )}

              {/* Purpose & Explanation of Dashboard (Fungsi Dashboard) */}
              {selectedProject.dashboardPurpose && (
                <div className="p-4 rounded-xl bg-gradient-to-r from-teal-950/40 via-slate-900 to-slate-900 border border-teal-500/30">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-teal-400">💡</span>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-teal-300 font-bold">
                      {lang === 'id' ? 'Fungsi & Peruntukan Dashboard / Sistem:' : 'Dashboard Functionality & Operational Purpose:'}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {selectedProject.dashboardPurpose}
                  </p>
                </div>
              )}

              {/* Description */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-1.5">
                  {lang === 'id' ? 'Deskripsi Teknis Proyek:' : 'Technical Project Description:'}
                </h4>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Measurable Impact Callout */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-amber-500/30">
                <h4 className="text-xs font-mono text-amber-400 font-semibold mb-1">
                  {projectsT.modalTitle}
                </h4>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {selectedProject.impact}
                </p>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {selectedProject.metrics.map((m, i) => (
                  <div key={i} className="p-3 rounded-lg bg-slate-900/90 border border-white/5 text-center">
                    <span className="text-[11px] text-slate-400 font-mono block">
                      {m.label}
                    </span>
                    <span className="text-sm sm:text-base font-bold text-amber-400 mt-0.5 block">
                      {m.val}
                    </span>
                  </div>
                ))}
              </div>

              {/* Technical Stack Tags */}
              <div className="border-t border-white/10 pt-4">
                <span className="text-[11px] font-mono text-slate-400 block mb-2">
                  {lang === 'id' ? 'TEKNOLOGI & INFRASTRUKTUR:' : 'TECHNOLOGY & ARCHITECTURE:'}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-2.5 py-1 rounded-md bg-slate-900 border border-white/10 text-teal-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="flex justify-end pt-2 border-t border-white/10">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs transition-colors shadow-lg shadow-teal-500/20"
                >
                  {projectsT.closeModal}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

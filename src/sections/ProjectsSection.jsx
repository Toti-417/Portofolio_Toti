import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import EditableText from '../components/EditableText'

const styles = [
  { accent: 'from-teal-500/20 via-cyan-500/10 to-transparent', border: 'border-teal-500/30' },
  { accent: 'from-blue-500/20 via-indigo-500/10 to-transparent', border: 'border-blue-500/30' },
  { accent: 'from-amber-500/20 via-orange-500/10 to-transparent', border: 'border-amber-500/30' },
]

export default function ProjectsSection() {
  const { t } = useLanguage()
  const projectsT = t.projects
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-teal-400 font-mono text-xs">
          <EditableText path="projects.badge" value={projectsT.badge} />
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
          <EditableText path="projects.titleStart" value={projectsT.titleStart} />{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-400">
            <EditableText path="projects.titleEnd" value={projectsT.titleEnd} />
          </span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          <EditableText path="projects.subtitle" value={projectsT.subtitle} multiline />
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {projectsT.items.map((project, idx) => {
          const styleObj = styles[idx] || styles[0]
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className={`glass-card glass-card-hover rounded-2xl p-6 border ${styleObj.border} bg-gradient-to-b ${styleObj.accent} flex flex-col justify-between relative group`}
            >
              <div>
                {/* Category pill */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-teal-400 bg-teal-500/10 px-2.5 py-1 rounded border border-teal-500/20">
                    {project.category}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">PROJ-0{idx + 1}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-teal-300 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Impact Callout */}
                <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5 mb-5">
                  <span className="text-[11px] font-semibold text-amber-400 block mb-0.5">{projectsT.impactLabel}</span>
                  <span className="text-xs text-slate-300">{project.impact}</span>
                </div>
              </div>

              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-mono px-2.5 py-1 rounded bg-slate-900 border border-white/10 text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Button */}
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/10 hover:border-teal-500/40 text-xs font-medium text-slate-200 transition-all flex items-center justify-center gap-2 group-hover:text-teal-300"
                >
                  <span>{projectsT.viewDetails}</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </button>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[200] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0b0f1f] border border-teal-500/30 rounded-2xl p-6 sm:p-8 max-w-xl w-full shadow-2xl space-y-6"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="text-xs font-mono text-teal-400">{selectedProject.category}</span>
                  <h3 className="text-xl font-bold text-slate-100 mt-1">{selectedProject.title}</h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
                >
                  ✕
                </button>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-teal-500/20">
                <h4 className="text-xs font-mono text-teal-300 font-semibold mb-1">{projectsT.modalTitle}</h4>
                <p className="text-sm text-slate-200">{selectedProject.impact}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {selectedProject.metrics.map((m, i) => (
                  <div key={i} className="p-3 rounded-lg bg-slate-900 border border-white/5 text-center">
                    <span className="text-[11px] text-slate-400 font-mono block">{m.label}</span>
                    <span className="text-base font-bold text-amber-400 mt-0.5 block">{m.val}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-end pt-2">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2 rounded-xl bg-teal-500 text-slate-950 font-semibold text-xs"
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

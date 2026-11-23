import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import EditableText from '../components/EditableText'

const icons = ['📊', '⚙️', '📡', '🏗️']
const colors = [
  { gradient: 'from-teal-500/20 to-teal-500/5', border: 'border-teal-500/30', tag: 'text-teal-300 bg-teal-500/10 border-teal-500/20' },
  { gradient: 'from-blue-500/20 to-blue-500/5', border: 'border-blue-500/30', tag: 'text-blue-300 bg-blue-500/10 border-blue-500/20' },
  { gradient: 'from-amber-500/20 to-amber-500/5', border: 'border-amber-500/30', tag: 'text-amber-300 bg-amber-500/10 border-amber-500/20' },
  { gradient: 'from-emerald-500/20 to-emerald-500/5', border: 'border-emerald-500/30', tag: 'text-emerald-300 bg-emerald-500/10 border-emerald-500/20' },
]

function SkillVisual({ name }) {
  if (!name) return null
  const norm = name.toLowerCase().trim()

  // 1. Power BI
  if (norm.includes('power bi')) {
    return <img src="/icon/Power BI.png" alt={name} className="w-5 h-5 object-contain rounded shrink-0" />
  }

  // 2. Python
  if (norm.includes('python') || norm.includes('pyhton')) {
    return <img src="/icon/pyhton.png" alt={name} className="w-5 h-5 object-contain rounded shrink-0" />
  }

  // 3. Excel & Business Modeling
  if (norm.includes('excel')) {
    return (
      <div className="w-5 h-5 rounded bg-emerald-600/20 border border-emerald-500/40 flex items-center justify-center shrink-0">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="8" y1="13" x2="16" y2="13"></line>
          <line x1="8" y1="17" x2="16" y2="17"></line>
          <line x1="10" y1="9" x2="8" y2="9"></line>
        </svg>
      </div>
    )
  }

  // 4. MySQL / Relational Database
  if (norm.includes('mysql') || norm.includes('my sql') || (norm.includes('data') && !norm.includes('gis') && !norm.includes('python') && !norm.includes('excel'))) {
    return <img src="/icon/my sql.png" alt={name} className="w-5 h-5 object-contain rounded shrink-0" />
  }

  // 5. GIS / Spatial Mapping
  if (norm.includes('gis') || norm.includes('spatial') || norm.includes('spasial') || norm.includes('pemetaan')) {
    return (
      <div className="w-5 h-5 rounded bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center shrink-0">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#22d3ee" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"></polygon>
          <line x1="8" y1="2" x2="8" y2="18"></line>
          <line x1="16" y1="6" x2="16" y2="22"></line>
        </svg>
      </div>
    )
  }

  // 6. JavaScript / Node.js
  if (norm.includes('javascript') || norm.includes('node') || norm.includes('api') || norm.includes('rest')) {
    return <img src="/icon/java scrip.png" alt={name} className="w-5 h-5 object-contain rounded shrink-0" />
  }

  // 7. N8N
  if (norm.includes('n8n')) {
    return <img src="/icon/N8N.png" alt={name} className="w-5 h-5 object-contain rounded shrink-0" />
  }

  // 8. Power Automate
  if (norm.includes('power automate')) {
    return <img src="/icon/power Automate.png" alt={name} className="w-5 h-5 object-contain rounded shrink-0" />
  }

  // 9. AI & LLM Pipelines
  if (norm.includes('ai') || norm.includes('llm') || norm.includes('pipeline') || norm.includes('agen')) {
    return (
      <div className="w-5 h-5 rounded bg-purple-500/20 border border-purple-400/40 flex items-center justify-center shrink-0">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#c084fc" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
        </svg>
      </div>
    )
  }

  // 10. Linux / PM2 / Docker / Shell
  if (norm.includes('linux') || norm.includes('pm2') || norm.includes('docker') || norm.includes('bash') || norm.includes('shell')) {
    return (
      <div className="w-5 h-5 rounded bg-amber-500/20 border border-amber-400/40 flex items-center justify-center shrink-0">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="4 17 10 11 4 5"></polyline>
          <line x1="12" y1="19" x2="20" y2="19"></line>
        </svg>
      </div>
    )
  }

  // 11. Telecom / BTS / Huawei / RAN / RF
  if (norm.includes('bts') || norm.includes('huawei') || norm.includes('ran') || norm.includes('rf') || norm.includes('ret') || norm.includes('telecom') || norm.includes('telekomunikasi') || norm.includes('kpi') || norm.includes('spektrum')) {
    return <img src="/icon/BTS/telekomunikasi.png" alt={name} className="w-5 h-5 object-contain rounded shrink-0" />
  }

  // 12. Fiber Optics & Backhaul
  if (norm.includes('fiber') || norm.includes('optik') || norm.includes('olt') || norm.includes('transmisi')) {
    return (
      <div className="w-5 h-5 rounded bg-teal-500/20 border border-teal-400/40 flex items-center justify-center shrink-0">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="2" x2="12" y2="22"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
      </div>
    )
  }

  // 13. SPMS / CRQ / Budget / Vendor / Governance
  if (norm.includes('spms') || norm.includes('crq') || norm.includes('budget') || norm.includes('anggaran') || norm.includes('vendor') || norm.includes('sla') || norm.includes('leadership') || norm.includes('koordinasi')) {
    return <img src="/icon/icon ranking.png" alt={name} className="w-5 h-5 object-contain rounded shrink-0" />
  }

  // 14. AutoCAD / Dossier / K3 Site
  if (norm.includes('autocad') || norm.includes('dossier') || norm.includes('k3') || norm.includes('safety') || norm.includes('dokumen')) {
    return (
      <div className="w-5 h-5 rounded bg-blue-500/20 border border-blue-400/40 flex items-center justify-center shrink-0">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="3" y1="9" x2="21" y2="9"></line>
          <line x1="9" y1="21" x2="9" y2="9"></line>
        </svg>
      </div>
    )
  }

  // Fallback
  return <img src="/icon/icon data.png" alt={name} className="w-5 h-5 object-contain rounded shrink-0" />
}

export default function SkillsSection() {
  const { t } = useLanguage()
  const skillsT = t.skills

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-teal-400 font-mono text-xs">
          <EditableText path="skills.badge" value={skillsT.badge} />
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
          <EditableText path="skills.titleStart" value={skillsT.titleStart} />{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-400 to-blue-400">
            <EditableText path="skills.titleEnd" value={skillsT.titleEnd} />
          </span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          <EditableText path="skills.subtitle" value={skillsT.subtitle} multiline />
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillsT.categories.map((cat, idx) => {
          const colorObj = colors[idx] || colors[0]
          return (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`glass-card glass-card-hover rounded-2xl p-6 border ${colorObj.border} bg-gradient-to-br ${colorObj.gradient} relative overflow-hidden`}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{icons[idx]}</span>
                  <h3 className="text-lg font-bold text-slate-100">
                    <EditableText path={`skills.categories.${idx}.title`} value={cat.title} />
                  </h3>
                </div>
                <span className="text-xs text-slate-400 font-mono">0{idx + 1}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {cat.skills.map((skill, sIdx) => {
                  return (
                    <div
                      key={skill.name}
                      className="p-2.5 sm:p-3 rounded-xl bg-slate-950/60 border border-white/5 flex items-center justify-between hover:border-teal-500/30 transition-all min-h-[52px] group/item"
                    >
                      <div className="flex items-center gap-2 sm:gap-2.5 min-w-0 flex-1 mr-2">
                        <SkillVisual name={skill.name} />
                        <span className="text-xs sm:text-[13px] font-medium text-slate-200 leading-snug break-words group-hover/item:text-teal-300 transition-colors">
                          <EditableText path={`skills.categories.${idx}.skills.${sIdx}.name`} value={skill.name} />
                        </span>
                      </div>
                      <span className={`text-[10px] sm:text-[11px] px-2 py-0.5 rounded font-mono shrink-0 self-center ${colorObj.tag}`}>
                        <EditableText path={`skills.categories.${idx}.skills.${sIdx}.tag`} value={skill.tag} />
                      </span>
                    </div>
                  )
                })}
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

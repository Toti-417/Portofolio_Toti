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

const getSkillIcon = (name) => {
  if (!name) return null
  const norm = name.toLowerCase().trim()
  if (norm.includes('power bi')) return '/icon/Power BI.png'
  if (norm.includes('mysql') || norm.includes('my sql') || norm.includes('data')) return '/icon/my sql.png'
  if (norm.includes('python') || norm.includes('pyhton')) return '/icon/pyhton.png'
  if (norm.includes('javascript') || norm.includes('java script') || norm.includes('node') || norm.includes('api') || norm.includes('socket')) return '/icon/java scrip.png'
  if (norm.includes('n8n')) return '/icon/N8N.png'
  if (norm.includes('power automate')) return '/icon/power Automate.png'
  if (norm.includes('ai') || norm.includes('llm') || norm.includes('agen')) return '/icon/icon data.png'
  if (norm.includes('linux') || norm.includes('pm2') || norm.includes('gis') || norm.includes('leaflet') || norm.includes('spasial')) return '/icon/icon data.png'
  if (norm.includes('google workspace')) return '/icon/google workspace.png'
  if (norm.includes('sap')) return '/icon/SAP.png'
  if (norm.includes('bts') || norm.includes('telecom') || norm.includes('telekomunikasi') || norm.includes('huawei') || norm.includes('ran') || norm.includes('rf') || norm.includes('ret') || norm.includes('prb') || norm.includes('spektrum')) return '/icon/BTS/telekomunikasi.png'
  if (norm.includes('spms') || norm.includes('crq') || norm.includes('budget') || norm.includes('anggaran') || norm.includes('vendor') || norm.includes('sla')) return '/icon/icon ranking.png'
  if (norm.includes('eatp') || norm.includes('acceptance') || norm.includes('autocad') || norm.includes('visio') || norm.includes('dossier')) return '/icon/icon data.png'
  return '/icon/icon data.png'
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
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-400">
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
                  const skillIcon = getSkillIcon(skill.name)
                  return (
                    <div
                      key={skill.name}
                      className="p-2.5 sm:p-3 rounded-xl bg-slate-950/60 border border-white/5 flex items-center justify-between hover:border-white/20 transition-colors min-h-[52px]"
                    >
                      <div className="flex items-center gap-2 sm:gap-2.5 min-w-0 flex-1 mr-2">
                        {skillIcon && (
                          <img
                            src={skillIcon}
                            alt={skill.name}
                            className="w-5 h-5 object-contain rounded flex-shrink-0"
                          />
                        )}
                        <span className="text-xs sm:text-[13px] font-medium text-slate-200 leading-snug break-words">
                          <EditableText path={`skills.categories.${idx}.skills.${sIdx}.name`} value={skill.name} />
                        </span>
                      </div>
                      <span className={`text-[10px] sm:text-[11px] px-2 py-0.5 rounded font-mono flex-shrink-0 self-center ${colorObj.tag}`}>
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



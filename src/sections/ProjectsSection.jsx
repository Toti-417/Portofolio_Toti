import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import EditableText from '../components/EditableText'
import ProjectArchitectureDiagram from '../components/ProjectDiagrams'

const styles = [
  { accent: 'from-teal-500/20 via-cyan-500/10 to-transparent', border: 'border-teal-500/40', glow: 'hover:shadow-teal-500/20' },
  { accent: 'from-blue-500/20 via-indigo-500/10 to-transparent', border: 'border-blue-500/40', glow: 'hover:shadow-blue-500/20' },
  { accent: 'from-purple-500/20 via-pink-500/10 to-transparent', border: 'border-purple-500/40', glow: 'hover:shadow-purple-500/20' },
  { accent: 'from-emerald-500/20 via-teal-500/10 to-transparent', border: 'border-emerald-500/40', glow: 'hover:shadow-emerald-500/20' },
  { accent: 'from-amber-500/20 via-orange-500/10 to-transparent', border: 'border-amber-500/40', glow: 'hover:shadow-amber-500/20' },
  { accent: 'from-rose-500/20 via-red-500/10 to-transparent', border: 'border-rose-500/40', glow: 'hover:shadow-rose-500/20' },
  { accent: 'from-cyan-500/20 via-teal-500/10 to-transparent', border: 'border-cyan-500/40', glow: 'hover:shadow-cyan-500/20' },
]

const WEB3_PROJECTS = [
  {
    id: 'web3-support-copilot',
    category: 'Web3 Technical Support & CX',
    title: 'Web3 Support Copilot (Coinbase Design System)',
    descriptionId:
      'Copilot diagnosa transaksi on-chain otomatis untuk agen Technical Support L1/L2. Mampu menganalisa kegagalan transaksi (Out of Gas, Slippage Exceeded, Nonce Gap, TPU Drop), visualisasi latensi RPC real-time, dan generator tiket Zendesk/Discord dalam hitungan detik.',
    descriptionEn:
      'Automated on-chain transaction failure diagnostic copilot for L1/L2 Technical Support & CX engineers. Decodes Out-of-Gas, Slippage, Nonce Gaps, and Solana TPU drops, featuring real-time RPC telemetry and an omnichannel Zendesk/Discord response generator.',
    dashboardPurposeId:
      'Memfasilitasi tim support Web3 untuk mendiagnosa kegagalan transaksi pengguna secara instan tanpa perlu membaca raw hex bytecode secara manual, lalu menyusun balasan yang jelas dan menenangkan bagi user.',
    dashboardPurposeEn:
      'Enables Web3 support engineers to triage user transaction failures in real time without manually deciphering raw hex bytecode, auto-generating empathetic and technically accurate omnichannel replies.',
    impactId: 'Memangkas waktu triage insiden user dari 15 menit menjadi < 30 detik dengan penjelasan non-teknis yang ramah pengguna.',
    impactEn: 'Reduces user transaction incident triage time from 15 mins to < 30 secs with user-friendly omnichannel response generation.',
    tags: ['React', 'Coinbase Theme', 'On-Chain Diagnostics', 'Zendesk Copilot', 'EVM & Solana', 'Bispro Architecture'],
    liveUrl: 'https://web3-support-copilot.vercel.app',
    repoUrl: 'https://github.com/Toti-417/web3-support-copilot',
    metrics: [
      { label: 'Triage Time', val: '< 30 Detik' },
      { label: 'Incident Types', val: '4 Categories' },
      { label: 'Supported Chains', val: 'EVM & Solana' },
      { label: 'SLA Improvement', val: '95% Faster' }
    ]
  },
  {
    id: 'crosschain-reconciliation-portal',
    category: 'Exchange Settlement & Recovery',
    title: 'Cross-Chain Reconciliation Portal (Binance Ops Standard)',
    descriptionId:
      'Portal audit dan rekonsiliasi deposit exchange untuk menangani Missing Memo/Tag (TRON USDT, TON, XRP), salah chain, dan wrong-token recovery. Dilengkapi verifikasi tanda tangan kriptografi EIP-712 dan export CSV audit harian.',
    descriptionEn:
      'Institutional deposit reconciliation portal resolving Missing Memo/Tag incidents (TRON USDT, TON, XRP) and wrong-chain sweeps. Features EIP-712 cryptographic ownership signature verification and automated daily CSV settlement export.',
    dashboardPurposeId:
      'Memverifikasi kepemilikan dana deposit nyasar secara non-custodial via tanda tangan digital EIP-712 tanpa mengekspos private key exchange, lalu mengeksekusi sweep dana ke balance pengguna.',
    dashboardPurposeEn:
      'Verifies ownership of misdirected exchange deposits non-custodially via EIP-712 structured cryptographic signatures without hot wallet private key exposure, streamlining recovery sweeps.',
    impactId: 'Otomatisasi pemulihan dana deposit nyasar dengan verifikasi kriptografis tanpa mengekspos private key exchange.',
    impactEn: 'Automates misrouted deposit recovery with tamper-proof cryptographic ownership verification without hot wallet exposure.',
    tags: ['React', 'Binance Ops Standard', 'Missing Memo Recovery', 'EIP-712 Signatures', 'TRON/TON/XRP', 'Audit Trail'],
    liveUrl: 'https://crosschain-reconciliation-portal.vercel.app',
    repoUrl: 'https://github.com/Toti-417/crosschain-reconciliation-portal',
    metrics: [
      { label: 'Signatures', val: 'EIP-712 Verified' },
      { label: 'Supported Networks', val: 'TRON / TON / XRP' },
      { label: 'Recovery Speed', val: '< 60 Detik' },
      { label: 'Audit Trail', val: '100% Immutable' }
    ]
  },
  {
    id: 'rpc-node-sentinel',
    category: 'SRE & Node Telemetry',
    title: 'RPC Node Sentinel & Drift Monitor (Linear/Datadog Theme)',
    descriptionId:
      'Sistem pemantauan keandalan node RPC multi-chain (Alchemy, Infura, QuickNode, Ankr, Helius) dengan deteksi block drift/head desync, visualisasi live packet waveform, dan webhook incident dispatcher (Discord/Telegram/PagerDuty).',
    descriptionEn:
      'Multi-chain RPC latency benchmarking and block drift monitoring system across 6 major providers (Alchemy, Infura, QuickNode, Ankr, Helius) with live waveform packet visualizer and webhook incident dispatcher.',
    dashboardPurposeId:
      'Menjaga ketersediaan dApp dengan menguji desinkronisasi block head validator secara berkelanjutan dan memicu auto-failover sebelum transaksi user mengalami drop.',
    dashboardPurposeEn:
      'Guarantees dApp SLA by continuously polling validator head desync across 6 RPC providers, triggering automated webhook failovers before transaction dropped spikes occur.',
    impactId: 'Mendeteksi desinkronisasi node validator dan memicu auto-failover sebelum terjadi kegagalan transaksi massal pada dApp.',
    impactEn: 'Detects validator head desync in under 400ms and triggers automatic webhook alerts to prevent user-facing dApp transaction drops.',
    tags: ['React', 'Linear/Datadog SRE', 'RPC Benchmarking', 'Block Drift Detector', 'Packet Stream', 'Webhook Dispatcher'],
    liveUrl: 'https://rpc-node-sentinel.vercel.app',
    repoUrl: 'https://github.com/Toti-417/rpc-node-sentinel',
    metrics: [
      { label: 'Desync Threshold', val: '< 400 ms' },
      { label: 'Target Providers', val: '6 Endpoints' },
      { label: 'Failover Mode', val: 'Automated' },
      { label: 'Telemetry Stream', val: 'Live Waveform' }
    ]
  },
  {
    id: 'web3-telemetry-tracker',
    category: 'Web3 Telemetry & Data',
    title: 'Web3 Multi-Chain Telemetry & Whale Radar (Chainlink Terminal)',
    descriptionId:
      'Dashboard pemantauan node JSON-RPC real-time lintas Solana Mainnet (~2,800+ TPS), Base L2, dan Ethereum Mainnet, dilengkapi radar transaksi whale (> $100k USD), filter multi-kriteria, dan export data audit CSV/JSON.',
    descriptionEn:
      'Real-time JSON-RPC node telemetry dashboard across Solana Mainnet (~2,800+ TPS), Base L2, and Ethereum Mainnet with a live Whale Transaction Alert Radar (> $100k USD), multi-criteria filters, and CSV/JSON export.',
    dashboardPurposeId:
      'Mendeteksi pergerakan likuiditas besar (whale) dan anomali throughput jaringan secara zero-backend langsung dari node RPC edge browser.',
    dashboardPurposeEn:
      'Monitors high-value whale movements and on-chain throughput anomalies across Solana, Base, and ETH via client-side zero-backend edge telemetry.',
    impactId: 'Zero-backend edge telemetry menghubungkan metodologi KPI telekomunikasi dengan monitoring blockchain real-time.',
    impactEn: 'Zero-backend edge telemetry bridging telecom KPI auditing methodologies with live multi-chain blockchain monitoring.',
    tags: ['React', 'Chainlink Terminal', 'JSON-RPC', 'Whale Radar', 'Solana', 'Base L2', 'CSV/JSON Export'],
    liveUrl: 'https://web3-telemetry-tracker.vercel.app',
    repoUrl: 'https://github.com/Toti-417/web3-telemetry-tracker',
    metrics: [
      { label: 'Ingestion TPS', val: '~2,800+ TPS' },
      { label: 'Whale Threshold', val: '> $100k USD' },
      { label: 'Chains Monitored', val: 'Solana, Base, ETH' },
      { label: 'Architecture', val: 'Zero-Backend Edge' }
    ]
  },
  {
    id: 'onchain-kyt-investigator',
    category: 'AML, KYT & Forensics',
    title: 'On-Chain KYT & Asset Recovery (Chainalysis Forensics Theme)',
    descriptionId:
      'Engine investigasi AML/KYT dan asset recovery untuk melacak aliran dana wallet EVM (Ethereum/Base) & Solana via Blockscout API & JSON-RPC, lengkap dengan Risk Score (0–100), flag mixer/darknet, dan export Compliance Dossier.',
    descriptionEn:
      'AML/KYT & asset recovery investigation dashboard querying Blockscout API & Solana JSON-RPC for automated Risk Scoring (0–100), mixer/OFAC red-flag detection, and official Compliance Case Dossier export.',
    dashboardPurposeId:
      'Menyediakan investigasi forensik on-chain dan penelusuran aliran dana lintas kontrak pintar untuk kepatuhan AML/KYT serta penyusunan berkas bukti bagi penegak hukum.',
    dashboardPurposeEn:
      'Performs on-chain forensic investigations and multi-hop fund tracing across smart contracts for AML/KYT regulatory compliance and law enforcement dossier filing.',
    impactId: 'Otomatisasi triage kepatuhan on-chain & export laporan audit PDF/JSON dalam hitungan detik.',
    impactEn: 'Automates on-chain compliance triage and one-click PDF/JSON audit dossier generation.',
    tags: ['React', 'Chainalysis Forensics', 'Blockscout API', 'KYT/AML', 'OFAC Screening', 'Compliance Dossier'],
    liveUrl: 'https://onchain-kyt-investigator.vercel.app',
    repoUrl: 'https://github.com/Toti-417/onchain-kyt-investigator',
    metrics: [
      { label: 'Risk Scoring', val: '0–100 Matrix' },
      { label: 'Sanctions DB', val: 'OFAC & Mixers' },
      { label: 'Graph Traversal', val: 'Multi-Hop' },
      { label: 'Compliance Dossier', val: 'PDF & JSON' }
    ]
  },
  {
    id: 'web3-ops-incident-console',
    category: 'Protocol Incident Operations',
    title: 'Web3 Protocol Support & Incident Triage (Uniswap Ops Console)',
    descriptionId:
      'Konsol support engineering untuk cek latensi/kesehatan RPC real-time, debug transaksi gagal/revert on-chain, serta generator balasan user (Zendesk / Discord / Jira) dan escalation ticket lintas chain.',
    descriptionEn:
      'Support engineering console with live RPC latency monitoring, on-chain failed/revert TX debugging, and one-click omnichannel user replies (Zendesk/Discord) & Jira engineering escalation generation.',
    dashboardPurposeId:
      'Memantau kesehatan swap pool protokol DEX, menganalisa string error revert transaksi, dan melacak SLA penyelesaian insiden secara real-time.',
    dashboardPurposeEn:
      'Monitors DEX liquidity pool health, decodes custom revert strings, and tracks incident resolution SLA timers with automated ticketing.',
    impactId: 'Mempercepat troubleshooting insiden TX user dan eskalasi tim engineering lintas chain.',
    impactEn: 'Accelerates user TX incident troubleshooting and cross-chain engineering escalation.',
    tags: ['React', 'Uniswap Ops Theme', 'RPC Health', 'TX Debugger', 'Omnichannel Copilot', 'SLA Tracking'],
    liveUrl: 'https://web3-ops-incident-console.vercel.app',
    repoUrl: 'https://github.com/Toti-417/web3-ops-incident-console',
    metrics: [
      { label: 'SLA Response', val: '< 5 Menit' },
      { label: 'Protocol Coverage', val: 'Uniswap v3 Pools' },
      { label: 'Revert Decoder', val: 'Bytecode STF' },
      { label: 'Escalations', val: 'Jira & Zendesk' }
    ]
  }
]

export default function ProjectsSection() {
  const { t, lang } = useLanguage()
  const projectsT = t.projects
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeImageTab, setActiveImageTab] = useState('diagram') // 'primary' | 'secondary' | 'diagram'
  const [projectCategory, setProjectCategory] = useState('all') // 'all' | 'non-web3' | 'web3'

  const openProject = (project, defaultTab = 'primary') => {
    setSelectedProject(project)
    // If project has no screenshot, default to diagram
    if (!project.image && defaultTab === 'primary') {
      setActiveImageTab('diagram')
    } else {
      setActiveImageTab(defaultTab)
    }
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

        {/* Category Filter Tabs (Non-Web3 vs Web3) */}
        <div className="pt-4 flex flex-wrap items-center justify-center gap-2">
          {[
            { id: 'all', label: lang === 'id' ? 'Semua Proyek' : 'All Projects' },
            { id: 'non-web3', label: lang === 'id' ? 'Profesional (Non-Web3)' : 'Professional (Non-Web3)' },
            { id: 'web3', label: 'Web3 & On-Chain' }
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setProjectCategory(tab.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-mono transition-all border ${
                projectCategory === tab.id
                  ? 'bg-teal-500/20 border-teal-400 text-teal-300 font-bold shadow-sm'
                  : 'bg-slate-900/70 border-white/10 text-slate-400 hover:text-white hover:border-white/25'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Section 1: Professional Non-Web3 Projects */}
      {(projectCategory === 'all' || projectCategory === 'non-web3') && (
        <div className={projectCategory === 'all' ? 'mb-16' : ''}>
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-7">
            <h3 className="text-lg sm:text-xl font-bold text-slate-100 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-teal-400"></span>
              {lang === 'id' ? 'Proyek Profesional — Telecom, Data & Automation (Non-Web3)' : 'Professional Projects — Telecom, Data & Automation (Non-Web3)'}
            </h3>
            <span className="text-xs font-mono text-slate-400">{projectsT.items.length} Projects</span>
          </div>

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
                    <div className="flex items-center justify-between mb-3.5">
                      <span className="text-[11px] font-mono text-teal-300 bg-teal-500/10 px-2.5 py-1 rounded-md border border-teal-500/30">
                        {project.category}
                      </span>
                      <span className="text-[11px] text-slate-400 font-mono">
                        PROJ-0{idx + 1}
                      </span>
                    </div>

                    {project.image ? (
                      <div
                        onClick={() => openProject(project, 'primary')}
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

                    <h3 className="text-lg font-bold text-slate-100 mb-2.5 group-hover:text-teal-300 transition-colors line-clamp-2">
                      {project.title}
                    </h3>

                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3">
                      {project.description}
                    </p>

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

                    <div className="flex gap-2">
                      <button
                        onClick={() => openProject(project, 'primary')}
                        className="flex-1 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/10 hover:border-teal-500/40 text-xs font-medium text-slate-200 transition-all flex items-center justify-center gap-1.5 group-hover:text-teal-300 shadow-sm"
                      >
                        <span>{project.image ? (lang === 'id' ? 'Bukti & Detail' : 'Proof & Details') : projectsT.viewDetails}</span>
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </button>
                      <button
                        onClick={() => openProject(project, 'diagram')}
                        className="px-3.5 py-2.5 rounded-xl bg-teal-500/10 hover:bg-teal-500/20 border border-teal-500/30 text-xs font-mono text-teal-300 transition-all flex items-center justify-center gap-1.5 shadow-sm"
                        title={lang === 'id' ? 'Lihat Diagram Arsitektur & Alur Data' : 'View Architecture & Data Flow Diagram'}
                      >
                        <span>📐</span>
                        <span className="font-semibold">Diagram</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      )}

      {/* Section 2: Web3 & On-Chain Projects */}
      {(projectCategory === 'all' || projectCategory === 'web3') && (
        <div>
          <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-7">
            <h3 className="text-lg sm:text-xl font-bold text-slate-100 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-purple-400"></span>
              {lang === 'id' ? 'Proyek Web3 — On-Chain Telemetry, KYT & Incident Ops' : 'Web3 Projects — On-Chain Telemetry, KYT & Incident Ops'}
            </h3>
            <span className="text-xs font-mono text-purple-300">{WEB3_PROJECTS.length} Live Apps</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WEB3_PROJECTS.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card glass-card-hover rounded-2xl p-5 border border-purple-500/40 bg-gradient-to-b from-purple-500/15 via-cyan-500/5 to-transparent flex flex-col justify-between relative group hover:shadow-xl transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <span className="text-[11px] font-mono text-purple-300 bg-purple-500/10 px-2.5 py-1 rounded-md border border-purple-500/30">
                      {project.category}
                    </span>
                    <span className="text-[11px] text-emerald-400 font-mono flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      LIVE
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-100 mb-2.5 group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                    {lang === 'id' ? project.descriptionId : project.descriptionEn}
                  </p>

                  <div className="p-3 rounded-xl bg-slate-950/60 border border-white/5 mb-4">
                    <span className="text-[11px] font-semibold text-teal-400 block mb-0.5">
                      {projectsT.impactLabel}
                    </span>
                    <span className="text-xs text-slate-300">
                      {lang === 'id' ? project.impactId : project.impactEn}
                    </span>
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.slice(0, 5).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-white/10 text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-2">
                    {/* View Diagram Button */}
                    <button
                      onClick={() => openProject(project, 'diagram')}
                      className="w-full py-2.5 rounded-xl bg-purple-500/20 hover:bg-purple-500/30 border border-purple-400/50 text-xs font-semibold text-purple-200 transition-all flex items-center justify-center gap-2 group-hover:text-purple-100 shadow-sm"
                    >
                      <span>📐</span>
                      <span>{lang === 'id' ? 'Lihat Arsitektur & Alur Data' : 'View Architecture & Data Flow'}</span>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                      </svg>
                    </button>

                    <div className="flex gap-2">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/10 hover:border-teal-500/40 text-xs font-semibold text-slate-200 transition-all flex items-center justify-center gap-1.5"
                      >
                        <span>{lang === 'id' ? 'Buka Live App' : 'Open Live App'}</span>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                      </a>
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/10 text-xs font-mono text-slate-300 transition-all flex items-center justify-center"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Project Detail Modal with Dashboard Screenshot Proof & Architecture Diagrams */}
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
              className="bg-[#0b0f1f] border border-teal-500/40 rounded-2xl p-5 sm:p-7 max-w-4xl w-full shadow-2xl space-y-5 my-auto max-h-[94vh] overflow-y-auto"
            >
              {/* Modal Header */}
              <div className="flex items-start justify-between border-b border-white/10 pb-4">
                <div className="pr-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-teal-400 bg-teal-500/10 px-2.5 py-0.5 rounded border border-teal-500/30">
                      {selectedProject.category}
                    </span>
                    <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded border border-emerald-500/30 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      {lang === 'id' ? 'Arsitektur Terverifikasi' : 'Verified Architecture'}
                    </span>
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

              {/* View Switcher Tabs: Screenshot(s) vs Architecture Diagram */}
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2 bg-slate-900/90 p-1.5 rounded-xl border border-white/10">
                  {selectedProject.image && (
                    <button
                      onClick={() => setActiveImageTab('primary')}
                      className={`flex-1 min-w-[130px] py-1.5 px-3 rounded-lg text-xs font-mono transition-all flex items-center justify-center gap-1.5 ${
                        activeImageTab === 'primary'
                          ? 'bg-teal-500 text-slate-950 font-bold shadow-md'
                          : 'text-slate-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <span>📷</span>
                      <span>{selectedProject.imageLabel || (lang === 'id' ? 'Tampilan 1: Screenshot' : 'View 1: Screenshot')}</span>
                    </button>
                  )}

                  {selectedProject.secondaryImage && (
                    <button
                      onClick={() => setActiveImageTab('secondary')}
                      className={`flex-1 min-w-[130px] py-1.5 px-3 rounded-lg text-xs font-mono transition-all flex items-center justify-center gap-1.5 ${
                        activeImageTab === 'secondary'
                          ? 'bg-teal-500 text-slate-950 font-bold shadow-md'
                          : 'text-slate-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <span>📊</span>
                      <span>{selectedProject.secondaryImageLabel || (lang === 'id' ? 'Tampilan 2: Matrix' : 'View 2: Matrix')}</span>
                    </button>
                  )}

                  {/* Architecture Diagram Tab (Universal for ALL projects) */}
                  <button
                    onClick={() => setActiveImageTab('diagram')}
                    className={`flex-1 min-w-[170px] py-1.5 px-3 rounded-lg text-xs font-mono transition-all flex items-center justify-center gap-1.5 ${
                      activeImageTab === 'diagram'
                        ? 'bg-gradient-to-r from-teal-400 via-cyan-400 to-purple-400 text-slate-950 font-bold shadow-md'
                        : 'text-teal-300 hover:text-white hover:bg-white/5 border border-teal-500/20'
                    }`}
                  >
                    <span>📐</span>
                    <span>{lang === 'id' ? 'Arsitektur & Alur Data' : 'Architecture & Data Flow'}</span>
                  </button>
                </div>

                {/* Main Media Content Display */}
                {activeImageTab === 'diagram' ? (
                  <ProjectArchitectureDiagram projectId={selectedProject.id} lang={lang} />
                ) : selectedProject.image ? (
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
                ) : (
                  <ProjectArchitectureDiagram projectId={selectedProject.id} lang={lang} />
                )}
              </div>

              {/* Purpose & Operational Explanation */}
              {(selectedProject.dashboardPurpose || selectedProject.dashboardPurposeId || selectedProject.dashboardPurposeEn) && (
                <div className="p-4 rounded-xl bg-gradient-to-r from-teal-950/40 via-slate-900 to-slate-900 border border-teal-500/30">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-teal-400">💡</span>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-teal-300 font-bold">
                      {lang === 'id' ? 'Fungsi & Peruntukan Arsitektur Sistem:' : 'Architecture Functionality & Operational Purpose:'}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                    {selectedProject.dashboardPurpose ||
                      (lang === 'id' ? selectedProject.dashboardPurposeId : selectedProject.dashboardPurposeEn)}
                  </p>
                </div>
              )}

              {/* Technical Description */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-1.5">
                  {lang === 'id' ? 'Deskripsi Teknis Proyek:' : 'Technical Project Description:'}
                </h4>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {selectedProject.description ||
                    (lang === 'id' ? selectedProject.descriptionId : selectedProject.descriptionEn)}
                </p>
              </div>

              {/* Measurable Impact Callout */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-amber-500/30">
                <h4 className="text-xs font-mono text-amber-400 font-semibold mb-1">
                  {projectsT.modalTitle}
                </h4>
                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {selectedProject.impact ||
                    (lang === 'id' ? selectedProject.impactId : selectedProject.impactEn)}
                </p>
              </div>

              {/* Metrics Grid */}
              {selectedProject.metrics && selectedProject.metrics.length > 0 && (
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
              )}

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

              {/* Modal Footer with External Links & Close */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/10">
                <div className="flex items-center gap-2">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-purple-500/20 hover:bg-purple-500/30 border border-purple-400/40 text-xs font-semibold text-purple-200 transition-all flex items-center gap-1.5"
                    >
                      <span>{lang === 'id' ? 'Buka Live Web App' : 'Open Live App'}</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    </a>
                  )}
                  {selectedProject.repoUrl && (
                    <a
                      href={selectedProject.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/10 text-xs font-mono text-slate-300 transition-all flex items-center gap-1.5"
                    >
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                      <span>GitHub</span>
                    </a>
                  )}
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-2.5 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs transition-colors shadow-lg shadow-teal-500/20 ml-auto"
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

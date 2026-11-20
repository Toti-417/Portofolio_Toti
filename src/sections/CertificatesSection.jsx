import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import EditableText from '../components/EditableText'

// Comprehensive technical competency breakdown for each certificate (Bilingual: EN & ID)
const CERT_DETAILS = {
  0: { // Power BI
    code: 'MS-PBI-8842',
    image: '/certificates/cert_powerbi.png',
    issuerFull: 'Microsoft Certified Professional / Industry Standard',
    issuerFullId: 'Microsoft Certified Professional / Standar Industri',
    issuedDate: 'October 2024',
    issuedDateId: 'Oktober 2024',
    competencies: [
      'DAX Measures & Advanced Time Intelligence',
      'Star Schema Relational Data Modeling',
      'Executive Rollout KPI Dashboards',
      'Power Query M-Code Data Transformation'
    ],
    competenciesId: [
      'DAX Measures & Time Intelligence Tingkat Lanjut',
      'Pemodelan Data Relasional Skema Star',
      'Dashboard KPI Eksekutif Rollout Proyek',
      'Transformasi Data Power Query (M-Code)'
    ],
    summary: 'Demonstrated mastery in end-to-end business intelligence, multi-table telecom data warehousing, and interactive executive reporting.',
    summaryId: 'Penguasaan komprehensif dalam business intelligence end-to-end, pemodelan data pergudangan telekomunikasi multi-tabel, dan pelaporan eksekutif interaktif.'
  },
  1: { // Python Data Science
    code: 'PY-DS-5521',
    image: '/certificates/cert_python.png',
    issuerFull: 'Python Software Foundation & Industry Curriculum',
    issuerFullId: 'Python Software Foundation & Kurikulum Industri',
    issuedDate: 'August 2024',
    issuedDateId: 'Agustus 2024',
    competencies: [
      'Pandas & NumPy High-Performance Analytics',
      'Automated Data Cleaning & ETL Pipelines',
      'Statistical Hypothesis & Regression Analysis',
      'REST API Integration & JSON Parsing'
    ],
    competenciesId: [
      'Analitik Performa Tinggi dengan Pandas & NumPy',
      'Pembersihan Data Otomatis & Pipeline ETL',
      'Uji Hipotesis Statistik & Analisis Regresi',
      'Integrasi REST API & Parsing Data JSON'
    ],
    summary: 'Proficiency in data manipulation, exploratory data analysis, automation scripts, and quantitative dataset processing.',
    summaryId: 'Kemahiran dalam manipulasi data, analisis eksploratif data (EDA), otomasi skrip, dan pengolahan dataset telekomunikasi berskala besar.'
  },
  2: { // SQL HackerRank
    code: 'HR-SQL-9104',
    image: '/certificates/cert_sql.png',
    issuerFull: 'HackerRank Verified Skill Assessment',
    issuerFullId: 'HackerRank Verified Skill Assessment',
    issuedDate: 'July 2024',
    issuedDateId: 'Juli 2024',
    competencies: [
      'Complex Multi-Table INNER / LEFT JOINs',
      'Window Functions (ROW_NUMBER, RANK, DENSE_RANK)',
      'Subqueries, CTEs & Temporary Tables',
      'Index Optimization & High-Volume Query Tuning'
    ],
    competenciesId: [
      'Query Kompleks Multi-Tabel INNER / LEFT JOIN',
      'Fungsi Window (ROW_NUMBER, RANK, DENSE_RANK)',
      'Subqueries, CTEs & Tabel Sementara',
      'Optimasi Indeks & Tuning Query Skala Besar'
    ],
    summary: 'Validated proficiency in relational database querying, complex aggregations, telecom site metrics analysis, and schema query optimization.',
    summaryId: 'Keahlian terverifikasi dalam query basis data relasional, agregasi metrik performa site telekomunikasi, dan optimasi arsitektur query.'
  },
  3: { // Project Management
    code: 'PM-ENG-40B',
    image: '/certificates/cert_pm.png',
    issuerFull: 'Professional Engineering Standards / Telkomsel Scope',
    issuerFullId: 'Standar Manajemen Proyek Profesional / Lingkup Telkomsel',
    issuedDate: 'December 2023',
    issuedDateId: 'Desember 2023',
    competencies: [
      'CAPEX & OPEX Budget Allocation (IDR 40B)',
      'WBS Scheduling & Critical Path Management',
      'Vendor SLA & Subcontractor Compliance',
      'Telkomsel eATP & Site Acceptance Standards'
    ],
    competenciesId: [
      'Alokasi Anggaran CAPEX & OPEX (Hingga Rp 40 Miliar)',
      'Penjadwalan WBS & Manajemen Jalur Kritis (CPM)',
      'Kepatuhan SLA Vendor & Koordinasi Subkontraktor',
      'Standar Akseptansi Site & eATP Telkomsel'
    ],
    summary: 'Execution mastery over large-scale wireless infrastructure deployment, resource forecasting, and executive milestone governance.',
    summaryId: 'Penguasaan eksekusi proyek infrastruktur seluler berskala besar, peramalan sumber daya, dan tata kelola milestone manajemen eksekutif.'
  },
  4: { // N8N Automation
    code: 'N8N-AUTO-771',
    image: '/certificates/cert_n8n.png',
    issuerFull: 'Workflow Automation & Systems Integration',
    issuerFullId: 'Otomasi Alur Kerja & Integrasi Sistem',
    issuedDate: 'November 2024',
    issuedDateId: 'November 2024',
    competencies: [
      'Custom Webhook Listeners & Trigger Logic',
      'Multi-System API Orchestration (WhatsApp/MySQL)',
      'Fault-Tolerant Error Handling & Retry Policies',
      'Automated Telegram / Slack Event Notifiers'
    ],
    competenciesId: [
      'Custom Webhook Listeners & Logika Trigger Otomatis',
      'Orkestrasi API Multi-Sistem (WhatsApp/MySQL/Cloud)',
      'Penanganan Error Toleran & Kebijakan Retry Otomatis',
      'Notifikasi Event Otomatis Telegram & Slack'
    ],
    summary: 'Architecture and deployment of automated enterprise workflows connecting cellular monitoring nodes with instant messaging interfaces.',
    summaryId: 'Perancangan dan penerapan alur kerja otomasi enterprise yang menghubungkan node monitoring jaringan seluler dengan interface pesan instan.'
  },
  5: { // Telecom Network Assurance
    code: 'RAN-OPT-2023',
    image: '/certificates/cert_ran_assurance.png',
    issuerFull: 'Radio Access Network & Transmission Standards',
    issuerFullId: 'Standar Transmisi & Jaringan Akses Radio (RAN)',
    issuedDate: 'May 2023',
    issuedDateId: 'Mei 2023',
    competencies: [
      'RAN KPI Diagnostics (PRB, Payload, Drop Rate)',
      'RET Antenna Tilt & Azimuth Alignment Audit',
      'Balmon Spectrum Interference Spectrum Radar',
      'Fiber Optic / Microwave Backhaul Validation'
    ],
    competenciesId: [
      'Diagnostik KPI RAN (PRB, Payload, Drop Call Rate)',
      'Audit Kemiringan RET Antena & Penyelarasan Azimuth',
      'Radar Interferensi Frekuensi Balmon & Analisis Spektrum',
      'Validasi Backhaul Fiber Optik / Microwave'
    ],
    summary: 'Comprehensive competency in cellular RF spectrum optimization, base station transmission integrity, and mobile network QoS assurance.',
    summaryId: 'Kompetensi mendalam dalam optimalisasi spektrum RF seluler, integritas transmisi base station (BTS), dan jaminan kualitas layanan (QoS) jaringan seluler.'
  },
  6: { // Cisco Dasar
    code: 'LIDN-1661625797',
    image: '/certificates/cert_cisco.png',
    issuerFull: 'ID-Networkers (IDN) & Cisco Networking Academy',
    issuerFullId: 'ID-Networkers (IDN) & Kurikulum Cisco Networking Academy',
    issuedDate: 'November 2026',
    issuedDateId: 'November 2026',
    competencies: [
      'Cisco IOS Command-Line Interface (CLI)',
      'VLAN Segmentation & Trunking (802.1Q)',
      'IPv4 / IPv6 Subnetting & CIDR Addressing',
      'Static & Dynamic Routing (OSPF / RIP)',
      'Switch Port Security & Access Control Lists'
    ],
    competenciesId: [
      'Interface Baris Perintah Cisco IOS (CLI)',
      'Segmentasi VLAN & Trunking (802.1Q)',
      'Subnetting IPv4 / IPv6 & Pengalamatan CIDR',
      'Routing Statis & Dinamis (OSPF / RIP)',
      'Keamanan Port Switch & Access Control List (ACL)'
    ],
    summary: 'Validated proficiency in configuring, verifying, and troubleshooting Cisco routers and switches in enterprise network environments.',
    summaryId: 'Keahlian terverifikasi dalam konfigurasi, verifikasi, dan troubleshooting router dan switch Cisco pada lingkungan jaringan enterprise.'
  },
  7: { // MikroTik Dasar (MTCNA)
    code: 'LIDN-4701470015',
    image: '/certificates/cert_mikrotik.png',
    issuerFull: 'ID-Networkers Certified MikroTik Associate',
    issuerFullId: 'ID-Networkers Certified MikroTik Associate',
    issuedDate: 'November 2026',
    issuedDateId: 'November 2026',
    competencies: [
      'RouterOS Administration & Winbox Gateway',
      'Bandwidth Management & Simple Queues QoS',
      'Firewall Filter Rules, NAT & Mangle Rules',
      'DHCP Server, DNS Cache & Bridging Topologies',
      'Point-to-Point Wireless & Hotspot Authentication'
    ],
    competenciesId: [
      'Administrasi RouterOS & Gateway Winbox',
      'Manajemen Bandwidth & QoS Simple Queues',
      'Firewall Filter Rules, NAT & Aturan Mangle',
      'DHCP Server, DNS Cache & Topologi Bridging',
      'Wireless Point-to-Point & Otentikasi Hotspot'
    ],
    summary: 'Hands-on certification in architecting, managing, and securing ISP/enterprise edge routers with MikroTik RouterOS.',
    summaryId: 'Sertifikasi praktis dalam merancang, mengelola, dan mengamankan edge router ISP dan enterprise menggunakan MikroTik RouterOS.'
  },
  8: { // Cyber Security
    code: 'LIDN-0033078842',
    image: '/certificates/cert_cybersecurity.png',
    issuerFull: 'ID-Networkers Cyber Security Academy',
    issuerFullId: 'ID-Networkers Cyber Security Academy',
    issuedDate: 'November 2026',
    issuedDateId: 'November 2026',
    competencies: [
      'Network Vulnerability Assessment & Scanning',
      'CIA Triad & Information Security Governance',
      'Attack Vector Mitigation (DDoS, MITM, Injection)',
      'Port Hardening & Firewall Defense Strategy',
      'Security Incident Triage & Event Auditing'
    ],
    competenciesId: [
      'Pemindaian & Penilaian Kerentanan Jaringan',
      'Prinsip CIA Triad & Tata Kelola Keamanan Informasi',
      'Mitigasi Vektor Serangan (DDoS, MITM, Injection)',
      'Penguatan Port & Strategi Pertahanan Firewall',
      'Triage Insiden Keamanan & Audit Log Aktivitas'
    ],
    summary: 'Practical foundation in defensive cybersecurity, network perimeter hardening, threat identification, and vulnerability mitigation.',
    summaryId: 'Fondasi praktis dalam keamanan siber defensif, pengerasan perimeter jaringan, identifikasi ancaman, dan mitigasi kerentanan sistem.'
  },
  9: { // Linux Systems
    code: 'LIDN-6638673257',
    image: '/certificates/cert_linux.png',
    issuerFull: 'ID-Networkers Linux Systems Academy',
    issuerFullId: 'ID-Networkers Linux Systems Academy',
    issuedDate: 'November 2026',
    issuedDateId: 'November 2026',
    competencies: [
      'Linux Filesystem Hierarchy & CLI Shell',
      'User & Permission Management (chmod, chown, sudo)',
      'Systemd Daemons, Process Monitoring & Crontab',
      'Networking Configuration & SSH Key Authentication',
      'Automated Bash Shell Scripting & PM2 Services'
    ],
    competenciesId: [
      'Hirarki Filesystem Linux & Shell Bash CLI',
      'Manajemen Pengguna & Izin Akses (chmod, chown, sudo)',
      'Daemon Systemd, Pemantauan Proses & Crontab',
      'Konfigurasi Jaringan & Otentikasi Kunci SSH',
      'Otomasi Scripting Shell Bash & Layanan PM2'
    ],
    summary: 'Validated expertise in administering production Linux Ubuntu servers, configuring headless services, and maintaining background daemons.',
    summaryId: 'Keahlian teruji dalam mengadministrasikan server produksi Linux Ubuntu, konfigurasi layanan headless, dan pemeliharaan daemon background.'
  },
  10: { // Jaringan Dasar
    code: 'LIDN-2243638913',
    image: '/certificates/cert_networking.png',
    issuerFull: 'ID-Networkers Networking Research Lab',
    issuerFullId: 'ID-Networkers Networking Research Lab',
    issuedDate: 'November 2026',
    issuedDateId: 'November 2026',
    competencies: [
      'OSI 7-Layer & TCP/IP Architecture',
      'Ethernet Frame & Packet Header Analysis',
      'LAN, MAN & WAN Network Topologies',
      'Network Troubleshooting (Ping, Traceroute, ARP)',
      'Bandwidth Calculation & Quality of Service (QoS)'
    ],
    competenciesId: [
      'Arsitektur Lapisan OSI 7-Layer & TCP/IP',
      'Analisis Header Paket & Frame Ethernet',
      'Topologi Jaringan LAN, MAN & WAN',
      'Troubleshooting Jaringan (Ping, Traceroute, ARP)',
      'Perhitungan Bandwidth & Quality of Service (QoS)'
    ],
    summary: 'Fundamental mastery of computer networking theory, transport protocols, physical medium standards, and end-to-end packet transmission.',
    summaryId: 'Penguasaan fundamental teori jaringan komputer, protokol transport, standar media fisik, dan transmisi paket end-to-end.'
  },
  11: { // PNETlab
    code: 'LIDN-4113909330',
    image: '/certificates/cert_pnetlab.png',
    issuerFull: 'ID-Networkers Virtualized Infrastructure Lab',
    issuerFullId: 'ID-Networkers Virtualized Infrastructure Lab',
    issuedDate: 'November 2026',
    issuedDateId: 'November 2026',
    competencies: [
      'PNETlab / EVE-NG Server Deployment',
      'Multi-Vendor Virtual Node Integration (Cisco, MikroTik)',
      'Complex Campus & WAN Topology Emulation',
      'Live Packet Sniffing with Wireshark',
      'Pre-Deployment Proof-of-Concept Validation'
    ],
    competenciesId: [
      'Deployment Server PNETlab / EVE-NG',
      'Integrasi Node Virtual Multi-Vendor (Cisco, MikroTik)',
      'Emulasi Topologi Jaringan Kampus & WAN Skala Besar',
      'Packet Sniffing Real-Time dengan Wireshark',
      'Validasi Proof-of-Concept Sebelum Implementasi Lapangan'
    ],
    summary: 'Advanced capability in designing, virtualizing, and validating enterprise and carrier-grade network topologies in emulated sandboxes.',
    summaryId: 'Kemampuan tingkat lanjut dalam merancang, memvirtualisasikan, dan menguji topologi jaringan enterprise dan carrier-grade pada sandbox emulasi.'
  },
  12: { // Dart Programming
    code: 'LIDN-8613215252',
    image: '/certificates/cert_dart.png',
    issuerFull: 'ID-Networkers Software Engineering Division',
    issuerFullId: 'Divisi Rekayasa Perangkat Lunak ID-Networkers',
    issuedDate: 'November 2026',
    issuedDateId: 'November 2026',
    competencies: [
      'Object-Oriented Programming (OOP) in Dart',
      'Asynchronous Futures, Streams & Event Loops',
      'Type Safety, Generics & Collections',
      'Functional Data Transformations (map, where, fold)',
      'Clean Code Principles & Modular Architecture'
    ],
    competenciesId: [
      'Pemrograman Berorientasi Objek (OOP) dengan Dart',
      'Futures Asinkron, Streams & Event Loop',
      'Type Safety, Generics & Manajemen Koleksi Data',
      'Transformasi Data Fungsional (map, where, fold)',
      'Prinsip Clean Code & Arsitektur Perangkat Lunak Modular'
    ],
    summary: 'Demonstrated proficiency in building performant, type-safe software applications with modern asynchronous Dart programming.',
    summaryId: 'Kemahiran terbukti dalam membangun aplikasi perangkat lunak berperforma tinggi dan type-safe menggunakan pemrograman asynchronous Dart modern.'
  },
  13: { // Publikasi Jurnal Ilmiah
    code: 'JIK-ESAU-2025',
    image: '/certificates/cert_scientific_publication.png',
    issuerFull: 'Jurnal Ilmu Komputer (JIK) / Universitas Esa Unggul',
    issuerFullId: 'Jurnal Ilmu Komputer (JIK) / Universitas Esa Unggul',
    issuedDate: 'July 2025',
    issuedDateId: 'Juli 2025',
    competencies: [
      'Expert Systems & Rule-Based Reasoning',
      'Machine Learning & Game Playing Algorithms',
      'Cloud Computing Digital Transformation for MSMEs',
      'Empirical Data Gathering & Research Methodology',
      'Peer-Reviewed Scientific Paper Publication'
    ],
    competenciesId: [
      'Sistem Pakar & Penalaran Berbasis Aturan (Rule-Based)',
      'Machine Learning & Algoritma Game Playing',
      'Transformasi Digital Cloud Computing untuk UMKM',
      'Pengumpulan Data Empiris & Metodologi Penelitian Ilmiah',
      'Publikasi Karya Ilmiah Peer-Reviewed'
    ],
    summary: 'Author of peer-reviewed scientific papers focusing on Artificial Intelligence expert systems and Cloud Computing infrastructure published in academic journals.',
    summaryId: 'Penulis karya ilmiah terpublikasi pada jurnal akademik bereputasi di bidang Artificial Intelligence (sistem pakar) dan infrastruktur Cloud Computing.'
  }
};

export default function CertificatesSection() {
  const { t, lang, language } = useLanguage()
  const certT = t.certificates
  const [selectedCert, setSelectedCert] = useState(null)
  const [selectedIndex, setSelectedIndex] = useState(null)
  const isId = (lang || language) === 'id'

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

  // Bilingual active modal content
  const activeCompetencies = currentDetails
    ? (isId && currentDetails.competenciesId ? currentDetails.competenciesId : currentDetails.competencies)
    : []
  const activeSummary = currentDetails
    ? (isId && currentDetails.summaryId ? currentDetails.summaryId : currentDetails.summary)
    : ''
  const activeIssuer = currentDetails
    ? (isId && currentDetails.issuerFullId ? currentDetails.issuerFullId : currentDetails.issuerFull)
    : ''
  const activeDate = currentDetails
    ? (isId && currentDetails.issuedDateId ? currentDetails.issuedDateId : currentDetails.issuedDate)
    : ''

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
        {certT.items.map((cert, idx) => {
          const detail = CERT_DETAILS[idx] || CERT_DETAILS[0]
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              onClick={() => handleOpen(cert, idx)}
              className="glass-card glass-card-hover rounded-2xl p-6 border border-white/10 flex flex-col justify-between cursor-pointer group hover:border-teal-500/40 transition-all duration-300"
            >
              <div>
                {/* Category & Year */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-mono text-teal-400 bg-teal-500/10 px-2.5 py-0.5 rounded border border-teal-500/20">
                    {cert.category}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">{cert.year}</span>
                </div>

                {/* Visual Certificate Document Preview */}
                <div className="relative mb-4 h-44 w-full rounded-xl overflow-hidden border border-white/10 group-hover:border-teal-400/50 bg-slate-950 transition-all duration-300 shadow-md group-hover:shadow-teal-500/20">
                  <img
                    src={detail.image}
                    alt={cert.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20 opacity-80 group-hover:opacity-40 transition-opacity"></div>
                  <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-slate-900/90 backdrop-blur-md border border-teal-500/30 text-[10px] font-mono text-teal-300 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>{isId ? 'DOKUMEN RESMI' : 'OFFICIAL CREDENTIAL'}</span>
                  </div>
                </div>

                {/* Title & Issuer */}
                <h3 className="text-base font-bold text-slate-100 mb-1 group-hover:text-teal-300 transition-colors line-clamp-2">
                  {cert.name}
                </h3>
                <p className="text-xs text-slate-400 font-medium">{cert.issuer}</p>
              </div>

              <div className="pt-5 flex items-center justify-between text-xs text-teal-400 font-medium group-hover:text-teal-300 border-t border-white/5 mt-4">
                <span className="flex items-center gap-1.5">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                  {isId ? 'Lihat Sertifikat →' : (certT.previewText || 'Preview Credential →')}
                </span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  {isId ? 'Terverifikasi' : 'Verified'}
                </span>
              </div>
            </motion.div>
          )
        })}
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
                      {activeIssuer} · {activeDate}
                    </p>
                  </div>
                </div>

                {/* Full High-Resolution Certificate Document Image */}
                <div className="relative rounded-xl overflow-hidden border border-white/15 bg-slate-950 shadow-2xl max-h-[380px] flex items-center justify-center group">
                  <img
                    src={currentDetails.image}
                    alt={selectedCert.name}
                    className="w-full h-auto max-h-[380px] object-contain mx-auto"
                  />
                  <a
                    href={currentDetails.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-3 right-3 px-3 py-1.5 rounded-lg bg-black/80 hover:bg-teal-500 hover:text-slate-950 backdrop-blur-md border border-white/20 text-xs font-mono text-slate-200 transition-all flex items-center gap-1.5 shadow-lg"
                  >
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                    <span>{isId ? 'Buka Gambar Resolusi Penuh' : 'Open Full Resolution'}</span>
                  </a>
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
                      ID: <span className="text-teal-400 font-semibold">{currentDetails.code}</span> // {isId ? 'STATUS:' : 'STATUS:'} <span className="text-emerald-400">{isId ? 'BERLAKU AKTIF' : 'PERMANENT STANDING'}</span>
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed my-4 text-center sm:text-left">
                    {activeSummary}
                  </p>

                  {/* Competencies Validated Grid */}
                  <div className="space-y-2 pt-2">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-teal-400 font-semibold flex items-center gap-1.5">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                      {isId ? 'Kompetensi Inti yang Divalidasi:' : 'Core Competencies Validated:'}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {activeCompetencies.map((comp, cIdx) => (
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
                        {isId ? 'Sesuai Standar Industri Telekomunikasi & Analitik' : 'Telco & Analytics Engineering Compliant'}
                      </span>
                    </div>
                    <div className="px-3 py-1 rounded-md bg-teal-500/10 border border-teal-500/30 text-[10px] text-teal-300 font-semibold tracking-wider">
                      {isId ? 'REKOR REPOSITORI TERVALIDASI' : 'VERIFIED REPOSITORY RECORD'}
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
                    {isId ? 'Tutup Pratinjau' : (certT.closePreview || 'Close Preview')}
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

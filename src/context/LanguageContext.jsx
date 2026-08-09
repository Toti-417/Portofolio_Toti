import { createContext, useContext, useState } from 'react'
import { initialGalleryItems } from '../data/galleryData'

const LanguageContext = createContext()


export const translations = {
  "en": {
    "nav": {
      "about": "About",
      "skills": "Skills",
      "projects": "Projects",
      "experience": "Experience",
      "gallery": "Field Work",
      "certificates": "Credentials",
      "whyMe": "Differentiators",
      "contact": "Contact",
      "downloadCv": "Download CV",
      "letsTalk": "Let's Talk"
    },
    "hero": {
      "badge": "PROJECT ENGINEER → DATA ANALYST",
      "titleStart": "Turning Network Signals into",
      "titleEnd": "Data-Driven Intelligence",
      "bio": "leading telecommunications infrastructure for Telkomsel projects up to",
      "bioMid": "IDR 40 billion",
      "bioEnd": ". Now combining engineering discipline with advanced analytics & automation in",
      "exploreBtn": "Explore Featured Work",
      "downloadCv": "Download CV",
      "connectBtn": "Let's Connect →",
      "coreArsenal": "Core Arsenal:",
      "openToOpportunities": "OPEN TO OPPORTUNITIES",
      "roleSubtitle": "Project Engineer",
      "roleTransition": "→ Data Analytics",
      "stats": [
        {
          "label": "Project Portfolio Managed",
          "sub": "Telkomsel Infrastructure"
        },
        {
          "label": "Cost Efficiency Achieved",
          "sub": "Budget Optimization"
        },
        {
          "label": "Ahead of Schedule",
          "sub": "On-Time Project Delivery"
        },
        {
          "label": "eATP Increase",
          "sub": "Compliance & Quality"
        }
      ]
    },
    "about": {
      "badge": "// ABOUT TOTI PUTRA PRATAMA",
      "titleStart": "Bridging Field Infrastructure with",
      "titleEnd": "Modern Data Analytics",
      "card1Title": "Telecom Operations Foundation",
      "card1Sub": "4+ Years Field & PM Experience",
      "card1Desc": "Managed BTS material flows, network acceptance (eATP), Huawei iMAE integrations, and contractor alignment for high-stake Telkomsel infrastructure deployments.",
      "card2Title": "Data Analytics & Automation Shift",
      "card2Sub": "Power BI · Python · SQL · N8N",
      "card2Desc": "Transforming complex multi-site operational logs into real-time Power BI dashboards and automated workflows that streamline decision-making.",
      "card3Title": "Precision & Accountability",
      "card3Sub": "Ranked #1 Leading Partner",
      "card3Desc": "Achieved 99% documentation accuracy, 30% cost efficiency on IDR 40B budget, and 85% ahead-of-schedule project completion rate.",
      "p1": "I began my engineering career at the core of telecommunications infrastructure — overseeing BTS equipment logistics, coordinating field teams, and steering Telkomsel network rollout projects to meet strict cost and timeline benchmarks.",
      "p2": "Through managing multi-billion rupiah site rollouts, I realized that the sharpest operational improvements come from turning operational data into actionable intelligence. That insight drove my transition into data analytics.",
      "p3": "Today, I build custom Power BI dashboards for real-time project tracking, design automated workflows with N8N and Power Automate, and leverage SQL and Python to extract precise insights from raw operational logs.",
      "currentStatusTitle": "Current Academic Pursuit:",
      "currentStatusDesc": "Finishing Bachelor of Informatics Engineering (Semester 8) — Universitas Esa Unggul, Bekasi."
    },
    "skills": {
      "badge": "// TECHNICAL ARSENAL",
      "titleStart": "Core Technical & Leadership",
      "titleEnd": "Competencies",
      "subtitle": "Combining analytical toolsets with real-world telecommunications project engineering discipline.",
      "categories": [
        {
          "title": "Data & Analytics",
          "skills": [
            {
              "name": "Power BI",
              "tag": "Advanced"
            },
            {
              "name": "MySQL",
              "tag": "Proficient"
            },
            {
              "name": "Python",
              "tag": "Intermediate"
            },
            {
              "name": "JavaScript",
              "tag": "Intermediate"
            }
          ]
        },
        {
          "title": "Automation & Workflow",
          "skills": [
            {
              "name": "N8N",
              "tag": "Advanced"
            },
            {
              "name": "Power Automate",
              "tag": "Advanced"
            },
            {
              "name": "Google Workspace",
              "tag": "Advanced"
            },
            {
              "name": "SAP (Basic)",
              "tag": "Fundamental"
            }
          ]
        },
        {
          "title": "Telecom Systems",
          "skills": [
            {
              "name": "Huawei iMAE Integration",
              "tag": "Expert"
            },
            {
              "name": "BTS Administration",
              "tag": "Expert"
            },
            {
              "name": "SPMS & CRQ",
              "tag": "Expert"
            },
            {
              "name": "eATP Acceptance",
              "tag": "Expert"
            }
          ]
        },
        {
          "title": "Engineering & PM",
          "skills": [
            {
              "name": "AutoCAD & MS Visio",
              "tag": "Advanced"
            },
            {
              "name": "Budget Management",
              "tag": "IDR 40B+"
            },
            {
              "name": "Risk Assessment",
              "tag": "Proficient"
            },
            {
              "name": "Vendor & Contract",
              "tag": "Expert"
            }
          ]
        }
      ]
    },
    "projects": {
      "badge": "// FEATURED DEPLOYMENTS",
      "titleStart": "Featured Engineering &",
      "titleEnd": "Analytics Projects",
      "subtitle": "Showcasing solutions developed at the intersection of telecommunications operations and data analytics.",
      "viewDetails": "View Details & Metrics",
      "impactLabel": "Key Impact:",
      "modalTitle": "MEASURABLE IMPACT:",
      "closeModal": "Close Modal",
      "closePreview": "Close Preview",
      "items": [
        {
          "id": "power-bi-monitor",
          "title": "Power BI Real-Time Project Monitor",
          "category": "Data Analytics & Visualization",
          "description": "Developed a real-time executive dashboard for Telkomsel project monitoring, enabling leadership to track site rollout progress, vendor performance, and milestone bottlenecks live across multiple regions.",
          "impact": "Replaced manual weekly Excel reports with live automated tracking.",
          "tags": [
            "Power BI",
            "SPMS",
            "Data Modeling",
            "KPI Tracking"
          ],
          "metrics": [
            {
              "label": "Tracking Mode",
              "val": "Real-Time"
            },
            {
              "label": "Data Source",
              "val": "Telkomsel SPMS"
            }
          ]
        },
        {
          "id": "bts-material-flow",
          "title": "BTS Material Flow Automation (N8N)",
          "category": "Workflow Automation",
          "description": "Designed an automated workflow system for BTS equipment inbound-outbound logistics using N8N & Power Automate. Eliminates manual input errors and accelerates material dispatch for field contractors.",
          "impact": "Cut administrative processing time significantly while preventing material stockouts.",
          "tags": [
            "N8N",
            "Power Automate",
            "REST API",
            "Google Sheets API"
          ],
          "metrics": [
            {
              "label": "Workflow",
              "val": "End-to-End"
            },
            {
              "label": "Accuracy",
              "val": "High Precision"
            }
          ]
        },
        {
          "id": "blacksite-rollout",
          "title": "Blacksite Batch Rollout & Document Tracker",
          "category": "Project Engineering",
          "description": "Managed end-to-end execution tracking for Telkomsel Blacksite Batch #1–#3 & Re-engineering rollout projects from initial site deployment through eATP approval and final documentation closure.",
          "impact": "Achieved 99% documentation accuracy and ranked #1 Leading Partner for Project Closure.",
          "tags": [
            "Telkomsel Rollout",
            "eATP Approval",
            "Document Control",
            "Vendor Mgmt"
          ],
          "metrics": [
            {
              "label": "Closure Accuracy",
              "val": "99%"
            },
            {
              "label": "Partner Rank",
              "val": "#1 Leader"
            }
          ]
        }
      ]
    },
    "experience": {
      "badge": "// CAREER TRAJECTORY",
      "titleStart": "Professional Track Record &",
      "titleEnd": "Leadership",
      "subtitle": "Proven history of managing multi-billion rupiah projects, driving efficiency, and delivering network excellence.",
      "currentRoleBadge": "CURRENT ROLE",
      "items": [
        {
          "period": "Feb 2025 — Present",
          "role": "Technical Support — Radio Access Assurance",
          "company": "PT Telekomunikasi Selular (Telkomsel)",
          "isCurrent": true,
          "highlights": [
            "Managing BTS material inbound-outbound logistics aligned with project deployment timelines.",
            "Supporting Huawei iMAE BTS integration end-to-end — from site prep through network verification.",
            "Developing real-time Power BI dashboards for operational executive decision-making.",
            "Automating routine administrative workflows using N8N and Power Automate."
          ]
        },
        {
          "period": "May 2023 — Jul 2024",
          "role": "Project Engineer — ATP Jabotabek INNER",
          "company": "PT Infrastruktur Telekomunikasi Indonesia (TELKOMINFRA)",
          "isCurrent": false,
          "highlights": [
            "Managed project budgets up to IDR 40 Billion while achieving 30% cost efficiency through resource optimization.",
            "Led Telkomsel rollout projects from planning to execution with an average 85% ahead-of-schedule delivery rate.",
            "Coordinated cross-functional field engineering teams, subcontractors, and vendor contracts across Jabotabek INNER."
          ]
        },
        {
          "period": "Feb 2023 — May 2023",
          "role": "ATP Coordinator — Jabotabek INNER & OUTER",
          "company": "PT Infrastruktur Telekomunikasi Indonesia (TELKOMINFRA)",
          "isCurrent": false,
          "highlights": [
            "Supervised eATP incoming compliance according to Telkomsel asset standards, driving a 70% achievement increase.",
            "Compiled strategic implementation reports and regional network deployment recommendations for Jabotabek regions."
          ]
        },
        {
          "period": "2021 — 2022",
          "role": "Document Control Officer",
          "company": "PT Radhika Patangga Jagadhita",
          "isCurrent": false,
          "award": "🏆 Ranked #1 Leading Partner for Project Closure — Nov 2021",
          "highlights": [
            "Closed projects on-time with 99% documentation accuracy across Blacksite Batch #1, #2, and Re-engineering programs.",
            "Standardized document submission workflows to accelerate regional project acceptance."
          ]
        }
      ]
    },
    "gallery": {
      "badge": "// ON-SITE DOCUMENTATION",
      "titleStart": "Field Operations & On-Site",
      "titleEnd": "Work History",
      "subtitle": "Real documentation from managing Telkomsel Radio Access Assurance & TELKOMINFRA telecom infrastructure projects.",
      "filterAll": "All Documentation",
      "filterTelkomsel": "Telkomsel (2025–Present)",
      "filterTelkominfra": "TELKOMINFRA (2023–2024)",
      "clickToEnlarge": "Click to expand documentation",
      "closePhoto": "Close Documentation"
    },
    "certificates": {
      "badge": "// CREDENTIALS & CERTIFICATIONS",
      "titleStart": "Verified Credentials &",
      "titleEnd": "Certifications",
      "subtitle": "Continuous upskilling in data analytics, database querying, workflow automation, and engineering management.",
      "previewText": "Preview Credential →",
      "closePreview": "Close Preview",
      "verificationPlaceholder": "Official Credential Verification Placeholder",
      "items": [
        {
          "name": "Power BI Data Analyst Specialization",
          "issuer": "Microsoft / Professional Credential",
          "year": "2024",
          "icon": "📊",
          "category": "Data Visualization"
        },
        {
          "name": "Python for Data Science & Analytics",
          "issuer": "Coursera / Industry Credential",
          "year": "2024",
          "icon": "🐍",
          "category": "Data Science"
        },
        {
          "name": "SQL Querying & Database Fundamentals",
          "issuer": "HackerRank Certified",
          "year": "2024",
          "icon": "🗄️",
          "category": "Database Systems"
        },
        {
          "name": "Project Management & Budget Control",
          "issuer": "Professional Credential",
          "year": "2023",
          "icon": "📋",
          "category": "Project Engineering"
        },
        {
          "name": "N8N Workflow & API Automation",
          "issuer": "Automation Credential",
          "year": "2024",
          "icon": "🔄",
          "category": "Workflow Systems"
        },
        {
          "name": "Telecom Network & Radio Access Assurance",
          "issuer": "Industry Professional",
          "year": "2023",
          "icon": "📡",
          "category": "Telecom Assurance"
        }
      ]
    },
    "whyMe": {
      "badge": "// KEY DIFFERENTIATORS",
      "titleStart": "Why Hire & Work With",
      "titleEnd": "Toti Putra Pratama",
      "subtitle": "Core strengths tied directly to real operational achievements and data analytics capabilities.",
      "valuePropLabel": "VALUE PROPOSITION:",
      "items": [
        {
          "icon": "💰",
          "metric": "30% Cost Efficiency",
          "title": "Proven Budget Optimization",
          "description": "Managed a IDR 40B+ project portfolio while achieving 30% cost efficiency through strategic vendor negotiations, material flow control, and resource optimization across Telkomsel rollouts.",
          "highlight": "IDR 40B+ Portfolio"
        },
        {
          "icon": "⚡",
          "metric": "85% Fast Delivery",
          "title": "Ahead-of-Schedule Execution",
          "description": "Consistently delivering 85% of assigned projects ahead of deadline while keeping document accuracy at 99% — setting benchmarks for regional network deployments.",
          "highlight": "On-Time Benchmark"
        },
        {
          "icon": "📈",
          "metric": "Data & Automation",
          "title": "Data-Driven Decision Making",
          "description": "Combines field telecom domain knowledge with Power BI, Python, SQL, and N8N automation to convert multi-site operational logs into immediate executive dashboards.",
          "highlight": "Power BI + Python + N8N"
        },
        {
          "icon": "🏆",
          "metric": "Ranked #1 Leader",
          "title": "Cross-Functional Coordination",
          "description": "Ranked #1 Leading Partner for Project Closure (Nov 2021). Skilled at aligning field contractors, engineering teams, and client representatives toward unified goals.",
          "highlight": "Award Winning Leadership"
        }
      ]
    },
    "contact": {
      "badge": "// INITIATE CONTACT",
      "titleStart": "Let's Work Together &",
      "titleEnd": "Connect",
      "subtitle": "Open for opportunities in Data Analytics, Project Engineering, and Technical Support roles.",
      "availableStatus": "AVAILABLE FOR NEW ROLES",
      "directHeader": "Get in Touch Directly",
      "directSub": "Feel free to email, WhatsApp, or connect on LinkedIn to discuss roles or projects.",
      "emailLabel": "EMAIL",
      "phoneLabel": "WHATSAPP / PHONE",
      "locationLabel": "LOCATION",
      "linkedinLabel": "LINKEDIN",
      "locationVal": "Kudus, Central Java, Indonesia",
      "formTitle": "Send a Direct Message",
      "formSub": "Fill in your contact info and inquiry below — I will reply promptly.",
      "nameLabel": "YOUR NAME",
      "emailFieldLabel": "EMAIL ADDRESS",
      "subjectLabel": "SUBJECT / PURPOSE",
      "messageLabel": "YOUR MESSAGE",
      "sendBtn": "Send Message",
      "sendingBtn": "Sending Message...",
      "sentBtn": "✓ Message Sent Successfully!",
      "copyright": "All rights reserved.",
      "tagline": "Signal to Insight"
    }
  },
  "id": {
    "nav": {
      "about": "Tentang",
      "skills": "Keahlian",
      "projects": "Proyek",
      "experience": "Pengalaman",
      "gallery": "Dokumentasi",
      "certificates": "Sertifikat",
      "whyMe": "Keunggulan",
      "contact": "Kontak",
      "downloadCv": "Unduh CV",
      "letsTalk": "Hubungi Saya"
    },
    "hero": {
      "badge": "PROJECT ENGINEER → DATA ANALYST",
      "titleStart": "Mengubah Sinyal Jaringan Menjadi",
      "titleEnd": "Keputusan Berbasis Data",
      "bio": "mengelola infrastruktur telekomunikasi untuk proyek Telkomsel senilai hingga",
      "bioMid": "IDR 40 Miliar",
      "bioEnd": ". Kini menggabungkan disiplin teknik dengan analitik data & otomasi di",
      "exploreBtn": "Lihat Portofolio Proyek",
      "downloadCv": "Unduh CV",
      "connectBtn": "Hubungi Saya →",
      "coreArsenal": "Keahlian Utama:",
      "openToOpportunities": "TERBUKA UNTUK PELUANG KERJA",
      "roleSubtitle": "Project Engineer",
      "roleTransition": "→ Analisis Data",
      "stats": [
        {
          "label": "Portofolio Proyek Dikelola",
          "sub": "Infrastruktur Telkomsel"
        },
        {
          "label": "Efisiensi Biaya Tercapai",
          "sub": "Optimalisasi Anggaran"
        },
        {
          "label": "Selesai Lebih Cepat",
          "sub": "Pengiriman Tepat Waktu"
        },
        {
          "label": "Peningkatan Capaian eATP",
          "sub": "Kepatuhan & Kualitas"
        }
      ]
    },
    "about": {
      "badge": "// TENTANG TOTI PUTRA PRATAMA",
      "titleStart": "Menghubungkan Infrastruktur Lapangan dengan",
      "titleEnd": "Analitik Data Modern",
      "card1Title": "Fondasi Operasional Telekomunikasi",
      "card1Sub": "Pengalaman 4+ Tahun di Lapangan & PM",
      "card1Desc": "Mengelola arus material BTS, verifikasi jaringan (eATP), integrasi Huawei iMAE, dan koordinasi kontraktor untuk proyek infrastruktur Telkomsel bernilai tinggi.",
      "card2Title": "Alih Keahlian ke Data & Otomasi",
      "card2Sub": "Power BI · Python · SQL · N8N",
      "card2Desc": "Mengubah log operasional multi-site yang kompleks menjadi dashboard Power BI real-time dan alur kerja otomatis untuk mempercepat pengambilan keputusan.",
      "card3Title": "Presisi & Akuntabilitas Tinggi",
      "card3Sub": "Mitra Terbaik #1 untuk Closing Proyek",
      "card3Desc": "Mencapai akurasi dokumentasi 99%, efisiensi biaya 30% dari anggaran IDR 40B, dan 85% pengiriman proyek lebih cepat dari target.",
      "p1": "Saya memulai karier di jantung infrastruktur telekomunikasi — mengawasi logistik material BTS, mengoordinasikan tim lapangan, dan memimpin proyek rollout jaringan Telkomsel agar tepat waktu dan efisien secara anggaran.",
      "p2": "Melalui pengalaman mengelola proyek bernilai puluhan miliar rupiah, saya menyadari bahwa efisiensi operasional terbaik lahir dari data yang diolah menjadi insight nyata. Hal itu mendorong saya memperdalam dunia analitik data.",
      "p3": "Saat ini saya membangun dashboard Power BI interaktif untuk pemantauan proyek real-time, merancang otomasi alur kerja dengan N8N & Power Automate, serta menggunakan SQL & Python untuk mengolah data operasional secara presisi.",
      "currentStatusTitle": "Studi Akademik Saat Ini:",
      "currentStatusDesc": "Menyelesaikan pendidikan Sarjana Teknik Informatika (Semester 8) — Universitas Esa Unggul, Bekasi."
    },
    "skills": {
      "badge": "// KEAHLEAN TEKNIS",
      "titleStart": "Kompetensi Teknis &",
      "titleEnd": "Manajemen Utama",
      "subtitle": "Menggabungkan perangkat analitik data modern dengan disiplin teknik proyek telekomunikasi.",
      "categories": [
        {
          "title": "Data & Analitik",
          "skills": [
            {
              "name": "Power BI",
              "tag": "Lanjutan"
            },
            {
              "name": "MySQL",
              "tag": "Mahir"
            },
            {
              "name": "Python",
              "tag": "Menengah"
            },
            {
              "name": "JavaScript",
              "tag": "Menengah"
            }
          ]
        },
        {
          "title": "Otomasi & Alur Kerja",
          "skills": [
            {
              "name": "N8N",
              "tag": "Lanjutan"
            },
            {
              "name": "Power Automate",
              "tag": "Lanjutan"
            },
            {
              "name": "Google Workspace",
              "tag": "Lanjutan"
            },
            {
              "name": "SAP (Dasar)",
              "tag": "Dasar"
            }
          ]
        },
        {
          "title": "Sistem Telekomunikasi",
          "skills": [
            {
              "name": "Integrasi Huawei iMAE",
              "tag": "Ahli"
            },
            {
              "name": "Administrasi BTS",
              "tag": "Ahli"
            },
            {
              "name": "SPMS & CRQ",
              "tag": "Ahli"
            },
            {
              "name": "Verifikasi eATP",
              "tag": "Ahli"
            }
          ]
        },
        {
          "title": "Teknik & Manajemen",
          "skills": [
            {
              "name": "AutoCAD & MS Visio",
              "tag": "Lanjutan"
            },
            {
              "name": "Manajemen Anggaran",
              "tag": "IDR 40B+"
            },
            {
              "name": "Analisis Risiko",
              "tag": "Mahir"
            },
            {
              "name": "Manajemen Vendor & Kontrak",
              "tag": "Ahli"
            }
          ]
        }
      ]
    },
    "projects": {
      "badge": "// PORTOPOLIO PROYEK",
      "titleStart": "Proyek Unggulan Teknik &",
      "titleEnd": "Analitik Data",
      "subtitle": "Menampilkan solusi inovatif yang dikembangkan dari integrasi operasional telekomunikasi dan analitik data.",
      "viewDetails": "Lihat Detail & Metrik",
      "impactLabel": "Dampak Utama:",
      "modalTitle": "METRIK & DAMPAK TERUKUR:",
      "closeModal": "Tutup Modal",
      "closePreview": "Tutup Pratinjau",
      "items": [
        {
          "id": "power-bi-monitor",
          "title": "Power BI Real-Time Project Monitor",
          "category": "Analitik Data & Visualisasi",
          "description": "Mengembangkan dashboard eksekutif real-time untuk pemantauan proyek Telkomsel, memungkinkan manajemen melacak progres rollout site, kinerja vendor, dan kendala lapangan secara langsung di berbagai wilayah.",
          "impact": "Menggantikan laporan Excel mingguan manual dengan pelacakan otomatis real-time.",
          "tags": [
            "Power BI",
            "SPMS",
            "Data Modeling",
            "KPI Tracking"
          ],
          "metrics": [
            {
              "label": "Mode Pelacakan",
              "val": "Real-Time"
            },
            {
              "label": "Sumber Data",
              "val": "Telkomsel SPMS"
            }
          ]
        },
        {
          "id": "bts-material-flow",
          "title": "BTS Material Flow Automation (N8N)",
          "category": "Otomasi Alur Kerja",
          "description": "Merancang sistem alur kerja otomatis untuk logistik inbound-outbound material BTS menggunakan N8N & Power Automate. Menghilangkan kesalahan input manual dan mempercepat pengiriman material ke kontraktor.",
          "impact": "Memangkas waktu proses administrasi secara signifikan dan mencegah kekurangan stok di lapangan.",
          "tags": [
            "N8N",
            "Power Automate",
            "REST API",
            "Google Sheets API"
          ],
          "metrics": [
            {
              "label": "Alur Kerja",
              "val": "End-to-End"
            },
            {
              "label": "Akurasi",
              "val": "Presisi Tinggi"
            }
          ]
        },
        {
          "id": "blacksite-rollout",
          "title": "Blacksite Batch Rollout & Document Tracker",
          "category": "Teknik Proyek",
          "description": "Mengelola pelacakan eksekusi proyek rollout Telkomsel Blacksite Batch #1–#3 & Re-engineering dari awal pengiriman site hingga persetujuan eATP dan penutupan dokumentasi akhir.",
          "impact": "Mencapai akurasi dokumentasi 99% dan meraih peringkat #1 Mitra Terbaik untuk Closing Proyek.",
          "tags": [
            "Rollout Telkomsel",
            "Persetujuan eATP",
            "Kontrol Dokumen",
            "Vendor Mgmt"
          ],
          "metrics": [
            {
              "label": "Akurasi Closing",
              "val": "99%"
            },
            {
              "label": "Peringkat Mitra",
              "val": "Juara #1"
            }
          ]
        }
      ]
    },
    "experience": {
      "badge": "// PERJALANAN KARIER",
      "titleStart": "Rekam Jejak Profesional &",
      "titleEnd": "Kepemimpinan",
      "subtitle": "Pengalaman terbukti dalam mengelola proyek puluhan miliar rupiah, meningkatkan efisiensi, dan menjaga kualitas jaringan.",
      "currentRoleBadge": "POSISI SAAT INI",
      "items": [
        {
          "period": "Feb 2025 — Sekarang",
          "role": "Technical Support — Radio Access Assurance",
          "company": "PT Telekomunikasi Selular (Telkomsel)",
          "isCurrent": true,
          "highlights": [
            "Mengelola logistik material BTS inbound-outbound selaras dengan target waktu proyek.",
            "Mendukung integrasi BTS Huawei iMAE end-to-end — dari persiapan site hingga verifikasi jaringan.",
            "Membangun dashboard Power BI real-time untuk mendukung pengambilan keputusan manajemen.",
            "Mengotomatiskan alur kerja administrasi rutin menggunakan N8N dan Power Automate."
          ]
        },
        {
          "period": "Mei 2023 — Jul 2024",
          "role": "Project Engineer — ATP Jabotabek INNER",
          "company": "PT Infrastruktur Telekomunikasi Indonesia (TELKOMINFRA)",
          "isCurrent": false,
          "highlights": [
            "Mengelola anggaran proyek hingga Rp 40 Miliar dengan efisiensi biaya 30% melalui optimalisasi sumber daya.",
            "Memimpin proyek rollout Telkomsel dari perencanaan hingga eksekusi dengan rata-rata 85% pengiriman lebih cepat dari target.",
            "Mengoordinasikan tim lapangan lintas fungsi, subkontraktor, dan manajemen vendor di wilayah Jabotabek INNER."
          ]
        },
        {
          "period": "Feb 2023 — Mei 2023",
          "role": "ATP Coordinator — Jabotabek INNER & OUTER",
          "company": "PT Infrastruktur Telekomunikasi Indonesia (TELKOMINFRA)",
          "isCurrent": false,
          "highlights": [
            "Mengontrol kepatuhan eATP masuk sesuai standar aset Telkomsel, menaikkan capaian sebesar 70%.",
            "Menyusun laporan implementasi strategis dan rekomendasi implementasi jaringan regional Jabotabek."
          ]
        },
        {
          "period": "2021 — 2022",
          "role": "Document Control Officer",
          "company": "PT Radhika Patangga Jagadhita",
          "isCurrent": false,
          "award": "🏆 Ranked #1 Leading Partner for Project Closure — Nov 2021",
          "highlights": [
            "Menutup proyek tepat waktu dengan akurasi dokumentasi 99% di program Blacksite Batch #1, #2, dan Re-engineering.",
            "Menstandarkan alur penyerahan dokumen untuk mempercepat penerimaan proyek regional."
          ]
        }
      ]
    },
    "gallery": {
      "badge": "// DOKUMENTASI LAPANGAN",
      "titleStart": "Dokumentasi Lapangan & Histori",
      "titleEnd": "Kerja Nyata",
      "subtitle": "Dokumentasi asli dari kegiatan teknis Radio Access Assurance Telkomsel & proyek infrastruktur TELKOMINFRA.",
      "filterAll": "Semua Dokumentasi",
      "filterTelkomsel": "Telkomsel (2025–Sekarang)",
      "filterTelkominfra": "TELKOMINFRA (2023–2024)",
      "clickToEnlarge": "Klik untuk memperbesar dokumentasi",
      "closePhoto": "Tutup Dokumentasi"
    },
    "certificates": {
      "badge": "// SERTIFIKAT & KREDENSIAL",
      "titleStart": "Sertifikasi Terverifikasi &",
      "titleEnd": "Kredensial",
      "subtitle": "Pengembangan kemampuan berkelanjutan dalam analitik data, basis data, otomasi alur kerja, dan manajemen teknik.",
      "previewText": "Pratinjau Sertifikat →",
      "closePreview": "Tutup Pratinjau",
      "verificationPlaceholder": "Verifikasi Sertifikat Resmi",
      "items": [
        {
          "name": "Spesialisasi Power BI Data Analyst",
          "issuer": "Microsoft / Kredensial Profesional",
          "year": "2024",
          "icon": "📊",
          "category": "Visualisasi Data"
        },
        {
          "name": "Python untuk Data Science & Analitik",
          "issuer": "Coursera / Kredensial Industri",
          "year": "2024",
          "icon": "🐍",
          "category": "Sains Data"
        },
        {
          "name": "SQL Querying & Dasar Basis Data",
          "issuer": "HackerRank Certified",
          "year": "2024",
          "icon": "🗄️",
          "category": "Sistem Basis Data"
        },
        {
          "name": "Manajemen Proyek & Kontrol Anggaran",
          "issuer": "Kredensial Profesional",
          "year": "2023",
          "icon": "📋",
          "category": "Teknik Proyek"
        },
        {
          "name": "N8N Workflow & Otomasi API",
          "issuer": "Kredensial Otomasi",
          "year": "2024",
          "icon": "🔄",
          "category": "Sistem Otomasi"
        },
        {
          "name": "Jaringan Telekomunikasi & Access Assurance",
          "issuer": "Praktisi Industri",
          "year": "2023",
          "icon": "📡",
          "category": "Asuransi Jaringan"
        }
      ]
    },
    "whyMe": {
      "badge": "// KEUNGGULAN UTAMA",
      "titleStart": "Mengapa Memilih & Bekerja Sama Dengan",
      "titleEnd": "Toti Putra Pratama",
      "subtitle": "Kelebihan utama yang terbukti dari pencapaian operasional nyata dan kemampuan analitik data.",
      "valuePropLabel": "NILAI UNGGULAN:",
      "items": [
        {
          "icon": "💰",
          "metric": "30% Efisiensi Biaya",
          "title": "Optimalisasi Anggaran Terbukti",
          "description": "Mengelola portofolio proyek Rp 40B+ dengan efisiensi biaya 30% melalui negosiasi vendor strategis, kontrol material BTS, dan optimalisasi tim di proyek Telkomsel.",
          "highlight": "Portofolio Rp 40B+"
        },
        {
          "icon": "⚡",
          "metric": "85% Lebih Cepat",
          "title": "Pengiriman Lebih Cepat Dari Target",
          "description": "Konsisten menyelesaikan 85% proyek lebih cepat dari batas waktu dengan akurasi dokumen 99% — menjadi standar kecepatan rollout regional.",
          "highlight": "Target Tepat Waktu"
        },
        {
          "icon": "📈",
          "metric": "Data & Otomasi",
          "title": "Keputusan Berbasis Data",
          "description": "Menggabungkan pemahaman operasional telekomunikasi dengan Power BI, Python, SQL, dan otomasi N8N untuk mengubah data lapangan jadi dashboard instan.",
          "highlight": "Power BI + Python + N8N"
        },
        {
          "icon": "🏆",
          "metric": "Mitra Terbaik #1",
          "title": "Koordinasi Lintas Fungsi",
          "description": "Meraih penghargaan Ranked #1 Leading Partner for Project Closure (Nov 2021). Mahir mengoordinasikan tim teknis, kontraktor, dan klien menuju target bersama.",
          "highlight": "Kepemimpinan Berprestasi"
        }
      ]
    },
    "contact": {
      "badge": "// MULAI KONTRAK",
      "titleStart": "Mari Bekerja Sama &",
      "titleEnd": "Terhubung",
      "subtitle": "Terbuka untuk posisi Data Analyst, Project Engineer, maupun Technical Support.",
      "availableStatus": "TERBUKA UNTUK PELUANG BARU",
      "directHeader": "Hubungi Langsung",
      "directSub": "Silakan hubungi via Email, WhatsApp, atau LinkedIn untuk berdiskusi lebih lanjut.",
      "emailLabel": "EMAIL",
      "phoneLabel": "WHATSAPP / TELEPON",
      "locationLabel": "LOKASI",
      "linkedinLabel": "LINKEDIN",
      "locationVal": "Kudus, Jawa Tengah, Indonesia",
      "formTitle": "Kirim Pesan Langsung",
      "formSub": "Isi informasi kontak dan kebutuhan kamu di bawah ini — saya akan segera membalas.",
      "nameLabel": "NAMA KAMU",
      "emailFieldLabel": "ALAMAT EMAIL",
      "subjectLabel": "SUBJEK / KEBUTUHAN",
      "messageLabel": "PESAN KAMU",
      "sendBtn": "Kirim Pesan",
      "sendingBtn": "Mengirim Pesan...",
      "sentBtn": "✓ Pesan Berhasil Terkirim!",
      "copyright": "Semua hak dilindungi undang-undang.",
      "tagline": "Sinyal ke Insight"
    }
  }
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en')
  const [isEditMode, setIsEditMode] = useState(false)
  const [saveStatus, setSaveStatus] = useState(null) // null | 'saving' | 'success' | 'error'

  const [allTranslations, setAllTranslations] = useState(() => {
    const saved = localStorage.getItem('toti_live_translations')
    if (saved) {
      try {
        return JSON.parse(saved)
      } catch (e) {
        console.error('Failed to parse saved live translations:', e)
      }
    }
    return translations
  })

  const [galleryItems, setGalleryItems] = useState(() => {
    const saved = localStorage.getItem('toti_live_gallery_items')
    if (saved) {
      try {
        return JSON.parse(saved)
      } catch (e) {
        console.error('Failed to parse saved live gallery items:', e)
      }
    }
    return initialGalleryItems
  })

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'id' : 'en'))
  }

  const toggleEditMode = () => {
    setIsEditMode((prev) => !prev)
  }

  const updateTranslation = (pathStr, newValue) => {
    setAllTranslations((prev) => {
      const copy = JSON.parse(JSON.stringify(prev))
      const keys = pathStr.split('.')
      let current = copy[lang]
      for (let i = 0; i < keys.length - 1; i++) {
        const key = keys[i]
        if (current[key] === undefined) return prev
        current = current[key]
      }
      current[keys[keys.length - 1]] = newValue
      localStorage.setItem('toti_live_translations', JSON.stringify(copy))
      return copy
    })
  }

  const updateGalleryItem = (id, field, value) => {
    setGalleryItems((prev) => {
      const updated = prev.map((item) => {
        if (item.id === id) {
          return { ...item, [field]: value }
        }
        return item
      })
      localStorage.setItem('toti_live_gallery_items', JSON.stringify(updated))
      return updated
    })
  }

  const deleteGalleryItem = (id) => {
    setGalleryItems((prev) => {
      const updated = prev.filter((item) => item.id !== id)
      localStorage.setItem('toti_live_gallery_items', JSON.stringify(updated))
      return updated
    })
  }

  const saveToCodeFile = async () => {
    setSaveStatus('saving')
    try {
      const res = await fetch('/api/save-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          translations: allTranslations,
          galleryItems: galleryItems,
        }),
      })
      const result = await res.json()
      if (result.success) {
        setSaveStatus('success')
        setTimeout(() => setSaveStatus(null), 4000)
        return { success: true, message: result.message }
      } else {
        setSaveStatus('error')
        setTimeout(() => setSaveStatus(null), 4000)
        return { success: false, message: result.error }
      }
    } catch (err) {
      console.error('Error saving to code:', err)
      setSaveStatus('error')
      setTimeout(() => setSaveStatus(null), 4000)
      return { success: false, message: err.message }
    }
  }

  const resetTranslations = () => {
    localStorage.removeItem('toti_live_translations')
    localStorage.removeItem('toti_live_gallery_items')
    setAllTranslations(translations)
    setGalleryItems(initialGalleryItems)
  }

  const t = allTranslations[lang] || translations[lang]

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        toggleLanguage,
        t,
        allTranslations,
        galleryItems,
        updateGalleryItem,
        deleteGalleryItem,
        isEditMode,
        toggleEditMode,
        updateTranslation,
        saveToCodeFile,
        resetTranslations,
        saveStatus,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}



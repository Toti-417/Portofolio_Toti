import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import EditableText from '../components/EditableText'

export default function FieldGallerySection() {
  const { lang, t, galleryItems, updateGalleryItem, deleteGalleryItem, isEditMode } = useLanguage()
  const galleryT = t.gallery
  const isId = lang === 'id'

  const [activeFilter, setActiveFilter] = useState('all') // all, telkomsel, telkominfra
  const [selectedPhoto, setSelectedPhoto] = useState(null)
  const [visibleCount, setVisibleCount] = useState(6) // Show 6 photos initially

  // Photo modal editing state
  const [editingPhotoModal, setEditingPhotoModal] = useState(null) // photo object being edited

  const filteredItems = (galleryItems || []).filter((item) => {
    if (activeFilter === 'telkomsel') return item.company === 'Telkomsel'
    if (activeFilter === 'telkominfra') return item.company === 'TELKOMINFRA'
    return true
  })

  const displayedItems = filteredItems.slice(0, visibleCount)
  const hasMore = visibleCount < filteredItems.length

  const toggleShowAll = () => {
    if (hasMore) {
      setVisibleCount(filteredItems.length)
    } else {
      setVisibleCount(6)
    }
  }

  const handleSavePhotoEdit = () => {
    if (!editingPhotoModal) return
    updateGalleryItem(editingPhotoModal.id, 'titleEn', editingPhotoModal.titleEn)
    updateGalleryItem(editingPhotoModal.id, 'titleId', editingPhotoModal.titleId)
    updateGalleryItem(editingPhotoModal.id, 'descEn', editingPhotoModal.descEn)
    updateGalleryItem(editingPhotoModal.id, 'descId', editingPhotoModal.descId)
    updateGalleryItem(editingPhotoModal.id, 'date', editingPhotoModal.date)
    updateGalleryItem(editingPhotoModal.id, 'tag', editingPhotoModal.tag)

    // Update selectedPhoto view if currently open
    if (selectedPhoto && selectedPhoto.id === editingPhotoModal.id) {
      setSelectedPhoto({ ...editingPhotoModal })
    }
    setEditingPhotoModal(null)
  }

  const handleDeletePhoto = (id) => {
    if (window.confirm('🗑️ Hapus foto ini dari portofolio?\n\nFoto akan dihilangkan dari tampilan. Klik "Simpan ke Code" setelah itu agar perubahan tersimpan permanen.')) {
      deleteGalleryItem(id)
      setEditingPhotoModal(null)
      setSelectedPhoto(null)
    }
  }

  return (
    <section id="gallery" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-white/10 text-teal-400 font-mono text-xs">
          <EditableText path="gallery.badge" value={galleryT.badge} />
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
          <EditableText path="gallery.titleStart" value={galleryT.titleStart} />{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-blue-400">
            <EditableText path="gallery.titleEnd" value={galleryT.titleEnd} />
          </span>
        </h2>
        <p className="text-slate-400 text-sm sm:text-base">
          <EditableText path="gallery.subtitle" value={galleryT.subtitle} multiline />
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        <button
          onClick={() => {
            setActiveFilter('all')
            setVisibleCount(6)
          }}
          className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
            activeFilter === 'all'
              ? 'bg-teal-500 text-slate-950 shadow-md shadow-teal-500/20 font-bold'
              : 'bg-slate-900/80 text-slate-300 border border-white/10 hover:border-teal-500/30'
          }`}
        >
          {galleryT.filterAll} ({galleryItems.length})
        </button>
        <button
          onClick={() => {
            setActiveFilter('telkomsel')
            setVisibleCount(6)
          }}
          className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
            activeFilter === 'telkomsel'
              ? 'bg-teal-500 text-slate-950 shadow-md shadow-teal-500/20 font-bold'
              : 'bg-slate-900/80 text-slate-300 border border-white/10 hover:border-teal-500/30'
          }`}
        >
          {galleryT.filterTelkomsel}
        </button>
        <button
          onClick={() => {
            setActiveFilter('telkominfra')
            setVisibleCount(6)
          }}
          className={`px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
            activeFilter === 'telkominfra'
              ? 'bg-teal-500 text-slate-950 shadow-md shadow-teal-500/20 font-bold'
              : 'bg-slate-900/80 text-slate-300 border border-white/10 hover:border-teal-500/30'
          }`}
        >
          {galleryT.filterTelkominfra}
        </button>
      </div>

      {/* Photo Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedItems.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: (idx % 6) * 0.08 }}
            className={`glass-card glass-card-hover rounded-2xl overflow-hidden border ${
              isEditMode ? 'border-amber-400/50' : 'border-white/10'
            } flex flex-col justify-between cursor-pointer group relative`}
            onClick={() => {
              if (isEditMode) {
                setEditingPhotoModal({ ...item })
              } else {
                setSelectedPhoto(item)
              }
            }}
          >
            {/* Live Edit Badge Indicator */}
            {isEditMode && (
              <div className="absolute top-2 right-2 z-30 bg-amber-400 text-slate-950 font-mono text-[10px] font-bold px-2 py-0.5 rounded shadow flex items-center gap-1">
                <span>✏️ Edit Foto</span>
              </div>
            )}

            {/* Image Container */}
            <div className="relative aspect-[4/3] bg-slate-950 overflow-hidden">
              <img
                src={item.img}
                alt={isId ? item.titleId : item.titleEn}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070913] via-transparent to-transparent opacity-80" />

              {/* Company & Tag Badges */}
              <div className="absolute top-3 left-3 flex gap-2 flex-wrap z-10">
                <span
                  className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full backdrop-blur-md border ${
                    item.company === 'Telkomsel'
                      ? 'bg-red-500/20 text-red-300 border-red-500/30'
                      : 'bg-blue-500/20 text-blue-300 border-blue-500/30'
                  }`}
                >
                  {item.company}
                </span>
                <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-slate-950/80 text-teal-300 border border-teal-500/30 backdrop-blur-md">
                  {item.tag}
                </span>
              </div>

              {/* Date Badge */}
              <div className="absolute bottom-3 right-3 text-[10px] font-mono bg-slate-950/80 px-2.5 py-1 rounded-md text-slate-300 border border-white/10 backdrop-blur-md">
                {item.date}
              </div>
            </div>

            {/* Content & Caption */}
            <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <h3 className="font-bold text-slate-100 text-sm leading-snug group-hover:text-teal-300 transition-colors mb-2">
                  {isId ? item.titleId : item.titleEn}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                  {isId ? item.descId : item.descEn}
                </p>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-teal-400 font-medium">
                <span>{isEditMode ? '✏️ Klik untuk Edit Judul/Deskripsi' : isId ? 'Perbesar Foto' : 'Expand Photo'}</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* "Lihat Selengkapnya" Expand / Collapse Button */}
      {filteredItems.length > 6 && (
        <div className="mt-12 text-center">
          <button
            onClick={toggleShowAll}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-mono text-xs font-bold bg-slate-900/90 hover:bg-slate-800 border border-teal-500/30 hover:border-teal-400 text-teal-300 hover:text-white transition-all duration-300 shadow-xl group"
          >
            <span>
              {hasMore
                ? isId
                  ? `🔽 Lihat Selengkapnya (${filteredItems.length} Foto Dokumentasi)`
                  : `🔽 View All Field Documentation (${filteredItems.length} Photos)`
                : isId
                ? '🔼 Tampilkan Lebih Sedikit'
                : '🔼 Show Less'}
            </span>
            <span className="group-hover:translate-y-0.5 transition-transform">
              {hasMore ? '↓' : '↑'}
            </span>
          </button>
        </div>
      )}

      {/* Live Edit Photo Details Modal */}
      <AnimatePresence>
        {editingPhotoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setEditingPhotoModal(null)}
            className="fixed inset-0 z-[10000] bg-slate-950/85 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0b0f1f] border border-amber-400/50 rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl space-y-4 p-6"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-amber-400 font-mono text-xs font-bold">✏️ Edit Foto Dokumentasi</span>
                  <span className="text-slate-400 font-mono text-[10px] bg-slate-900 px-2 py-0.5 rounded border border-white/10">
                    ID: {editingPhotoModal.id}
                  </span>
                </div>
                <button
                  onClick={() => setEditingPhotoModal(null)}
                  className="text-slate-400 hover:text-white p-1"
                >
                  ✕
                </button>
              </div>

              {/* Photo Preview */}
              <div className="h-36 rounded-xl overflow-hidden bg-slate-950 flex items-center justify-center border border-white/10">
                <img src={editingPhotoModal.img} alt="Preview" className="h-full object-contain" />
              </div>

              <div className="space-y-3 max-h-[50vh] overflow-y-auto pr-1">
                <div>
                  <label className="block text-[11px] font-mono text-teal-300 mb-1">
                    Judul Bahasa Indonesia (`titleId`):
                  </label>
                  <input
                    type="text"
                    value={editingPhotoModal.titleId || ''}
                    onChange={(e) =>
                      setEditingPhotoModal({ ...editingPhotoModal, titleId: e.target.value })
                    }
                    className="w-full rounded-xl bg-slate-900 border border-white/10 p-2.5 text-xs text-slate-100 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-teal-300 mb-1">
                    Judul Bahasa Inggris (`titleEn`):
                  </label>
                  <input
                    type="text"
                    value={editingPhotoModal.titleEn || ''}
                    onChange={(e) =>
                      setEditingPhotoModal({ ...editingPhotoModal, titleEn: e.target.value })
                    }
                    className="w-full rounded-xl bg-slate-900 border border-white/10 p-2.5 text-xs text-slate-100 focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-teal-300 mb-1">
                    Deskripsi Bahasa Indonesia (`descId`):
                  </label>
                  <textarea
                    rows={3}
                    value={editingPhotoModal.descId || ''}
                    onChange={(e) =>
                      setEditingPhotoModal({ ...editingPhotoModal, descId: e.target.value })
                    }
                    className="w-full rounded-xl bg-slate-900 border border-white/10 p-2.5 text-xs text-slate-100 focus:outline-none focus:border-amber-400 leading-relaxed"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-teal-300 mb-1">
                    Deskripsi Bahasa Inggris (`descEn`):
                  </label>
                  <textarea
                    rows={3}
                    value={editingPhotoModal.descEn || ''}
                    onChange={(e) =>
                      setEditingPhotoModal({ ...editingPhotoModal, descEn: e.target.value })
                    }
                    className="w-full rounded-xl bg-slate-900 border border-white/10 p-2.5 text-xs text-slate-100 focus:outline-none focus:border-amber-400 leading-relaxed"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-mono text-teal-300 mb-1">Tanggal / Bulan:</label>
                    <input
                      type="text"
                      value={editingPhotoModal.date || ''}
                      onChange={(e) =>
                        setEditingPhotoModal({ ...editingPhotoModal, date: e.target.value })
                      }
                      className="w-full rounded-xl bg-slate-900 border border-white/10 p-2 text-xs text-slate-100 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-mono text-teal-300 mb-1">Tag Kategori:</label>
                    <input
                      type="text"
                      value={editingPhotoModal.tag || ''}
                      onChange={(e) =>
                        setEditingPhotoModal({ ...editingPhotoModal, tag: e.target.value })
                      }
                      className="w-full rounded-xl bg-slate-900 border border-white/10 p-2 text-xs text-slate-100 focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between gap-3 pt-3 border-t border-white/10">
                {/* Left: Delete Button */}
                <button
                  onClick={() => handleDeletePhoto(editingPhotoModal.id)}
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-red-900/40 hover:bg-red-600/50 text-red-300 hover:text-red-100 text-xs font-mono font-bold border border-red-500/30 hover:border-red-400/60 transition-all"
                >
                  🗑️ Hapus Foto Ini
                </button>

                {/* Right: Cancel & Save */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setEditingPhotoModal(null)}
                    className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-mono hover:bg-slate-700"
                  >
                    Batal
                  </button>
                  <button
                    onClick={handleSavePhotoEdit}
                    className="px-5 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-mono font-bold shadow-md shadow-amber-400/20"
                  >
                    Update Teks Foto Ini
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Photo Detail Modal Lightbox (Normal View) */}
      <AnimatePresence>
        {selectedPhoto && !editingPhotoModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
            className="fixed inset-0 z-[200] bg-slate-950/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0b0f1f] border border-teal-500/30 rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl space-y-0 relative"
            >
              {/* Modal Header Bar */}
              <div className="p-4 border-b border-white/10 flex items-center justify-between bg-slate-900/60">
                <div className="flex items-center gap-2">
                  <span
                    className={`text-xs font-mono font-bold px-2.5 py-0.5 rounded-full ${
                      selectedPhoto.company === 'Telkomsel'
                        ? 'bg-red-500/20 text-red-300'
                        : 'bg-blue-500/20 text-blue-300'
                    }`}
                  >
                    {selectedPhoto.company}
                  </span>
                  <span className="text-xs font-mono text-teal-300">{selectedPhoto.tag}</span>
                </div>
                <div className="flex items-center gap-2">
                  {isEditMode && (
                    <button
                      onClick={() => setEditingPhotoModal({ ...selectedPhoto })}
                      className="px-3 py-1 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 font-mono text-xs font-bold"
                    >
                      ✏️ Edit Teks Foto Ini
                    </button>
                  )}
                  <button
                    onClick={() => setSelectedPhoto(null)}
                    className="p-1 rounded-lg bg-slate-800 text-slate-400 hover:text-white"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {/* Full Image */}
              <div className="max-h-[60vh] overflow-hidden bg-slate-950 flex items-center justify-center">
                <img
                  src={selectedPhoto.img}
                  alt={isId ? selectedPhoto.titleId : selectedPhoto.titleEn}
                  className="w-full h-full object-contain max-h-[60vh]"
                />
              </div>

              {/* Caption Description Footer */}
              <div className="p-6 bg-slate-900/80 space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-slate-100 text-base">
                    {isId ? selectedPhoto.titleId : selectedPhoto.titleEn}
                  </h3>
                  <span className="text-xs font-mono text-amber-400">{selectedPhoto.date}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {isId ? selectedPhoto.descId : selectedPhoto.descEn}
                </p>
              </div>

              {/* Close Button */}
              <div className="p-4 bg-slate-950 border-t border-white/10 flex justify-end">
                <button
                  onClick={() => setSelectedPhoto(null)}
                  className="px-5 py-2 rounded-xl bg-teal-500 text-slate-950 font-semibold text-xs"
                >
                  {galleryT.closePhoto}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

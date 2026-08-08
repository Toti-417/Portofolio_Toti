import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'

export default function LiveEditorToolbar() {
  const {
    isEditMode,
    toggleEditMode,
    saveToCodeFile,
    resetTranslations,
    saveStatus,
  } = useLanguage()

  const [notification, setNotification] = useState(null)
  const [showPasswordModal, setShowPasswordModal] = useState(false)
  const [inputPassword, setInputPassword] = useState('')
  const [passwordError, setPasswordError] = useState(null)

  const handleToggleClick = () => {
    if (isEditMode) {
      // Lock / turn off edit mode
      toggleEditMode()
      setNotification('🔒 Mode Edit Dinonaktifkan (Locked)')
      setTimeout(() => setNotification(null), 3000)
    } else {
      // Prompt password modal
      setInputPassword('')
      setPasswordError(null)
      setShowPasswordModal(true)
    }
  }

  const handlePasswordSubmit = (e) => {
    e.preventDefault()
    if (inputPassword === '123') {
      setShowPasswordModal(false)
      setPasswordError(null)
      toggleEditMode()
      setNotification('🔓 Password Benar! Mode Edit Aktif.')
      setTimeout(() => setNotification(null), 4000)
    } else {
      setPasswordError('❌ Password Salah! (Password default: 123)')
    }
  }

  const handleSave = async () => {
    setNotification('Memproses simpan ke file code...')
    const result = await saveToCodeFile()
    if (result.success) {
      setNotification('✅ Tersimpan ke File Code!')
    } else {
      setNotification('❌ Gagal menyimpan: ' + result.message)
    }
    setTimeout(() => setNotification(null), 4000)
  }

  const handleReset = () => {
    if (window.confirm('Apakah Anda yakin ingin meriset semua perubahan teks kembali ke data default?')) {
      resetTranslations()
      setNotification('🔄 Teks berhasil diriset ke versi awal!')
      setTimeout(() => setNotification(null), 3000)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3 pointer-events-auto">
      {/* Toast Notification */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="px-4 py-2.5 rounded-xl bg-slate-900/95 border border-teal-500/40 text-teal-300 text-xs font-mono shadow-2xl backdrop-blur-md max-w-xs text-center"
          >
            {notification}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Dock */}
      <div className="bg-[#0b0f1f]/95 border border-teal-500/40 shadow-2xl rounded-2xl p-2.5 backdrop-blur-xl flex items-center gap-2 text-xs font-mono">
        {/* Live Edit Mode Toggle Button */}
        <button
          onClick={handleToggleClick}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-xl font-bold transition-all duration-300 ${
            isEditMode
              ? 'bg-amber-400 text-slate-950 shadow-lg shadow-amber-400/20 animate-pulse'
              : 'bg-slate-800 text-slate-300 hover:text-white border border-white/10'
          }`}
        >
          <span>{isEditMode ? '✏️ Mode Edit: ON (Active)' : '🔒 Live Edit (Pass Protected)'}</span>
        </button>

        {/* When Edit Mode is active, show Save & Reset actions */}
        <AnimatePresence>
          {isEditMode && (
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 'auto' }}
              exit={{ opacity: 0, width: 0 }}
              className="flex items-center gap-2 overflow-hidden"
            >
              {/* Save to Code File Button */}
              <button
                onClick={handleSave}
                disabled={saveStatus === 'saving'}
                className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold transition-all shadow-md shadow-teal-500/20 whitespace-nowrap"
              >
                <span>{saveStatus === 'saving' ? '⌛ Menyimpan...' : '💾 Simpan ke Code'}</span>
              </button>

              {/* Reset Button */}
              <button
                onClick={handleReset}
                className="p-2 rounded-xl bg-slate-800 hover:bg-red-500/20 text-slate-400 hover:text-red-300 border border-white/10 transition-colors"
                title="Riset Teks ke Default"
              >
                🔄
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Password Prompt Modal */}
      <AnimatePresence>
        {showPasswordModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowPasswordModal(false)}
            className="fixed inset-0 z-[10000] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#0b0f1f] border border-teal-500/40 rounded-2xl max-w-sm w-full p-6 shadow-2xl space-y-4"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <span className="text-teal-400 font-mono text-sm font-bold">🔐 Mode Edit Terkunci</span>
                </div>
                <button
                  onClick={() => setShowPasswordModal(false)}
                  className="text-slate-400 hover:text-white p-1"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handlePasswordSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-2">
                    Masukkan Password Administrator:
                  </label>
                  <input
                    type="password"
                    value={inputPassword}
                    onChange={(e) => setInputPassword(e.target.value)}
                    placeholder="Ketik password..."
                    autoFocus
                    className="w-full rounded-xl bg-slate-900 border border-white/10 p-3 text-sm text-slate-100 focus:outline-none focus:border-teal-400 font-mono"
                  />
                  {passwordError && (
                    <p className="text-red-400 text-xs font-mono mt-2 animate-bounce">
                      {passwordError}
                    </p>
                  )}
                </div>

                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setShowPasswordModal(false)}
                    className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-mono hover:bg-slate-700"
                  >
                    Batal
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-mono font-bold shadow-md shadow-teal-500/20"
                  >
                    Buka Akses (Unlock)
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

import { useState, useEffect, useRef } from 'react'
import { useLanguage } from '../context/LanguageContext'

export default function EditableText({
  path,
  value,
  as: Component = 'span',
  className = '',
  multiline = false,
  children,
  ...props
}) {
  const { isEditMode, updateTranslation } = useLanguage()
  const [isEditingModal, setIsEditingModal] = useState(false)
  const [localVal, setLocalVal] = useState(value || '')

  useEffect(() => {
    setLocalVal(value || '')
  }, [value])

  if (!isEditMode) {
    return (
      <Component className={className} {...props}>
        {children !== undefined ? children : value}
      </Component>
    )
  }

  const handleSaveModal = () => {
    updateTranslation(path, localVal)
    setIsEditingModal(false)
  }

  return (
    <>
      <Component
        onClick={(e) => {
          e.stopPropagation()
          setIsEditingModal(true)
        }}
        className={`${className} relative cursor-pointer outline-dashed outline-2 outline-amber-400/60 rounded px-1 hover:outline-amber-400 hover:bg-amber-400/10 transition-all inline-block group/edit`}
        title={`Klik untuk edit teks [${path}]`}
        {...props}
      >
        {children !== undefined ? children : value}
        <span className="opacity-0 group-hover/edit:opacity-100 transition-opacity absolute -top-3 -right-3 bg-amber-400 text-slate-950 font-mono text-[9px] font-bold px-1.5 py-0.5 rounded shadow z-50 pointer-events-none">
          ✏️ Edit
        </span>
      </Component>

      {/* Edit Modal Popup */}
      {isEditingModal && (
        <div
          onClick={(e) => {
            e.stopPropagation()
            setIsEditingModal(false)
          }}
          className="fixed inset-0 z-[10000] bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#0b0f1f] border border-amber-400/40 rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-4"
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-amber-400 font-mono text-xs font-bold">✏️ Edit Live Web</span>
                <span className="text-slate-400 font-mono text-[10px] bg-slate-900 px-2 py-0.5 rounded border border-white/10">
                  {path}
                </span>
              </div>
              <button
                onClick={() => setIsEditingModal(false)}
                className="text-slate-400 hover:text-white p-1"
              >
                ✕
              </button>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-300 mb-2">
                Ubah Isi Teks / Content Text:
              </label>
              {multiline ? (
                <textarea
                  value={localVal}
                  onChange={(e) => setLocalVal(e.target.value)}
                  rows={5}
                  className="w-full rounded-xl bg-slate-900 border border-white/10 p-3 text-sm text-slate-100 focus:outline-none focus:border-amber-400 font-sans leading-relaxed"
                />
              ) : (
                <input
                  type="text"
                  value={localVal}
                  onChange={(e) => setLocalVal(e.target.value)}
                  className="w-full rounded-xl bg-slate-900 border border-white/10 p-3 text-sm text-slate-100 focus:outline-none focus:border-amber-400 font-sans"
                />
              )}
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setIsEditingModal(false)}
                className="px-4 py-2 rounded-xl bg-slate-800 text-slate-300 text-xs font-mono hover:bg-slate-700"
              >
                Batal
              </button>
              <button
                onClick={handleSaveModal}
                className="px-5 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-mono font-bold shadow-md shadow-amber-400/20"
              >
                Simpan Perubahan Teks
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

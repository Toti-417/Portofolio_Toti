import { motion } from 'framer-motion'

export default function TerminalWindow({ title = 'bash', children, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 0.84, 0.44, 1] }}
      className={`bg-terminal-surface/80 border border-terminal-border rounded-lg backdrop-blur-sm overflow-hidden ${className}`}
    >
      {/* Title bar */}
      <div className="flex items-center h-8 px-3 bg-terminal-elevated/80 border-b border-terminal-border">
        <div className="flex gap-1.5 mr-4">
          <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
        </div>
        <span className="text-[11px] text-comment">{title}</span>
      </div>

      {/* Terminal body */}
      <div className="p-4 terminal-body" data-cursor="text">
        {children}
      </div>
    </motion.div>
  )
}

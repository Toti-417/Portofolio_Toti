export default function CodeBlock({ children, language = 'javascript' }) {
  return (
    <pre className="bg-terminal-bg/60 border border-terminal-border rounded p-3 overflow-x-auto text-[13px] leading-relaxed" data-cursor="text">
      <code>{children}</code>
    </pre>
  )
}

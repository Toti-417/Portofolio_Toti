import { useState, useEffect, useRef } from 'react'

export default function TerminalPrompt({ command, delay = 0, onComplete, speed = 40 }) {
  const [displayedText, setDisplayedText] = useState('')
  const [showCursor, setShowCursor] = useState(false)
  const [isDone, setIsDone] = useState(false)
  const indexRef = useRef(0)

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setShowCursor(true)
      const interval = setInterval(() => {
        if (indexRef.current < command.length) {
          setDisplayedText(command.slice(0, indexRef.current + 1))
          indexRef.current++
        } else {
          clearInterval(interval)
          setIsDone(true)
          if (onComplete) onComplete()
        }
      }, speed)

      return () => clearInterval(interval)
    }, delay)

    return () => clearTimeout(startTimer)
  }, [command, delay, speed, onComplete])

  return (
    <div className="flex items-center gap-2 mb-2">
      <span className="text-green glow-green">toti@portfolio</span>
      <span className="text-comment">:</span>
      <span className="text-cyan">~</span>
      <span className="text-text">$</span>
      <span className="text-amber ml-1">
        {displayedText}
        {showCursor && !isDone && (
          <span className="cursor-blink text-green">▊</span>
        )}
      </span>
    </div>
  )
}

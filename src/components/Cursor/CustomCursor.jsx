import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const springConfig = { damping: 28, stiffness: 350, mass: 0.4 }
  const smoothX = useSpring(cursorX, springConfig)
  const smoothY = useSpring(cursorY, springConfig)

  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const handleMouseDown = () => {
      setIsClicked(true)
      setTimeout(() => setIsClicked(false), 150)
    }

    const handleMouseOver = (e) => {
      const target = e.target
      if (target.closest('a, button, input, textarea, [data-cursor="pointer"]')) {
        setIsHovered(true)
      } else {
        setIsHovered(false)
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [cursorX, cursorY])

  return (
    <>
      {/* Precision Center Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-teal-400 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 shadow-[0_0_10px_rgba(45,212,191,0.8)]"
        style={{ x: cursorX, y: cursorY }}
      />

      {/* Smooth Ambient Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-teal-400/40 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2"
        style={{ x: smoothX, y: smoothY }}
        animate={{
          width: isHovered ? 44 : isClicked ? 18 : 26,
          height: isHovered ? 44 : isClicked ? 18 : 26,
          backgroundColor: isHovered ? 'rgba(45, 212, 191, 0.08)' : 'transparent',
          borderColor: isHovered ? 'rgba(45, 212, 191, 0.6)' : 'rgba(45, 212, 191, 0.3)',
        }}
        transition={{ type: 'spring', damping: 24, stiffness: 300 }}
      />
    </>
  )
}

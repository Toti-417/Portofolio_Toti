import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'

function AmbientParticles({ count = 90 }) {
  const meshRef = useRef()
  const lineRef = useRef()

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const velocities = []
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 18
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6
      velocities.push({
        x: (Math.random() - 0.5) * 0.003,
        y: (Math.random() - 0.5) * 0.003,
        z: (Math.random() - 0.5) * 0.002,
      })
    }
    return { positions, velocities }
  }, [count])

  const linePositions = useMemo(() => new Float32Array(count * count * 6), [count])

  useFrame(() => {
    if (!meshRef.current) return
    const posArr = meshRef.current.geometry.attributes.position.array

    for (let i = 0; i < count; i++) {
      posArr[i * 3] += particles.velocities[i].x
      posArr[i * 3 + 1] += particles.velocities[i].y
      posArr[i * 3 + 2] += particles.velocities[i].z

      if (Math.abs(posArr[i * 3]) > 9) particles.velocities[i].x *= -1
      if (Math.abs(posArr[i * 3 + 1]) > 6) particles.velocities[i].y *= -1
      if (Math.abs(posArr[i * 3 + 2]) > 3) particles.velocities[i].z *= -1
    }
    meshRef.current.geometry.attributes.position.needsUpdate = true

    if (!lineRef.current) return
    let lineIndex = 0
    const maxDist = 2.8

    for (let i = 0; i < count; i++) {
      for (let j = i + 1; j < count; j++) {
        const dx = posArr[i * 3] - posArr[j * 3]
        const dy = posArr[i * 3 + 1] - posArr[j * 3 + 1]
        const dz = posArr[i * 3 + 2] - posArr[j * 3 + 2]
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz)

        if (dist < maxDist && lineIndex < linePositions.length - 6) {
          linePositions[lineIndex++] = posArr[i * 3]
          linePositions[lineIndex++] = posArr[i * 3 + 1]
          linePositions[lineIndex++] = posArr[i * 3 + 2]
          linePositions[lineIndex++] = posArr[j * 3]
          linePositions[lineIndex++] = posArr[j * 3 + 1]
          linePositions[lineIndex++] = posArr[j * 3 + 2]
        }
      }
    }

    for (let i = lineIndex; i < linePositions.length; i++) {
      linePositions[i] = 0
    }

    lineRef.current.geometry.attributes.position.array = linePositions
    lineRef.current.geometry.attributes.position.needsUpdate = true
    lineRef.current.geometry.setDrawRange(0, lineIndex / 3)
  })

  return (
    <>
      <points ref={meshRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={count}
            array={particles.positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.035}
          color="#2dd4bf"
          transparent
          opacity={0.5}
          sizeAttenuation
          depthWrite={false}
        />
      </points>

      <lineSegments ref={lineRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={linePositions.length / 3}
            array={linePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#38bdf8"
          transparent
          opacity={0.06}
          depthWrite={false}
        />
      </lineSegments>
    </>
  )
}

export default function ParticleField() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-70">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
      >
        <AmbientParticles />
      </Canvas>
    </div>
  )
}

import { useEffect, useRef } from 'react'

/**
 * Interactive WebGL Fluid Smoke & Liquid Marble Shader Background
 * Features:
 * - Real-time GPU domain warping (fBm curl noise fluid simulation)
 * - Mouse reactive ripple and vortex disturbance
 * - High-definition 3D normal lighting for viscous liquid sheen
 * - Adaptive performance scaling with devicePixelRatio limit
 */
export default function ParticleField() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl = canvas.getContext('webgl', {
      powerPreference: 'high-performance',
      alpha: false,
      depth: false,
      stencil: false,
      antialias: false,
    })

    if (!gl) return

    // Vertex Shader: full-screen quad
    const vsSource = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `

    // Fragment Shader: 3D viscous fluid marble / smoke shader with mouse vorticity
    const fsSource = `
      precision highp float;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;
      uniform vec2 u_mouse_vel;
      uniform float u_time;

      // 2D Hash
      vec2 hash2(vec2 p) {
        return fract(sin(vec2(dot(p, vec2(127.1, 311.7)), dot(p, vec2(269.5, 183.3)))) * 43758.5453);
      }

      // Value noise
      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(
          mix(dot(hash2(i + vec2(0.0, 0.0)) - 0.5, f - vec2(0.0, 0.0)),
              dot(hash2(i + vec2(1.0, 0.0)) - 0.5, f - vec2(1.0, 0.0)), u.x),
          mix(dot(hash2(i + vec2(0.0, 1.0)) - 0.5, f - vec2(0.0, 1.0)),
              dot(hash2(i + vec2(1.0, 1.0)) - 0.5, f - vec2(1.0, 1.0)), u.x),
          u.y
        );
      }

      // Fractional Brownian Motion (fBm)
      float fbm(vec2 p) {
        float v = 0.0;
        float a = 0.5;
        mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.5));
        for (int i = 0; i < 5; i++) {
          v += a * noise(p);
          p = rot * p * 2.02 + vec2(1.2, 0.8);
          a *= 0.5;
        }
        return v;
      }

      void main() {
        vec2 st = gl_FragCoord.xy / u_resolution.xy;
        float aspect = u_resolution.x / u_resolution.y;
        vec2 p = st * vec2(aspect, 1.0) * 1.8;

        // Mouse interaction wave
        vec2 mouseCoord = u_mouse * vec2(aspect, 1.0) * 1.8;
        vec2 toMouse = p - mouseCoord;
        float distToMouse = length(toMouse);
        float mousePush = exp(-distToMouse * 3.5);
        vec2 mouseVorticity = vec2(-toMouse.y, toMouse.x) * mousePush * 0.45;
        vec2 mouseVelPush = u_mouse_vel * mousePush * 0.8;

        float t = u_time * 0.09;

        // Domain Warping Step 1
        vec2 q = vec2(
          fbm(p + vec2(0.0, 0.0) + vec2(t * 0.5, t * 0.2)),
          fbm(p + vec2(5.2, 1.3) + vec2(-t * 0.3, t * 0.4))
        );

        // Domain Warping Step 2 (with mouse dynamic injection)
        vec2 r = vec2(
          fbm(p + 3.0 * q + vec2(1.7, 9.2) + 0.15 * t + mouseVorticity + mouseVelPush),
          fbm(p + 3.0 * q + vec2(8.3, 2.8) + 0.12 * t - mouseVorticity)
        );

        // Core fluid density
        float f = fbm(p + 3.2 * r);

        // Normal estimation for 3D liquid sheen
        float eps = 0.008;
        float f_dx = fbm(p + vec2(eps, 0.0) + 3.2 * r) - f;
        float f_dy = fbm(p + vec2(0.0, eps) + 3.2 * r) - f;
        vec3 normal = normalize(vec3(-f_dx, -f_dy, eps * 1.6));
        vec3 lightDir = normalize(vec3(0.3, 0.6, 1.0));
        float diffuse = max(dot(normal, lightDir), 0.0);
        float specular = pow(max(dot(reflect(-lightDir, normal), vec3(0.0, 0.0, 1.0)), 0.0), 16.0);

        // Luxurious Emerald & Teal Palette (Toti Telecom & Gonzalo Inspired)
        vec3 c_deep    = vec3(0.012, 0.03, 0.05);    // #03080e Deepest space navy
        vec3 c_forest  = vec3(0.01, 0.17, 0.13);     // #032b21 Dark forest teal
        vec3 c_emerald = vec3(0.00, 0.62, 0.44);     // #009e70 Rich emerald
        vec3 c_teal    = vec3(0.05, 0.82, 0.72);     // #0dd1b8 Vivid cyan-teal
        vec3 c_bright  = vec3(0.55, 1.00, 0.88);     // #8cffe0 Bioluminescent mint highlight

        // Color blending across fluid density and warped domains
        vec3 col = mix(c_deep, c_forest, clamp((f * f) * 4.0, 0.0, 1.0));
        col = mix(col, c_emerald, clamp(length(q) * 0.9, 0.0, 1.0));
        col = mix(col, c_teal, clamp(length(r.x) * 1.15, 0.0, 1.0));
        col += c_bright * pow(clamp(f + 0.25, 0.0, 1.0), 3.5) * 0.75;

        // Apply 3D specular highlight and diffuse depth
        col += vec3(0.35, 0.95, 0.85) * specular * 0.45;
        col *= (0.65 + 0.35 * diffuse);

        // Subtle vignette for cinematic depth
        float vignette = smoothstep(1.5, 0.4, length((st - 0.5) * vec2(aspect, 1.0)));
        col *= (0.55 + 0.45 * vignette);

        // Slight overall exposure boost
        col = pow(col, vec3(0.92));

        gl_FragColor = vec4(col, 1.0);
      }
    `;

    function createShader(gl, type, source) {
      const shader = gl.createShader(type)
      gl.shaderSource(shader, source)
      gl.compileShader(shader)
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error('Shader compile error:', gl.getShaderInfoLog(shader))
        gl.deleteShader(shader)
        return null
      }
      return shader
    }

    const vs = createShader(gl, gl.VERTEX_SHADER, vsSource)
    const fs = createShader(gl, gl.FRAGMENT_SHADER, fsSource)
    if (!vs || !fs) return

    const program = gl.createProgram()
    gl.attachShader(program, vs)
    gl.attachShader(program, fs)
    gl.linkProgram(program)

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program link error:', gl.getProgramInfoLog(program))
      return
    }

    gl.useProgram(program)

    // Full screen quad buffer
    const positionBuffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer)
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    )

    const posAttr = gl.getAttribLocation(program, 'position')
    gl.enableVertexAttribArray(posAttr)
    gl.vertexAttribPointer(posAttr, 2, gl.FLOAT, false, 0, 0)

    const uResLoc = gl.getUniformLocation(program, 'u_resolution')
    const uMouseLoc = gl.getUniformLocation(program, 'u_mouse')
    const uMouseVelLoc = gl.getUniformLocation(program, 'u_mouse_vel')
    const uTimeLoc = gl.getUniformLocation(program, 'u_time')

    let width = 0
    let height = 0
    let mouse = { x: 0.5, y: 0.5 }
    let targetMouse = { x: 0.5, y: 0.5 }
    let mouseVel = { x: 0, y: 0 }
    let lastMousePos = { x: 0.5, y: 0.5 }

    function resize() {
      // Limit pixel ratio to 1.5 to guarantee high performance on 4K / retina
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
      width = Math.floor(window.innerWidth * dpr)
      height = Math.floor(window.innerHeight * dpr)
      canvas.width = width
      canvas.height = height
      gl.viewport(0, 0, width, height)
    }

    resize()
    window.addEventListener('resize', resize)

    const handleMouseMove = (e) => {
      targetMouse.x = e.clientX / window.innerWidth
      targetMouse.y = 1.0 - e.clientY / window.innerHeight
    }

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        targetMouse.x = e.touches[0].clientX / window.innerWidth
        targetMouse.y = 1.0 - e.touches[0].clientY / window.innerHeight
      }
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('touchmove', handleTouchMove, { passive: true })

    let animId
    const startTime = performance.now()

    function render(now) {
      const elapsed = (now - startTime) * 0.001

      // Smooth mouse lerping
      mouse.x += (targetMouse.x - mouse.x) * 0.06
      mouse.y += (targetMouse.y - mouse.y) * 0.06

      // Calculate velocity
      const vx = (targetMouse.x - lastMousePos.x) * 4.0
      const vy = (targetMouse.y - lastMousePos.y) * 4.0
      mouseVel.x += (vx - mouseVel.x) * 0.1
      mouseVel.y += (vy - mouseVel.y) * 0.1
      lastMousePos.x = targetMouse.x
      lastMousePos.y = targetMouse.y

      gl.uniform2f(uResLoc, width, height)
      gl.uniform2f(uMouseLoc, mouse.x, mouse.y)
      gl.uniform2f(uMouseVelLoc, mouseVel.x, mouseVel.y)
      gl.uniform1f(uTimeLoc, elapsed)

      gl.drawArrays(gl.TRIANGLES, 0, 6)
      animId = requestAnimationFrame(render)
    }

    animId = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('touchmove', handleTouchMove)
      gl.deleteProgram(program)
      gl.deleteShader(vs)
      gl.deleteShader(fs)
      gl.deleteBuffer(positionBuffer)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ display: 'block' }}
    />
  )
}

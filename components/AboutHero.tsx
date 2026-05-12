'use client'
import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

export default function AboutHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      life: number
      maxLife: number
    }> = []

    const createParticle = () => {
      const angle = Math.random() * Math.PI * 2
      const speed = 0.3 + Math.random() * 0.5
      return {
        x: canvas.width / 2 + (Math.random() - 0.5) * 200,
        y: canvas.height / 2 + (Math.random() - 0.5) * 200,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 0,
        maxLife: 60 + Math.random() * 40,
      }
    }

    for (let i = 0; i < 40; i++) {
      particles.push(createParticle())
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // 绘制粒子
      particles.forEach((p, i) => {
        p.life++
        p.x += p.vx
        p.y += p.vy

        const alpha = 1 - p.life / p.maxLife
        const size = 1 + (p.life / p.maxLife) * 2

        // 渐变色：蓝紫色到青蓝
        const hue = 200 + (p.life / p.maxLife) * 60
        ctx.fillStyle = `hsla(${hue}, 100%, 60%, ${alpha * 0.6})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2)
        ctx.fill()

        // 重生
        if (p.life > p.maxLife) {
          particles[i] = createParticle()
        }
      })

      requestAnimationFrame(animate)
    }

    // 定期添加新粒子
    const interval = setInterval(() => {
      if (particles.length < 80) {
        particles.push(createParticle())
      }
    }, 50)

    animate()

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-slate-900 via-violet-950/30 to-slate-900">
      {/* 背景渐变 */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-cyan-600/20 blur-3xl" />
      </div>

      {/* 粒子背景 */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-10"
      />

      {/* 网格背景 */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(0deg, transparent 24%, rgba(139, 92, 246, 0.05) 25%, rgba(139, 92, 246, 0.05) 26%, transparent 27%, transparent 74%, rgba(139, 92, 246, 0.05) 75%, rgba(139, 92, 246, 0.05) 76%, transparent 77%, transparent),
            linear-gradient(90deg, transparent 24%, rgba(139, 92, 246, 0.05) 25%, rgba(139, 92, 246, 0.05) 26%, transparent 27%, transparent 74%, rgba(139, 92, 246, 0.05) 75%, rgba(139, 92, 246, 0.05) 76%, transparent 77%, transparent)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* 内容 */}
      <div className="relative z-20 flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="space-y-6"
        >
          {/* 副标题 */}
          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.05 }}
          >
            <p className="text-sm font-medium uppercase tracking-[0.15em] bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              探索世界 · 持续进步
            </p>
          </motion.div>

          {/* 大标题 */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white drop-shadow-2xl"
          >
            Rye Young
          </motion.h1>

          {/* 描述 */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto max-w-2xl text-lg md:text-xl text-gray-300/80 leading-relaxed"
          >
            一名热衷于前端工程化的开发者，将技术转化为优雅的产品级解决方案
          </motion.p>

          {/* 发光按钮 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-4 justify-center items-center pt-4"
          >
            <motion.a
              href="#story"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-violet-600 to-purple-600 text-white font-medium shadow-lg shadow-violet-500/50 hover:shadow-xl hover:shadow-violet-500/70 transition"
            >
              探索我的故事
            </motion.a>
            <motion.a
              href="#skills"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full border border-cyan-400/50 text-cyan-300 font-medium hover:bg-cyan-400/10 transition backdrop-blur"
            >
              技能与特长
            </motion.a>
          </motion.div>
        </motion.div>

        {/* 向下箭头 */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <svg className="w-6 h-6 text-violet-400/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}

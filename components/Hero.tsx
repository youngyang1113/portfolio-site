'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'
import GlobeContainer from './GlobeContainer'

export default function Hero() {
  return (
    <section className="relative z-10 flex min-h-[calc(100vh-3.5rem)] flex-col lg:min-h-[calc(100vh-4rem)]">
      <div className="relative z-20 flex flex-1 flex-col justify-center px-6 pb-10 pt-12 lg:px-10">
        <div className="mx-auto w-full max-w-3xl text-center lg:max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[11px] font-medium uppercase tracking-[0.35em] text-pink-200/55"
          >
            前端开发 / 开源 / 产品级交付
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.05 }}
            className="mt-8 text-[clamp(2.25rem,6vw,3.75rem)] font-semibold leading-[1.08] tracking-tight text-white drop-shadow-[0_2px_24px_rgba(0,0,0,0.35)]"
          >
            Rye Young
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.12 }}
            className="mx-auto mt-6 max-w-xl text-[15px] leading-relaxed text-white/65 md:text-lg"
          >
            将技术落地为可复用、易维护的方案；以 Official Live Page、Easy Lab 等开源项目服务开发者与团队。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.22 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3 md:gap-4"
          >
            <Link
              href="/projects"
              className="inline-flex h-11 min-w-[140px] items-center justify-center rounded-full bg-white/95 px-7 text-sm font-medium text-violet-950 shadow-[0_8px_32px_rgba(244,114,182,0.25)] transition hover:bg-white"
            >
              开源项目
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-11 min-w-[140px] items-center justify-center rounded-full border border-white/20 bg-white/[0.06] px-7 text-sm text-white/90 backdrop-blur-md transition hover:border-white/30 hover:bg-white/[0.1]"
            >
              联系
            </Link>
            <Link
              href="/about"
              className="inline-flex h-11 items-center justify-center px-5 text-sm text-white/45 transition hover:text-white/80"
            >
              关于我 →
            </Link>
          </motion.div>
        </div>
      </div>

      {/* 地球：柔光环 + 星云映衬，无额外标注点 */}
      <div className="relative z-10 mt-auto flex justify-center px-6 pb-14 pt-4 lg:px-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="relative mx-auto aspect-square w-full max-w-[400px] min-h-[260px] sm:max-w-[420px]"
        >
          <div
            className="pointer-events-none absolute -inset-[12%] rounded-full opacity-70 blur-3xl"
            style={{
              background:
                'radial-gradient(circle at 40% 35%, rgba(244, 114, 182, 0.35), transparent 55%), radial-gradient(circle at 65% 60%, rgba(129, 140, 248, 0.3), transparent 50%)',
            }}
          />
          <div className="relative h-full w-full overflow-hidden rounded-full shadow-[0_0_0_1px_rgba(255,255,255,0.12),0_24px_80px_rgba(88,28,135,0.35),inset_0_0_60px_rgba(255,255,255,0.06)]">
            <div className="pointer-events-none absolute inset-0 z-[1] rounded-full bg-gradient-to-b from-white/[0.07] via-transparent to-purple-950/25" />
            <GlobeContainer className="rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

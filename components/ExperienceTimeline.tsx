'use client'
import { motion } from 'framer-motion'

const events = [
  {
    year: '2024',
    title: 'Official Live Page',
    detail: '推出轻量化官网 / 直播页模板，强调响应式、模块化与易定制，服务开发者与团队快速建站。',
  },
  {
    year: '2025',
    title: 'Easy Lab',
    detail: '搭建前端工程化实验室，沉淀通用组件、工具函数与工具链实践，降低高频场景的开发门槛。',
  },
  {
    year: '2026',
    title: '开源与产品级交付',
    detail: '持续维护核心仓库与个人品牌站，坚持简洁、高效、易用，打磨可复用方案与用户体验。',
  },
]

export default function ExperienceTimeline() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="border border-white/[0.08] bg-white/[0.03] p-8 md:p-10"
    >
      <h2 className="text-lg font-medium text-white">开源与实践</h2>
      <div className="mt-10 space-y-10">
        {events.map((item) => (
          <div key={item.year} className="flex gap-6 md:gap-10">
            <div className="w-16 shrink-0 pt-0.5 text-[11px] font-medium uppercase tracking-[0.18em] text-accent/65 md:w-20">{item.year}</div>
            <div className="min-w-0 border-l border-white/[0.1] pl-6 md:pl-8">
              <h3 className="text-base font-medium text-white">{item.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-gray-400">{item.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

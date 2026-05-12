'use client'
import { motion } from 'framer-motion'

const stories = [
  {
    title: '初心',
    description:
      '2020年，我开始学习前端开发。从零基础到第一个项目上线，每一行代码都承载着对技术的热情。',
    icon: '✨',
  },
  {
    title: '成长',
    description: '在工程化实践中逐步深化理解，从业务代码积累出可复用的工具与最佳实践，形成个人的技术体系。',
    icon: '🚀',
  },
  {
    title: '开源',
    description: '通过 Official Live Page、Easy Lab 等项目，将沉淀分享给社区，赋能更多开发者。',
    icon: '🌟',
  },
  {
    title: '未来',
    description: '继续探索前端边界，打磨产品体验，构建高质量的工程生态，成为值得信赖的技术伙伴。',
    icon: '🎯',
  },
]

export default function StorySection() {
  return (
    <section id="story" className="relative py-20 md:py-32 px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-sm font-medium uppercase tracking-[0.15em] text-violet-400/70 mb-3">
            我的故事
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">成长的足迹</h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            从学习者到实践者，从个人项目到开源贡献，每个阶段都是一段有意义的旅程
          </p>
        </motion.div>

        {/* 故事卡片 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative p-6 rounded-2xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-sm hover:border-violet-500/50 hover:bg-white/[0.06] transition-all duration-300"
            >
              {/* 发光效果 */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-violet-500/0 to-violet-500/0 group-hover:from-violet-500/10 group-hover:to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              {/* 背景光点 */}
              <div className="absolute top-0 right-0 w-20 h-20 rounded-full bg-violet-500/20 blur-3xl -z-10 group-hover:bg-violet-500/30 transition" />

              <div className="relative z-10">
                <div className="text-4xl mb-4">{story.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{story.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{story.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

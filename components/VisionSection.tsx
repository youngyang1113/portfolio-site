'use client'
import { motion } from 'framer-motion'

const visions = [
  {
    title: '深化开源贡献',
    description: '打造更多高质量的开源项目，建立完整的技术生态，赋能开发者社区',
    icon: '🌍',
  },
  {
    title: '前端体验创新',
    description: '探索新型交互范式，利用 AI/WebGL 等前沿技术，创造让人惊艳的用户体验',
    icon: '🚀',
  },
  {
    title: '工程化最佳实践',
    description: '系统化的工程方法论分享，帮助团队建立高效、可维护的开发流程',
    icon: '⚙️',
  },
  {
    title: '技术布道者',
    description: '通过博客、分享会、开源等方式传播知识，推动前端技术发展与生态繁荣',
    icon: '🎓',
  },
]

export default function VisionSection() {
  return (
    <section className="relative py-20 md:py-32 px-6 lg:px-10 overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl relative z-10">
        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-sm font-medium uppercase tracking-[0.15em] text-cyan-400/70 mb-3">
            未来方向
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">我的愿景</h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            不仅追求代码质量，更致力于创造价值、引领行业、共享知识
          </p>
        </motion.div>

        {/* 愿景卡片 */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {visions.map((vision, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -6 }}
              className="group relative p-8 md:p-10 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/[0.1] hover:border-cyan-400/50 backdrop-blur-md transition-all"
            >
              {/* 背景光晕 */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-transparent pointer-events-none" />
              </div>

              {/* 内容 */}
              <div className="relative z-10">
                {/* 图标 */}
                <motion.div
                  className="text-5xl mb-4 group-hover:scale-125 transition-transform origin-left"
                  whileHover={{ rotate: 15 }}
                >
                  {vision.icon}
                </motion.div>

                {/* 分隔线 */}
                <div className="h-1 w-12 bg-gradient-to-r from-violet-500 to-cyan-500 mb-4 group-hover:w-16 transition-all" />

                {/* 标题 */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition">
                  {vision.title}
                </h3>

                {/* 描述 */}
                <p className="text-gray-400 leading-relaxed">
                  {vision.description}
                </p>
              </div>

              {/* 装饰角 */}
              <div className="absolute top-0 right-0 w-20 h-20 rounded-full bg-violet-500/10 group-hover:bg-violet-500/20 blur-2xl transition pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* 额外的激励文案 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 md:mt-20 p-8 md:p-12 rounded-3xl bg-gradient-to-r from-violet-500/10 via-purple-500/5 to-cyan-500/10 border border-white/[0.15] text-center backdrop-blur-md"
        >
          <p className="text-xl md:text-2xl font-semibold text-white leading-relaxed">
            相信技术可以改变世界，每一行代码都是对未来的承诺 ✨
          </p>
          <p className="mt-4 text-gray-400">
            让我们一起构建更好的前端生态
          </p>
        </motion.div>
      </div>
    </section>
  )
}

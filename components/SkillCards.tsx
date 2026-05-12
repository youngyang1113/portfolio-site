'use client'
import { motion } from 'framer-motion'

const skillCategories = [
  {
    category: '前端框架',
    icon: '⚡',
    color: 'from-blue-500 to-cyan-500',
    skills: ['React', 'Next.js', 'TypeScript', 'Vue.js'],
  },
  {
    category: '工程化',
    icon: '🛠️',
    color: 'from-violet-500 to-purple-500',
    skills: ['Webpack', 'Vite', 'Node.js', '模块打包'],
  },
  {
    category: '样式与设计',
    icon: '🎨',
    color: 'from-pink-500 to-rose-500',
    skills: ['Tailwind CSS', 'CSS 动画', 'UI/UX', '响应式设计'],
  },
  {
    category: '交互体验',
    icon: '✨',
    color: 'from-amber-500 to-orange-500',
    skills: ['Framer Motion', 'GSAP', 'Three.js', '动画设计'],
  },
  {
    category: '开源贡献',
    icon: '🌟',
    color: 'from-green-500 to-emerald-500',
    skills: ['GitHub', '社区活跃', '开源维护', '技术分享'],
  },
  {
    category: '其他技能',
    icon: '🎯',
    color: 'from-indigo-500 to-blue-500',
    skills: ['性能优化', 'SEO', '跨端适配', '可访问性'],
  },
]

export default function SkillCards() {
  return (
    <section id="skills" className="relative py-20 md:py-32 px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        {/* 背景装饰 */}
        <div className="absolute top-10 right-0 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-0 w-96 h-96 rounded-full bg-violet-500/10 blur-3xl pointer-events-none" />

        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20 relative z-10"
        >
          <p className="text-sm font-medium uppercase tracking-[0.15em] text-cyan-400/70 mb-3">
            核心能力
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">技能特长</h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            多维度的技术积累与实践，不断突破专业领域的边界
          </p>
        </motion.div>

        {/* 技能卡片网格 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {skillCategories.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              whileHover={{ y: -12, scale: 1.03 }}
              className="group relative h-full"
            >
              {/* 卡片 */}
              <div
                className={`h-full p-6 md:p-8 rounded-2xl backdrop-blur-md border border-white/[0.1] bg-gradient-to-br from-white/[0.08] to-white/[0.02] hover:from-white/[0.12] hover:to-white/[0.06] transition-all duration-300 overflow-hidden`}
              >
                {/* 背景渐变 */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                />

                {/* 顶部高光 */}
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-32 h-16 bg-white/5 blur-2xl group-hover:bg-white/10 transition opacity-0 group-hover:opacity-100 pointer-events-none" />

                {/* 内容 */}
                <div className="relative z-10">
                  {/* 图标和标题 */}
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={`text-4xl group-hover:scale-110 transition-transform`}
                    >
                      {item.icon}
                    </span>
                    <h3 className={`text-lg md:text-xl font-semibold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                      {item.category}
                    </h3>
                  </div>

                  {/* 分隔线 */}
                  <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-4" />

                  {/* 技能列表 */}
                  <div className="space-y-2">
                    {item.skills.map((skill, i) => (
                      <motion.p
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + i * 0.05 }}
                        className="text-sm text-gray-300/80 flex items-center gap-2 hover:text-white transition"
                      >
                        <span className="w-1 h-1 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400" />
                        {skill}
                      </motion.p>
                    ))}
                  </div>
                </div>

                {/* 悬停时的发光边框 */}
                <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-cyan-400/30 pointer-events-none transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

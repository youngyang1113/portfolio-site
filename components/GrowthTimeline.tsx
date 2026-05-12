'use client'
import { motion } from 'framer-motion'

const timeline = [
  {
    year: '2020',
    title: '前端开发起航',
    description: '开始学习 HTML/CSS/JavaScript，完成第一个静态网站项目',
    tags: ['HTML/CSS', 'JavaScript'],
  },
  {
    year: '2021',
    title: '框架阶段',
    description: '深入学习 React，开发响应式应用，理解组件化思想',
    tags: ['React', 'Responsive'],
  },
  {
    year: '2022',
    title: '工程化探索',
    description: '学习 Webpack/Vite，开始关注构建优化和性能，启动开源项目 Official Live Page',
    tags: ['Webpack', '开源', '性能'],
  },
  {
    year: '2023',
    title: '全栈实践',
    description: '结合 Next.js 进行全栈开发，发布 Easy Lab 工程化工具库，积累最佳实践',
    tags: ['Next.js', '全栈', '工具库'],
  },
  {
    year: '2024',
    title: '体验优化',
    description: '专注前端体验，学习 Three.js 和 Framer Motion，打造沉浸式交互，发布 FolioSpace',
    tags: ['Three.js', '动画', 'UX'],
  },
  {
    year: '2025',
    title: '持续进化',
    description: '完善个人技术生态，贡献开源社区，分享工程化经验，助力更多开发者',
    tags: ['开源贡献', '技术分享', '社区'],
  },
]

export default function GrowthTimeline() {
  return (
    <section className="relative py-20 md:py-32 px-6 lg:px-10">
      <div className="mx-auto max-w-4xl">
        {/* 背景装饰 */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-transparent via-violet-500/50 to-transparent pointer-events-none" />

        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-sm font-medium uppercase tracking-[0.15em] text-cyan-400/70 mb-3">
            成长历程
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">成长时间线</h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            从学习到实践，每一步都承载着对技术的执着追求
          </p>
        </motion.div>

        {/* 时间线 */}
        <div className="space-y-8 md:space-y-12">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`flex gap-6 md:gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* 左侧内容或右侧内容 */}
              <div className="flex-1">
                <motion.div
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="p-6 md:p-8 rounded-2xl bg-white/[0.05] border border-white/[0.1] hover:border-violet-500/50 backdrop-blur-sm hover:bg-white/[0.08] transition-all group"
                >
                  {/* 年份 */}
                  <div className="inline-block mb-3">
                    <span className="px-4 py-1 rounded-full bg-gradient-to-r from-violet-500/30 to-cyan-500/30 border border-violet-500/50 text-sm font-semibold text-violet-300">
                      {item.year}
                    </span>
                  </div>

                  {/* 标题 */}
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-violet-300 transition">
                    {item.title}
                  </h3>

                  {/* 描述 */}
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* 标签 */}
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1 rounded-full bg-gradient-to-r from-violet-500/20 to-cyan-500/20 border border-violet-500/30 text-xs font-medium text-gray-300 hover:text-white transition"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* 中间时间圆点 */}
              <div className="hidden md:flex flex-col items-center">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="w-4 h-4 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 shadow-lg shadow-violet-500/50"
                />
              </div>

              {/* 右侧占位（奇数项） */}
              <div className="flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

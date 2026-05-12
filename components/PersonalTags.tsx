'use client'
import { motion } from 'framer-motion'

const tags = [
  { label: '产品思维', color: 'from-violet-500 to-purple-500' },
  { label: '开源爱好者', color: 'from-blue-500 to-cyan-500' },
  { label: '性能优先', color: 'from-green-500 to-emerald-500' },
  { label: '用户至上', color: 'from-pink-500 to-rose-500' },
  { label: '持续学习', color: 'from-amber-500 to-orange-500' },
  { label: '代码质量', color: 'from-indigo-500 to-blue-500' },
  { label: '全栈思维', color: 'from-teal-500 to-cyan-500' },
  { label: '创意实现者', color: 'from-fuchsia-500 to-purple-500' },
]

export default function PersonalTags() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 },
  }

  return (
    <section className="relative py-16 md:py-24 px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-sm font-medium uppercase tracking-[0.15em] text-purple-400/70 mb-3">
            个人标签
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">我是一个...</h2>
        </motion.div>

        {/* 标签网格 */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 justify-center items-center"
        >
          {tags.map((tag, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="group cursor-pointer"
            >
              <div
                className={`px-6 py-3 rounded-full bg-gradient-to-r ${tag.color} bg-opacity-10 border border-white/[0.15] hover:border-white/30 backdrop-blur-sm transition-all duration-300 group-hover:shadow-lg group-hover:shadow-current/50`}
              >
                <span className={`text-sm font-medium bg-gradient-to-r ${tag.color} bg-clip-text text-transparent`}>
                  {tag.label}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

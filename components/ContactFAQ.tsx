'use client'
import { motion } from 'framer-motion'

const faqItems = [
  {
    question: '通常多久会收到回复？',
    answer: '我通常在 24 小时内回复邮件。对于紧急事宜，可以通过 GitHub 联系。',
    icon: '⏱️',
  },
  {
    question: '支持哪些合作类型？',
    answer: '开源共建、技术咨询、项目合作、技术分享都很欢迎。具体讨论后可确定。',
    icon: '🤝',
  },
  {
    question: '如何获得快速回复？',
    answer: '在留言中详细说明您的需求，提供具体背景信息会帮助我更快理解和回复。',
    icon: '⚡',
  },
  {
    question: '可以安排通话吗？',
    answer: '可以！确认邮件后我们可以通过视频会议进一步讨论。',
    icon: '📞',
  },
]

export default function ContactFAQ() {
  return (
    <section className="relative py-20 md:py-32 px-6 lg:px-10">
      <div className="mx-auto max-w-4xl">
        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-sm font-medium uppercase tracking-[0.15em] text-cyan-400/70 mb-3">
            常见问题
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">有疑问？</h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            了解更多关于合作和沟通的信息
          </p>
        </motion.div>

        {/* FAQ 项目 */}
        <div className="grid gap-4 md:gap-6">
          {faqItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ x: 4 }}
              className="group relative p-6 md:p-8 rounded-2xl backdrop-blur-sm bg-gradient-to-r from-white/[0.05] to-white/[0.02] border border-white/[0.08] hover:border-white/20 transition-all duration-300"
            >
              {/* 背景渐变 */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-5 bg-gradient-to-r from-cyan-500 to-blue-500 transition pointer-events-none" />

              {/* 内容 */}
              <div className="relative z-10 flex gap-4">
                {/* 图标 */}
                <div className="flex-shrink-0 text-3xl group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>

                {/* 文字 */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition mb-2">
                    {item.question}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>

              {/* 右边装饰 */}
              <div className="absolute right-0 top-0 w-1 h-8 bg-gradient-to-b from-violet-500 to-transparent opacity-0 group-hover:opacity-100 transition rounded-full" />
            </motion.div>
          ))}
        </div>

        {/* 底部建议 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 md:mt-16 p-6 md:p-8 rounded-2xl bg-gradient-to-r from-violet-500/10 to-cyan-500/10 border border-white/[0.1] text-center"
        >
          <p className="text-gray-300">
            没有找到答案？<span className="text-white font-medium">直接发送邮件给我</span>，我很乐意详细讨论！
          </p>
        </motion.div>
      </div>
    </section>
  )
}

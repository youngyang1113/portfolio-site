'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

const contacts = [
  {
    icon: '💬',
    title: '直接联系',
    description: '有任何想法或合作机会？',
    link: '/contact',
    label: '发送消息',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: '🐙',
    title: 'GitHub',
    description: '查看我的开源项目',
    link: 'https://github.com/youngyang1113',
    label: '访问主页',
    color: 'from-purple-500 to-pink-500',
    external: true,
  },
  {
    icon: '📧',
    title: '电子邮件',
    description: '深入讨论技术话题',
    link: 'mailto:rye.young@example.com',
    label: '发送邮件',
    color: 'from-amber-500 to-orange-500',
    external: true,
  },
]

export default function ContactSection() {
  return (
    <section className="relative py-20 md:py-32 px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        {/* 背景装饰 */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 -left-48 w-96 h-96 rounded-full bg-violet-500/10 blur-3xl" />
          <div className="absolute top-1/2 -right-48 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl" />
        </div>

        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20 relative z-10"
        >
          <p className="text-sm font-medium uppercase tracking-[0.15em] text-violet-400/70 mb-3">
            保持联系
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">一起合作</h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            期待与志同道合的伙伴在技术的海洋中探索，共同成长
          </p>
        </motion.div>

        {/* 联系方式卡片 */}
        <div className="grid md:grid-cols-3 gap-6 relative z-10">
          {contacts.map((contact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -12, scale: 1.03 }}
              className="group relative"
            >
              <Link
                href={contact.link}
                target={contact.external ? '_blank' : undefined}
                rel={contact.external ? 'noopener noreferrer' : undefined}
              >
                {/* 卡片背景 */}
                <div
                  className={`h-full p-8 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/[0.1] hover:border-white/30 backdrop-blur-md transition-all duration-300 flex flex-col items-center text-center cursor-pointer`}
                >
                  {/* 顶部发光 */}
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-24 h-12 bg-white/10 blur-2xl group-hover:w-32 group-hover:h-16 group-hover:bg-white/20 transition pointer-events-none" />

                  {/* 背景渐变 */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${contact.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                  />

                  {/* 内容 */}
                  <div className="relative z-10">
                    {/* 图标 */}
                    <motion.div
                      className="text-6xl mb-4 group-hover:scale-110 transition-transform"
                      whileHover={{ rotate: 10 }}
                    >
                      {contact.icon}
                    </motion.div>

                    {/* 标题 */}
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition">
                      {contact.title}
                    </h3>

                    {/* 描述 */}
                    <p className="text-sm text-gray-400 mb-6">{contact.description}</p>

                    {/* 按钮 */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`inline-block px-6 py-2 rounded-full bg-gradient-to-r ${contact.color} text-white text-sm font-semibold shadow-lg shadow-current/50 group-hover:shadow-xl group-hover:shadow-current/70 transition`}
                    >
                      {contact.label}
                    </motion.div>
                  </div>

                  {/* 悬停边框 */}
                  <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-cyan-400/30 pointer-events-none transition-all duration-300" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* 底部文案 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16 relative z-10"
        >
          <p className="text-gray-400">
            无论您是想讨论技术、寻求合作还是只是打个招呼，我都会尽快回复 ✨
          </p>
        </motion.div>
      </div>
    </section>
  )
}

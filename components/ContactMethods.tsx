'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

const contactMethods = [
  {
    icon: '✉️',
    title: '邮件',
    description: '最快的沟通方式',
    value: 'rye.young@example.com',
    link: 'mailto:rye.young@example.com',
    color: 'from-blue-500 to-cyan-500',
    action: '发送邮件',
  },
  {
    icon: '🐙',
    title: 'GitHub',
    description: '查看我的项目',
    value: '@youngyang1113',
    link: 'https://github.com/youngyang1113',
    color: 'from-purple-500 to-pink-500',
    action: '访问主页',
    external: true,
  },
  {
    icon: '💬',
    title: '即时消息',
    description: '通过表单快速反馈',
    value: '下方留言区',
    link: '#contact-form',
    color: 'from-violet-500 to-purple-500',
    action: '发送消息',
  },
]

export default function ContactMethods() {
  return (
    <section className="relative py-20 md:py-32 px-6 lg:px-10">
      <div className="mx-auto max-w-6xl">
        {/* 背景装饰 */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 -left-96 w-96 h-96 rounded-full bg-violet-500/10 blur-3xl" />
          <div className="absolute top-1/2 -right-96 w-96 h-96 rounded-full bg-cyan-500/10 blur-3xl" />
        </div>

        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20 relative z-10"
        >
          <p className="text-sm font-medium uppercase tracking-[0.15em] text-cyan-400/70 mb-3">
            联系方式
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">多种联系渠道</h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            选择最适合您的方式与我联系，我会尽快回复
          </p>
        </motion.div>

        {/* 卡片网格 */}
        <div className="grid md:grid-cols-3 gap-6 relative z-10">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -12, scale: 1.02 }}
              className="group"
            >
              <Link href={method.link} target={method.external ? '_blank' : undefined}>
                {/* 卡片容器 */}
                <div className="relative h-full p-8 rounded-2xl backdrop-blur-md bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/[0.1] hover:border-white/30 transition-all duration-300 cursor-pointer overflow-hidden">
                  {/* 发光背景 */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}
                  />

                  {/* 顶部高光 */}
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-32 h-12 bg-white/10 blur-2xl group-hover:w-40 group-hover:h-16 group-hover:bg-white/20 transition opacity-0 group-hover:opacity-100 pointer-events-none" />

                  {/* 内容 */}
                  <div className="relative z-10">
                    {/* 图标 */}
                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                      {method.icon}
                    </div>

                    {/* 标题 */}
                    <h3 className={`text-xl font-bold bg-gradient-to-r ${method.color} bg-clip-text text-transparent mb-2 group-hover:text-white transition`}>
                      {method.title}
                    </h3>

                    {/* 描述 */}
                    <p className="text-sm text-gray-400 mb-4 group-hover:text-gray-300 transition">
                      {method.description}
                    </p>

                    {/* 分隔线 */}
                    <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-4 group-hover:via-white/40 transition" />

                    {/* 值 */}
                    <p className="text-sm font-mono text-gray-300 mb-6 break-all">
                      {method.value}
                    </p>

                    {/* 按钮 */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full py-2 px-4 rounded-full bg-gradient-to-r ${method.color} text-white text-sm font-semibold shadow-lg shadow-current/50 group-hover:shadow-xl group-hover:shadow-current/70 transition`}
                    >
                      {method.action}
                    </motion.button>
                  </div>

                  {/* 悬停边框 */}
                  <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-cyan-400/30 pointer-events-none transition-all duration-300" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function ContactFormAdvanced() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [focused, setFocused] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)

    // 模拟发送延迟
    await new Promise((resolve) => setTimeout(resolve, 1200))

    setSubmitting(false)
    setSuccess(true)
    setFormData({ name: '', email: '', subject: '', message: '' })

    // 3秒后清除成功提示
    setTimeout(() => setSuccess(false), 3000)
  }

  const fields = [
    {
      label: '名字',
      name: 'name',
      type: 'text',
      placeholder: '请输入您的名字',
      required: true,
      icon: '👤',
    },
    {
      label: '邮箱',
      name: 'email',
      type: 'email',
      placeholder: 'your@email.com',
      required: true,
      icon: '✉️',
    },
    {
      label: '主题',
      name: 'subject',
      type: 'text',
      placeholder: '简述一下主题',
      required: false,
      icon: '💡',
    },
  ]

  return (
    <section id="contact-form" className="relative py-20 md:py-32 px-6 lg:px-10">
      <div className="mx-auto max-w-4xl">
        {/* 背景装饰 */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-violet-500/10 blur-3xl" />
        </div>

        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16 relative z-10"
        >
          <p className="text-sm font-medium uppercase tracking-[0.15em] text-violet-400/70 mb-3">
            Direct Message
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">直接给我留言</h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            填写下表并发送，我会在收到后尽快回复您
          </p>
        </motion.div>

        {/* 表单容器 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative z-10"
        >
          <div className="relative p-8 md:p-12 rounded-3xl backdrop-blur-xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/[0.1] hover:border-white/20 transition-all duration-300 shadow-2xl shadow-black/20 overflow-hidden">
            {/* 装饰光晕 */}
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-violet-500/10 blur-3xl -z-1 group-hover:bg-violet-500/20 transition pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-60 h-60 rounded-full bg-cyan-500/10 blur-3xl -z-1 pointer-events-none" />

            {/* 表单内容 */}
            <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
              {/* 名字和邮箱行 */}
              <div className="grid md:grid-cols-2 gap-6">
                {fields.slice(0, 2).map((field) => (
                  <motion.div key={field.name} className="relative group">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      <span className="mr-2">{field.icon}</span>
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleChange}
                      onFocus={() => setFocused(field.name)}
                      onBlur={() => setFocused(null)}
                      placeholder={field.placeholder}
                      required={field.required}
                      className={`w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.1] text-white placeholder:text-gray-500 outline-none transition-all duration-300 ${
                        focused === field.name
                          ? 'border-violet-500/50 bg-white/[0.08] shadow-lg shadow-violet-500/20'
                          : 'hover:border-white/20 hover:bg-white/[0.06]'
                      }`}
                    />
                    {/* 底部发光线 */}
                    <div
                      className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-violet-500 to-transparent transition-all duration-300 ${
                        focused === field.name ? 'w-full opacity-100' : 'w-0 opacity-0'
                      }`}
                    />
                  </motion.div>
                ))}
              </div>

              {/* 主题行 */}
              <motion.div className="relative group">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  <span className="mr-2">💡</span>
                  主题
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => setFocused('subject')}
                  onBlur={() => setFocused(null)}
                  placeholder="简述一下您要讨论的主题"
                  className={`w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.1] text-white placeholder:text-gray-500 outline-none transition-all duration-300 ${
                    focused === 'subject'
                      ? 'border-cyan-500/50 bg-white/[0.08] shadow-lg shadow-cyan-500/20'
                      : 'hover:border-white/20 hover:bg-white/[0.06]'
                  }`}
                />
                <div
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-transparent transition-all duration-300 ${
                    focused === 'subject' ? 'w-full opacity-100' : 'w-0 opacity-0'
                  }`}
                />
              </motion.div>

              {/* 消息区域 */}
              <motion.div className="relative group">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  <span className="mr-2">💬</span>
                  留言内容
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  placeholder="请详细描述您的需求或想法..."
                  required
                  rows={5}
                  className={`w-full px-4 py-3 rounded-xl bg-white/[0.05] border border-white/[0.1] text-white placeholder:text-gray-500 outline-none resize-none transition-all duration-300 ${
                    focused === 'message'
                      ? 'border-pink-500/50 bg-white/[0.08] shadow-lg shadow-pink-500/20'
                      : 'hover:border-white/20 hover:bg-white/[0.06]'
                  }`}
                />
                <div
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-pink-500 to-transparent transition-all duration-300 ${
                    focused === 'message' ? 'w-full opacity-100' : 'w-0 opacity-0'
                  }`}
                />
              </motion.div>

              {/* 字数统计 */}
              <div className="flex justify-between items-center text-xs text-gray-500">
                <span>消息内容需求：最少 10 个字符</span>
                <span>{formData.message.length} / 1000</span>
              </div>

              {/* 提交按钮 */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={submitting || success}
                className={`w-full py-4 px-6 rounded-xl font-semibold text-white transition-all duration-300 relative overflow-hidden group ${
                  success
                    ? 'bg-gradient-to-r from-green-500 to-emerald-500'
                    : 'bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 shadow-lg shadow-violet-500/50 hover:shadow-xl hover:shadow-violet-500/70'
                } disabled:opacity-70 disabled:cursor-not-allowed`}
              >
                {/* 按钮背景动画 */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />

                <div className="relative flex items-center justify-center gap-2">
                  {submitting ? (
                    <>
                      <motion.svg
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="12" cy="12" r="10" strokeWidth="2" />
                      </motion.svg>
                      <span>发送中...</span>
                    </>
                  ) : success ? (
                    <>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                      </svg>
                      <span>发送成功！感谢您的留言</span>
                    </>
                  ) : (
                    <>
                      <span>发送留言</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M16.6915026,12.4744748 L3.50612381,13.2599618 C3.19218622,13.2599618 3.03521743,13.4170592 3.03521743,13.5741566 L1.15159189,20.0151496 C0.8376543,20.8006365 0.99,21.89 1.77946707,22.52 C2.41,22.99 3.50612381,23.1 4.13399899,22.9429026 L21.714504,14.0454487 C22.6563168,13.5741566 23.1272231,12.6315722 22.9702544,11.6889879 L4.13399899,1.20208189 C3.34915502,0.9429026 2.40734225,1.05399899 1.77946707,1.4430237 C0.994623095,2.0771126 0.837654326,3.16751442 1.15159189,3.95300431 L3.03521743,10.394001 C3.03521743,10.5510984 3.19218622,10.7081957 3.50612381,10.7081957 L16.6915026,11.4936827 C16.6915026,11.4936827 17.1624089,11.4936827 17.1624089,11.0045579 L17.1624089,12.6315722 C17.1624089,12.3724 16.6915026,12.4744748 16.6915026,12.4744748 Z" />
                      </svg>
                    </>
                  )}
                </div>
              </motion.button>

              {/* 注意事项 */}
              <p className="text-xs text-gray-500 text-center">
                ⓘ 您的信息将被安全处理。我们承诺不会将您的数据分享给第三方。
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

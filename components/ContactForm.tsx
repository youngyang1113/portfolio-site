'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

type ContactFormProps = {
  variant?: 'panel' | 'minimal'
}

export default function ContactForm({ variant = 'panel' }: ContactFormProps) {
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  const fields = (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        setSubmitting(true)
        window.setTimeout(() => {
          setSubmitting(false)
          setSuccess(true)
        }, 800)
      }}
      className="space-y-5"
    >
      <label className="block text-xs uppercase tracking-wider text-gray-500">
        邮箱
        <input
          type="email"
          required
          className="mt-2 w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-accent/50"
        />
      </label>
      <label className="block text-xs uppercase tracking-wider text-gray-500">
        留言
        <textarea
          required
          rows={4}
          className="mt-2 w-full resize-none rounded-lg border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-accent/50"
        />
      </label>
      <button
        type="submit"
        disabled={submitting}
        className="inline-flex w-full items-center justify-center rounded-full bg-white py-3 text-sm font-medium text-black transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:px-10"
      >
        {submitting ? '发送中…' : '发送'}
      </button>
      {success ? <p className="text-sm text-emerald-400/90">已记录（演示）。部署时请接入邮件或表单服务。</p> : null}
    </form>
  )

  if (variant === 'minimal') {
    return <div className="text-left">{fields}</div>
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl border border-white/10 bg-panel/80 p-8 shadow-soft backdrop-blur-xl md:p-10"
    >
      <h2 className="text-xl font-semibold text-white">发送留言</h2>
      <p className="mt-2 text-sm text-gray-400">合作、开源共建或简单打招呼均可。</p>
      <div className="mt-8">
        {fields}
        <div className="mt-8 border-t border-white/[0.06] pt-6 text-sm text-gray-500">
          <a href="https://github.com/youngyang1113" target="_blank" rel="noopener noreferrer" className="text-gray-400 transition hover:text-accent">
            GitHub · youngyang1113
          </a>
        </div>
      </div>
    </motion.div>
  )
}

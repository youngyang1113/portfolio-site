'use client'

import { useState } from 'react'

type CopyButtonProps = {
  value: string
  label?: string
}

export default function CopyButton({ value, label = '复制' }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(value)
          setCopied(true)
          window.setTimeout(() => setCopied(false), 1400)
        } catch {
          setCopied(false)
        }
      }}
      className="inline-flex h-11 items-center rounded-full border border-white/15 px-8 text-sm text-gray-300 transition hover:border-white/25 hover:bg-white/[0.04]"
    >
      {copied ? '已复制' : label}
    </button>
  )
}

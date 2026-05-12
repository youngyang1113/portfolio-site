'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

const navLinks = [
  { label: '项目', href: '/projects' },
  { label: '关于', href: '/about' },
  { label: '博客', href: '/blog' },
]

export default function Navbar() {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-40 border-b border-white/[0.06] bg-black/50 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6 lg:h-16 lg:px-10">
        <Link href="/" className="text-[13px] font-semibold uppercase tracking-[0.22em] text-white transition hover:text-accent">
          Rye Young
        </Link>
        <nav className="flex items-center gap-8 text-[13px] text-gray-400">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-white">
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="hidden text-accent transition hover:text-glow sm:inline">
            联系
          </Link>
        </nav>
      </div>
    </motion.header>
  )
}

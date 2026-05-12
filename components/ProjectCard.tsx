'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface ProjectCardProps {
  title: string
  desc: string
  slug: string
}

export default function ProjectCard({ title, desc, slug }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45 }}
      className="group flex flex-col border border-white/[0.08] bg-white/[0.03] p-8 transition hover:border-white/[0.14] hover:bg-white/[0.05] md:p-10"
    >
      <h3 className="text-lg font-medium tracking-tight text-white md:text-xl">{title}</h3>
      <p className="mt-4 flex-1 text-sm leading-relaxed text-gray-400 line-clamp-4 md:text-[15px]">{desc}</p>
      <Link
        href={`/projects/${slug}`}
        className="mt-8 inline-flex items-center gap-1 text-sm font-medium text-accent transition group-hover:gap-2"
      >
        查看项目
        <span aria-hidden>→</span>
      </Link>
    </motion.article>
  )
}

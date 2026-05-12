'use client'

import { useEffect, useMemo, useState } from 'react'

type MiniMapItem = {
  id: string
  label: string
}

type ProjectsMiniMapProps = {
  items: MiniMapItem[]
}

export default function ProjectsMiniMap({ items }: ProjectsMiniMapProps) {
  const ids = useMemo(() => items.map((item) => item.id), [items])
  const [activeId, setActiveId] = useState(ids[0] ?? '')

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node))

    if (!elements.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0]
        if (visible?.target?.id) {
          setActiveId(visible.target.id)
        }
      },
      { rootMargin: '-20% 0px -70% 0px', threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1] }
    )

    for (const el of elements) observer.observe(el)

    return () => observer.disconnect()
  }, [ids])

  const activeIndex = Math.max(0, ids.indexOf(activeId))
  const progress = ids.length <= 1 ? 0 : (activeIndex / (ids.length - 1)) * 100

  return (
    <div className="sticky top-24 hidden h-[calc(100vh-8rem)] lg:block">
      <div className="relative h-full rounded-2xl border border-white/[0.08] bg-white/[0.03] p-6">
        <div className="absolute bottom-6 left-6 top-6 w-px bg-white/[0.08]">
          <div className="w-px bg-accent/70" style={{ height: `${progress}%` }} />
        </div>
        <div className="relative space-y-4">
          {items.map((item) => {
            const isActive = item.id === activeId
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                className="group flex w-full items-center gap-3 text-left"
              >
                <span
                  className={[
                    'h-2.5 w-2.5 rounded-full border transition',
                    isActive ? 'border-accent bg-accent shadow-[0_0_0_6px_rgba(56,189,248,0.12)]' : 'border-white/25 bg-black',
                  ].join(' ')}
                />
                <span className={['text-sm transition', isActive ? 'text-white' : 'text-gray-500 group-hover:text-gray-300'].join(' ')}>
                  {item.label}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

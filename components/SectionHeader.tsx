interface SectionHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
}

export default function SectionHeader({ eyebrow, title, subtitle, align = 'left' }: SectionHeaderProps) {
  return (
    <header className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {eyebrow ? (
        <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-accent/60">{eyebrow}</p>
      ) : null}
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-[2rem] md:leading-snug">{title}</h2>
      {subtitle ? <p className="mt-4 text-base leading-relaxed text-gray-400 md:text-lg">{subtitle}</p> : null}
    </header>
  )
}

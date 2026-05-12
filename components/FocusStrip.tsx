const pillars = [
  {
    title: '简洁',
    desc: '结构清晰、接口稳定，让代码与界面都易于理解与迭代。',
  },
  {
    title: '高效',
    desc: '工程化与自动化优先，把重复劳动交给工具链与模板。',
  },
  {
    title: '易用',
    desc: '面向开发者体验设计文档与示例，降低接入与维护成本。',
  },
]

export default function FocusStrip() {
  return (
    <section id="philosophy" className="scroll-mt-24 border-y border-white/[0.06] bg-white/[0.02] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="grid gap-12 md:grid-cols-3 md:gap-10 lg:gap-16">
          {pillars.map((item) => (
            <div key={item.title} className="relative">
              <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-white/25">—</div>
              <h3 className="mt-4 text-xl font-medium tracking-tight text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-400 md:text-[15px]">{item.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-16 border-t border-white/[0.06] pt-10 text-center text-[13px] text-gray-500">
          2024 · Official Live Page · 2025 · Easy Lab · 持续开源与产品级交付
        </p>
      </div>
    </section>
  )
}

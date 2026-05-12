import Link from 'next/link'
import Navbar from '../../components/Navbar'
import AboutHero from '../../components/AboutHero'
import StorySection from '../../components/StorySection'
import SkillCards from '../../components/SkillCards'
import PersonalTags from '../../components/PersonalTags'
import GrowthTimeline from '../../components/GrowthTimeline'
import ContactSection from '../../components/ContactSection'
import VisionSection from '../../components/VisionSection'
import EarthScene from '../../components/EarthScene'

export const metadata = {
  title: '关于 | Rye Young',
  description: '前端开发工程师，热衷开源与工程化实践',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen text-white bg-black">
      <Navbar />

      {/* 英雄区 */}
      <AboutHero />

      {/* 故事部分 */}
      <StorySection />

      {/* 技能卡片 */}
      <SkillCards />

      {/* 个人标签 */}
      <PersonalTags />

      {/* 成长时间线 */}
      <GrowthTimeline />

      {/* 未来愿景 */}
      <VisionSection />

      {/* Three.js 地球可视化 */}
      <section className="relative py-20 md:py-32 px-6 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[32px] border border-white/[0.08] bg-slate-950/40 p-6 md:p-10 shadow-2xl shadow-black/20 backdrop-blur-xl">
            <div className="max-w-3xl mb-8">
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-cyan-400/70">Interactive</p>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-white">
                Three.js 地球可视化
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-gray-400 md:text-lg">
                纯 Three.js 渲染的可交互地球模型，支持鼠标控制、地理定位与位置回退，展现前端图形渲染的无限可能。
              </p>
            </div>
            <div className="h-[480px] overflow-hidden rounded-3xl border border-white/[0.08] bg-[#020b18]">
              <EarthScene />
            </div>
          </div>
        </div>
      </section>

      {/* 联系方式 */}
      <ContactSection />

      {/* 页脚 */}
      <section className="relative py-12 px-6 lg:px-10 border-t border-white/[0.08]">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-gray-500 text-sm">
              © 2024-2025 Rye Young. 致力于前端体验与开源生态。
            </p>
            <Link href="/" className="inline-flex text-sm font-medium text-gray-400 transition hover:text-white">
              ← 返回首页
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

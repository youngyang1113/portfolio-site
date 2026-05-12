import Link from 'next/link'
import Navbar from '../../components/Navbar'
import ContactHero from '../../components/ContactHero'
import ContactMethods from '../../components/ContactMethods'
import ContactFormAdvanced from '../../components/ContactFormAdvanced'
import ContactFAQ from '../../components/ContactFAQ'

export const metadata = {
  title: '联系 | Rye Young',
  description: '有想法要分享？想要合作或简单打个招呼？联系我吧。',
}

export default function ContactPage() {
  return (
    <main className="min-h-screen text-white bg-black">
      <Navbar />
      
      {/* 英雄区 */}
      <ContactHero />

      {/* 联系方式卡片 */}
      <ContactMethods />

      {/* 高级联系表单 */}
      <ContactFormAdvanced />

      {/* FAQ 区域 */}
      <ContactFAQ />

      {/* 页脚 */}
      <section className="relative py-12 px-6 lg:px-10 border-t border-white/[0.08]">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-gray-500 text-sm">
              © 2024-2025 Rye Young. 感谢您的耐心阅读。
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


import ThreeScene from '../../components/ThreeScene'

export const metadata = {
  title: '3D Earth Visualization',
  description: '纯前端 Three.js 3D 地球演示：自动自转、鼠标交互、自动定位与默认坐标标注。',
}

export default function EarthPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020a14] text-white">
      <section className="relative flex min-h-screen flex-col items-center justify-center px-4 py-8">
        <div className="mb-8 max-w-3xl text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-accent/70">Three.js 地球演示</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">全球位置标注与自转地球</h1>
          <p className="mt-4 text-base leading-7 text-gray-300 sm:text-lg">
            自动获取当前位置并在地球表面标注点位。若定位失败，则使用默认坐标，支持鼠标拖动与自动旋转，可直接部署到个人网站。
          </p>
        </div>

        <div className="relative h-[72vh] w-full max-w-6xl overflow-hidden rounded-[32px] border border-white/10 bg-black/20 shadow-2xl shadow-black/40">
          <ThreeScene />
        </div>
      </section>
    </main>
  )
}

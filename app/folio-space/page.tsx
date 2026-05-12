import Navbar from '../../components/Navbar'

export const metadata = {
  title: 'FolioSpace | Rye Young',
  description: '3D 项目展示工具演示',
}

export default function FolioSpacePage() {
  return (
    <main className="min-h-screen text-white">
      <Navbar />
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-accent/60">Demo</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">FolioSpace</h1>
            <p className="mt-4 max-w-xl text-[15px] text-gray-400">3D 项目展示工具演示页面。</p>
          </div>
        </div>

        <div className="mt-14">
          <iframe
            src="/folio-space/index.html"
            className="w-full h-[80vh] border border-gray-700 rounded-lg"
            title="FolioSpace Demo"
          />
        </div>
      </div>
    </main>
  )
}
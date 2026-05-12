'use client'

import { useEffect, useRef } from 'react'
import Script from 'next/script'

declare global {
  interface Window {
    Globe?: new (element: HTMLElement) => GlobeInstance
    THREE?: typeof import('three')
  }
}

type GlobeInstance = {
  globeImageUrl: (url: string) => GlobeInstance
  bumpImageUrl: (url: string) => GlobeInstance
  backgroundColor: (color: string) => GlobeInstance
  showAtmosphere: (show: boolean) => GlobeInstance
  atmosphereColor: (color: string) => GlobeInstance
  atmosphereAltitude: (alt: number) => GlobeInstance
  pointOfView: (pov: { lat?: number; lng?: number; altitude?: number }) => GlobeInstance
  enablePointerInteraction: (v: boolean) => GlobeInstance
  renderer: () => { setPixelRatio: (r: number) => void }
  controls: () => { autoRotate?: boolean; autoRotateSpeed?: number }
  globeMaterial: (mat: Record<string, unknown>) => GlobeInstance
}

const IMG_BASE = 'https://unpkg.com/three-globe@2.39.1/example/img'

export default function GlobeContainer({ className = '' }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const globeRef = useRef<GlobeInstance | null>(null)
  const initTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const root = containerRef.current
    if (!root) return

    const initGlobe = () => {
      if (typeof window.Globe !== 'function' || !root || globeRef.current) return

      try {
        const globe = new window.Globe(root)
          /* 高清昼夜质感：NASA Blue Marble + 地形凹凸 */
          .globeImageUrl(`${IMG_BASE}/earth-blue-marble.jpg`)
          .bumpImageUrl(`${IMG_BASE}/earth-topology.png`)
          .backgroundColor('rgba(0, 0, 0, 0)')
          .showAtmosphere(true)
          /* 与星云背景呼应的柔紫粉大气晕 */
          .atmosphereColor('#e9d5ff')
          .atmosphereAltitude(0.22)
          .pointOfView({ lat: 25, lng: 105, altitude: 2.35 })
          .enablePointerInteraction(true)

        /* 表层轻微光泽，陆地凹凸更明显 */
        try {
          globe.globeMaterial({
            color: '#ffffff',
            shininess: 8,
            opacity: 1,
          })
        } catch {
          /* 部分版本签名不同，忽略 */
        }

        try {
          globe.renderer().setPixelRatio(Math.min(typeof window !== 'undefined' ? window.devicePixelRatio : 1, 2))
        } catch {
          /* ignore */
        }

        try {
          const ctrls = globe.controls()
          ctrls.autoRotate = true
          ctrls.autoRotateSpeed = 0.35
        } catch {
          /* ignore */
        }

        globeRef.current = globe
      } catch (err) {
        console.error('Failed to initialize globe:', err)
      }
    }

    if (typeof window.Globe !== 'function') {
      initTimeoutRef.current = setTimeout(initGlobe, 400)
    } else {
      initGlobe()
    }

    return () => {
      if (initTimeoutRef.current) clearTimeout(initTimeoutRef.current)
      globeRef.current = null
      root.innerHTML = ''
    }
  }, [])

  return (
    <>
      <div ref={containerRef} className={`h-full min-h-[240px] w-full ${className}`} />

      <Script src="https://cdn.jsdelivr.net/npm/three@0.166.0/build/three.min.js" strategy="afterInteractive" />
      <Script src="https://cdn.jsdelivr.net/npm/globe.gl@2.45.3" strategy="afterInteractive" />
    </>
  )
}

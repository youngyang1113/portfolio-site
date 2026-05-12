'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useEffect, useMemo, useRef, useState } from 'react'
import { CanvasTexture, Mesh, Texture } from 'three'

const DEFAULT_LOCATION = { lat: 39.9042, lon: 116.4074 }

function createEarthTexture(): CanvasTexture {
  const size = 2048
  const canvas = typeof document !== 'undefined' ? document.createElement('canvas') : null
  if (!canvas) {
    throw new Error('Browser environment required to create earth texture')
  }
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')!

  const oceanGradient = ctx.createRadialGradient(size * 0.45, size * 0.35, size * 0.15, size * 0.5, size * 0.5, size * 0.9)
  oceanGradient.addColorStop(0, '#2e5d7d')
  oceanGradient.addColorStop(1, '#081426')
  ctx.fillStyle = oceanGradient
  ctx.fillRect(0, 0, size, size)

  ctx.fillStyle = '#245e4f'
  ctx.beginPath()
  ctx.ellipse(size * 0.33, size * 0.4, size * 0.15, size * 0.12, 0, 0, Math.PI * 2)
  ctx.ellipse(size * 0.46, size * 0.23, size * 0.13, size * 0.08, 0, 0, Math.PI * 2)
  ctx.ellipse(size * 0.62, size * 0.16, size * 0.13, size * 0.09, 0.4, 0, Math.PI * 2)
  ctx.ellipse(size * 0.8, size * 0.55, size * 0.14, size * 0.13, -0.4, 0, Math.PI * 2)
  ctx.ellipse(size * 0.15, size * 0.55, size * 0.12, size * 0.1, 0, 0, Math.PI * 2)
  ctx.ellipse(size * 0.08, size * 0.2, size * 0.08, size * 0.06, 0, 0, Math.PI * 2)
  ctx.fill()

  ctx.fillStyle = '#3fa57c'
  ctx.beginPath()
  ctx.ellipse(size * 0.55, size * 0.5, size * 0.12, size * 0.08, 0.1, 0, Math.PI * 2)
  ctx.ellipse(size * 0.43, size * 0.68, size * 0.16, size * 0.1, -0.2, 0, Math.PI * 2)
  ctx.fill()

  ctx.fillStyle = '#6ecb9f'
  ctx.fillRect(size * 0.68, size * 0.13, size * 0.08, size * 0.14)
  ctx.fillRect(size * 0.22, size * 0.72, size * 0.05, size * 0.08)

  return new CanvasTexture(canvas)
}

function latLonToVector3(lat: number, lon: number, radius: number): [number, number, number] {
  const phi = (90 - lat) * (Math.PI / 180)
  const theta = (lon + 180) * (Math.PI / 180)
  const x = -(radius * Math.sin(phi) * Math.cos(theta))
  const z = radius * Math.sin(phi) * Math.sin(theta)
  const y = radius * Math.cos(phi)
  return [x, y, z]
}

function Earth({ texture, currentLocation }: { texture: Texture | null; currentLocation: { lat: number; lon: number } | null }) {
  const earthRef = useRef<Mesh | null>(null)
  const location = currentLocation ?? DEFAULT_LOCATION
  const markerPosition = latLonToVector3(location.lat, location.lon, 1.62)

  useFrame((state, delta) => {
    if (earthRef.current) {
      earthRef.current.rotation.y += delta * 0.08
    }
  })

  if (!texture) {
    return null
  }

  return (
    <>
      <mesh ref={earthRef} position={[0, 0, 0]}>
        <sphereGeometry args={[1.6, 128, 128]} />
        <meshStandardMaterial map={texture} roughness={0.78} metalness={0.08} />
      </mesh>

      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1.63, 128, 128]} />
        <meshStandardMaterial color="#88bdf7" transparent opacity={0.12} />
      </mesh>

      <mesh position={markerPosition}>
        <sphereGeometry args={[0.05, 18, 18]} />
        <meshStandardMaterial color="#ff7a5a" emissive="#ff8d76" emissiveIntensity={1} />
      </mesh>
    </>
  )
}

export default function EarthScene() {
  const [currentLocation, setCurrentLocation] = useState<{ lat: number; lon: number } | null>(null)
  const [status, setStatus] = useState('正在请求地理位置...')
  const [texture, setTexture] = useState<Texture | null>(null)

  useEffect(() => {
    setTexture(createEarthTexture())
  }, [])

  useEffect(() => {
    if (!navigator.geolocation) {
      setStatus('浏览器不支持定位，使用默认坐标。')
      setCurrentLocation(DEFAULT_LOCATION)
      return
    }

    const success = (position: GeolocationPosition) => {
      const { latitude, longitude } = position.coords
      setCurrentLocation({ lat: latitude, lon: longitude })
      setStatus(`定位成功：${latitude.toFixed(2)}°, ${longitude.toFixed(2)}°`)
    }

    const error = () => {
      setStatus('定位失败，使用默认坐标。')
      setCurrentLocation(DEFAULT_LOCATION)
    }

    navigator.geolocation.getCurrentPosition(success, error, {
      enableHighAccuracy: true,
      timeout: 10000,
      maximumAge: 60000,
    })
  }, [])

  return (
    <div className="relative h-full w-full overflow-hidden rounded-3xl bg-[#020b18]">
      <div className="pointer-events-none absolute left-4 top-4 z-20 max-w-xs rounded-3xl border border-white/10 bg-slate-950/80 px-4 py-3 text-sm text-gray-100 backdrop-blur-xl">
        <p className="text-[11px] uppercase tracking-[0.28em] text-accent/70">实时定位</p>
        <p className="mt-2 leading-6">{status}</p>
      </div>
      <Canvas camera={{ position: [0, 0.4, 5.2], fov: 45 }} style={{ width: '100%', height: '100%' }}>
        <ambientLight intensity={0.38} />
        <directionalLight position={[4, 4, 4]} intensity={1.2} color="#ffffff" />
        <pointLight position={[-3, -2, 3]} intensity={0.55} color="#6fd0ff" />
        <Earth texture={texture} currentLocation={currentLocation} />
        <OrbitControls enablePan={false} enableZoom autoRotate autoRotateSpeed={0.4} />
      </Canvas>
    </div>
  )
}

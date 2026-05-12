'use client'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Stars, Html } from '@react-three/drei'
import { useEffect, useRef, useState } from 'react'
import { Mesh, CanvasTexture } from 'three'

const DEFAULT_LOCATION = { lat: 39.9042, lon: 116.4074 }

function createEarthTexture() {
  const canvas = document.createElement('canvas')
  canvas.width = 2048
  canvas.height = 1024

  const ctx = canvas.getContext('2d')!

  ctx.fillStyle = '#0b1a2a'
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  ctx.fillStyle = '#28516f'
  const continents = [
    { x: 0.25, y: 0.35, w: 0.15, h: 0.25 },
    { x: 0.35, y: 0.25, w: 0.2, h: 0.3 },
    { x: 0.6, y: 0.15, w: 0.18, h: 0.4 },
    { x: 0.15, y: 0.5, w: 0.1, h: 0.2 },
    { x: 0.05, y: 0.15, w: 0.12, h: 0.18 },
    { x: 0.8, y: 0.55, w: 0.15, h: 0.25 },
  ]

  continents.forEach((rect) => {
    ctx.fillRect(rect.x * canvas.width, rect.y * canvas.height, rect.w * canvas.width, rect.h * canvas.height)
  })

  ctx.fillStyle = '#3a7a62'
  ctx.fillRect(canvas.width * 0.52, canvas.height * 0.32, canvas.width * 0.08, canvas.height * 0.12)

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

function LocationMarker({ position, label }: { position: [number, number, number]; label: string }) {
  const marker = useRef<Mesh | null>(null)

  useFrame(({ clock }) => {
    if (marker.current) {
      marker.current.scale.setScalar(0.8 + Math.sin(clock.getElapsedTime() * 2.5) * 0.3)
    }
  })

  return (
    <group>
      <mesh ref={marker} position={position}>
        <sphereGeometry args={[0.09, 20, 20]} />
        <meshStandardMaterial color="#ff6b3b" emissive="#ff6b3b" emissiveIntensity={1} />
      </mesh>
      <mesh position={position}>
        <sphereGeometry args={[0.18, 16, 16]} />
        <meshBasicMaterial color="#ff6b3b" transparent opacity={0.22} wireframe />
      </mesh>
      <Html position={position} distanceFactor={1.5}>
        <div className="text-center whitespace-nowrap rounded-full bg-surface/90 px-3 py-2 text-xs font-semibold text-orange-300 shadow-soft backdrop-blur-md">
          {label}
        </div>
      </Html>
    </group>
  )
}

function Earth({ currentLocation }: { currentLocation: { lat: number; lon: number } | null }) {
  const earth = useRef<Mesh | null>(null)
  const [earthTexture] = useState(() => createEarthTexture())

  useFrame(({ clock }) => {
    if (earth.current) {
      earth.current.rotation.y = clock.getElapsedTime() * 0.08
    }
  })

  const shaaxiPosition = latLonToVector3(34.3, 108.9, 1.6)
  const currentPosition = currentLocation ? latLonToVector3(currentLocation.lat, currentLocation.lon, 1.62) : null

  return (
    <group>
      <mesh ref={earth} position={[0, 0, 0]}>
        <sphereGeometry args={[1.6, 128, 128]} />
        <meshStandardMaterial map={earthTexture} roughness={0.85} metalness={0.15} />
      </mesh>

      <pointLight position={[3, 2, 2]} intensity={1.8} color="#ffffff" />
      <pointLight position={[-2, 1, 3]} intensity={0.6} color="#7dd3fc" />

      <LocationMarker position={shaaxiPosition} label="Shaanxi" />
      {currentPosition && <LocationMarker position={currentPosition} label="Your Location" />}
    </group>
  )
}

export default function ThreeScene() {
  const [lightPos, setLightPos] = useState<[number, number, number]>([0, 0, 4])
  const [currentLocation, setCurrentLocation] = useState<{ lat: number; lon: number } | null>(null)
  const [locationStatus, setLocationStatus] = useState('Requesting location...')

  useEffect(() => {
    const handlePointer = (event: PointerEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1
      const y = -(event.clientY / window.innerHeight) * 2 + 1
      setLightPos([x * 2, y * 1.5, 4])
    }

    window.addEventListener('pointermove', handlePointer)
    return () => window.removeEventListener('pointermove', handlePointer)
  }, [])

  useEffect(() => {
    if (!navigator.geolocation) {
      setLocationStatus('Geolocation not supported; using default coordinates.')
      setCurrentLocation(DEFAULT_LOCATION)
      return
    }

    const success = (position: GeolocationPosition) => {
      const { latitude, longitude } = position.coords
      setCurrentLocation({ lat: latitude, lon: longitude })
      setLocationStatus(`Current location: ${latitude.toFixed(2)}°, ${longitude.toFixed(2)}°`)
    }

    const error = () => {
      setLocationStatus('Location access denied; using default coordinates.')
      setCurrentLocation(DEFAULT_LOCATION)
    }

    const watchId = navigator.geolocation.watchPosition(success, error, {
      enableHighAccuracy: true,
      maximumAge: 10000,
      timeout: 10000,
    })

    return () => {
      navigator.geolocation.clearWatch(watchId)
    }
  }, [])

  return (
    <div className="relative h-full w-full">
      <div className="pointer-events-none absolute left-4 top-4 z-20 rounded-3xl border border-white/10 bg-surface/80 px-4 py-3 text-sm text-gray-200 backdrop-blur-xl">
        {locationStatus}
      </div>
      <Canvas camera={{ position: [0, 0.5, 5], fov: 45 }} style={{ width: '100%', height: '100%' }}>
        <Stars radius={120} depth={80} count={4200} factor={6} saturation={0.75} fade speed={0.5} />
        <ambientLight intensity={0.35} />
        <pointLight position={lightPos} intensity={1.6} color="#7dd3fc" distance={10} decay={2} />
        <Earth currentLocation={currentLocation} />
        <OrbitControls enableZoom autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  )
}

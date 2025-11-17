import { Suspense, useMemo, useEffect, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, OrbitControls, Environment } from '@react-three/drei'
import * as THREE from 'three'

function RotatingBlob({ kick }) {
  const meshRef = useRef()
  const baseColor = useMemo(() => new THREE.Color('#4f46e5'), [])
  const emissiveColor = useMemo(() => new THREE.Color('#1e1b4b'), [])

  const material = useMemo(() => new THREE.MeshStandardMaterial({
    color: baseColor,
    roughness: 0.2,
    metalness: 0.6,
    emissive: emissiveColor.clone().multiplyScalar(0.2),
    envMapIntensity: 0.8,
  }), [baseColor, emissiveColor])

  const geometry = useMemo(() => {
    const g = new THREE.IcosahedronGeometry(1.2, 5)
    const position = g.attributes.position
    const v = new THREE.Vector3()
    for (let i = 0; i < position.count; i++) {
      v.fromBufferAttribute(position, i)
      const noise = (Math.sin(v.x * 3) + Math.cos(v.y * 4) + Math.sin(v.z * 5)) * 0.05
      v.addScaledVector(v.clone().normalize(), noise)
      position.setXYZ(i, v.x, v.y, v.z)
    }
    position.needsUpdate = true
    g.computeVertexNormals()
    return g
  }, [])

  const pulseRef = useRef({ t: 0, active: false })
  useEffect(() => {
    if (kick == null) return
    pulseRef.current.t = 0
    pulseRef.current.active = true
  }, [kick])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    material.emissiveIntensity = 0.3 + Math.sin(t * 2) * 0.2

    // handle click pulse animation
    if (pulseRef.current.active) {
      pulseRef.current.t += 0.08
      const k = pulseRef.current.t
      const pulse = Math.exp(-2 * k) * Math.sin(8 * k) // ring-down effect
      const scale = 1 + pulse * 0.25
      if (meshRef.current) {
        meshRef.current.scale.setScalar(scale)
      }
      // Animate emissive + color shift
      material.emissiveIntensity = 0.8 + Math.max(0, pulse) * 1.2
      const temp = baseColor.clone()
      temp.offsetHSL(0.0, 0.0, Math.max(0, pulse) * 0.1)
      material.color.copy(temp)

      if (k > 3) {
        pulseRef.current.active = false
        material.color.copy(baseColor)
        if (meshRef.current) meshRef.current.scale.setScalar(1)
      }
    }
  })

  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={0.8}>
      <mesh ref={meshRef} geometry={geometry} material={material} castShadow receiveShadow>
        <meshStandardMaterial attach="material" {...material} />
      </mesh>
    </Float>
  )
}

function GlowPlane() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.2, 0]} receiveShadow>
      <circleGeometry args={[5, 64]} />
      <meshBasicMaterial color={'#6366f1'} transparent opacity={0.08} />
    </mesh>
  )
}

export default function ThreeHero({ trigger }) {
  return (
    <div className="relative h-[420px] md:h-[520px] rounded-2xl overflow-hidden border border-slate-200">
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 55 }}>
        <color attach="background" args={["#ffffff"]} />
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.1} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
        <Suspense fallback={null}>
          <RotatingBlob kick={trigger} />
          <GlowPlane />
          <Environment preset="city" />
        </Suspense>
        <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.6} />
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
    </div>
  )
}

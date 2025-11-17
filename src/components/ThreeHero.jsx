import { Suspense, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, OrbitControls, Environment, useTexture } from '@react-three/drei'
import * as THREE from 'three'

function RotatingBlob() {
  const mat = useMemo(() => new THREE.MeshStandardMaterial({
    color: new THREE.Color('#4f46e5'),
    roughness: 0.2,
    metalness: 0.6,
    emissive: new THREE.Color('#1e1b4b').multiplyScalar(0.2),
    envMapIntensity: 0.8,
  }), [])

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

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    mat.emissiveIntensity = 0.3 + Math.sin(t * 2) * 0.2
  })

  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={0.8}>
      <mesh geometry={geometry} material={mat} castShadow receiveShadow>
        <meshStandardMaterial {...mat} />
      </mesh>
    </Float>
  )
}

function GlowPlane() {
  const tex = useTexture({})
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.2, 0]} receiveShadow>
      <circleGeometry args={[5, 64]} />
      <meshBasicMaterial color={'#6366f1'} transparent opacity={0.08} />
    </mesh>
  )
}

export default function ThreeHero() {
  return (
    <div className="relative h-[420px] md:h-[520px] rounded-2xl overflow-hidden border border-slate-200">
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 4], fov: 55 }}>
        <color attach="background" args={["#ffffff"]} />
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.1} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
        <Suspense fallback={null}>
          <RotatingBlob />
          <GlowPlane />
          <Environment preset="city" />
        </Suspense>
        <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={0.6} />
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
    </div>
  )
}

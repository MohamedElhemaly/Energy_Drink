'use client'

import { Canvas } from '@react-three/fiber'
import { Environment, PerspectiveCamera, OrbitControls, ContactShadows } from '@react-three/drei'
import { Suspense } from 'react'
import Can from './Can'
import { Flavor } from '@/lib/flavors'

interface Scene3DProps {
  flavor: Flavor;
}

export default function Scene3D({ flavor }: Scene3DProps) {
  return (
    <div className="w-full h-full min-h-[500px] relative z-20">
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 8], fov: 45 }}>
        {/* Lights */}
        <ambientLight intensity={0.5} />
        <directionalLight 
          position={[5, 10, 5]} 
          intensity={1.5} 
          castShadow 
          shadow-bias={-0.0001}
        />
        <spotLight
          position={[-5, 5, 5]}
          angle={0.4}
          penumbra={1}
          intensity={2}
          color={flavor.gradientTo}
        />
        <spotLight
          position={[5, -5, 5]}
          angle={0.4}
          penumbra={1}
          intensity={2}
          color={flavor.accentColor}
        />

        {/* Environment map for realistic reflections */}
        <Suspense fallback={null}>
          <Environment preset="city" />
          
          <Can flavor={flavor} />

          {/* Contact Shadows for realism */}
          <ContactShadows 
            position={[0, -3.5, 0]} 
            opacity={0.6} 
            scale={10} 
            blur={2} 
            far={4} 
            color="#000000"
          />
        </Suspense>

        {/* Orbit Controls (constrained to avoid breaking layout) */}
        <OrbitControls 
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  )
}

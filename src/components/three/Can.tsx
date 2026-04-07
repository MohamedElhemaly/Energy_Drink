'use client'

import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, Text, Environment, ContactShadows, Float, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { Flavor } from '@/lib/flavors'
import { useLanguage } from '@/lib/languageContext'

interface CanProps {
  flavor: Flavor;
}

export default function Can({ flavor }: CanProps) {
  const group = useRef<THREE.Group>(null)
  const materialRef = useRef<THREE.MeshPhysicalMaterial>(null)
  const topMaterialRef = useRef<THREE.MeshStandardMaterial>(null)
  
  const { t } = useLanguage()

  // Animate color changes
  useFrame((state, delta) => {
    if (materialRef.current) {
      // Smoothly interpolate to new colors
      const targetColor = new THREE.Color(flavor.gradientFrom)
      materialRef.current.color.lerp(targetColor, delta * 3)
      
      // We can also animate a secondary emissive or something based on gradientTo
      // For simplicity, we just smoothly change the main color
    }
  })

  // When flavor changes, we could do a quick spin
  useEffect(() => {
    if (group.current) {
      // A quick 360 spin effect
      const currentRotationY = group.current.rotation.y
      const targetRotationY = currentRotationY + Math.PI * 2
      
      // A quick manual animation (could use framer-motion-3d or gsap too)
      let t = 0;
      const animateSpin = () => {
        t += 0.05
        if (t <= 1) {
          // Easing function for smooth spin
          const easeOutQuint = 1 - Math.pow(1 - t, 5)
          group.current!.rotation.y = THREE.MathUtils.lerp(currentRotationY, targetRotationY, easeOutQuint)
          requestAnimationFrame(animateSpin)
        }
      }
      animateSpin()
    }
  }, [flavor])

  return (
    <group ref={group} dispose={null} scale={1.5}>
      <Float
        speed={2} // Animation speed
        rotationIntensity={0.2} // XYZ rotation intensity
        floatIntensity={0.5} // Up/down float intensity
      >
        {/* Main Body of Can */}
        <mesh castShadow receiveShadow>
          <cylinderGeometry args={[1, 1, 4, 64]} />
          <meshPhysicalMaterial
            ref={materialRef}
            metalness={0.8}
            roughness={0.2}
            clearcoat={1.0}
            clearcoatRoughness={0.1}
            envMapIntensity={2.5}
            color={flavor.gradientFrom}
          />
          
          {/* Label / Branding placed via Text directly hovering over the cylinder */}
          <group position={[0, 0, 1.01]} rotation={[0, 0, -Math.PI / 2]}>
            <Text
              position={[0, 0, 0]}
              fontSize={0.6}
              color="#ffffff"
              maxWidth={3}
              letterSpacing={0.1}
              outlineWidth={0.02}
              outlineColor={flavor.accentColor}
              textAlign="center"
              anchorX="center"
              anchorY="middle"
              characters="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!"
            >
              QWANTAM
            </Text>
            <Text
              position={[0, -0.6, 0]}
              fontSize={0.2}
              color={flavor.accentColor}
              maxWidth={2}
              textAlign="center"
              anchorX="center"
              anchorY="middle"
            >
              {`⚡ ${t.hero.flavors?.[flavor.nameKey as keyof typeof t.hero.flavors] || flavor.nameKey.toUpperCase()} ⚡`}
            </Text>
            <Text
              position={[0, -0.9, 0]}
              fontSize={0.15}
              color="#e2e8f0"
              maxWidth={2}
              textAlign="center"
              anchorX="center"
              anchorY="middle"
            >
              ENERGY DRINK
            </Text>
          </group>
        </mesh>

        {/* Top Rim */}
        <mesh position={[0, 2.05, 0]} castShadow receiveShadow>
          <torusGeometry args={[0.95, 0.05, 16, 64]} />
          <meshStandardMaterial
            ref={topMaterialRef}
            color="#d1d5db"
            metalness={0.9}
            roughness={0.3}
            envMapIntensity={2}
          />
        </mesh>
        
        {/* Top Cap */}
        <mesh position={[0, 2, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[0.95, 0.95, 0.1, 64]} />
          <meshStandardMaterial
            color="#e5e7eb"
            metalness={1.0}
            roughness={0.4}
            envMapIntensity={1.5}
          />
        </mesh>

        {/* Bottom Rim */}
        <mesh position={[0, -2.05, 0]} castShadow receiveShadow>
          <torusGeometry args={[0.95, 0.05, 16, 64]} />
          <meshStandardMaterial
            color="#d1d5db"
            metalness={0.9}
            roughness={0.3}
            envMapIntensity={2}
          />
        </mesh>
        
        {/* Bottom Cap */}
        <mesh position={[0, -2, 0]} castShadow receiveShadow>
          <cylinderGeometry args={[0.95, 0.95, 0.1, 64]} />
          <meshStandardMaterial
            color="#9ca3af"
            metalness={0.8}
            roughness={0.5}
          />
        </mesh>

        {/* Background Energy Spheres for extra 2026 feel */}
        <mesh position={[-1.5, -1, -2]}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshPhysicalMaterial
            color={flavor.gradientTo}
            envMapIntensity={1}
            clearcoat={1}
            clearcoatRoughness={0.1}
            metalness={0.5}
            roughness={0}
          />
        </mesh>
        
        <mesh position={[1.5, 1.5, -1]}>
          <sphereGeometry args={[0.3, 32, 32]} />
          <meshPhysicalMaterial
            color={flavor.accentColor}
            envMapIntensity={1}
            clearcoat={1}
            clearcoatRoughness={0.1}
            metalness={0.8}
            roughness={0.1}
          />
        </mesh>

      </Float>
    </group>
  )
}

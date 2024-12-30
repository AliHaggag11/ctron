import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage, useGLTF } from '@react-three/drei'
import { Suspense } from 'react'
import { motion } from 'framer-motion'

interface ModelProps {
  scale?: number
  autoRotate?: boolean
  position?: [number, number, number]
}

function Model({ scale = 1, position = [0, -0.5, 0] }: ModelProps) {
  const { scene } = useGLTF('./models/scene.gltf')
  return <primitive object={scene} scale={scale} position={position} rotation={[0, Math.PI * 2, 0]} />
}

interface ProductModelProps {
  className?: string
  scale?: number
  autoRotate?: boolean
  position?: [number, number, number]
}

export function ProductModel({ 
  className = "", 
  scale = 1,
  autoRotate = true,
  position = [0, -0.5, 0]
}: ProductModelProps) {
  return (
    <motion.div 
      className={`relative z-10 w-full h-full ${className}`}
      animate={{ 
        rotate: autoRotate ? [0, 10, 0] : 0,
        y: autoRotate ? [0, -20, 0] : 0
      }}
      transition={{ 
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 45 }}>
        <Suspense fallback={null}>
          <Stage 
            environment="city" 
            intensity={0.6}
            adjustCamera={false}
          >
            <Model scale={scale} position={position} />
          </Stage>
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            autoRotate={autoRotate}
            autoRotateSpeed={1}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </motion.div>
  )
}

// Preload the model
useGLTF.preload('./models/scene.gltf') 
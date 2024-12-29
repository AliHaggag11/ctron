'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage, useGLTF } from '@react-three/drei'
import { Suspense } from 'react'

function Model() {
  const { scene } = useGLTF('./models/scene.gltf')
  return <primitive object={scene} scale={1} position={[0, -0.5, 0]} rotation={[0, Math.PI * 2, 0]} />
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen relative bg-gradient-to-b from-[#1A1A1A] via-[#252321] to-[#3B332E] text-[#F5F5F5] font-sans overflow-hidden">
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2A2522]/80 to-[#463B35]" />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#4D403A]/70" />

      {/* Content wrapper */}
      <div className="relative min-h-screen flex flex-col">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 flex justify-between items-center px-6 sm:px-8 py-5 z-50 backdrop-blur-md bg-gradient-to-b from-black/20 to-black/10 border-b border-white/5">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="rounded-full border border-white/20 px-6 py-2.5 text-sm hover:border-white/40 transition-all duration-300 cursor-pointer bg-white/5 hover:bg-white/10"
          >
            <span className="font-medium tracking-[0.2em]">SKYN</span>
          </motion.div>
          
          <div className="hidden sm:flex items-center gap-14">
            <motion.span 
              whileHover={{ y: -1 }}
              className="text-sm text-white/60 hover:text-white transition-all duration-300 tracking-[0.15em] cursor-pointer"
            >
              PRODUCT SHOWCASE
            </motion.span>
            <motion.div 
              whileHover={{ y: -1 }}
              className="flex items-center gap-3 text-sm text-white/60 hover:text-white transition-all duration-300 cursor-pointer group"
            >
              <span className="tracking-[0.15em]">CART</span>
              <div className="w-5 h-5 rounded-full bg-white/10 group-hover:bg-white/20 flex items-center justify-center text-xs transition-all duration-300">
                1
              </div>
            </motion.div>
          </div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="sm:hidden"
          >
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white/80 hover:text-white transition-all duration-300 focus:outline-none rounded-full p-2 hover:bg-white/5"
            >
              {isMenuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </motion.div>
          
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="absolute top-[72px] left-0 right-0 backdrop-blur-2xl border-b border-white/5 sm:hidden"
              >
                <motion.div 
                  className="bg-gradient-to-b from-black/90 to-black/80"
                  initial={{ y: -10 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                >
                  <div className="p-6">
                    <div className="space-y-6">
                      <motion.div
                        whileHover={{ x: 4 }}
                        className="group flex items-center justify-between cursor-pointer"
                      >
                        <span className="text-white/80 group-hover:text-white transition-all duration-300 text-lg tracking-wide">
                          PRODUCT SHOWCASE
                        </span>
                        <motion.div
                          whileHover={{ x: 2 }}
                          className="flex items-center gap-2 text-white/40 group-hover:text-white/60"
                        >
                          <span className="text-xs uppercase tracking-wider">View</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                          </svg>
                        </motion.div>
                      </motion.div>
                      
                      <motion.div
                        whileHover={{ x: 4 }}
                        className="group flex items-center justify-between cursor-pointer"
                      >
                        <span className="text-white/80 group-hover:text-white transition-all duration-300 text-lg tracking-wide">
                          CART
                        </span>
                        <motion.div
                          whileHover={{ x: 2 }}
                          className="flex items-center gap-2 text-white/40 group-hover:text-white/60"
                        >
                          <span className="text-xs uppercase tracking-wider">1 Item</span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                          </svg>
                        </motion.div>
                      </motion.div>
                    </div>
                  </div>
                  
                  <div className="p-6 border-t border-white/10 bg-white/5 backdrop-blur-lg">
                    <div className="space-y-4">
                      <motion.button 
                        className="w-full bg-white hover:bg-white/90 text-black px-6 py-3 rounded-full text-sm font-medium tracking-wider transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        SHOP NOW
                      </motion.button>
                      <motion.button 
                        className="w-full bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full text-sm font-medium tracking-wider transition-all duration-300 border border-white/20 hover:border-white/40"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        LEARN MORE
                      </motion.button>
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-white/10">
                      <motion.div 
                        className="flex items-center justify-center gap-6 text-white/40"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                      >
                        <motion.span 
                          className="text-xs tracking-widest hover:text-white/60 cursor-pointer transition-colors"
                          whileHover={{ y: -1 }}
                        >
                          ABOUT
                        </motion.span>
                        <motion.span 
                          className="text-xs tracking-widest hover:text-white/60 cursor-pointer transition-colors"
                          whileHover={{ y: -1 }}
                        >
                          CONTACT
                        </motion.span>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        {/* Main Content */}
        <main className="flex-1 relative px-4 sm:px-8 pt-[72px] lg:pt-[96px]">
          {/* Desktop Layout */}
          <div className="hidden lg:flex flex-row items-center justify-center h-full">
            {/* Left Content */}
            <div className="relative w-1/2 z-30">
              <div>
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                >
                  <h1 className="text-[12vw] leading-[0.85] font-medium tracking-[-0.02em]">
                    C'TR
                  </h1>
                  <span className="absolute top-full left-0 text-[3vw] text-white/60 mt-2">Precision</span>
                </motion.div>
                <motion.div
                  className="relative ml-[55%] -mt-[2vw]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <h1 className="text-[12vw] leading-[0.85] font-medium tracking-[-0.02em] whitespace-nowrap">
                    ON
                  </h1>
                  <span className="absolute top-full right-0 text-[3vw] text-white/60 mt-2">Skincare</span>
                </motion.div>
              </div>

              <motion.div 
                className="mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p className="text-white/80 text-lg">
                  Deep hydration.
                  <br />
                  Gentle cleansing perfection.
                </p>
              </motion.div>
            </div>

            {/* Right Content */}
            <div className="absolute top-1/2 -translate-y-1/2 right-8 max-w-[280px] space-y-8 text-sm">
              <motion.p 
                className="text-white/60 leading-relaxed"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                An advanced hydrating cleanser
                <br />
                that purifies while maintaining
                <br />
                your skin's natural moisture
                <br />
                balance
              </motion.p>

              <motion.div 
                className="space-y-3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <p className="text-white/40">Benefits:</p>
                <ul className="space-y-1.5 text-white/60">
                  <li>Deep hydration</li>
                  <li>Gentle cleansing</li>
                  <li>pH balanced</li>
                  <li>Dermatologist tested</li>
                </ul>
              </motion.div>
            </div>

            {/* Center Content - 3D Product */}
            <motion.div 
              className="w-[500px] aspect-square absolute top-1/2 -translate-y-1/2 z-20"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              {/* Product shadow/gradient */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full aspect-square rounded-full bg-gradient-to-b from-transparent via-black/20 to-black/40 blur-xl" />
              
              <motion.div 
                className="relative z-10 w-full h-full"
                animate={{ 
                  rotate: [0, 10, 0],
                  y: [0, -20, 0]
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
                      <Model />
                    </Stage>
                    <OrbitControls 
                      enableZoom={false}
                      enablePan={false}
                      autoRotate
                      autoRotateSpeed={1}
                      minPolarAngle={Math.PI / 2}
                      maxPolarAngle={Math.PI / 2}
                    />
                  </Suspense>
                </Canvas>
              </motion.div>
            </motion.div>

            {/* Desktop CTA Buttons */}
            <motion.div 
              className="absolute bottom-16 left-8 flex gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.button 
                className="bg-white hover:bg-white/90 text-black px-6 py-2.5 rounded-full text-sm font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                SHOP NOW
              </motion.button>
              <motion.button 
                className="bg-white/10 hover:bg-white/20 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                LEARN MORE
              </motion.button>
            </motion.div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden flex flex-col items-center py-8">
            <div className="w-full max-w-6xl mx-auto">
              <div className="relative z-30">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-4"
                >
                  <h1 className="text-[18vw] sm:text-[15vw] leading-[0.85] font-medium tracking-[-0.02em]">
                    C'TR
                  </h1>
                  <span className="text-[4vw] text-white/60">Precision</span>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="ml-[40%] sm:ml-[55%] -mt-[2vw]"
                >
                  <h1 className="text-[18vw] sm:text-[15vw] leading-[0.85] font-medium tracking-[-0.02em]">
                    ON
                  </h1>
                  <span className="text-[4vw] text-white/60">Skincare</span>
                </motion.div>
              </div>

              {/* Product Description */}
              <motion.div
                className="mt-8 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-2xl mb-4">
                  Deep hydration.
                  <br />
                  Gentle cleansing perfection.
                </h2>
                <p className="text-white/60 text-base mb-8">
                  C'TRON combines advanced hydrating technology with gentle cleansing action,
                  delivering optimal moisture while purifying your skin.
                </p>
              </motion.div>

              {/* Feature Boxes */}
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                  <h3 className="text-xl mb-2">Hydrating Formula</h3>
                  <p className="text-white/60">Locks in moisture while cleansing</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
                  <h3 className="text-xl mb-2">pH Balanced</h3>
                  <p className="text-white/60">Maintains skin's natural barrier</p>
                </div>
              </motion.div>

              {/* 3D Model Container */}
              <div className="relative w-full">
                <motion.div 
                  className="w-full max-w-[280px] sm:max-w-[400px] aspect-square mx-auto
                  relative z-20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  {/* Product shadow/gradient */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full aspect-square rounded-full bg-gradient-to-b from-transparent via-black/20 to-black/40 blur-xl" />
                  
                  <motion.div 
                    className="relative z-10 w-full h-full"
                    animate={{ 
                      rotate: [0, 10, 0],
                      y: [0, -20, 0]
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
                          <Model />
                        </Stage>
                        <OrbitControls 
                          enableZoom={false}
                          enablePan={false}
                          autoRotate
                          autoRotateSpeed={1}
                          minPolarAngle={Math.PI / 2}
                          maxPolarAngle={Math.PI / 2}
                        />
                      </Suspense>
                    </Canvas>
                  </motion.div>
                </motion.div>
              </div>

              {/* Features Section */}
              <motion.div
                className="text-center mt-12 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <p className="text-white/60 text-lg mb-8">
                  A revolutionary hydrating cleanser that transforms your daily skincare routine into a moisturizing ritual
                </p>
                <h4 className="text-white/40 mb-4">Benefits:</h4>
                <div className="grid grid-cols-2 gap-x-12 gap-y-4 max-w-md mx-auto text-white/60">
                  <div>Deep hydration</div>
                  <div>Gentle cleansing</div>
                  <div>pH balanced</div>
                  <div>Dermatologist tested</div>
                </div>
              </motion.div>

              {/* Mobile CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <motion.button 
                  className="w-full sm:w-auto bg-white hover:bg-white/90 text-black px-8 py-3 rounded-full text-base font-medium transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  SHOP NOW
                </motion.button>
                <motion.button 
                  className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full text-base font-medium transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  LEARN MORE
                </motion.button>
              </motion.div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="py-8 text-sm text-white/40 text-center">
          SKYN × C'TRON
        </footer>
      </div>
    </div>
  )
}

// Preload the model
useGLTF.preload('./models/scene.gltf')

export default App


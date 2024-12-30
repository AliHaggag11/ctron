import { motion } from 'framer-motion'
import { ProductModel } from '../Product3D/ProductModel'
import { useNavigate } from 'react-router-dom'

export function DesktopLayout() {
  return (
    <div className="hidden lg:flex flex-row items-center justify-center h-full">
      <LeftContent />
      <RightContent />
      <CenterContent />
      <DesktopCTA />
    </div>
  )
}

function LeftContent() {
  return (
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
  )
}

function RightContent() {
  return (
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
  )
}

function CenterContent() {
  return (
    <motion.div 
      className="w-[500px] aspect-square absolute top-1/2 -translate-y-1/2 z-20"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full aspect-square rounded-full bg-gradient-to-b from-transparent via-black/20 to-black/40 blur-xl" />
      <ProductModel />
    </motion.div>
  )
}

function DesktopCTA() {
  const navigate = useNavigate()
  
  return (
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
        onClick={() => navigate('/products')}
      >
        SHOP NOW
      </motion.button>
      <motion.button 
        className="bg-white/10 hover:bg-white/20 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate('/learn-more')}
      >
        LEARN MORE
      </motion.button>
    </motion.div>
  )
} 
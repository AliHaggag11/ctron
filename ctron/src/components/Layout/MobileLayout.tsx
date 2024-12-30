import { motion } from 'framer-motion'
import { ProductModel } from '../Product3D/ProductModel'
import { useNavigate } from 'react-router-dom'

export function MobileLayout() {
  return (
    <div className="lg:hidden flex flex-col items-center py-8">
      <div className="w-full max-w-6xl mx-auto">
        <MobileHeader />
        <ProductDescription />
        <FeatureBoxes />
        <ProductDisplay />
        <BenefitsSection />
        <MobileCTA />
      </div>
    </div>
  )
}

function MobileHeader() {
  return (
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
  )
}

function ProductDescription() {
  return (
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
  )
}

function FeatureBoxes() {
  return (
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mb-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <FeatureBox title="Hydrating Formula" description="Locks in moisture while cleansing" />
      <FeatureBox title="pH Balanced" description="Maintains skin's natural barrier" />
    </motion.div>
  )
}

function FeatureBox({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl">
      <h3 className="text-xl mb-2">{title}</h3>
      <p className="text-white/60">{description}</p>
    </div>
  )
}

function ProductDisplay() {
  return (
    <div className="relative w-full">
      <motion.div 
        className="w-full max-w-[280px] sm:max-w-[400px] aspect-square mx-auto relative z-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full aspect-square rounded-full bg-gradient-to-b from-transparent via-black/20 to-black/40 blur-xl" />
        <ProductModel />
      </motion.div>
    </div>
  )
}

function BenefitsSection() {
  return (
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
  )
}

function MobileCTA() {
  const navigate = useNavigate()
  
  return (
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
        onClick={() => navigate('/products')}
      >
        SHOP NOW
      </motion.button>
      <motion.button 
        className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full text-base font-medium transition-colors"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate('/learn-more')}
      >
        LEARN MORE
      </motion.button>
    </motion.div>
  )
} 
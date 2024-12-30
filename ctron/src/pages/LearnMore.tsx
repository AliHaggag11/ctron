import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ProductModel } from '../components/Product3D/ProductModel'

export function LearnMore() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1A1A] via-[#252321] to-[#3B332E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <Header />
        <StorySection />
        <IngredientsSection />
        <SustainabilitySection />
      </div>
    </div>
  )
}

function Header() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center mb-20"
    >
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white/90 mb-6">
        Our Story
      </h1>
      <p className="text-lg text-white/60 max-w-2xl mx-auto">
        Discover the science and passion behind C'TRON's innovative skincare solutions
      </p>
    </motion.div>
  )
}

function StorySection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="grid lg:grid-cols-2 gap-12 mb-24"
    >
      <div className="relative aspect-square lg:aspect-auto">
        <ProductModel autoRotate={false} scale={1.2} />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full aspect-square rounded-full bg-gradient-to-b from-transparent via-black/20 to-black/40 blur-xl" />
      </div>
      
      <div className="lg:py-12">
        <h2 className="text-3xl font-light text-white/90 mb-6">The C'TRON Philosophy</h2>
        <div className="space-y-4 text-lg text-white/60">
          <p>
            Born from a desire to revolutionize skincare, C'TRON combines cutting-edge science with natural ingredients to create products that truly understand your skin's needs.
          </p>
          <p>
            Our journey began in laboratories where dermatologists and scientists worked together to develop formulas that don't just promise results – they deliver them.
          </p>
        </div>
      </div>
    </motion.div>
  )
}

function IngredientsSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="mb-24"
    >
      <h2 className="text-3xl font-light text-white/90 mb-12 text-center">Premium Ingredients</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {ingredients.map((ingredient, index) => (
          <motion.div
            key={ingredient.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
            className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
          >
            <h3 className="text-xl text-white/90 mb-3">{ingredient.name}</h3>
            <p className="text-white/60">{ingredient.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

function SustainabilitySection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="text-center"
    >
      <h2 className="text-3xl font-light text-white/90 mb-6">Sustainability Promise</h2>
      <p className="text-lg text-white/60 max-w-2xl mx-auto mb-8">
        We're committed to creating products that are good for your skin and kind to our planet.
      </p>
      <Link to="/products">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-white text-black px-8 py-3 rounded-full text-sm font-medium tracking-wide"
        >
          EXPLORE OUR PRODUCTS
        </motion.button>
      </Link>
    </motion.div>
  )
}

const ingredients = [
  {
    name: "Hyaluronic Complex",
    description: "Advanced moisture-binding ingredient that helps maintain skin hydration throughout the day."
  },
  {
    name: "Peptide Blend",
    description: "Specialized proteins that support skin's natural renewal process and maintain elasticity."
  },
  {
    name: "Natural Extracts",
    description: "Carefully selected botanical ingredients that soothe and nourish the skin."
  }
] 
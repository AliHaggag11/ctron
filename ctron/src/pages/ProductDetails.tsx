import { motion, AnimatePresence } from 'framer-motion'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { ProductModel } from '../components/Product3D/ProductModel'
import { products } from '../data/products' // We'll move the products data to a separate file

export function ProductDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [isSaved, setIsSaved] = useState(false)
  const product = products.find(p => p.id === id)

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-white/90 mb-4">Product not found</h1>
          <Link to="/products">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm text-white/80"
            >
              Return to Products
            </motion.button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1A1A] via-[#252321] to-[#3B332E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <Link to="/products">
          <motion.button
            whileHover={{ x: -4 }}
            className="flex items-center gap-2 text-white/60 hover:text-white/80 mb-8"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="text-sm tracking-wide">BACK TO PRODUCTS</span>
          </motion.button>
        </Link>

        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          {/* Product Image/Model */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-12 lg:mb-0"
          >
            <div className="relative aspect-square">
              <div className="absolute inset-0">
                <ProductModel className="scale-150" />
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full aspect-square rounded-full bg-gradient-to-b from-transparent via-black/20 to-black/40 blur-xl" />
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:py-12"
          >
            <h1 className="text-4xl font-light text-white/90 mb-4">{product.name}</h1>
            <div className="flex gap-2 mb-6">
              {product.tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/60"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <p className="text-lg text-white/60 mb-8">{product.description}</p>
            
            <div className="space-y-6 mb-8">
              <Feature 
                title="Key Benefits"
                description="Deep hydration, gentle cleansing, and pH balance for optimal skin health"
              />
              <Feature 
                title="How to Use"
                description="Apply a small amount to damp skin, massage gently, and rinse thoroughly"
              />
              <Feature 
                title="Ingredients"
                description="Aqua, Glycerin, Sodium Cocoyl Isethionate, Cocamidopropyl Betaine"
              />
            </div>

            <div className="border-t border-white/10 pt-8 mb-8">
              <div className="flex items-center justify-between mb-8">
                <span className="text-3xl font-light text-white/90">
                  ${product.price.toFixed(2)}
                </span>
                <div className="flex items-center gap-3">
                  <QuantitySelector />
                </div>
              </div>

              <div className="flex gap-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate('/cart')}
                  className="flex-1 bg-white text-black rounded-full py-3 text-sm font-medium tracking-wide"
                >
                  ADD TO CART
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsSaved(true)}
                  className="flex-1 bg-white/10 text-white rounded-full py-3 text-sm font-medium tracking-wide relative overflow-hidden group"
                >
                  <AnimatePresence>
                    {!isSaved ? (
                      <motion.span
                        key="save-text"
                        initial={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        SAVE FOR LATER
                      </motion.span>
                    ) : (
                      <motion.div
                        key="saved-check"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ 
                          scale: 1, 
                          opacity: 1,
                          transition: { type: "spring", stiffness: 200, damping: 15 }
                        }}
                        className="absolute inset-0 flex items-center justify-center gap-2 bg-gradient-to-r from-[#463B35] to-[#4D403A]"
                      >
                        <svg 
                          className="w-5 h-5 text-white" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M5 13l4 4L19 7" 
                          />
                        </svg>
                        <span className="text-white tracking-wide">SAVED</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              </div>
            </div>

            <p className="text-white/40 text-sm">
              Free shipping on orders over $100
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

function Feature({ title, description }: { title: string; description: string }) {
  return (
    <div>
      <h3 className="text-white/80 font-medium mb-2">{title}</h3>
      <p className="text-white/60">{description}</p>
    </div>
  )
}

function QuantitySelector() {
  return (
    <div className="flex items-center gap-3 bg-white/10 rounded-full px-4 py-2">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="text-white/80 hover:text-white w-6 h-6 flex items-center justify-center"
      >
        -
      </motion.button>
      <span className="text-white/80 w-8 text-center">1</span>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="text-white/80 hover:text-white w-6 h-6 flex items-center justify-center"
      >
        +
      </motion.button>
    </div>
  )
} 
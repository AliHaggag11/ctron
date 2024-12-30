import { motion } from 'framer-motion'
import { ProductModel } from '../components/Product3D/ProductModel'
import { useState } from 'react'
import { Link } from 'react-router-dom'

interface Product {
  id: string
  name: string
  description: string
  price: number
  category: 'cleanser' | 'moisturizer' | 'serum' | 'treatment'
  tags: string[]
}

const products: Product[] = [
  {
    id: '1',
    name: "C'TRON Hydrating Cleanser",
    description: 'Advanced hydrating cleanser with pH-balanced formula',
    price: 49.99,
    category: 'cleanser',
    tags: ['hydrating', 'gentle', 'daily']
  },
  {
    id: '2',
    name: "C'TRON Moisture Lock",
    description: 'Intensive moisturizer for long-lasting hydration',
    price: 59.99,
    category: 'moisturizer',
    tags: ['hydrating', 'protective']
  },
  {
    id: '3',
    name: "C'TRON Radiance Serum",
    description: 'Brightening serum with vitamin C complex',
    price: 79.99,
    category: 'serum',
    tags: ['brightening', 'antioxidant']
  },
  {
    id: '4',
    name: "C'TRON Night Repair",
    description: 'Overnight treatment for skin regeneration',
    price: 89.99,
    category: 'treatment',
    tags: ['regenerating', 'night-care']
  }
]

const categories = ['all', 'cleanser', 'moisturizer', 'serum', 'treatment'] as const
type Category = (typeof categories)[number]

export function ProductShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<Category>('all')
  const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc'>('price-asc')

  const filteredProducts = products
    .filter(product => selectedCategory === 'all' || product.category === selectedCategory)
    .sort((a, b) => sortBy === 'price-asc' ? a.price - b.price : b.price - a.price)

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1A1A] via-[#252321] to-[#3B332E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <Header />
        <Filters 
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  )
}

function Header() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-12 text-center"
    >
      <h1 className="text-4xl sm:text-5xl font-light tracking-tight text-white/90 mb-4">
        Product Collection
      </h1>
      <p className="text-lg text-white/60 max-w-2xl mx-auto">
        Discover our range of premium skincare products, each designed to enhance your natural beauty
      </p>
    </motion.div>
  )
}

interface FiltersProps {
  selectedCategory: Category
  setSelectedCategory: (category: Category) => void
  sortBy: 'price-asc' | 'price-desc'
  setSortBy: (sort: 'price-asc' | 'price-desc') => void
}

function Filters({ selectedCategory, setSelectedCategory, sortBy, setSortBy }: FiltersProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="mb-12"
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`
                px-4 py-2 rounded-full text-sm tracking-wide
                ${selectedCategory === category
                  ? 'bg-white text-black'
                  : 'bg-white/10 text-white/60 hover:bg-white/20 hover:text-white'
                }
                transition-all duration-300
              `}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.toUpperCase()}
            </motion.button>
          ))}
        </div>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as 'price-asc' | 'price-desc')}
          className="bg-white/10 text-white/60 px-4 py-2 rounded-full text-sm tracking-wide cursor-pointer hover:bg-white/20 transition-all duration-300"
        >
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>
    </motion.div>
  )
}

function ProductGrid({ products }: { products: Product[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product, index) => (
        <ProductCard key={product.id} product={product} index={index} />
      ))}
    </div>
  )
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      <Link to={`/product/${product.id}`}>
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300">
          <div className="relative aspect-square mb-6">
            <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-300">
              <ProductModel />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-white/90 mb-2">{product.name}</h3>
            <p className="text-sm text-white/60 mb-4">{product.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {product.tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-2 py-1 bg-white/10 rounded-full text-xs text-white/60"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-lg font-medium text-white/90">
                ${product.price.toFixed(2)}
              </span>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm text-white/80 tracking-wide transition-colors duration-300"
              >
                VIEW DETAILS
              </motion.button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
} 
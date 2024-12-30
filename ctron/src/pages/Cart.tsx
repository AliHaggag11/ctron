import { motion } from 'framer-motion'
import { ProductModel } from '../components/Product3D/ProductModel'
import { useNavigate } from 'react-router-dom'

interface CartItem {
  id: string
  name: string
  price: number
  quantity: number
  description: string
}

const cartItems: CartItem[] = [
  {
    id: '1',
    name: "C'TRON Hydrating Cleanser",
    price: 49.99,
    quantity: 1,
    description: 'Advanced hydrating cleanser with pH-balanced formula'
  }
]

export function Cart() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1A1A] via-[#252321] to-[#3B332E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-light tracking-tight text-white/90">Shopping Cart</h1>
          <p className="mt-2 text-lg text-white/60">Review and manage your selected items</p>
        </motion.div>

        <div className="lg:grid lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <CartItems items={cartItems} />
          </div>

          <div className="lg:col-span-5">
            <CartSummary items={cartItems} />
          </div>
        </div>
      </div>
    </div>
  )
}

function CartItems({ items }: { items: CartItem[] }) {
  return (
    <div className="space-y-6">
      {items.map((item) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
        >
          <div className="flex gap-6">
            <div className="w-32 h-32 relative">
              <div className="absolute inset-0">
                <ProductModel className="scale-75" />
              </div>
            </div>
            
            <div className="flex-1">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-lg font-medium text-white/90">{item.name}</h3>
                  <p className="mt-1 text-sm text-white/60">{item.description}</p>
                </div>
                <p className="text-lg font-medium text-white/90">
                  ${item.price.toFixed(2)}
                </p>
              </div>
              
              <div className="mt-4 flex items-center justify-between">
                <QuantitySelector quantity={item.quantity} />
                <RemoveButton />
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

function QuantitySelector({ quantity }: { quantity: number }) {
  return (
    <div className="flex items-center space-x-3">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-8 h-8 rounded-full bg-white/10 text-white/80 hover:bg-white/20 flex items-center justify-center"
      >
        -
      </motion.button>
      <span className="text-white/80 w-8 text-center">{quantity}</span>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-8 h-8 rounded-full bg-white/10 text-white/80 hover:bg-white/20 flex items-center justify-center"
      >
        +
      </motion.button>
    </div>
  )
}

function RemoveButton() {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="text-white/40 hover:text-white/60 text-sm tracking-wide"
    >
      REMOVE
    </motion.button>
  )
}

function CartSummary({ items }: { items: CartItem[] }) {
  const navigate = useNavigate()
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 5.99
  const total = subtotal + shipping

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mt-12 lg:mt-0 bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
    >
      <h2 className="text-lg font-medium text-white/90 mb-6">Order Summary</h2>
      
      <div className="space-y-4">
        <SummaryRow label="Subtotal" value={subtotal} />
        <SummaryRow label="Shipping" value={shipping} />
        <div className="border-t border-white/10 pt-4">
          <SummaryRow label="Total" value={total} isTotal />
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={() => navigate('/checkout')}
        className="w-full mt-6 bg-gradient-to-r from-white to-white/90 text-black rounded-full py-3 text-sm font-medium tracking-wide"
      >
        PROCEED TO CHECKOUT
      </motion.button>
      
      <p className="mt-4 text-center text-white/40 text-sm">
        Free shipping on orders over $100
      </p>
    </motion.div>
  )
}

function SummaryRow({ label, value, isTotal = false }: { label: string; value: number; isTotal?: boolean }) {
  return (
    <div className="flex justify-between">
      <span className={`${isTotal ? 'text-white/90' : 'text-white/60'}`}>{label}</span>
      <span className={`${isTotal ? 'text-white/90 text-lg' : 'text-white/80'}`}>
        ${value.toFixed(2)}
      </span>
    </div>
  )
} 
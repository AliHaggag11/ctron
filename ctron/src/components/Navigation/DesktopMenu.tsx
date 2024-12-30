import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export function DesktopMenu() {
  return (
    <div className="hidden lg:flex items-center gap-8">
      <NavLink to="/products" label="PRODUCTS" />
      <NavLink to="/learn-more" label="ABOUT" />
      <NavLink to="/contact" label="CONTACT" />
      <NavLink to="/support" label="SUPPORT" />
      <CartButton />
    </div>
  )
}

function NavLink({ to, label }: { to: string; label: string }) {
  return (
    <Link to={to}>
      <motion.span
        className="text-sm text-white/60 hover:text-white tracking-[0.2em] cursor-pointer transition-colors"
        whileHover={{ y: -1 }}
      >
        {label}
      </motion.span>
    </Link>
  )
}

function CartButton() {
  return (
    <Link to="/cart">
      <motion.div
        className="relative"
        whileHover={{ y: -1 }}
      >
        <div className="absolute -top-1 -right-2 w-4 h-4 bg-white rounded-full flex items-center justify-center">
          <span className="text-[10px] text-black font-medium">1</span>
        </div>
        <svg className="w-6 h-6 text-white/60 hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      </motion.div>
    </Link>
  )
} 
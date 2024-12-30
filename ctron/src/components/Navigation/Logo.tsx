import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export function Logo() {
  return (
    <Link to="/">
      <motion.div 
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="rounded-full border border-white/20 px-6 py-2.5 text-sm hover:border-white/40 transition-all duration-300 cursor-pointer bg-white/5 hover:bg-white/10"
      >
        <span className="font-medium tracking-[0.2em]">SKYN</span>
      </motion.div>
    </Link>
  )
} 
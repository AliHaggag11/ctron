import { motion } from 'framer-motion'

interface MobileMenuButtonProps {
  isMenuOpen: boolean
  setIsMenuOpen: (isOpen: boolean) => void
}

export function MobileMenuButton({ isMenuOpen, setIsMenuOpen }: MobileMenuButtonProps) {
  return (
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
  )
} 
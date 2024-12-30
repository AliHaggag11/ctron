import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1A1A] via-[#252321] to-[#3B332E] flex items-center">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="max-w-2xl mx-auto">
          {/* Main Content */}
          <div className="text-center">
            {/* Error Code */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center justify-center mb-8"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-white/5 blur-2xl transform scale-150" />
                <div className="relative bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl px-6 py-2">
                  <span className="text-sm tracking-[0.2em] text-white/60 font-light">
                    404 ERROR
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white/90">
                Page Not Found
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-white/60 mb-12 max-w-lg mx-auto"
            >
              The page you're looking for might have been moved, deleted, or possibly never existed.
            </motion.p>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto bg-white hover:bg-white/90 text-black px-8 py-3 rounded-full text-sm font-medium tracking-wide"
                >
                  BACK TO HOME
                </motion.button>
              </Link>
              <Link to="/products" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full text-sm font-medium tracking-wide border border-white/10"
                >
                  EXPLORE PRODUCTS
                </motion.button>
              </Link>
            </motion.div>

            {/* Decorative Line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="w-24 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto my-12"
            />

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap justify-center gap-8"
            >
              {[
                { label: 'About', path: '/learn-more' },
                { label: 'Contact', path: '/contact' },
                { label: 'Support', path: '/support' }
              ].map((link) => (
                <Link 
                  key={link.label}
                  to={link.path}
                  className="text-white/40 hover:text-white text-sm tracking-[0.2em] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
} 
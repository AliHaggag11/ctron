import { motion, AnimatePresence } from 'framer-motion'

interface BlurOverlayProps {
  isVisible: boolean
}

export function BlurOverlay({ isVisible }: BlurOverlayProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 backdrop-blur-md bg-black/20 z-40"
        />
      )}
    </AnimatePresence>
  )
} 
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'

interface MobileMenuProps {
  isMenuOpen: boolean
  setIsMenuOpen: (isOpen: boolean) => void
}

export function MobileMenu({ isMenuOpen, setIsMenuOpen }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed top-[72px] left-0 right-0 backdrop-blur-2xl border-b border-white/5 sm:hidden overflow-hidden z-50"
        >
          <motion.div 
            className="bg-gradient-to-b from-black/90 via-[#1A1A1A]/95 to-[#252321]/95"
            initial={{ y: -10 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.2, delay: 0.1 }}
          >
            <MobileMenuContent setIsMenuOpen={setIsMenuOpen} />
            <MobileMenuFooter setIsMenuOpen={setIsMenuOpen} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function MobileMenuContent({ setIsMenuOpen }: { setIsMenuOpen: (isOpen: boolean) => void }) {
  return (
    <div className="p-6">
      <div className="space-y-6">
        <MenuItem 
          label="PRODUCT SHOWCASE" 
          info="VIEW" 
          description="Explore our latest skincare innovations"
          to="/products"
          onClick={() => setIsMenuOpen(false)}
        />
        <MenuItem 
          label="CART" 
          info="1 ITEM" 
          description="Review your selected products"
          to="/cart"
          onClick={() => setIsMenuOpen(false)}
        />
      </div>
    </div>
  )
}

interface MenuItemProps {
  label: string
  info: string
  description: string
  to?: string
  onClick?: () => void
}

function MenuItem({ label, info, description, to, onClick }: MenuItemProps) {
  const Content = (
    <motion.div
      whileHover={{ x: 4 }}
      className="group cursor-pointer"
    >
      <div className="flex items-center justify-between">
        <h3 className="text-[22px] text-white/90 group-hover:text-white transition-all duration-300 tracking-wide font-light">
          {label}
        </h3>
        <motion.div
          whileHover={{ x: 2 }}
          className="flex items-center gap-2 text-white/40 group-hover:text-white/60"
        >
          <span className="text-xs tracking-[0.2em]">{info}</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
          </svg>
        </motion.div>
      </div>
      <p className="mt-1 text-[15px] text-white/40 group-hover:text-white/60 transition-colors duration-300">
        {description}
      </p>
    </motion.div>
  )

  return to ? (
    <Link to={to} onClick={onClick} className="block">
      {Content}
    </Link>
  ) : Content
}

function MobileMenuFooter({ setIsMenuOpen }: { setIsMenuOpen: (isOpen: boolean) => void }) {
  return (
    <div>
      <div className="px-6 py-5 border-t border-white/10">
        <div className="space-y-3">
          <Link to="/products" onClick={() => setIsMenuOpen(false)} className="block">
            <ActionButton primary label="SHOP NOW" />
          </Link>
          <Link to="/learn-more" onClick={() => setIsMenuOpen(false)} className="block">
            <ActionButton label="LEARN MORE" />
          </Link>
        </div>
      </div>
      
      <div className="px-6 py-5 border-t border-white/10">
        <FooterLinks setIsMenuOpen={setIsMenuOpen} />
      </div>

      <div className="px-6 py-5 border-t border-white/10">
        <SocialLinks />
      </div>
    </div>
  )
}

function ActionButton({ label, primary }: { label: string; primary?: boolean }) {
  return (
    <motion.button 
      className={`
        w-full rounded-full text-sm tracking-[0.2em] font-medium transition-all duration-300
        ${primary 
          ? 'bg-white text-black hover:bg-white/90' 
          : 'bg-white/10 text-white hover:bg-white/20'
        }
        h-[50px]
      `}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {label}
    </motion.button>
  )
}

function FooterLinks({ setIsMenuOpen }: { setIsMenuOpen: (isOpen: boolean) => void }) {
  return (
    <div className="flex items-center justify-between text-white/40">
      <div className="space-x-6">
        <Link to="/learn-more" onClick={() => setIsMenuOpen(false)}>
          <FooterLink label="ABOUT" />
        </Link>
        <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
          <FooterLink label="CONTACT" />
        </Link>
      </div>
      <Link to="/support" onClick={() => setIsMenuOpen(false)}>
        <FooterLink label="SUPPORT" />
      </Link>
    </div>
  )
}

function SocialLinks() {
  const socialIcons = [
    {
      name: 'instagram',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
      name: 'facebook',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/>
        </svg>
      )
    },
    {
      name: 'x',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      name: 'tiktok',
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      )
    }
  ]

  return (
    <div className="flex items-center justify-center gap-8">
      {socialIcons.map((social) => (
        <motion.button
          key={social.name}
          className="text-white/30 hover:text-white/60 transition-colors"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          {social.icon}
        </motion.button>
      ))}
    </div>
  )
}

function FooterLink({ label, onClick }: { label: string; onClick?: () => void }) {
  return (
    <motion.span 
      className="text-xs tracking-[0.2em] hover:text-white/60 cursor-pointer transition-colors inline-block"
      whileHover={{ y: -1 }}
      onClick={onClick}
    >
      {label}
    </motion.span>
  )
} 
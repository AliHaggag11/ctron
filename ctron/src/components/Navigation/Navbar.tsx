'use client'
import { useState } from 'react'
import { Logo } from './Logo'
import { DesktopMenu } from './DesktopMenu'
import { MobileMenuButton } from './MobileMenuButton'
import { MobileMenu } from './MobileMenu'
import { BlurOverlay } from './BlurOverlay'

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <>
      <BlurOverlay isVisible={isMenuOpen} />
      <nav className="fixed top-0 left-0 right-0 flex justify-between items-center px-6 sm:px-8 py-5 z-50 backdrop-blur-md bg-gradient-to-b from-black/20 to-black/10 border-b border-white/5">
        <Logo />
        <DesktopMenu />
        <MobileMenuButton isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </nav>
    </>
  )
} 
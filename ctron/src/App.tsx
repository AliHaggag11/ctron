'use client'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navigation/Navbar'
import { Footer } from './components/Layout/Footer'
import { Home } from './pages/Home'
import { Cart } from './pages/Cart'
import { ProductShowcase } from './pages/ProductShowcase'
import { ProductDetails } from './pages/ProductDetails'
import { LearnMore } from './pages/LearnMore'
import { Contact } from './pages/Contact'
import { Support } from './pages/Support'
import { Checkout } from './pages/Checkout'
import { NotFound } from './pages/NotFound'

function App() {
  return (
    <Router>
    <div className="min-h-screen relative bg-gradient-to-b from-[#1A1A1A] via-[#252321] to-[#3B332E] text-[#F5F5F5] font-sans overflow-hidden">
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2A2522]/80 to-[#463B35]" />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#4D403A]/70" />

      {/* Content wrapper */}
      <div className="relative min-h-screen flex flex-col">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products" element={<ProductShowcase />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/learn-more" element={<LearnMore />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/support" element={<Support />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<NotFound />} />
          </Routes>

          <Footer />
          </div>
      </div>
    </Router>
  )
}

export default App


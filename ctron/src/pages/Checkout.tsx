import { motion } from 'framer-motion'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function Checkout() {
  const navigate = useNavigate()
  const [step, setStep] = useState<'details' | 'payment' | 'confirmation'>('details')

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1A1A] via-[#252321] to-[#3B332E]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-light text-white/90 mb-4">Checkout</h1>
          <div className="flex items-center gap-4">
            <StepIndicator 
              step={1} 
              label="Details" 
              active={step === 'details'} 
              completed={step === 'payment' || step === 'confirmation'}
            />
            <StepDivider completed={step === 'payment' || step === 'confirmation'} />
            <StepIndicator 
              step={2} 
              label="Payment" 
              active={step === 'payment'}
              completed={step === 'confirmation'} 
            />
            <StepDivider completed={step === 'confirmation'} />
            <StepIndicator 
              step={3} 
              label="Confirmation" 
              active={step === 'confirmation'}
              completed={false} 
            />
          </div>
        </motion.div>

        {step === 'details' && (
          <CheckoutDetails onNext={() => setStep('payment')} />
        )}

        {step === 'payment' && (
          <PaymentDetails 
            onBack={() => setStep('details')}
            onNext={() => setStep('confirmation')}
          />
        )}

        {step === 'confirmation' && (
          <OrderConfirmation onBackToShop={() => navigate('/products')} />
        )}
      </div>
    </div>
  )
}

function StepIndicator({ 
  step, 
  label, 
  active, 
  completed 
}: { 
  step: number
  label: string
  active: boolean
  completed: boolean
}) {
  return (
    <div className="flex items-center gap-3">
      <div 
        className={`
          w-8 h-8 rounded-full flex items-center justify-center text-sm
          ${completed 
            ? 'bg-white text-black' 
            : active 
              ? 'bg-white/10 text-white border border-white/20' 
              : 'bg-white/5 text-white/40 border border-white/10'
          }
        `}
      >
        {completed ? (
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        ) : step}
      </div>
      <span className={`text-sm ${active ? 'text-white' : 'text-white/40'}`}>{label}</span>
    </div>
  )
}

function StepDivider({ completed }: { completed: boolean }) {
  return (
    <div className="flex-1 h-[1px] bg-white/10">
      <motion.div 
        className="h-full bg-white"
        initial={{ width: 0 }}
        animate={{ width: completed ? '100%' : 0 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  )
}

function CheckoutDetails({ onNext }: { onNext: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm text-white/60 mb-2">First Name</label>
          <input
            type="text"
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white/90 focus:outline-none focus:border-white/20"
          />
        </div>
        <div>
          <label className="block text-sm text-white/60 mb-2">Last Name</label>
          <input
            type="text"
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white/90 focus:outline-none focus:border-white/20"
          />
        </div>
        <div>
          <label className="block text-sm text-white/60 mb-2">Email</label>
          <input
            type="email"
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white/90 focus:outline-none focus:border-white/20"
          />
        </div>
        <div>
          <label className="block text-sm text-white/60 mb-2">Phone</label>
          <input
            type="tel"
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white/90 focus:outline-none focus:border-white/20"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm text-white/60 mb-2">Address</label>
        <input
          type="text"
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white/90 focus:outline-none focus:border-white/20"
        />
      </div>

      <div className="grid sm:grid-cols-3 gap-6">
        <div>
          <label className="block text-sm text-white/60 mb-2">City</label>
          <input
            type="text"
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white/90 focus:outline-none focus:border-white/20"
          />
        </div>
        <div>
          <label className="block text-sm text-white/60 mb-2">Governorate</label>
          <select className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white/90 focus:outline-none focus:border-white/20">
            <option>Cairo</option>
            <option>Alexandria</option>
            <option>Giza</option>
          </select>
        </div>
        <div>
          <label className="block text-sm text-white/60 mb-2">Postal Code</label>
          <input
            type="text"
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white/90 focus:outline-none focus:border-white/20"
          />
        </div>
      </div>

      <div className="pt-6 flex justify-end">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onNext}
          className="bg-white text-black px-8 py-3 rounded-full text-sm font-medium tracking-wide"
        >
          CONTINUE TO PAYMENT
        </motion.button>
      </div>
    </motion.div>
  )
}

function PaymentDetails({ onBack, onNext }: { onBack: () => void; onNext: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-8"
    >
      <div className="space-y-6">
        <div>
          <label className="block text-sm text-white/60 mb-2">Card Number</label>
          <input
            type="text"
            placeholder="1234 5678 9012 3456"
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white/90 focus:outline-none focus:border-white/20"
          />
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          <div className="sm:col-span-2">
            <label className="block text-sm text-white/60 mb-2">Expiry Date</label>
            <input
              type="text"
              placeholder="MM/YY"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white/90 focus:outline-none focus:border-white/20"
            />
          </div>
          <div>
            <label className="block text-sm text-white/60 mb-2">CVV</label>
            <input
              type="text"
              placeholder="123"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white/90 focus:outline-none focus:border-white/20"
            />
          </div>
        </div>
      </div>

      <div className="pt-6 flex justify-between">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onBack}
          className="bg-white/10 text-white px-8 py-3 rounded-full text-sm font-medium tracking-wide"
        >
          BACK
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onNext}
          className="bg-white text-black px-8 py-3 rounded-full text-sm font-medium tracking-wide"
        >
          COMPLETE ORDER
        </motion.button>
      </div>
    </motion.div>
  )
}

function OrderConfirmation({ onBackToShop }: { onBackToShop: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center space-y-6"
    >
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10 mb-4">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      
      <h2 className="text-2xl font-light text-white/90">Order Confirmed!</h2>
      <p className="text-white/60 max-w-md mx-auto">
        Thank you for your order. We'll send you a confirmation email with your order details.
      </p>

      <div className="pt-6">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={onBackToShop}
          className="bg-white text-black px-8 py-3 rounded-full text-sm font-medium tracking-wide"
        >
          CONTINUE SHOPPING
        </motion.button>
      </div>
    </motion.div>
  )
} 
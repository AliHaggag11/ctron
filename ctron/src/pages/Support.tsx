import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export function Support() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1A1A] via-[#252321] to-[#3B332E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white/90 mb-6">
            Support Center
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Find answers to common questions and get the help you need
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-6 mb-12"
          >
            <QuickAction
              title="Contact Support"
              description="Get in touch with our customer service team"
              to="/contact"
            />
            <QuickAction
              title="FAQs"
              description="Browse our frequently asked questions"
              to="#faqs"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
            id="faqs"
          >
            <h2 className="text-2xl font-light text-white/90 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <FaqItem key={index} {...faq} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

function QuickAction({ title, description, to }: { title: string; description: string; to: string }) {
  return (
    <Link to={to}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 cursor-pointer group"
      >
        <h3 className="text-lg font-medium text-white/90 mb-2 group-hover:text-white">{title}</h3>
        <p className="text-white/60 group-hover:text-white/80">{description}</p>
      </motion.div>
    </Link>
  )
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
    >
      <h3 className="text-lg font-medium text-white/90 mb-2">{question}</h3>
      <p className="text-white/60">{answer}</p>
    </motion.div>
  )
}

const faqs = [
  {
    question: "How should I use C'TRON products?",
    answer: "Our products are designed to be used as part of your daily skincare routine. Specific instructions can be found on each product's packaging and detail page."
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day satisfaction guarantee on all our products. If you're not completely satisfied, you can return the unused portion for a full refund."
  },
  {
    question: "Are your products cruelty-free?",
    answer: "Yes, all C'TRON products are cruelty-free and we never test on animals. We're committed to ethical and sustainable beauty practices."
  },
  {
    question: "How long does shipping take?",
    answer: "Standard shipping typically takes 3-5 business days. Express shipping options are available at checkout for faster delivery."
  }
] 
import { motion } from 'framer-motion'

export function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A1A1A] via-[#252321] to-[#3B332E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-white/90 mb-6">
            Contact Us
          </h1>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            We're here to help. Reach out to us through any of our channels.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-light text-white/90 mb-4">Get in Touch</h2>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white/90 placeholder:text-white/40 focus:outline-none focus:border-white/20"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white/90 placeholder:text-white/40 focus:outline-none focus:border-white/20"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white/90 placeholder:text-white/40 focus:outline-none focus:border-white/20"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Message"
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white/90 placeholder:text-white/40 focus:outline-none focus:border-white/20"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-white text-black rounded-full py-3 text-sm font-medium tracking-wide"
                >
                  SEND MESSAGE
                </motion.button>
              </form>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-light text-white/90 mb-4">Other Ways to Connect</h2>
              <div className="space-y-6">
                <ContactMethod
                  title="Email"
                  detail="support@ctron.eg"
                  description="For general inquiries and support"
                />
                <ContactMethod
                  title="Phone"
                  detail="+20 2 1234 5678"
                  description="Sunday to Thursday, 9am - 5pm EET"
                />
                <ContactMethod
                  title="Office"
                  detail="26 Tahrir Street, Dokki, Giza"
                  description="Visit our flagship store and consultation center"
                />
                <ContactMethod
                  title="WhatsApp"
                  detail="+20 100 123 4567"
                  description="Available for your inquiries"
                />
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-light text-white/90 mb-4">Store Locations</h2>
              <div className="space-y-4">
                <LocationCard
                  area="Cairo"
                  locations={[
                    "City Stars Mall - Nasr City",
                    "Mall of Egypt - 6th of October",
                    "Cairo Festival City - New Cairo"
                  ]}
                />
                <LocationCard
                  area="Alexandria"
                  locations={[
                    "San Stefano Mall",
                    "Green Plaza Mall"
                  ]}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

function ContactMethod({ title, detail, description }: { title: string; detail: string; description: string }) {
  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
      <h3 className="text-lg font-medium text-white/90 mb-1">{title}</h3>
      <p className="text-white/90 mb-2">{detail}</p>
      <p className="text-sm text-white/60">{description}</p>
    </div>
  )
}

function LocationCard({ area, locations }: { area: string; locations: string[] }) {
  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
      <h3 className="text-lg font-medium text-white/90 mb-3">{area}</h3>
      <ul className="space-y-2">
        {locations.map((location, index) => (
          <li key={index} className="text-white/60">{location}</li>
        ))}
      </ul>
    </div>
  )
} 
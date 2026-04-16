"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="bg-brand-dark text-white min-h-screen pt-32 pb-24 px-6 font-body">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-2xl mx-auto"
      >
        <h1 className="font-display text-5xl font-bold mb-6">
          We'd Love to Hear From You
        </h1>
        <p className="text-brand-gray mb-10 leading-relaxed">
          Have a question about a product, your order, or just need some styling advice? The Calvexa customer care team is always here to help. Reach out to us through any of the channels below, and we will get back to you as soon as possible.
        </p>

        <h2 className="font-display text-2xl font-bold mb-6">Send us a message:</h2>
        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="name"
            aria-label="Name"
            placeholder="Name"
            className="w-full bg-white/5 border border-white/10 px-5 py-4 text-white placeholder-brand-gray focus:outline-none focus:border-brand-teal transition-colors rounded-lg"
          />
          <input
            type="email"
            name="email"
            aria-label="Email"
            placeholder="Email"
            className="w-full bg-white/5 border border-white/10 px-5 py-4 text-white placeholder-brand-gray focus:outline-none focus:border-brand-teal transition-colors rounded-lg"
          />
          <input
            type="text"
            name="subject"
            aria-label="Subject"
            placeholder="Subject"
            className="w-full bg-white/5 border border-white/10 px-5 py-4 text-white placeholder-brand-gray focus:outline-none focus:border-brand-teal transition-colors rounded-lg"
          />
          <textarea
            name="message"
            aria-label="Message"
            rows={5}
            placeholder="Message"
            className="w-full bg-white/5 border border-white/10 px-5 py-4 text-white placeholder-brand-gray focus:outline-none focus:border-brand-teal transition-colors resize-none rounded-lg"
          />
          <button
            type="submit"
            className="w-full bg-brand-teal text-brand-dark py-4 font-bold uppercase tracking-widest hover:bg-brand-teal-light transition-colors rounded-lg"
          >
            Submit
          </button>
        </form>

        <div className="mt-12 space-y-3 text-brand-gray text-sm">
          <p><strong>Email:</strong> support@calvexa.com</p>
          <p><strong>Phone:</strong> 1-800-CALVEXA (1-800-225-8392)</p>
          <p><strong>Business Hours:</strong> Monday – Friday, 9:00 AM – 6:00 PM (EST)</p>
        </div>
      </motion.div>
    </main>
  );
}
"use client";

import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <main className="bg-brand-dark text-white min-h-screen pt-32 pb-24 px-6 font-body">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 text-center">
          Were Here to Help.
        </h1>
        
        <p className="text-brand-gray text-lg text-center mb-12 max-w-2xl mx-auto">
          Have a question about a course, need help with your account, or want to inquire about team training? Our support team is ready to assist you.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">Contact Information</h2>
            <p className="text-brand-gray mb-2"><strong>Email Support:</strong> support@educraftacademy.com</p>
            <p className="text-brand-gray"><strong>Response Time:</strong> We aim to reply to all inquiries within 24 business hours.</p>
          </div>

          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm text-brand-gray mb-1">Name</label>
              <input type="text" id="name" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-teal transition-colors" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-brand-gray mb-1">Email</label>
              <input type="email" id="email" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-teal transition-colors" />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm text-brand-gray mb-1">Subject</label>
              <input type="text" id="subject" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-teal transition-colors" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-brand-gray mb-1">Message</label>
              <textarea id="message" rows={5} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-teal transition-colors"></textarea>
            </div>
            <button
              type="submit"
              className="bg-brand-teal text-brand-dark px-8 py-3 font-bold tracking-widest uppercase text-sm hover:bg-brand-teal-light transition-all rounded-full"
            >
              Submit
            </button>
          </form>
        </div>

      </motion.div>
    </main>
  );
}
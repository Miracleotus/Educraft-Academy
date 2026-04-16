"use client";

import { motion } from "framer-motion";

export default function RefundPage() {
  return (
    <main className="bg-brand-dark text-white min-h-screen pt-32 pb-24 px-6 font-body">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-10 leading-tight">
          Refund Policy
        </h1>

        <section className="mb-8">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">1. Returns</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            We have a 30-day return policy, which means you have 30 days after receiving your item to request a return. To be eligible for a return, your item must be in the same condition that you received it, unworn or unused, with tags, and in its original packaging.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">2. Damages and Issues</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            Please inspect your order upon reception and contact us immediately if the item is defective, damaged, or if you receive the wrong item, so that we can evaluate the issue and make it right.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">3. Refunds</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            We will notify you once we've received and inspected your return. If approved, you'll be automatically refunded on your original payment method within 7-10 business days.
          </p>
        </section>
      </motion.div>
    </main>
  );
}
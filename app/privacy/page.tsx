"use client";

import { motion } from "framer-motion";

export default function PrivacyPage() {
  return (
    <main className="bg-brand-dark text-white min-h-screen pt-32 pb-24 px-6 font-body">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-10 leading-tight">
          Privacy Policy
        </h1>

        <section className="mb-8">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">1. Introduction</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            Welcome to Calvexa Home Living. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">2. Data We Collect</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            We may collect, use, store, and transfer different kinds of personal data about you, including Identity Data (name, username), Contact Data (billing address, delivery address, email), Financial Data (payment card details), and Transaction Data (details about payments to and from you).
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">3. How We Use Your Data</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            We will only use your personal data when the law allows us to. Most commonly, we use your data to process and deliver your order, manage our relationship with you, and improve our website, products, and marketing.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">4. Data Security</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorized way.
          </p>
        </section>
      </motion.div>
    </main>
  );
}
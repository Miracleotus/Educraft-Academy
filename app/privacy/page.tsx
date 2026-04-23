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
          <p className="text-brand-gray text-lg leading-relaxed">
            <strong>Last Updated: March 2026</strong>
          </p>
          <p className="text-brand-gray text-lg leading-relaxed mt-4">
            At Educraft Academy, we take your privacy seriously. This policy explains how we collect, use, and protect your personal data when you visit our website or purchase our digital courses.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">Information Collection & Use</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            We collect information you provide directly to us (such as name and email when creating an account) and automatically collect standard analytics data (like browser type and IP address) to improve our services.
          </p>
          <p className="text-brand-gray text-lg leading-relaxed mt-4">
            We do not sell your personal data to third parties. We use industry-standard encryption to protect your payment information during checkout.
          </p>
        </section>
      </motion.div>
    </main>
  );
}
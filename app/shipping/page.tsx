"use client";

import { motion } from "framer-motion";

export default function ShippingPage() {
  return (
    <main className="bg-brand-dark text-white min-h-screen pt-32 pb-24 px-6 font-body">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-10 leading-tight">
          Shipping & Delivery Policy (Digital Goods)
        </h1>
        
        <section className="mb-8">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">Instant Digital Access</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            Because Educraft Academy provides exclusively digital products (video courses, downloadable templates, and digital resources), no physical items will be shipped to you.
          </p>
          <ul className="list-disc list-inside text-brand-gray text-lg leading-relaxed mt-4 space-y-2 ml-4">
            <li><strong>Delivery Method:</strong> Upon successful payment, you will instantly receive an email with your receipt and a link to access your student dashboard.</li>
            <li><strong>Access:</strong> Your courses are added to your account immediately, granting you 24/7 lifetime access to the materials as long as your account remains in good standing.</li>
          </ul>
        </section>
      </motion.div>
    </main>
  );
}
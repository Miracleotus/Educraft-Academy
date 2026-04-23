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
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">14-Day Satisfaction Guarantee</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            We want you to be fully satisfied with your learning experience. If you purchase a digital course from Educraft Academy and find it does not meet your expectations, you may request a full refund within 14 days of your purchase date.
          </p>
          <p className="text-brand-gray text-lg leading-relaxed mt-4">
            <strong>Condition:</strong> To prevent abuse of our digital products, refunds will only be granted if you have viewed less than 30% of the course content. To request a refund, please email our support team with your order number.
          </p>
        </section>
      </motion.div>
    </main>
  );
}
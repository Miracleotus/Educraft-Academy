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
          Shipping Policy
        </h1>

        <section className="mb-8">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">1. Order Processing Time</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            All orders are processed within 1 to 2 business days (excluding weekends and holidays) after receiving your order confirmation email. You will receive another notification when your order has shipped.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">2. Domestic Shipping Rates and Estimates</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            Shipping charges for your order will be calculated and displayed at checkout. We offer Standard Shipping (3-5 business days) and Expedited Shipping (1-2 business days). Free standard shipping is available on all orders over $100.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">3. International Shipping</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            At this time, we only ship within the domestic United States and Canada. We are working diligently to expand our shipping zones globally.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">4. Order Tracking</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            When your order has shipped, you will receive an email notification from us which will include a tracking number you can use to check its status. Please allow 48 hours for the tracking information to become available.
          </p>
        </section>
      </motion.div>
    </main>
  );
}
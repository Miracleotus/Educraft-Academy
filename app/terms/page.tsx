"use client";

import { motion } from "framer-motion";

export default function TermsPage() {
  return (
    <main className="bg-brand-dark text-white min-h-screen pt-32 pb-24 px-6 font-body">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-10 leading-tight">
          Terms and Conditions
        </h1>

        <section className="mb-8">
          <p className="text-brand-gray text-lg leading-relaxed">
            Welcome to Educraft Academy. By accessing our website and purchasing our courses, you agree to be bound by these Terms and Conditions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">Intellectual Property</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            All course content, videos, text, and materials provided by Educraft Academy are the exclusive property of Educraft Academy. You may not reproduce, redistribute, or share your login credentials or course materials with others.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">Account Termination</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            We reserve the right to suspend or terminate accounts that violate our terms, including engaging in piracy or abusive behavior in our community forums.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">Disclaimer</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            While we strive to provide accurate and up-to-date educational content, we do not guarantee specific career outcomes or financial results from taking our courses.
          </p>
        </section>
      </motion.div>
    </main>
  );
}
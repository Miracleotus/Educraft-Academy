"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="bg-brand-dark text-white min-h-screen pt-32 pb-24 px-6 font-body">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="font-display text-4xl md:text-5xl font-bold mb-10 leading-tight">
          Empowering the Modern Learner.
        </h1>

        <div className="text-left space-y-8 text-brand-gray text-lg leading-relaxed">
          <p>
            Educraft Academy was founded on a simple premise: high-quality, practical tech and business education should be accessible to everyone, regardless of geography or background. We grew tired of outdated curriculums and overpriced bootcamps, so we built a platform that puts the learner first.
          </p>
          <p>
            Our team consists of veteran developers, designers, and marketers who have worked at some of the worlds leading tech companies. We take our real-world experience and distill it into engaging, step-by-step courses that cut through the noise. When you learn with Educraft, you arent just memorizing theory; you are acquiring the tangible skills that hiring managers and clients are actively looking for.
          </p>
        </div>
      </motion.div>
    </main>
  );
}
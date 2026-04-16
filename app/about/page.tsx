"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="bg-brand-dark text-white min-h-screen pt-32 pb-24 px-6 font-body">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl mx-auto"
      >
        <h1 className="font-display text-5xl md:text-6xl font-bold mb-10 leading-tight">
          Our Story: Bringing Comfort Home
        </h1>
        <p className="text-brand-gray text-lg leading-relaxed mb-8">
          At Calvexa Home Living, we understand that a home is more than just a physical space; it is your sanctuary, your gathering place, and your personal canvas. Founded on the belief that everyone deserves to live in a beautifully functional environment, Calvexa was born out of a passion for modern interior design and everyday utility.
        </p>
        
        <h2 className="font-display text-3xl font-bold mt-12 mb-6 text-brand-teal">Our Mission</h2>
        <p className="text-brand-gray text-lg leading-relaxed mb-12">
          To provide homeowners with accessible, high-quality, and beautifully designed household items that enhance their daily routines and elevate their living spaces.
        </p>
        
        <h2 className="font-display text-3xl font-bold mb-6 text-brand-teal">Our Vision</h2>
        <p className="text-brand-gray text-lg leading-relaxed mb-12">
          To be the premier online destination for modern home essentials, recognized for our commitment to quality, aesthetic brilliance, and customer satisfaction. We want the name Calvexa to be synonymous with comfort and style.
        </p>
        
        <h2 className="font-display text-3xl font-bold mb-6 text-brand-teal">What We Stand For</h2>
        <p className="text-brand-gray text-lg leading-relaxed">
          We meticulously select each item in our catalog—from our artisan dinnerware to our plush bedding—ensuring it meets our strict standards for durability, sustainability, and design. Welcome to the Calvexa family. Let's make your house feel like home.
        </p>
      </motion.div>
    </main>
  );
}
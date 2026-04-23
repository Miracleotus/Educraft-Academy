"use client";

import Link from "next/link";
import { products } from "@/lib/products";
import { formatPrice } from "@/lib/utils";
import { GraduationCap, ArrowLeft, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import { notFound } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { use } from "react";

export default function CourseDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const course = products.find((p) => p.id === id);
  const cart = useCart(); 

  if (!course) {
    return notFound();
  }

  return (
    <main className="max-w-7xl mx-auto px-6 py-32 min-h-screen font-body">
      <Link href="/courses" className="text-brand-gray hover:text-brand-teal transition-colors inline-flex items-center gap-2 mb-12 uppercase tracking-widest text-xs font-bold">
        <ArrowLeft size={16} /> Back to Courses
      </Link>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Visual/Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white/5 border border-white/10 rounded-3xl aspect-square flex flex-col items-center justify-center relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-brand-teal/5 group-hover:bg-brand-teal/10 transition-colors" />
          <GraduationCap size={120} className="text-brand-teal/40 group-hover:text-brand-teal transition-all duration-500 scale-100 group-hover:scale-110" />
        </motion.div>

        {/* Details Section */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col justify-center"
        >
          <span className="text-sm font-bold text-brand-teal uppercase tracking-widest mb-4 block">
            {course.category}
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
            {course.name}
          </h1>
          <p className="text-brand-gray text-lg leading-relaxed mb-8">
            {course.shortDesc}
          </p>
          
          <div className="text-3xl font-bold text-white mb-10">
            {formatPrice(course.price)}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => cart.addToCart(course)}
              className="bg-brand-teal text-brand-dark px-8 py-4 font-bold tracking-widest uppercase text-sm hover:bg-brand-teal-light transition-all flex items-center justify-center gap-3 rounded-full grow"
            >
              <ShoppingCart size={18} /> Add to Cart
            </button>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
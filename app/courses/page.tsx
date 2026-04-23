"use client";

import { useState } from "react";
import Link from "next/link";
import { products } from "@/lib/products";
import { formatPrice } from "@/lib/utils";
import { GraduationCap, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Design", "Web Development", "Marketing", "Data Science", "Business"];

export default function CoursesPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredCourses = activeCategory === "All" 
    ? products 
    : products.filter(course => course.category === activeCategory);

  return (
    <main className="bg-brand-dark text-white min-h-screen pt-32 pb-24 px-6 font-body">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
            All Courses
          </h1>
          <p className="text-brand-gray text-lg max-w-2xl mx-auto">
            Explore our comprehensive library of digital courses designed to help you master the skills of tomorrow, today.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-bold tracking-widest uppercase transition-all ${
                activeCategory === category
                  ? "bg-brand-teal text-brand-dark"
                  : "bg-white/5 text-brand-gray hover:bg-white/10 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredCourses.map((course) => (
              <motion.div
                layout
                key={course.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:bg-white/10 hover:border-brand-teal/50 transition-all group flex flex-col"
              >
                <div className="aspect-video bg-brand-navy/30 rounded-2xl mb-6 flex items-center justify-center group-hover:bg-brand-navy/50 transition-colors">
                  <GraduationCap size={48} className="text-brand-teal/40 group-hover:text-brand-teal transition-colors" />
                </div>
                
                <div className="grow">
                  <span className="text-xs font-bold text-brand-teal uppercase tracking-widest mb-3 block">
                    {course.category}
                  </span>
                  <h2 className="font-display text-2xl font-bold mb-3 group-hover:text-brand-teal transition-colors">
                    {course.name}
                  </h2>
                  <p className="text-brand-gray text-sm leading-relaxed mb-6 line-clamp-3">
                    {course.shortDesc}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/10">
                  <div className="text-xl font-bold text-white">
                    {formatPrice(course.price)}
                  </div>
                  <Link
                    href={`/shop/${course.id}`}
                    className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:text-brand-teal transition-colors"
                  >
                    View Details <ArrowRight size={16} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredCourses.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="text-center py-20 text-brand-gray"
          >
            No courses found in this category.
          </motion.div>
        )}
      </motion.div>
    </main>
  );
}
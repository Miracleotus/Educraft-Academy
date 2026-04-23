"use client";

import Link from "next/link";
import { ArrowRight, Code, LineChart, Database, Palette, Star } from "lucide-react";
import { motion, Variants } from "framer-motion";

const categories = [
  {
    icon: <Code size={28} />,
    title: "Web Development",
    desc: "Build modern, responsive websites and applications.",
  },
  {
    icon: <LineChart size={28} />,
    title: "Digital Marketing",
    desc: "Master SEO, social media, and paid advertising strategies.",
  },
  {
    icon: <Database size={28} />,
    title: "Data Science",
    desc: "Learn to analyze data and build machine learning models.",
  },
  {
    icon: <Palette size={28} />,
    title: "UI/UX Design",
    desc: "Design intuitive and beautiful user experiences.",
  },
];

const whyChooseUs = [
  { title: "Expert Instructors", desc: "Learn directly from professionals who work in the field." },
  { title: "Lifetime Access", desc: "Pay once and revisit the material whenever you need a refresher." },
  { title: "Project-Based Learning", desc: "Don't just watch videos—build real-world portfolios." },
  { title: "Community Support", desc: "Join a private network of thousands of ambitious learners." },
];

const process = [
  { step: "1", title: "Enroll", desc: "Browse our catalog and secure your spot in seconds." },
  { step: "2", title: "Learn", desc: "Access high-definition video lessons and downloadable resources." },
  { step: "3", title: "Build", desc: "Complete hands-on assignments to test your knowledge." },
  { step: "4", title: "Certify", desc: "Earn a verified certificate to showcase on your resume and LinkedIn." },
];

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer: Variants = {
  initial: { opacity: 0 },
  whileInView: { 
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const staggerItem: Variants = {
  initial: { opacity: 0, y: 20 },
  whileInView: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function HomePage() {
  return (
    <main className="bg-brand-dark text-white font-body">

      {/* HERO */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-24 text-center">
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(ellipse at center, rgba(201, 169, 97, 0.12) 0%, transparent 70%)" }} />
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 flex flex-col items-center"
        >
          <h1 className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6 max-w-4xl">
            Master the Skills of Tomorrow, Today.
          </h1>
          <p className="text-brand-gray max-w-2xl text-lg mb-10 leading-relaxed">
            Join Educraft Academy and unlock high-quality, on-demand digital courses designed by industry experts. Elevate your career at your own pace.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Link
              href="/courses"
              className="bg-brand-teal text-brand-dark px-8 py-4 font-bold tracking-widest uppercase text-sm hover:bg-brand-teal-light transition-all inline-flex items-center gap-2 rounded-full"
            >
              Explore Courses <ArrowRight size={16} />
            </Link>
            <Link href="/courses" className="text-brand-teal hover:text-white transition-colors font-bold uppercase tracking-widest text-sm underline-offset-4 hover:underline">
              Start Learning for Free
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ABOUT SNIPPET */}
      <motion.section 
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
        className="max-w-4xl mx-auto px-6 py-24 text-center"
      >
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
          Education Crafted for the Digital Age.
        </h2>
        <p className="text-brand-gray text-lg leading-relaxed">
          At Educraft Academy, we believe that traditional education isn&apos;t moving fast enough. We bridge the gap between ambition and achievement by offering up-to-date, practical digital courses. Whether you are pivoting to a new career in tech, scaling your business, or picking up a new creative skill, our platform provides the tools you need to succeed.
        </p>
      </motion.section>

      {/* CATEGORIES */}
      <section className="bg-brand-navy/30 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
          >
            <h2 className="font-display text-4xl md:text-5xl font-bold text-center mb-6">
              Find Your Perfect Path
            </h2>
            <p className="text-brand-gray text-center mb-16 text-lg">
              Dive into our comprehensive libraries covering Web Development, Digital Marketing, Data Science, and UI/UX Design. Each category is packed with actionable insights and hands-on projects.
            </p>
          </motion.div>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            className="grid sm:grid-cols-2 md:grid-cols-4 gap-6"
          >
            {categories.map((c) => (
              <motion.div
                variants={staggerItem}
                key={c.title}
                className="border border-white/10 p-6 hover:border-brand-teal/50 transition-all group rounded-2xl bg-white/2 hover:bg-white/5"
              >
                <div className="text-brand-teal mb-4 group-hover:scale-110 transition-transform">
                  {c.icon}
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{c.title}</h3>
                <p className="text-brand-gray leading-relaxed text-sm">{c.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <motion.h2 
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          className="font-display text-4xl font-bold text-center mb-16"
        >
          Why Learn with <span className="text-brand-teal">Educraft?</span>
        </motion.h2>
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {whyChooseUs.map((item) => (
            <motion.div variants={staggerItem} key={item.title} className="flex flex-col items-center gap-4">
              <h3 className="font-display text-xl font-bold">{item.title}</h3>
              <p className="text-brand-gray text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* PROCESS */}
      <section className="bg-brand-navy/30 py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            className="font-display text-4xl font-bold text-center mb-16"
          >
            How It Works
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-8"
          >
            {process.map((p) => (
              <motion.div variants={staggerItem} key={p.step} className="flex gap-8 items-start border-b border-white/10 pb-8">
                <span className="font-display text-5xl font-bold text-brand-teal/40 shrink-0">
                  {p.step}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-bold mb-2">{p.title}</h3>
                  <p className="text-brand-gray leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="max-w-4xl mx-auto px-6 py-24 text-center">
        <motion.div
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
        >
          <h2 className="font-display text-4xl font-bold mb-10">
            Don&apos;t Just Take Our Word For It.
          </h2>
          <div className="bg-white/5 border border-white/10 rounded-3xl p-10 md:p-14 relative overflow-hidden">
            <Star className="text-brand-teal absolute top-8 left-8 opacity-20" size={64} />
            <p className="text-xl md:text-2xl font-light italic leading-relaxed mb-8 relative z-10">
              &quot;Educraft Academy&apos;s UX Design course gave me the portfolio I needed to land my first junior designer role. The feedback was incredible.&quot;
            </p>
            <div className="font-bold text-brand-teal tracking-widest uppercase text-sm">— Sarah T., Product Designer</div>
          </div>
        </motion.div>
      </section>

      {/* FINAL CTA */}
      <motion.section 
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-50px" }}
        variants={fadeInUp}
        className="py-32 px-6 text-center"
      >
        <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">
          Ready to Craft Your Future?
        </h2>
        <p className="text-brand-gray max-w-xl mx-auto mb-10 text-lg">
          Join over 50,000 students worldwide who are taking control of their careers.
        </p>
        <Link
          href="/courses"
          className="bg-brand-teal text-brand-dark px-10 py-4 uppercase tracking-widest text-sm font-bold hover:bg-brand-teal-light transition-all inline-block rounded-full"
        >
          Browse All Courses Now
        </Link>
      </motion.section>

    </main>
  );
}
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
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">1. Overview</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            This website is operated by Calvexa Home Living. By visiting our site and/or purchasing something from us, you engage in our "Service" and agree to be bound by the following terms and conditions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">2. Online Store Terms</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction. A breach or violation of any of the Terms will result in an immediate termination of your Services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">3. Products or Services</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            Certain products or services may be available exclusively online through the website. We have made every effort to display as accurately as possible the colors and images of our products. We cannot guarantee that your computer monitor's display of any color will be accurate.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="font-display text-2xl font-bold mb-4 text-brand-teal">4. Limitation of Liability</h2>
          <p className="text-brand-gray text-lg leading-relaxed">
            In no case shall Calvexa Home Living, our directors, or employees be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, or consequential damages of any kind arising from your use of any of the service or any products procured using the service.
          </p>
        </section>
      </motion.div>
    </main>
  );
}
"use client";

import Link from "next/link";
import { formatPrice } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import { Trash2, ArrowRight, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import { Product } from "@/lib/products";

interface ExpectedCartContext {
  cart?: Product[];
  cartItems?: Product[];
  removeFromCart?: (id: string) => void;
}

export default function CartPage() {
  const cartContext = useCart() as ExpectedCartContext;
  
  // Extract cart context properties with fallbacks to match common implementations
  const items = cartContext.cart || cartContext.cartItems || [];
  const removeFromCart = cartContext.removeFromCart;
  
  // Calculate total dynamically if totalPrice isn't explicitly provided by the context
  const totalPrice = items.reduce((total: number, item: Product) => total + (item.price || 0), 0);

  return (
    <main className="bg-brand-dark text-white min-h-screen pt-32 pb-24 px-6 font-body">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-5xl mx-auto"
      >
        <div className="mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-4 flex items-center gap-4">
            <ShoppingCart size={40} className="text-brand-teal" /> Your Cart
          </h1>
          <p className="text-brand-gray text-lg">
            Review your selected courses before checkout.
          </p>
        </div>

        {items.length === 0 ? (
          <div className="bg-white/5 border border-white/10 rounded-3xl p-12 text-center">
            <p className="text-brand-gray text-xl mb-8">Your cart is currently empty.</p>
            <Link
              href="/courses"
              className="bg-brand-teal text-brand-dark px-8 py-4 font-bold tracking-widest uppercase text-sm hover:bg-brand-teal-light transition-all inline-flex items-center gap-2 rounded-full"
            >
              Browse Courses <ArrowRight size={16} />
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-6">
              {items.map((item: Product, index: number) => (
                <motion.div
                  key={item.id || index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 group hover:bg-white/10 hover:border-brand-teal/50 transition-all"
                >
                  <div className="grow">
                    <span className="text-xs font-bold text-brand-teal uppercase tracking-widest mb-2 block">
                      {item.category}
                    </span>
                    <h3 className="font-display text-xl font-bold mb-2 group-hover:text-brand-teal transition-colors">
                      {item.name}
                    </h3>
                    <div className="text-lg font-bold text-white">
                      {formatPrice(item.price)}
                    </div>
                  </div>
                  
                  <button
                    onClick={() => removeFromCart && removeFromCart(item.id)}
                    className="text-brand-gray hover:text-red-400 transition-colors p-3 bg-white/5 hover:bg-white/10 rounded-full"
                    aria-label="Remove from cart"
                  >
                    <Trash2 size={20} />
                  </button>
                </motion.div>
              ))}
            </div>

            <div className="md:col-span-1">
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 sticky top-32">
                <h3 className="font-display text-2xl font-bold mb-6 border-b border-white/10 pb-4">
                  Order Summary
                </h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-brand-gray">
                    <span>Subtotal ({items.length} items)</span>
                    <span>{formatPrice(totalPrice)}</span>
                  </div>
                  <div className="flex justify-between text-brand-gray">
                    <span>Discount</span>
                    <span>$0.00</span>
                  </div>
                  <div className="flex justify-between text-xl font-bold text-white border-t border-white/10 pt-4 mt-4">
                    <span>Total</span>
                    <span className="text-brand-teal">{formatPrice(totalPrice)}</span>
                  </div>
                </div>

                <button className="w-full bg-brand-teal text-brand-dark px-6 py-4 font-bold tracking-widest uppercase text-sm hover:bg-brand-teal-light transition-all rounded-full mb-4">
                  Proceed to Checkout
                </button>
                <Link
                  href="/courses"
                  className="block w-full text-center text-brand-gray hover:text-white transition-colors text-sm uppercase tracking-widest font-bold"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </main>
  );
}
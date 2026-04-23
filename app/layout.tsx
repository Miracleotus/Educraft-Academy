import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  fallback: ["serif"],
  variable: "--font-playfair",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  fallback: ["sans-serif"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Educraft Academy | Master the Skills of Tomorrow, Today.",
  description: "Join Educraft Academy and unlock high-quality, on-demand digital courses designed by industry experts.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="bg-brand-dark text-white antialiased" suppressHydrationWarning>
        <CartProvider>
          <Navbar />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
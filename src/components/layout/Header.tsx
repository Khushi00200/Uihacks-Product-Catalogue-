"use client";

import TransitionLink from "@/components/ui/TransitionLink";
import { useState } from "react";

export default function Header() {
  // State for cart count
  const [cartCount] = useState(0);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 flex justify-between items-center p-4 md:p-6 bg-black bg-opacity-70 backdrop-blur-md">
      <div className="flex items-center">
        {/* Removed hamburger menu and showreel text */}
      </div>

      <TransitionLink href="/" className="text-center group">
        <h1 className="text-xl md:text-2xl font-bold font-display tracking-[0.3em] group-hover:tracking-[0.35em] transition-all duration-300">ETHEREAL COLLECTION</h1>
      </TransitionLink>

      <div className="text-sm md:text-base text-white/70 tracking-wider font-light">
        <TransitionLink href="/cart" className="hover:text-white transition-colors">Cart ({cartCount})</TransitionLink>
      </div>
    </header>
  );
}

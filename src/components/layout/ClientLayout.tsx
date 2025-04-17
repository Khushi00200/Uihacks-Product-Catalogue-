"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Header from "./Header";
// Footer is not used
// import Footer from "./Footer";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      {/* Removed grainy texture overlay for cleaner background */}

      <Header />
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="min-h-screen"
        >
          {children}
        </motion.main>
      </AnimatePresence>
      {/* Removed Footer to prevent vertical scrolling */}
    </>
  );
}

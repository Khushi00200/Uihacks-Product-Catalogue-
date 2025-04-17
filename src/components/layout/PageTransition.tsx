"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

// Ultra-simplified page transition for maximum reliability
const pageVariants = {
  initial: { opacity: 0.95 },
  animate: { opacity: 1 },
  exit: { opacity: 0.95 }
};

// Very fast transition for immediate feel
const pageTransition = {
  duration: 0.15,
  ease: "easeInOut"
};

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="popLayout" initial={false}>
      <motion.main
        key={pathname}
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={pageTransition}
        className="min-h-screen"
        style={{ backgroundColor: "#000" }}
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}

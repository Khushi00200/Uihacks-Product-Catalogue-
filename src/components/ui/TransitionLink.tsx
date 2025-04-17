"use client";

import Link from "next/link";
import { ReactNode, useEffect } from "react";
import { useNavigationStore } from "@/lib/navigation-store";

interface TransitionLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  productSlug?: string; // Optional product slug for product links
}

// Enhanced TransitionLink component that remembers the last viewed product
export default function TransitionLink({ href, children, className, productSlug }: TransitionLinkProps) {
  const { setLastViewedProductSlug } = useNavigationStore();

  // If this is a product link, store the slug when clicked
  const handleClick = () => {
    if (productSlug) {
      setLastViewedProductSlug(productSlug);
    }
  };

  return (
    <Link
      href={href}
      className={className}
      prefetch={true} // Enable prefetching for smoother transitions
      onClick={handleClick}
    >
      {children}
    </Link>
  );
}

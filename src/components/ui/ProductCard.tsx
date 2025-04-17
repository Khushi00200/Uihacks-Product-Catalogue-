"use client";

import { Product } from "@/lib/types";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";
import ModelImage from "@/components/ui/ModelImage";

interface ProductCardProps {
  product: Product;
  isActive?: boolean;
}

export default function ProductCard({ product, isActive = false }: ProductCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <Link href={`/products/${product.slug}`}>
      <motion.div
        ref={cardRef}
        className="relative w-full h-[600px]" // Fixed height
        initial={{ opacity: isActive ? 1 : 0.5 }}
        animate={{ opacity: isActive ? 1 : 0.5 }}
        transition={{ duration: 0.5 }}
      >
        {/* Product image with lighting effects */}
        <ModelImage
          src={product.imageUrl}
          alt={product.name}
          priority={true}
          className={isActive ? 'brightness-100' : 'brightness-90'}
        />

        {/* Product info */}
        <div className="absolute bottom-0 left-0 p-8 z-20"> {/* Text above image (z-10) and effect (z-5) */}
          <h2 className="text-4xl font-bold text-white font-display tracking-[0.15em] uppercase">{product.name}</h2>
          <p className="text-xl opacity-80 text-white">${product.price.toLocaleString()}</p>
        </div>
      </motion.div>
    </Link>
  );
}








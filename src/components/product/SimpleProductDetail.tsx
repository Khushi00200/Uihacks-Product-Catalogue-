"use client";

import { Product } from "@/lib/types";
import { motion } from "framer-motion";
import TransitionLink from "@/components/ui/TransitionLink";
import ModelImage from "@/components/ui/ModelImage";
import EnhancedAtmosphericEffect from "@/components/ui/EnhancedAtmosphericEffect";

interface SimpleProductDetailProps {
  product: Product;
}

export default function SimpleProductDetail({ product }: SimpleProductDetailProps) {
  return (
    <div className="min-h-screen overflow-y-auto relative">
      {/* Product Hero Section */}
      <div className="w-full h-screen relative overflow-hidden">
        {/* Enhanced Atmospheric Effect */}
        <EnhancedAtmosphericEffect
          className="absolute top-[-25%] left-[10%] w-[80%] h-[130%]"
        />

        {/* Product Image */}
        <div className="absolute inset-0 z-10">
          <ModelImage
            src={product.imageUrl}
            alt={product.name}
            priority={true}
          />
        </div>

        {/* Product Info */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 p-8 z-30 bg-gradient-to-t from-black/90 to-transparent pt-32"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="container mx-auto">
            <motion.h1
              className="font-display text-4xl md:text-6xl mb-4 tracking-[0.25em] uppercase font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {product.name}
            </motion.h1>

            <motion.p
              className="text-2xl md:text-3xl mb-8 font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              ${product.price.toLocaleString()}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <button className="bg-white text-black py-3 px-8 text-lg font-medium hover:bg-gray-200 transition-colors tracking-wider uppercase">
                Add to Cart
              </button>

              <TransitionLink href="/" className="border border-white py-3 px-8 text-lg font-medium hover:bg-white/10 transition-colors tracking-wider uppercase">
                Back to Products
              </TransitionLink>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Product Details Section */}
      <div className="container mx-auto px-4 py-16">
        {/* Product Description */}
        <motion.div
          className="mb-16 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl mb-6 font-light tracking-wider uppercase font-display">Description</h2>
          <p className="text-white/80 font-light leading-relaxed text-lg">{product.description}</p>
        </motion.div>

        {/* Product Specs */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h2 className="text-2xl mb-6 font-light tracking-wider uppercase font-display">Specifications</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {product.specs?.width && (
              <div className="bg-gray-900/50 p-6 border border-white/10 backdrop-blur-sm">
                <p className="text-white/60 mb-2 uppercase text-sm tracking-wider">Width</p>
                <p className="text-xl font-light">{product.specs.width}</p>
              </div>
            )}

            {product.specs?.weight && (
              <div className="bg-gray-900/50 p-6 border border-white/10 backdrop-blur-sm">
                <p className="text-white/60 mb-2 uppercase text-sm tracking-wider">Weight</p>
                <p className="text-xl font-light">{product.specs.weight}</p>
              </div>
            )}

            {product.specs?.length && (
              <div className="bg-gray-900/50 p-6 border border-white/10 backdrop-blur-sm">
                <p className="text-white/60 mb-2 uppercase text-sm tracking-wider">Length</p>
                <p className="text-xl font-light">{product.specs.length}</p>
              </div>
            )}

            {product.specs?.color && (
              <div className="bg-gray-900/50 p-6 border border-white/10 backdrop-blur-sm">
                <p className="text-white/60 mb-2 uppercase text-sm tracking-wider">Color</p>
                <p className="text-xl font-light">{product.specs.color}</p>
              </div>
            )}
          </div>
        </motion.div>

        {/* Materials */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-2xl mb-6 font-light tracking-wider uppercase font-display">Materials</h2>
          <div className="bg-gray-900/50 p-6 border border-white/10 backdrop-blur-sm max-w-3xl">
            <p className="text-white/80 font-light leading-relaxed">{product.materials}</p>
          </div>
        </motion.div>

        {/* Delivery */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <h2 className="text-2xl mb-6 font-light tracking-wider uppercase font-display">Delivery</h2>
          <div className="bg-gray-900/50 p-6 border border-white/10 backdrop-blur-sm max-w-3xl">
            <p className="text-white/80 font-light leading-relaxed">{product.delivery}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}


"use client";

import { Product } from "@/lib/types";
import { motion } from "framer-motion";
import ModelImage from "@/components/ui/ModelImage";
import ProductCard from "@/components/ui/ProductCard";
import EnhancedAtmosphericEffect from "@/components/ui/EnhancedAtmosphericEffect";

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

interface AnimatedProductDetailProps {
  product: Product;
  relatedProducts: Product[];
}

export default function AnimatedProductDetail({ product, relatedProducts }: AnimatedProductDetailProps) {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
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

              <button className="border border-white py-3 px-8 text-lg font-medium hover:bg-white/10 transition-colors tracking-wider uppercase">
                View Details
              </button>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Product Details Section */}
      <div className="container mx-auto px-4 py-16">
        {/* Product Specs */}
        <motion.div
          className="mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-2xl mb-6 font-light tracking-wider uppercase font-display"
            variants={fadeInUp}
          >
            Specifications
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {product.specs?.width && (
              <motion.div
                className="bg-gray-900/50 p-6 border border-white/10 backdrop-blur-sm"
                variants={fadeInUp}
              >
                <p className="text-white/60 mb-2 uppercase text-sm tracking-wider">Width</p>
                <p className="text-xl font-light">{product.specs.width}</p>
              </motion.div>
            )}

            {product.specs?.weight && (
              <motion.div
                className="bg-gray-900/50 p-6 border border-white/10 backdrop-blur-sm"
                variants={fadeInUp}
              >
                <p className="text-white/60 mb-2 uppercase text-sm tracking-wider">Weight</p>
                <p className="text-xl font-light">{product.specs.weight}</p>
              </motion.div>
            )}

            {product.specs?.length && (
              <motion.div
                className="bg-gray-900/50 p-6 border border-white/10 backdrop-blur-sm"
                variants={fadeInUp}
              >
                <p className="text-white/60 mb-2 uppercase text-sm tracking-wider">Length</p>
                <p className="text-xl font-light">{product.specs.length}</p>
              </motion.div>
            )}

            {product.specs?.color && (
              <motion.div
                className="bg-gray-900/50 p-6 border border-white/10 backdrop-blur-sm"
                variants={fadeInUp}
              >
                <p className="text-white/60 mb-2 uppercase text-sm tracking-wider">Color</p>
                <p className="text-xl font-light">{product.specs.color}</p>
              </motion.div>
            )}
          </div>
        </motion.div>

        {/* Materials & Delivery */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div
            className="bg-gray-900/30 p-8 border border-white/5"
            variants={fadeInUp}
          >
            <h2 className="text-2xl mb-4 font-light tracking-wider uppercase font-display">Materials</h2>
            <p className="text-white/80 font-light leading-relaxed">{product.materials}</p>
          </motion.div>

          <motion.div
            className="bg-gray-900/30 p-8 border border-white/5"
            variants={fadeInUp}
          >
            <h2 className="text-2xl mb-4 font-light tracking-wider uppercase font-display">Delivery</h2>
            <p className="text-white/80 font-light leading-relaxed">{product.delivery}</p>
          </motion.div>
        </motion.div>

        {/* Temperature Gauge - Visual Element */}
        <motion.div
          className="mb-24 max-w-3xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl mb-6 font-light tracking-wider uppercase text-center font-display">Temperature Rating</h2>

          <div className="relative h-[60px] bg-gradient-to-r from-blue-600 via-green-500 to-red-600 rounded-full overflow-hidden">
            <div className="absolute inset-0 flex items-center">
              <div className="h-full w-[3px] bg-white absolute" style={{ left: '30%' }}></div>
              <div className="absolute bottom-0 left-[30%] transform -translate-x-1/2 text-xs font-mono bg-black/70 px-2 py-1 rounded">
                -10°C
              </div>
              <div className="h-full w-[3px] bg-white absolute" style={{ left: '50%' }}></div>
              <div className="absolute bottom-0 left-[50%] transform -translate-x-1/2 text-xs font-mono bg-black/70 px-2 py-1 rounded">
                0°C
              </div>
              <div className="h-full w-[3px] bg-white absolute" style={{ left: '70%' }}></div>
              <div className="absolute bottom-0 left-[70%] transform -translate-x-1/2 text-xs font-mono bg-black/70 px-2 py-1 rounded">
                10°C
              </div>
            </div>

            {/* Indicator */}
            <motion.div
              className="absolute top-0 bottom-0 w-[4px] bg-white"
              style={{ left: '60%' }}
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-white text-black px-2 py-1 text-sm font-bold rounded">
                5°C
              </div>
            </motion.div>
          </div>

          <div className="flex justify-between mt-2 text-xs text-white/60">
            <span>Cold Weather</span>
            <span>Mild Weather</span>
            <span>Warm Weather</span>
          </div>
        </motion.div>

        {/* Related Products */}
        <motion.div
          className="mt-24"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2
            className="text-2xl mb-12 font-light text-center tracking-wider uppercase font-display"
            variants={fadeInUp}
          >
            More Products
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-8">
            {relatedProducts.slice(0, 3).map((relatedProduct: Product) => (
              <motion.div
                key={relatedProduct.id}
                className="w-[300px] h-[450px]"
                variants={fadeInUp}
              >
                <ProductCard product={relatedProduct} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

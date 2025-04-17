"use client";

import { Product } from "@/lib/types";
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';
import { EffectCoverflow, Navigation, Keyboard, Mousewheel, A11y, Parallax } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import 'swiper/css/keyboard';
import 'swiper/css/a11y';
import 'swiper/css/parallax';
import TransitionLink from "./TransitionLink";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import EnhancedAtmosphericEffect from "./EnhancedAtmosphericEffect";
import { motion } from "framer-motion";

interface SwiperCarouselProps {
  products: Product[];
  initialSlide?: number;
}

export default function SwiperCarousel({ products, initialSlide = 0 }: SwiperCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Track if user is currently scrolling to prevent multiple scroll events
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Implement custom wheel event handler for better control
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!swiperRef.current) return;

      // Determine direction and slide accordingly
      if (e.deltaY !== 0) {
        // Don't call preventDefault() here to avoid passive event listener warnings

        // Determine direction and slide accordingly
        if (e.deltaY > 0) {
          swiperRef.current.slideNext(300);
        } else {
          swiperRef.current.slidePrev(300);
        }
      }
    };

    // Add event listener to document instead of specific element
    document.addEventListener('wheel', handleWheel);

    // Clean up
    return () => {
      document.removeEventListener('wheel', handleWheel);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      ref={containerRef}
    >
      {/* Enhanced Atmospheric Effect - positioned precisely around the central slide */}
      <EnhancedAtmosphericEffect
        className="absolute top-[-25%] left-[10%] w-[80%] h-[130%]"
      />

      {/* Main carousel */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        {/* Swiper container with parallax effect */}
        <Swiper
          modules={[EffectCoverflow, Navigation, Keyboard, Mousewheel, A11y, Parallax]}
          effect="slide"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          spaceBetween={40}
          loop={true}
          initialSlide={initialSlide}
          className="mySwiper relative z-10 w-full"
          speed={300} // Even faster transition for more responsive feel
          slideToClickedSlide={true}
          watchSlidesProgress={true}
          preventInteractionOnTransition={false}
          resistance={true}
          resistanceRatio={0.85}
          threshold={5}
          parallax={true}
          simulateTouch={true}
          touchRatio={1.5} // More sensitive touch
          shortSwipes={true}
          longSwipesRatio={0.2} // Require less swipe distance
          mousewheel={false} // Disable built-in mousewheel as we're using our custom handler
          keyboard={{
            enabled: true,
            onlyInViewport: true,
          }}
          cssMode={false}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.activeIndex);
          }}
          a11y={{
            enabled: true,
            prevSlideMessage: 'Previous product',
            nextSlideMessage: 'Next product',
          }}
        >
          {products.map((product) => (
            <SwiperSlide
              key={product.id}
              className="!w-[400px] md:!w-[550px] lg:!w-[700px] transition-all duration-800 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{ background: 'transparent' }}
            >
              <div className="flex flex-col items-center justify-end h-[75vh] relative text-center pb-10 overflow-hidden">
                {/* Parallax Background Effect */}
                <div
                  className="absolute inset-0 z-5 opacity-30"
                  data-swiper-parallax="-300"
                  data-swiper-parallax-opacity="0.2"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-70"></div>
                </div>

                {/* Product Image with Parallax */}
                <div
                  className="relative h-[90%] w-full"
                  data-swiper-parallax="-100"
                  data-swiper-parallax-scale="1.1"
                  data-swiper-parallax-duration="1000"
                >
                  <Image
                    src={product.imageUrl}
                    alt={product.name}
                    fill
                    style={{ objectFit: 'contain' }}
                    className="block object-contain relative z-10 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
                    priority={true}
                    unoptimized={true}
                  />
                </div>

                {/* Text Overlay with Parallax */}
                <div
                  className="absolute bottom-5 left-0 right-0 z-20 px-2"
                  data-swiper-parallax="-50"
                  data-swiper-parallax-opacity="0.7"
                  data-swiper-parallax-duration="800"
                >
                  <motion.h2
                    className="font-display font-bold text-2xl md:text-3xl lg:text-4xl uppercase tracking-[0.25em] text-white mb-2"
                    initial={{ opacity: 0.8, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {product.name}
                  </motion.h2>
                  <motion.p
                    className="font-sans text-sm md:text-base text-gray-400"
                    initial={{ opacity: 0.5, y: 5 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  >
                    ${product.price.toLocaleString()}
                  </motion.p>
                </div>

                {/* Clickable link area */}
                <TransitionLink
                  href={`/products/${product.slug}`}
                  className="absolute inset-0 z-30"
                  productSlug={product.slug}
                >
                  <span className="sr-only">View {product.name}</span>
                </TransitionLink>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

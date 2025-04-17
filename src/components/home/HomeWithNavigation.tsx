"use client";

import { Product } from "@/lib/types";
import SwiperCarousel from "@/components/ui/SwiperCarousel";
import { useNavigationStore } from "@/lib/navigation-store";
import { useEffect, useState } from "react";

interface HomeWithNavigationProps {
  products: Product[];
}

export default function HomeWithNavigation({ products }: HomeWithNavigationProps) {
  const { lastViewedProductSlug } = useNavigationStore();
  const [initialSlide, setInitialSlide] = useState(0);
  
  // Find the index of the last viewed product
  useEffect(() => {
    if (lastViewedProductSlug) {
      const index = products.findIndex(p => p.slug === lastViewedProductSlug);
      if (index !== -1) {
        setInitialSlide(index);
      }
    }
  }, [lastViewedProductSlug, products]);
  
  return (
    <SwiperCarousel products={products} initialSlide={initialSlide} />
  );
}

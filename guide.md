Okay, let's break down the technical implementation plan for creating a Next.js frontend replicating the Sal Parasuco site's look and feel, focusing on the product catalog and detail pages with smooth transitions.

Goal: Build a Next.js frontend mimicking the provided video's aesthetic and core functionality (product carousel, product detail page) but replacing the specific click animation with a smooth page transition. Include filtering and sorting for the catalog.

Tech Stack:

Framework: Next.js (App Router recommended for modern features)

Language: TypeScript (Strongly recommended for type safety and scalability)

Styling: Tailwind CSS (Excellent for utility-first styling and replicating specific designs)

Animation/Transitions: Framer Motion (Ideal for smooth page transitions and potentially subtle UI animations)

Carousel/Slider: Swiper.js (Mature, flexible library for the homepage product slider)

State Management:

React Context API / Zustand (For global state like Cart)

Local Component State (useState, useReducer) (For UI state like active filters, tabs)

Icons: React Icons (Easy access to various icon sets)

Data: Initially Mock JSON, designed to be easily replaceable with an API later.

Implementation Plan:

Phase 1: Project Setup & Core Layout

Initialize Next.js Project:

Run npx create-next-app@latest your-project-name --typescript --tailwind --eslint

Choose App Router.

Clean up default boilerplate code.

Directory Structure:

app/: Main application routes and layouts.

components/: Reusable UI components (Header, Footer, Buttons, ProductCard, Carousel, etc.).

lib/: Utility functions, data fetching logic, type definitions.

public/: Static assets (fonts, placeholder images if needed before user provides).

styles/: Global CSS, font definitions.

Global Styles & Fonts:

Identify or find close approximations for the fonts used (especially the blocky display font for product names). Use Google Fonts or self-host fonts in public/ and define them in styles/globals.css and tailwind.config.js.

Configure tailwind.config.js:

Define theme colors (dark background, text colors, accent colors).

Extend theme with custom font families.

Set up base dark mode styles if needed (though the site appears permanently dark).

Root Layout (app/layout.tsx):

Set up the main HTML structure (<html>, <body>).

Apply global background color and font styles via Tailwind classes on <body>.

Import and render Header and Footer components.

Wrap the {children} prop with Framer Motion's AnimatePresence to enable page transitions (more on this later).

Header Component (components/Header.tsx):

Create the header structure using Flexbox or Grid.

Left: Hamburger menu icon (use react-icons). (Functionality TBD - maybe opens a sidebar later). "Showreel '21" text.

Center: "SAL PARASUCO" logo/text.

Right: "Cart (0)" text. (Cart count can be managed via Context/Zustand later).

Style precisely using Tailwind utilities.

Footer Component (components/Footer.tsx):

Create the footer structure.

Include copyright, company description, Privacy/Cookie links.

Style using Tailwind.

Phase 2: Homepage - Product Catalog & Carousel

Homepage Route (app/page.tsx):

This will be the main product catalog view.

Data Structure (lib/types.ts or similar):

Define a Product interface/type:

interface Product {
  id: string;
  slug: string; // For URL routing (e.g., "kanata")
  name: string; // e.g., "KANATA"
  price: number;
  imageUrl?: string; // Placeholder for main image
  videoUrl?: string; // Placeholder for model video
  // Add other relevant fields later: description, specs, etc.
}


Mock Data (lib/mockData.ts):

Create an array of mock Product objects. Include "KANATA", "OTTAWA", "MANITOU" with their prices from the video. Add placeholder image/video URLs (or leave empty for now).

Fetch Data (Server Component):

In app/page.tsx, fetch the mock data. Since it's local, you can directly import it. Later, this can be replaced with an API call.

import { getProducts } from '@/lib/data'; // Assume a function to get mock/real data

export default async function HomePage() {
  const products = await getProducts(); // Fetch initial full product list
  // ... rest of the component
}
IGNORE_WHEN_COPYING_START
content_copy
download
Use code with caution.
TypeScript
IGNORE_WHEN_COPYING_END

Product Carousel Component (components/ProductCarousel.tsx):

Accept products array as a prop.

Use Swiper.js (React component version).

Configure Swiper:

slidesPerView: Maybe 'auto' or a fixed number like 3.

centeredSlides: true.

spaceBetween: Adjust spacing between slides.

loop: true.

Navigation/Pagination: Potentially hidden as in the video, controlled by drag/swipe.

Effects: Consider the 'coverflow' effect or customize transitions for smoothness.

Inside the Swiper loop (<SwiperSlide>), render a ProductCard component for each product.

Product Card Component (components/ProductCard.tsx):

Accept a product object as a prop.

Structure:

Container with relative positioning for text overlay.

Main content: An <img> or <video> tag (initially use a placeholder div or image). You'll add the user's assets here later. Ensure aspect ratio and object fit are correct. Apply spotlight/vignette effect possibly using CSS gradients or overlays.

Overlay: Display product.name (using the specific blocky font) and product.price (formatted as currency). Style with Tailwind.

Wrap the card content in a Next.js <Link href={/products/${product.slug}}> tag for navigation.

Filtering & Sorting UI (app/page.tsx or a dedicated components/FilterSortControls.tsx):

Add UI elements (e.g., dropdowns for sorting by price/name, checkboxes/buttons for filtering by category/feature if needed later). Place these above or alongside the carousel.

Use useState within HomePage (or the controls component) to manage selected sort/filter options.

Implement the filtering/sorting logic:

Create a client component ('use client') wrapper around the carousel and filter controls if managing state client-side.

Filter and sort the products array based on the state before passing it to ProductCarousel.

Phase 3: Product Detail Page

Dynamic Route (app/products/[slug]/page.tsx):

This page will display details for a single product.

It will receive params containing the slug.

Fetch Single Product Data:

Create a function getProductBySlug(slug: string) in lib/data.ts to find the product from the mock data (later, this will fetch from an API).

In the page component, fetch the specific product data using the slug. Handle cases where the product isn't found (show a 404 page using Next.js notFound()).

import { getProductBySlug } from '@/lib/data';
import { notFound } from 'next/navigation';

export default async function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = await getProductBySlug(params.slug);
  if (!product) {
    notFound();
  }
  // ... rest of the component
}
IGNORE_WHEN_COPYING_START
content_copy
download
Use code with caution.
TypeScript
IGNORE_WHEN_COPYING_END

Page Structure (app/products/[slug]/page.tsx):

Render the Header.

Main content area (use Grid or Flexbox for layout):

Product Name & Price (similar styling to carousel card but larger).

Image/Video Gallery & Thumbnails:

Main display area (initially placeholder).

Small thumbnail images/videos below or to the side (placeholders). Implement state (useState) if clicking thumbnails should change the main view.

"Dropping Soon" / "Add to Cart" Button: Conditional logic based on product status.

Scroll Down Indicator (optional).

Description Section: Text content.

Specification Grid: Display Width, Weight, Length, Colour (fetch this data).

Tabs Section (components/ProductTabs.tsx):

Use local state (useState) to manage the active tab (Description, Materials, Delivery).

Render content based on the active tab.

Technical Details Section: Temperature graphic (can be an SVG or styled div), Fabric details, Trims, Straps.

More Images/Videos Section.

"More Products" Section: Fetch a few other products (excluding the current one) and display them similar to the homepage carousel but perhaps smaller/simpler. Link back to their respective detail pages or the homepage.

Render the Footer.

Phase 4: Styling & Transitions

Tailwind Precision: Meticulously apply Tailwind classes to match the video's layout, spacing, typography, and colors. Use dark background colors (bg-black, bg-gray-900), white/light gray text (text-white, text-gray-300), and the specific fonts.

Spotlight Effect: On the homepage carousel's central item, you can achieve this subtly by:

Slightly scaling up the active slide using Swiper's events/classes.

Applying a stronger brightness/contrast or a radial gradient background effect to the central card container.

Smooth Page Transitions (Framer Motion):

In app/layout.tsx, wrap the {children}:

'use client'; // Layout needs to be a client component for AnimatePresence
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
// ... other imports

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body>
        <Header /> {/* Assuming Header is static */}
        <AnimatePresence mode="wait"> {/* 'wait' ensures exit anim completes before enter */}
          <motion.main
            key={pathname} // Key change triggers animation
            initial={{ opacity: 0, y: 20 }} // Example initial state (fade in, slight move up)
            animate={{ opacity: 1, y: 0 }} // Example animate state
            exit={{ opacity: 0, y: -20 }} // Example exit state (fade out, slight move down)
            transition={{ duration: 0.4, ease: 'easeInOut' }} // Adjust duration/easing
          >
            {children}
          </motion.main>
        </AnimatePresence>
        <Footer /> {/* Assuming Footer is static */}
      </body>
    </html>
  );
}
IGNORE_WHEN_COPYING_START
content_copy
download
Use code with caution.
TypeScript
IGNORE_WHEN_COPYING_END

Adjust the initial, animate, exit, and transition properties in motion.main to achieve the desired smooth (e.g., fade, slide) transition instead of the complex zoom/glitch effect from the video. A simple cross-fade (opacity) is often effective.

Phase 5: User Integration & Refinement

Integrate Product Assets: Replace all placeholders with the actual product videos and images provided by the user. Ensure paths are correct.

Refine Styling: Tweak Tailwind classes, potentially add small amounts of custom CSS for effects that are hard with utilities alone (like the exact text rendering or grainy overlays if desired).

Refine Animations: Adjust Framer Motion timings and easing for page transitions. Add subtle hover effects or micro-interactions if desired using Framer Motion or CSS transitions.

Testing: Test responsiveness, browser compatibility, and performance (especially image/video loading).

Next Steps for You:

Provide Assets: Gather the model videos and any static images for each product.

Font Identificaction: Try to identify the exact fonts used or select suitable alternatives.

Detailed Specs: Prepare the detailed text content for descriptions, materials, delivery info, and specifications for each product.

Filter/Sort Criteria: Define exactly how users should be able to filter and sort products (e.g., by price range, colour, collection, temperature rating?).

This plan provides a solid foundation using modern web technologies to achieve the desired look, feel, and functionality. Remember that replicating a design exactly often involves fine-tuning CSS and potentially custom solutions for very specific visual effects.
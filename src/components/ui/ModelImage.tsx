"use client";

import { useState, useRef } from 'react';
import Image from 'next/image';
// No longer using AtmosphericEffectOverlay in individual images

interface ModelImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  enableEffect?: boolean; // Kept for backward compatibility
}

export default function ModelImage({
  src,
  alt,
  className = '',
  priority = false,
  sizes = '100vw',
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  enableEffect = true // Parameter kept for backward compatibility
}: ModelImageProps) {
  const [imageError, setImageError] = useState(false);
  const [useRegularImg, setUseRegularImg] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Ensure proper path format
  const imagePath = src.startsWith('/') ? src : `/${src}`;

  if (useRegularImg) {
    return (
      <div
        className={`relative w-full h-full min-h-[400px] overflow-hidden model-image-container ${className}`}
        ref={containerRef}
        style={{ backgroundColor: 'transparent' }}
      >
        {/* Removed individual atmospheric effect */}
        <Image
          src={imagePath}
          alt={alt}
          fill={true}
          sizes={sizes}
          style={{
            objectFit: 'cover',
            zIndex: 10 // Image above the atmospheric effect (z-5)
          }}
          className="brightness-90"
          onError={() => {
            console.error('Regular img failed to load:', imagePath);
            setImageError(true);
          }}
          unoptimized={true}
        />
        {imageError && (
          <div className="absolute inset-0 flex items-center justify-center text-red-500 bg-gray-900 z-20">
            <div className="text-center p-4">
              <p className="font-bold text-xl mb-2">Image failed to load</p>
              <p>{imagePath}</p>
            </div>
          </div>
        )}
        {/* Removed the black overlay that was creating card-like appearance */}
      </div>
    );
  }

  return (
    <div
      className={`relative w-full h-full min-h-[400px] overflow-hidden model-image-container ${className}`}
      ref={containerRef}
      style={{ backgroundColor: 'transparent' }}
    >
      {/* Removed individual atmospheric effect */}
      <Image
        src={imagePath}
        alt={alt}
        fill={true}
        sizes={sizes}
        style={{
          objectFit: 'cover'
        }}
        className="brightness-90 z-10" // Image above the atmospheric effect (z-5)
        onError={() => {
          console.error('Next/Image failed to load:', imagePath);
          setUseRegularImg(true);
        }}
        priority={priority}
        unoptimized={true}
      />
      {/* Removed the black overlay that was creating card-like appearance */}
    </div>
  );
}






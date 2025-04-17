"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface FocusedAtmosphericEffectProps {
  className?: string;
  isActive?: boolean;
  smokeOpacity?: number;
  spotlightIntensity?: number;
}

export const FocusedAtmosphericEffect = ({
  className,
  isActive = true,
  smokeOpacity = 0.08, // Even more subtle opacity for premium look
  spotlightIntensity = 0.10, // More subtle intensity for premium look
}: FocusedAtmosphericEffectProps) => {
  if (!isActive) return null;

  return (
    <div
      className={cn(
        "absolute pointer-events-none overflow-visible", // overflow-visible to allow effect to extend beyond container
        className
      )}
    >
      <div className="relative w-full h-full">
        {/* Spotlight Layer - Soft overhead light cone */}
        <div
          className="absolute inset-0 w-full h-full spotlightLayer"
          style={{
            background: `radial-gradient(
              ellipse 100% 70% at 50% 0%,
              rgba(220, 220, 220, ${spotlightIntensity}) 0%,
              rgba(200, 200, 200, ${spotlightIntensity * 0.6}) 25%,
              rgba(180, 180, 180, ${spotlightIntensity * 0.3}) 50%,
              transparent 75%
            )`,
            zIndex: 5,
            mixBlendMode: 'overlay',
          }}
        />

        {/* Main smoke layer - slow, subtle movement */}
        <div
          className="absolute inset-0 w-full h-full smokeLayer"
          style={{
            backgroundImage: `url("/images/smoke-texture.svg")`,
            backgroundSize: '900px 900px',
            backgroundRepeat: 'repeat',
            maskImage: `radial-gradient(ellipse 120% 120% at 50% 50%, black 0%, rgba(0, 0, 0, 0.9) 40%, rgba(0, 0, 0, 0.5) 70%, transparent 100%)`,
            WebkitMaskImage: `radial-gradient(ellipse 120% 120% at 50% 50%, black 0%, rgba(0, 0, 0, 0.9) 40%, rgba(0, 0, 0, 0.5) 70%, transparent 100%)`,
            opacity: smokeOpacity,
            animation: 'scrollSmoke 180s linear infinite', // Even slower for more subtlety
            zIndex: 4,
          }}
        />

        {/* Secondary smoke layer - with slight drift */}
        <div
          className="absolute inset-0 w-full h-full smokeLayer"
          style={{
            backgroundImage: `url("/images/smoke-texture-2.svg")`,
            backgroundSize: '1200px 1200px',
            backgroundRepeat: 'repeat',
            maskImage: `radial-gradient(ellipse 140% 140% at 50% 50%, black 0%, rgba(0, 0, 0, 0.8) 30%, rgba(0, 0, 0, 0.4) 60%, transparent 100%)`,
            WebkitMaskImage: `radial-gradient(ellipse 140% 140% at 50% 50%, black 0%, rgba(0, 0, 0, 0.8) 30%, rgba(0, 0, 0, 0.4) 60%, transparent 100%)`,
            opacity: smokeOpacity * 0.7,
            animation: 'scrollSmokeDrift 240s linear infinite', // Extremely slow for ultimate subtlety
            zIndex: 3,
          }}
        />

        {/* Additional subtle top-down light beam */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.04) 0%, transparent 60%)',
            mixBlendMode: 'overlay',
            opacity: 0.7,
            zIndex: 6,
          }}
        />
      </div>
    </div>
  );
};

export default FocusedAtmosphericEffect;

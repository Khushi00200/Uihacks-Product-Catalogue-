"use client";

import React from 'react';
import { cn } from '@/lib/utils';

interface EnhancedAtmosphericEffectProps {
  className?: string;
}

export default function EnhancedAtmosphericEffect({ className }: EnhancedAtmosphericEffectProps) {
  return (
    <div
      className={cn(
        "absolute pointer-events-none overflow-hidden z-5",
        className
      )}
    >
      {/* Spotlight Layer - Soft overhead light */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background: `radial-gradient(
            ellipse 70% 50% at 50% 0%,
            rgba(220, 220, 220, 0.12) 0%,
            rgba(200, 200, 200, 0.08) 20%,
            rgba(180, 180, 180, 0.04) 40%,
            transparent 70%
          )`,
          mixBlendMode: 'overlay',
          zIndex: 6,
          filter: 'blur(4px)',
        }}
      />

      {/* Main smoke layer - slow, subtle movement */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url("/images/smoke-texture.svg")`,
          backgroundSize: '900px 900px',
          backgroundRepeat: 'repeat',
          maskImage: `radial-gradient(ellipse 100% 100% at 50% 50%, black 0%, rgba(0, 0, 0, 0.8) 50%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(ellipse 100% 100% at 50% 50%, black 0%, rgba(0, 0, 0, 0.8) 50%, transparent 100%)`,
          opacity: 0.08,
          animation: 'scrollSmoke 120s linear infinite',
          zIndex: 5,
        }}
      />

      {/* Secondary smoke layer - with slight drift */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url("/images/smoke-texture-2.svg")`,
          backgroundSize: '1200px 1200px',
          backgroundRepeat: 'repeat',
          maskImage: `radial-gradient(ellipse 120% 120% at 50% 50%, black 0%, rgba(0, 0, 0, 0.6) 40%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(ellipse 120% 120% at 50% 50%, black 0%, rgba(0, 0, 0, 0.6) 40%, transparent 100%)`,
          opacity: 0.06,
          animation: 'scrollSmokeDrift 180s linear infinite',
          zIndex: 4,
        }}
      />

      {/* Additional subtle top-down light beam */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, transparent 60%)',
          mixBlendMode: 'overlay',
          opacity: 0.6,
          zIndex: 7,
        }}
      />
    </div>
  );
}

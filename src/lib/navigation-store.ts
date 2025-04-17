"use client";

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface NavigationState {
  lastViewedProductSlug: string | null;
  setLastViewedProductSlug: (slug: string) => void;
}

// Create a store with persistence
export const useNavigationStore = create<NavigationState>()(
  persist(
    (set) => ({
      lastViewedProductSlug: null,
      setLastViewedProductSlug: (slug: string) => set({ lastViewedProductSlug: slug }),
    }),
    {
      name: 'navigation-storage', // unique name for localStorage
    }
  )
);

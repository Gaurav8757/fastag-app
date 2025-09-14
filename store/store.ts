import { create } from "zustand";
import { persist } from "zustand/middleware";

interface StoreState {
  isAuthModalOpen: boolean;
  setIsAuthModalOpen: (isOpen: boolean) => void;
  activeSection: string;
  setActiveSection: (section: string) => void;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const useStore = create<StoreState>()(
  persist(
    (set) => ({
      isAuthModalOpen: false,
      darkMode: false,
      activeSection: "home",
      setActiveSection: (section: string) => set({ activeSection: section }),
      setIsAuthModalOpen: (isOpen: boolean) => set({ isAuthModalOpen: isOpen }),
      toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
    }),
    { name: "app-storage" } // name of the item in the storage (must be unique)
  )
);

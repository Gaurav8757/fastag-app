import { create } from "zustand";
import { persist } from "zustand/middleware";

interface StoreState {

  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const useStore = create<StoreState>()(
  persist(
    (set) => ({
     
      darkMode: false,
      toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
    }),
    { name: "app-storage" } // name of the item in the storage (must be unique)
  )
);

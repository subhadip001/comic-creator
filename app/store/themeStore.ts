import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeStore {
  isDark: boolean;
  setIsDark: (isDark: boolean) => void;
}

const useThemeStore = create<ThemeStore, [["zustand/persist", ThemeStore]]>(
  persist(
    (set) => ({
      isDark: true,
      setIsDark: (isDark: boolean) => set({ isDark }),
    }),
    {
      name: "theme-storage",
      skipHydration: true,
    }
  )
);

export default useThemeStore;

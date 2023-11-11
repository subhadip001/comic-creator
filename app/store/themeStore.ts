import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ThemeStore {
  isDark: boolean;
  setIsDark: () => void;
}

const useThemeStore = create<ThemeStore, [["zustand/persist", ThemeStore]]>(
  persist(
    (set) => ({
      isDark: true,
      setIsDark: () => set((state) => ({ isDark: !state.isDark })),
    }),
    {
      name: "theme-storage",
    }
  )
);

export default useThemeStore;

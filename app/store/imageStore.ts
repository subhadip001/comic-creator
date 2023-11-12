import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ImageStore {
  imageUrls: string[];
  setNewImageUrl: (newImageUrl: string) => void;
  clearImageUrls: () => void;
}

const useImageStore = create<ImageStore, [["zustand/persist", ImageStore]]>(
  persist(
    (set) => ({
      imageUrls: [],
      setNewImageUrl: (newImageUrl: string) =>
        set((state) => ({ imageUrls: [...state.imageUrls, newImageUrl] })),
      clearImageUrls: () => set({ imageUrls: [] }),
    }),
    {
      name: "image-storage",
    }
  )
);

export default useImageStore;

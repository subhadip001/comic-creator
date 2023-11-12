import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ImageStore {
  imageUrls: string[];
}

const useImageStore = create<ImageStore, [["zustand/persist", ImageStore]]>(
  persist(
    (set) => ({
      imageUrls: [],
      setImageUrl: (imageUrl: string) =>
        set((state) => ({ imageUrls: [...state.imageUrls, imageUrl] })),
      clearImageUrls: () => set({ imageUrls: [] }),
    }),
    {
      name: "image-storage",
    }
  )
);

export default useImageStore;

import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set) => ({
      bookmarks: [],
      addBookmark: (user) =>
        set((state) => ({
          bookmarks: [...state.bookmarks, user],
        })),
      removeBookmark: (id) =>
        set((state) => ({
          bookmarks: state.bookmarks.filter((u) => u.id !== id),
        })),
    }),
    {
      name: "bookmark-storage", // localStorage key
    }
  )
);

export default useStore;

import { create } from "zustand";
import { persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set) => ({
      bookmarks: [],
      users: [],

      addBookmark: (user) =>
        set((state) => ({
          bookmarks: [...state.bookmarks, user],
        })),

      removeBookmark: (id) =>
        set((state) => ({
          bookmarks: state.bookmarks.filter((u) => u.id !== id),
        })),

      addUser: (user) =>
        set((state) => ({
          users: [user, ...state.users],
        })),
      removeUser: (id) =>
        set((state) => ({
          users: state.users.filter((u) => u.id !== id),
        })),
    }),
    {
      name: "hr-dashboard-storage", // single storage key
    }
  )
);

export default useStore;

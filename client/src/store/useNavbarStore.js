import { create } from "zustand";

export const useNavbarStore = create((set) => ({
  isNavbarActive: false,
  changeNavbarState: () =>
    set((state) => ({ isNavbarActive: !state.isNavbarActive })),
  closeNavbar: () => set({ isNavbarActive: false }),
}));

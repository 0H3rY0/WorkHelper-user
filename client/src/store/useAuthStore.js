import { jwtDecode } from "jwt-decode";
import { create } from "zustand";
import { useUserStore } from "./useUserStore";

export const useAuthStore = create((set) => ({
  isAuthenticated: false,

  setAuthenticated: async (token) => {
    try {
      const decoded = jwtDecode(token);
      localStorage.setItem("authToken", token);

      await useUserStore.getState().fetchUser(decoded.id);
      set({ isAuthenticated: true });
    } catch (error) {
      console.error("Error decoding token:", error);
      set({ isAuthenticated: false });
    }
  },

  initializeAuth: async () => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      set({ isAuthenticated: false });
      return;
    }

    try {
      const decoded = jwtDecode(token);
      const currentTime = Math.floor(Date.now() / 1000);

      if (decoded.exp && decoded.exp < currentTime) {
        console.log("Token has expired.");
        localStorage.removeItem("authToken");
        set({ isAuthenticated: false });
        return;
      }

      set({ isAuthenticated: true });
      await useUserStore.getState().fetchUser(decoded.id);
    } catch (error) {
      console.error("error during authorization", error);
      localStorage.removeItem("authToken");
      set({ isAuthenticated: false });
    }
  },

  logout: () => {
    localStorage.removeItem("authToken");
    set({ isAuthenticated: false });
    useUserStore.getState().resetUser();
  },
}));

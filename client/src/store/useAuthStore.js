import { jwtDecode } from "jwt-decode";
import { create } from "zustand";

export const useAuthStore = create((set) => ({
  isAuthenticated: false,

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
    } catch (error) {
      console.error("error during authorization", error);
      localStorage.removeItem("authToken");
      set({ isAuthenticated: false });
    }
  },
}));

import axios from "axios";
import { create } from "zustand";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const useUserStore = create((set) => ({
  user: {
    id: "",
    imie: "",
    nazwisko: "",
    email: "",
    klienci: [],
  },

  fetchUser: async (id) => {
    try {
      const response = await axios.get(
        `${BACKEND_URL}/api/uzytkownicy/get/${id}`
      );

      // const clientResponse = await axios.get(
      //   `${BACKEND_URL}/api/uzytkownicy/klienci/all/by/${response.data.user.id}`
      // );

      const userDataResponse = await axios.get(
        `${BACKEND_URL}/api/uzytkownicy/user-data/${response.data.user.id}`
      );

      set({
        user: {
          id: response.data.user.id,
          imie: response.data.user.imie,
          nazwisko: response.data.user.nazwisko,
          email: response.data.user.email,
          userData: userDataResponse.data.userData,
        },
      });
    } catch (error) {
      console.error("error during downloadin user: ", error);
    }
  },

  resetUser: () => {
    set({
      user: {
        id: "",
        imie: "",
        nazwisko: "",
        email: "",
        klienci: [],
      },
    });
  },
}));

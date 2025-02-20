import axios from "axios";
import { create } from "zustand";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const useUserStore = create((set) => ({
  client: {
    id: "",
    idUzytkownika: "",
    idGrupy: "",
    idObiektu: "",
    telefon: "",
    stanowisko: "",
    pomiszczenie: "",
    dataDO: "",
  },

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

      const clientResponse = await axios.get(
        `${BACKEND_URL}/api/uzytkownicy/klienci/all/by/${response.data.user.id}`
      );

      console.log(clientResponse);
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

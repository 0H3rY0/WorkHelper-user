import { create } from "zustand";
import axios from "axios";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const usePermission = create((set) => ({
  permission: {
    zglaszac: false,
    laptopy: { wyswietlanie: false, dodawanie: false, edytowanie: false },
    pc: { wyswietlanie: false, dodawanie: false, edytowanie: false },
    kamery: { wyswietlanie: false, dodawanie: false, edytowanie: false },
    routers: { wyswietlanie: false, dodawanie: false, edytowanie: false },
    nvr: { wyswietlanie: false, dodawanie: false, edytowanie: false },
    alarmy: { wyswietlanie: false, dodawanie: false, edytowanie: false },
    anteny: { wyswietlanie: false, dodawanie: false, edytowanie: false },
    oprogramowania: {
      wyswietlanie: false,
      dodawanie: false,
      edytowanie: false,
    },
    pozostale: { wyswietlanie: false, dodawanie: false, edytowanie: false },
    objectId: "",
    clientId: "",
  },

  fetchPermissions: async (groupId, objectId, clientId) => {
    try {
      const response = await axios.get(
        `${BACKEND_URL}/api/uzytkownicy/permission/${groupId}`
      );
      const data = response.data.permission[0];

      const mapping = {
        "01": "laptopy",
        "02": "pc",
        "03": "kamery",
        "04": "routers",
        "05": "nvr",
        "06": "alarmy",
        "07": "anteny",
        "08": "oprogramowania",
        "09": "pozostale",
      };

      const parsedPermissions = Object.keys(mapping).reduce((acc, key) => {
        acc[mapping[key]] = {
          wyswietlanie: !!data[`${key}_wyswietlanie`],
          dodawanie: !!data[`${key}_dodawanie`],
          edytowanie: !!data[`${key}_edycja`],
        };
        return acc;
      }, {});

      parsedPermissions.zglaszac = !!data.zglaszac;
      parsedPermissions.objectId = objectId;
      parsedPermissions.clientId = clientId;

      set({ permission: parsedPermissions });
    } catch (error) {
      console.error("Błąd pobierania uprawnień:", error);
    }
  },
}));

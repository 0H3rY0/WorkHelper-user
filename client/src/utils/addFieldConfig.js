export const addFieldConfig = {
  alarmy: [
    { id: "model", label: "Model", type: "text", name: "model" },
    {
      id: "iloscCzujek",
      label: "Ilość Czujek",
      type: "number",
      name: "ilosc_czujek",
    },
    {
      id: "podzialUprawnien",
      label: "Podział Uprawnień",
      type: "checkbox",
      name: "podzial_uprawnien",
    },
    {
      id: "iloscKlawiatur",
      label: "Ilość Klawiatur",
      type: "number",
      name: "ilosc_klawiatur",
    },
    {
      id: "iloscModulow",
      label: "Ilość Modułów",
      type: "number",
      name: "ilosc_modulow",
    },
    {
      id: "systemRozproszony",
      label: "System Rozproszony",
      type: "checkbox",
      name: "system_rozproszony",
    },
    { id: "uwagi", label: "Uwagi", type: "text", name: "uwagi" },
    { id: "notatki", label: "Notatki", type: "text", name: "notatki" },
    // {
    //   id: "dataOD",
    //   label: "Data OD",
    //   type: "date",
    //   name: "dataOD",
    //   value: new Date().toISOString().split("T")[0],
    // },
  ],

  anteny: [
    { id: "czasza", label: "Czasza", type: "checkbox", name: "czasza" },
    {
      id: "antenaDvbt",
      label: "Antena DVBT",
      type: "checkbox",
      name: "antena_dvbt",
    },
    {
      id: "antenaRadiowa",
      label: "Antena Radiowa",
      type: "checkbox",
      name: "antena_radiowa",
    },
    {
      id: "zwrotnica",
      label: "Zwrotnica",
      type: "number",
      name: "zwrotnica",
    },
    {
      id: "iloscRozgaleznikow",
      label: "Ilość Rozgałęźników",
      type: "number",
      name: "ilosc_rozgaleznikow",
    },
    { id: "uwagi", label: "Uwagi", type: "text", name: "uwagi" },
    { id: "notatki", label: "Notatki", type: "text", name: "notatki" },
    // { id: "dataOD", label: "Data OD", type: "date", name: "dataOD" },
  ],

  laptopy: [
    { id: "nrSeryjny", label: "Nr Seryjny", type: "text", name: "nr_seryjny" },
    { id: "model", label: "Model", type: "text", name: "model" },
    {
      id: "system",
      label: "System Operacyjny",
      type: "text",
      name: "system_operacyjny",
    },
    {
      id: "uprawnienia",
      label: "Uprawnienia",
      type: "checkbox",
      name: "podzial_uprawnien",
    },
    {
      id: "rodzajDysku",
      label: "Rodzaj Dysku",
      type: "text",
      name: "rodzaj_dysku",
    },
    {
      id: "dataWymianyDysku",
      label: "Data Wymiany Dysku",
      type: "date",
      name: "data_wymiany_dysku",
    },
    { id: "ram", label: "RAM", type: "number", name: "ram" },
    {
      id: "kartaGraficzna",
      label: "Karta Graficzna (zintegrowana)",
      type: "checkbox",
      name: "karta_graficzna",
    },
    {
      id: "plytaGlowna",
      label: "Płyta Główna",
      type: "text",
      name: "plyta_glowna",
    },
    { id: "zasilacz", label: "Zasilacz", type: "text", name: "zasilacz" },
    {
      id: "programZdalny",
      label: "Program Zdalny",
      type: "text",
      name: "program_zdalny",
    },
    {
      id: "idProgramu",
      label: "ID Programu",
      type: "text",
      name: "id_programu",
    },
    { id: "uwagi", label: "Uwagi", type: "text", name: "uwagi" },
    { id: "notatki", label: "Notatki", type: "text", name: "notatki" },
    // { id: "dataOd", label: "Data od", type: "date", name: "dataOD" },
  ],

  pc: [
    { id: "nrSeryjny", label: "Nr Seryjny", type: "text", name: "nr_seryjny" },
    {
      id: "podzialUprawnien",
      label: "Podział Uprawnień",
      type: "checkbox",
      name: "podzial_uprawnien",
    },
    {
      id: "systemOperacyjny",
      label: "System Operacyjny",
      type: "text",
      name: "system_operacyjny",
    },
    {
      id: "rodzajDysku",
      label: "Rodzaj Dysku",
      type: "text",
      name: "rodzaj_dysku",
    },
    {
      id: "dataWymianyDysku",
      label: "Data Wymiany Dysku",
      type: "date",
      name: "data_wymiany_dysku",
    },
    { id: "ram", label: "RAM (GB)", type: "number", name: "ram" },
    {
      id: "kartaGraficzna",
      label: "Karta Graficzna (0 - Zintegrowana, 1 - Dedykowana)",
      type: "checkbox",
      name: "karta_graficzna",
    },
    {
      id: "plytaGlowna",
      label: "Płyta Główna",
      type: "text",
      name: "plyta_glowna",
    },
    { id: "zasilacz", label: "Zasilacz", type: "text", name: "zasilacz" },
    {
      id: "programZdalny",
      label: "Program Zdalny",
      type: "text",
      name: "program_zdalny",
    },
    {
      id: "idProgramu",
      label: "ID Programu",
      type: "text",
      name: "id_programu",
    },
    { id: "uwagi", label: "Uwagi", type: "text", name: "uwagi" },
    { id: "notatki", label: "Notatki", type: "text", name: "notatki" },
    // { id: "dataOd", label: "Data Od", type: "date", name: "dataOD" },
  ],
};

export const getItemAddFields = (tableName) => {
  return addFieldConfig[tableName] || [];
};

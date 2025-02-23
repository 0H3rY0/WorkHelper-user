import { useEffect, useState } from "react";
import { initialRaportStates } from "../utils/initialStates";
import axios from "axios";

const RaportsList = () => {
  const BACKEND_URL = import.meta.evn.VITE_BACKEND_URL;
  const [tickets, setTickets] = useState(initialRaportStates.ticket);

  useEffect(() => {
    const getTickets = async () => {
      const response = await axios.get(`${BACKEND_URL}/api/raport/ticket/all`);

      console.log(response);
    };

    getTickets();
  });

  const raports = [
    {
      id: "1",
      id_klienta: "1",
      status: "nowe",
      tytul: "Zepsuty sprzet",
      priorytet: "1",
      data: "28-02-2025",
      godzina: "17:43",
    },
    {
      id: "2",
      id_klienta: "1",
      status: "zaczete",
      tytul: "Zepsuty sprzet",
      priorytet: "1",
      data: "28-02-2025",
      godzina: "17:43",
    },
  ];

  return (
    <ul className="w-full flex flex-col gap-5 ">
      <li
        key={0}
        className="w-full text-custom-gray px-5 py-1
        grid grid-cols-8 gap-5 text-xl font-bold text-center rounded-sm"
      >
        <h2 className="col-span-2 text-start">Tytul</h2>
        <p className="col-span-2 text-start">Numer zgłoszenia</p>
        <p className="text-center">Status</p>
        <p className="text-center">Priorytet</p>
        <p className="text-end">Data</p>
        <p className="text-end">Godzina</p>
      </li>

      {raports.map((item, index) => (
        <li
          key={index}
          className="w-full bg-custom-blue-light text-white p-5
        grid grid-cols-8 gap-5 hover:scale-105 scale-transition cursor-pointer text-center rounded-sm"
        >
          <h2 className="text-xl font-semibold col-span-2 text-start">
            {item.tytul}
          </h2>
          <p className="col-span-2 text-start">{`#${item.id}/ticket012025`}</p>
          <p className="text-center">{item.status}</p>
          <p className="text-center">{item.priorytet}</p>
          <p className="text-end">{item.data}</p>
          <p className="text-end">{item.godzina}</p>
        </li>
      ))}
    </ul>
  );
};

export default RaportsList;

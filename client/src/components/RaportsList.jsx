import { useEffect, useState } from "react";
import axios from "axios";
import { usePermission } from "../store/usePermission";
import Ticket from "./ui/Ticket";

const RaportsList = () => {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const { permission } = usePermission();
  const [tickets, setTickets] = useState([]);
  const [tableName, setTableName] = useState(null);
  const [clientId, setClientId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (permission && permission.clientId) {
      setClientId(permission.clientId);
    }
  }, [permission]);

  useEffect(() => {
    const getTickets = async () => {
      if (!clientId) return;
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          `${BACKEND_URL}/api/raport/ticket/all/${clientId}`
        );
        setTickets(response.data.tickets);
        setTableName(response.data.tableName);
      } catch (err) {
        setError("Błąd podczas ładowania zgłoszeń");
        console.log("Error fetching tickets:", err);
      } finally {
        setLoading(false);
      }
    };

    getTickets();
  }, [clientId]);

  return (
    <div className="w-full flex flex-col gap-5">
      {loading && <p>Ładowanie zgłoszeń...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && tickets.length === 0 && (
        <p className="text-center text-gray-500">
          Brak zgłoszeń do wyświetlenia.
        </p>
      )}

      <ul className="w-full flex flex-col gap-3">
        {/* Nagłówek - zawsze widoczny */}
        <li
          key={0}
          className="w-full text-custom-gray px-3 md:px-5 py-2 
          grid grid-cols-6 md:grid-cols-8 gap-2 md:gap-5 text-xs md:text-sm lg:text-base font-bold 
          text-center rounded-sm bg-gray-200"
        >
          <h2 className="col-span-2 text-start truncate">Tytuł</h2>
          <p className="col-span-2 text-start truncate">Numer zgłoszenia</p>
          <p className="text-center">Status</p>
          <p className="text-center">Priorytet</p>
          {/* Data i godzina razem na małych ekranach */}
          <p className="text-end md:hidden whitespace-nowrap">Data i godz.</p>
          {/* Osobno na większych ekranach */}
          <p className="hidden md:block text-end whitespace-nowrap">Data</p>
          <p className="hidden md:block text-end whitespace-nowrap">Godzina</p>
        </li>

        {/* Renderowanie zgłoszeń */}
        {tickets.map((item) => (
          <Ticket key={item.id} item={item} tableName={tableName} />
        ))}
      </ul>
    </div>
  );
};

export default RaportsList;

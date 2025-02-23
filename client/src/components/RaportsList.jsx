import { useEffect, useState } from "react";
import axios from "axios";
import { usePermission } from "../store/usePermission";
import { formatDate } from "../utils/functions/formatData";

const RaportsList = () => {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const { permission } = usePermission();
  const [tickets, setTickets] = useState([]);
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
        <p>Brak zgłoszeń do wyświetlenia.</p>
      )}

      <ul className="w-full flex flex-col gap-5">
        <li
          key={0}
          className="w-full text-custom-gray px-5 py-1 grid grid-cols-8 gap-5 text-xl font-bold text-center rounded-sm"
        >
          <h2 className="col-span-2 text-start">Tytuł</h2>
          <p className="col-span-2 text-start">Numer zgłoszenia</p>
          <p className="text-center">Status</p>
          <p className="text-center">Priorytet</p>
          <p className="text-end">Data</p>
          <p className="text-end">Godzina</p>
        </li>

        {tickets.map((item) => (
          <li
            key={item.id}
            className="w-full bg-custom-blue-light text-white p-5 grid grid-cols-8 gap-5 hover:scale-105 scale-transition cursor-pointer text-center rounded-sm"
          >
            <h2 className="text-xl font-semibold col-span-2 text-start">
              {item.tytul}
            </h2>
            <p className="col-span-2 text-start">{`#${item.id}/ticket012025`}</p>
            <p className="text-center">{item.status}</p>
            <p className="text-center">{item.priorytet}</p>
            <p className="text-end">{formatDate(item.data)}</p>
            <p className="text-end">{item.godzina}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RaportsList;

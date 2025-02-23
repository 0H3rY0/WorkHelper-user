import { Link } from "react-router";
import { initialRaportStates } from "../utils/initialStates";
import { useEffect, useState } from "react";
import { usePermission } from "../store/usePermission";
import axios from "axios";

const MakeRaport = () => {
  const initialRaportState = initialRaportStates.raport;
  const { permission } = usePermission();
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const [raport, setRaport] = useState(initialRaportState);

  useEffect(() => {
    console.log(permission);
    setRaport((prev) => ({
      ...prev,
      id_klienta: permission.clientId,
    }));
  }, [permission]);

  const onInputChange = (e) => {
    setRaport((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    console.log(raport);
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/raport/add`,
        raport
      );
      setRaport(initialRaportState);
      console.log(response);
    } catch (error) {
      console.log("error during add raport: ", error);
    }
  };

  return (
    <div className="w-full flex flex-col items-start md:p-14 p-3">
      <div className="w-full flex justify-between items-center mb-14">
        <h2 className="text-2xl font-bold text-custom-blue">Zrób zgłoszenie</h2>
        <Link to={`/selected`}>
          <button className="button bg-custom-blue text-white flex items-center gap-2 hover:bg-custom-blue-light">
            Wróć
          </button>
        </Link>
      </div>

      <form className="w-full flex flex-col gap-8" onSubmit={handleSubmitForm}>
        <div className="w-full flex flex-col">
          <label htmlFor="content" className="text-2xl">
            Tutuł
          </label>
          <input
            type="text"
            name="tytul"
            placeholder="Napisz tutaj swój tytuł"
            value={raport.tytul}
            onChange={onInputChange}
          />
        </div>

        <div className="w-full flex flex-col">
          <label htmlFor="content" className="text-2xl">
            Treść zgłoszenia
          </label>
          <textarea
            name="tresc"
            id="content"
            className="input min-h-32"
            placeholder="Napisz tutaj treść swojego zgłoszenia"
            value={raport.tresc}
            onChange={onInputChange}
          ></textarea>
        </div>

        <button
          type="submit"
          className="button bg-custom-blue text-white hover:bg-custom-blue-light"
        >
          Wyśli
        </button>
      </form>
    </div>
  );
};

export default MakeRaport;

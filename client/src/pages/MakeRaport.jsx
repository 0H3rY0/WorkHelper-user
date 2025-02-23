import { Link } from "react-router";
import { initialRaportStates } from "../utils/initialStates";
import { useState } from "react";

const MakeRaport = () => {
  const initialRaportState = initialRaportStates.raport;

  const [raport, setRaport] = useState(initialRaportState);

  const onInputChange = (e) => {
    setRaport((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    console.log(raport);
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

      <div className="w-full flex flex-col gap-8">
        <div className="w-full flex flex-col">
          <label htmlFor="content" className="text-2xl">
            Tutuł
          </label>
          <input
            type="text"
            name="tytul"
            placeholder="Napisz tutaj swój tytuł"
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
            onChange={onInputChange}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default MakeRaport;

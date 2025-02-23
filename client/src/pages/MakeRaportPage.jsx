import { useEffect, useState } from "react";
import { usePermission } from "../store/usePermission";
import axios from "axios";
import { initialRaportStates } from "../utils/initialStates";
import FormInput from "../components/ui/FormInput";
import FormTextarea from "../components/ui/FormTextarea";
import BackButton from "../components/ui/BackButton";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const MakeRaportPage = () => {
  const initialRaportState = initialRaportStates.raport;
  const { permission } = usePermission();
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const navigate = useNavigate();

  const [raport, setRaport] = useState(initialRaportState);

  useEffect(() => {
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
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/raport/add`,
        raport
      );
      setRaport(initialRaportState);
      toast.success("Zgłoszenie poprawnie wysłane!");
      navigate("/selected/my-raports");
      console.log(response);
    } catch (error) {
      console.log("error during add raport: ", error);
    }
  };

  return (
    <div className="w-full flex flex-col items-start md:p-14 p-3">
      <div className="w-full flex justify-between items-center mb-14">
        <h2 className="text-2xl font-bold text-custom-blue">Zrób zgłoszenie</h2>
        <BackButton path="/selected" />
      </div>

      <form className="w-full flex flex-col gap-8" onSubmit={handleSubmitForm}>
        <FormInput
          name="tytul"
          value={raport.tytul}
          placeholder="Napisz tutaj swój tytuł"
          onChange={onInputChange}
        />
        <FormTextarea
          name="tresc"
          value={raport.tresc}
          placeholder="Napisz tutaj treść swojego zgłoszenia"
          onChange={onInputChange}
        />
        <div>
          <button
            type="submit"
            className="button bg-custom-blue text-white hover:bg-custom-blue-light min-w-32"
          >
            Wyślij
          </button>
        </div>
      </form>
    </div>
  );
};

export default MakeRaportPage;

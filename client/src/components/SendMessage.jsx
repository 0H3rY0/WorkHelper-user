import { useEffect, useState } from "react";
import FormTextarea from "./ui/FormTextarea";
import { usePermission } from "../store/usePermission";
import axios from "axios";
import { toast } from "react-toastify";

const SendMessage = ({
  ticketId,
  setIsMessageSend,
  setIsSendMessageFormOpen,
}) => {
  const { permission } = usePermission();
  const initialMessageState = {
    id_ticket: Number(ticketId),
    id_klienta: "",
    data: new Date().toISOString().split("T")[0],
    godzina: new Date().toTimeString().split(" ")[0],
    tresc: "",
  };
  const [messageState, setMessageState] = useState(initialMessageState);
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    setMessageState((prev) => ({
      ...prev,
      id_klienta: permission.clientId,
    }));
  }, [permission]);

  const messageContentChange = (e) => {
    setMessageState((prev) => ({
      ...prev,
      tresc: e.target.value,
    }));
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/raport/message/add`,
        messageState
      );
      setMessageState(initialMessageState);
      toast.success("Wiadomość poprawnie wysłana!");
      setIsMessageSend((prev) => !prev);
      setIsSendMessageFormOpen(false);
      console.log(response);
    } catch (error) {
      console.log("error during sending message: ", error);
    }
  };

  return (
    <div className="w-full">
      <form className="w-full mb-5" onSubmit={handleSubmitForm}>
        <FormTextarea
          name="tresc"
          value={messageState.tresc}
          placeholder="Napisz tutaj treść swojego zgłoszenia"
          onChange={messageContentChange}
          labelText="Treść zgłoszenia"
        />
        <button
          type="submit"
          className="button bg-custom-blue text-white hover:bg-custom-blue-light mt-3 min-w-28"
        >
          Wyśli
        </button>
      </form>
    </div>
  );
};

export default SendMessage;

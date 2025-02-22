import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const useAddDeviceForm = (initialState, endpoint, objectId) => {
  const [formState, setFormState] = useState(initialState);
  const [error, setError] = useState(null);

  // Jeśli objectId jest wymagane, sprawdź czy jest dostępne przed wysyłaniem formularza
  if (!objectId) {
    return {
      formState,
      handleChange: () => {},
      handleSubmit: () => {},
      error: "Brak ID obiektu",
    };
  }

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;

    setFormState((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (checked ? 1 : 0) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!objectId) {
      setError("Brak ID obiektu");
      return;
    }

    try {
      const formData = { ...formState, id_obiektu: objectId };
      await axios.post(endpoint, formData);
      setFormState(initialState);
      setError(null);
      toast.success("Dane zostały zapisane!", { position: "top-right" });
    } catch (error) {
      console.error(error.response?.data?.error || "Wystąpił błąd");
      setError(error.response?.data?.error || "Wystąpił błąd");
    }
  };

  return {
    formState,
    handleChange,
    handleSubmit,
    error,
  };
};

export default useAddDeviceForm;

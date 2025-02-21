import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const useEditItem = (tableName, id, itemData, setItemData) => {
  const [editMode, setEditMode] = useState(null);
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const handleEditField = async () => {
    try {
      await axios.post(`${BACKEND_URL}/api/${tableName}/edit`, {
        id,
        ...itemData,
      });
      setEditMode(null);
      toast.success("Edycja zakończona sukcesem!");
    } catch (err) {
      console.error("Błąd edycji:", err);
    }
  };

  return { editMode, setEditMode, handleEditField };
};

export default useEditItem;

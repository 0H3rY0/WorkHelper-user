import { useState, useEffect } from "react";
import axios from "axios";

const useItemData = (tableName, id) => {
  const [itemData, setItemData] = useState({});
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          `${BACKEND_URL}/api/${tableName}/${id}`
        );
        setItemData(response.data[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    getData();
  }, [tableName, id]);

  return { itemData, setItemData };
};

export default useItemData;

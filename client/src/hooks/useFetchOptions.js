import { useState, useEffect } from "react";
import axios from "axios";

const useFetchOptions = (fields) => {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const [options, setOptions] = useState({});

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const responses = await Promise.all(
          fields
            .filter((field) => field.type === "select" && field.endpoint)
            .map((field) =>
              axios
                .get(`${BACKEND_URL}/${field.endpoint}`)
                .then((res) => ({ name: field.name, data: res.data }))
            )
        );

        const newOptions = responses.reduce((acc, { name, data }) => {
          acc[name] = data;
          return acc;
        }, {});

        setOptions(newOptions);
      } catch (error) {
        console.error("Błąd pobierania danych:", error);
      }
    };

    fetchOptions();
  }, [fields]);

  return options;
};

export default useFetchOptions;

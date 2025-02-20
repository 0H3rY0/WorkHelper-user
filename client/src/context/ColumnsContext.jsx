import { createContext, useContext, useEffect, useState } from "react";
import { getFieldConfig } from "../utils/fieldConfig";

const ColumnsContext = createContext();

export const ColumnsProvider = ({ children, tableName }) => {
  const [allFields, setAllFields] = useState([]);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    if (tableName) {
      const fetchedFields = getFieldConfig(tableName);
      setAllFields(fetchedFields);
      setColumns(
        fetchedFields
          .filter((field) => field.checked)
          .map((field) => field.name)
      );
    }
  }, [tableName]);

  const handleChangeColumnsState = (e) => {
    setColumns((prev) =>
      e.target.checked
        ? [...prev, e.target.name]
        : prev.filter((col) => col !== e.target.name)
    );

    console.log(columns);
  };

  return (
    <ColumnsContext.Provider
      value={{ columns, handleChangeColumnsState, allFields }}
    >
      {children}
    </ColumnsContext.Provider>
  );
};

export const useColumnsContext = () => useContext(ColumnsContext);

import { useState } from "react";

const useObjectFilter = (id, setObjectFilters) => {
  const [selectedValue, setSelectedValue] = useState("id");
  const [textInputValue, setTextInputValue] = useState("");
  const [isSwitch, setIsSwitch] = useState(false);

  const onSelectValue = (e) => {
    const newValue = e.target.value;
    setSelectedValue(newValue);

    setObjectFilters((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              name: {
                [newValue]: {
                  text: textInputValue,
                  zawiera: isSwitch,
                },
              },
            }
          : item
      )
    );
  };

  const onSwitch = () => {
    setIsSwitch((prev) => !prev);
    setObjectFilters((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              name: {
                ...item.name,
                [selectedValue]: {
                  ...(item.name?.[selectedValue] || {}),
                  zawiera: !isSwitch,
                },
              },
            }
          : item
      )
    );
  };

  const onTextInputChange = (e) => {
    setTextInputValue(e.target.value);
    setObjectFilters((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              name: {
                [selectedValue]: {
                  text: e.target.value,
                  zawiera: isSwitch,
                },
              },
            }
          : item
      )
    );
  };

  const handleRemoveObjectFilter = (e) => {
    e.preventDefault();
    setObjectFilters((prev) => prev.filter((item) => item.id !== id));
  };

  return {
    selectedValue,
    textInputValue,
    isSwitch,
    onSelectValue,
    onSwitch,
    onTextInputChange,
    handleRemoveObjectFilter,
  };
};

export default useObjectFilter;

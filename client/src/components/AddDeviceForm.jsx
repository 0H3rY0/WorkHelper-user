import { useState } from "react";
import useFetchOptions from "../hooks/useFetchOptions";
import FormField from "../components/FormField";

const AddDeviceForm = ({
  fields,
  handleSubmitForm,
  onInputChange,
  DeviceState,
}) => {
  const options = useFetchOptions(fields);

  const [inputModes, setInputModes] = useState(
    fields.reduce((acc, field) => {
      if (field.type === "select") acc[field.name] = "select";
      return acc;
    }, {})
  );

  const handleModeChange = (fieldName, mode) => {
    setInputModes((prevModes) => ({ ...prevModes, [fieldName]: mode }));
  };

  return (
    <form onSubmit={handleSubmitForm} className="w-full flex flex-col">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
        {fields.map((field) => (
          <FormField
            key={field.id}
            field={field}
            onInputChange={onInputChange}
            DeviceState={DeviceState}
            inputModes={inputModes}
            handleModeChange={handleModeChange}
            options={options}
          />
        ))}
      </div>

      <button
        type="submit"
        className="button bg-custom-blue text-white mt-10 w-1/6 min-w-32 hover:bg-custom-blue-light"
      >
        Add
      </button>
    </form>
  );
};

export default AddDeviceForm;

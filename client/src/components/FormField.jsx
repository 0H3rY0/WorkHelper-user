const FormField = ({
  field,
  onInputChange,
  DeviceState,
  inputModes,
  handleModeChange,
  options,
}) => {
  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={field.id}
        className="text-sm font-medium text-custom-blue"
      >
        {field.label}
      </label>

      {field.type === "select" ? (
        <>
          <select
            id={field.id}
            className="input p-2 border border-custom-blue rounded-md bg-dark-gray text-white focus:outline-none focus:ring-2 focus:ring-custom-blue"
            name={field.name}
            onChange={(e) => handleModeChange(field.name, e.target.value)}
            value={inputModes[field.name]}
          >
            <option value="select">Wybór z listy</option>
            <option value="manual">Wpisanie ręczne</option>
          </select>

          {inputModes[field.name] === "select" ? (
            <select
              className="input p-2 border border-custom-blue rounded-md bg-dark-gray text-white focus:outline-none focus:ring-2 focus:ring-custom-blue"
              name={field.name}
              onChange={onInputChange}
              value={DeviceState[field.name] || ""}
            >
              <option value="">Wybierz...</option>
              {options[field.name]?.map((opt) => (
                <option key={opt.id} value={opt.id}>
                  {opt.label ||
                    opt.name ||
                    opt.nazwa ||
                    `${opt.imie} ${opt.nazwisko}`}
                </option>
              ))}
            </select>
          ) : (
            <input
              id={field.id}
              type="number"
              name={field.name}
              onChange={onInputChange}
              value={DeviceState[field.name] || ""}
              className="p-2 border border-custom-blue rounded-md bg-dark-gray text-white focus:outline-none focus:ring-2 focus:ring-custom-blue"
            />
          )}
        </>
      ) : (
        <input
          value={DeviceState[field.name] || ""}
          id={field.id}
          type={field.type}
          name={field.name}
          onChange={onInputChange}
          className="p-2 border border-custom-blue rounded-md bg-dark-gray text-white focus:outline-none focus:ring-2 focus:ring-custom-blue"
        />
      )}
    </div>
  );
};

export default FormField;

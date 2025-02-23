const FormInput = ({ name, value, placeholder, onChange, labelText }) => {
  return (
    <div className="w-full flex flex-col gap-1">
      <label htmlFor={name} className="text-xl font-bold">
        {labelText}
      </label>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="input"
      />
    </div>
  );
};

export default FormInput;

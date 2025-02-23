const FormInput = ({ name, value, placeholder, onChange }) => {
  return (
    <div className="w-full flex flex-col">
      <label htmlFor={name} className="text-2xl">
        {placeholder}
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

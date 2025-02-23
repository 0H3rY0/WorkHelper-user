const FormTextarea = ({ name, value, placeholder, onChange, labelText }) => {
  return (
    <div className="w-full flex flex-col gap-1">
      <label htmlFor={name} className="text-xl font-bold">
        {labelText}
      </label>
      <textarea
        name={name}
        id={name}
        className="input min-h-32"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      ></textarea>
    </div>
  );
};

export default FormTextarea;

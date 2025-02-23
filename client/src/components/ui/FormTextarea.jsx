const FormTextarea = ({ name, value, placeholder, onChange }) => {
  return (
    <div className="w-full flex flex-col">
      <label htmlFor={name} className="text-2xl">
        {placeholder}
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

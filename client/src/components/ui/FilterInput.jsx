const FilterInput = ({ value, onChange }) => {
  return (
    <input
      type="text"
      className="input md:w-1/5 w-full"
      value={value}
      onChange={onChange}
    />
  );
};

export default FilterInput;

const FilterSelect = ({ objectColumns = [], onChange }) => {
  return (
    <select className="input md:w-1/5 w-full" onChange={onChange}>
      {objectColumns.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default FilterSelect;

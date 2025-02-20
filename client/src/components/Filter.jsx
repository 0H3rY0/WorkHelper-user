import useObjectFilter from "../hooks/useObjectFilter";
import FilterSelect from "./ui/FilterSelect";
import FilterSwitch from "./ui/FilterSwitch";
import FilterInput from "./ui/FilterInput";
import RemoveFilterButton from "./ui/RemoveFilterButton";

const Filter = ({ id = 0, setObjectFilters, objectColumns }) => {
  const {
    textInputValue,
    isSwitch,
    onSelectValue,
    onSwitch,
    onTextInputChange,
    handleRemoveObjectFilter,
  } = useObjectFilter(id, setObjectFilters);

  return (
    <form
      className="w-full flex md:flex-row flex-col items-center justify-center md:gap-4 gap-2 mt-4 md:mb-0 mb-10"
      id={id}
    >
      <FilterSelect objectColumns={objectColumns} onChange={onSelectValue} />
      <FilterSwitch onSwitch={onSwitch} checked={isSwitch} />
      <FilterInput value={textInputValue} onChange={onTextInputChange} />
      <RemoveFilterButton onClick={handleRemoveObjectFilter} />
    </form>
  );
};

export default Filter;

const FilterSwitch = ({ onSwitch }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <label
        htmlFor="checkContains"
        className="font-bold text-md text-slate-700"
      >
        Niezawiera/Zawiera
      </label>
      <label className="inline-flex items-center cursor-pointer mt-1">
        <input type="checkbox" className="sr-only peer" onChange={onSwitch} />
        <div className="relative w-11 h-6 bg-gray-300 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600 dark:peer-checked:bg-green-600"></div>
      </label>
    </div>
  );
};

export default FilterSwitch;

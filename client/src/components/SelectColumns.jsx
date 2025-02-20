import { useColumnsContext } from "../context/ColumnsContext";
import { AiOutlineSelect } from "react-icons/ai";

const SelectColumns = () => {
  const { columns, handleChangeColumnsState, allFields } = useColumnsContext();

  return (
    <div className="w-full font-semibold text-2xl text-slate-700 flex flex-col mt-20 gap-10 items-start">
      <h2 className="flex gap-2">
        Wybierz kolumny <AiOutlineSelect size={32} />
      </h2>
      <div>
        <ul className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 gap-4 md:text-start text-center">
          {allFields.map((item) => (
            <li
              key={item.name}
              className="flex flex-col md:items-start items-start md:mr-10 mr-2 text-nowrap"
            >
              <label htmlFor={item.label}>{item.label}</label>
              <input
                type="checkbox"
                name={item.name}
                checked={columns.includes(item.name)}
                onChange={handleChangeColumnsState}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SelectColumns;

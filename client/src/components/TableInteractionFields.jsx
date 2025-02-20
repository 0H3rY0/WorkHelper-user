import { FaDatabase } from "react-icons/fa";

const TableInteractionFields = ({
  getAllFilters,
  rowLimit,
  changeFilteredDataRowsLimit,
  searchTableRecord,
}) => {
  return (
    <div className="w-full font-semibold text-2xl text-slate-700 flex md:flex-row flex-col mt-20 md:justify-between md:items-center items-start">
      <h2 className="flex gap-2">
        Dane <FaDatabase size={32} />
      </h2>
      <div className="w-full flex md:flex-row flex-col md:items-center justify-end md:gap-10 gap-3 md:mt-0 mt-6">
        <div className="flex items-center md:justify-center justify-start gap-2 text-[1rem]">
          <select
            className="bg-white hover:bg-slate-400 shadow-xl rounded-lg p-2 hover:scale-110 scale-transition"
            onChange={(e) => changeFilteredDataRowsLimit(e)}
            value={rowLimit}
            name="rowLimit"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
          <p>Liczba wyświetleń</p>
        </div>
        <input
          type="text"
          placeholder="Wyszukaj"
          onChange={searchTableRecord}
          name="search"
        />
        <button
          className="button bg-custom-blue text-white hover:bg-custom-blue-light"
          onClick={getAllFilters}
        >
          Pokaż
        </button>
      </div>
    </div>
  );
};

export default TableInteractionFields;

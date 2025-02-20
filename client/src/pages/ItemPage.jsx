import { useState, useEffect } from "react";
import useFilters from "../hooks/useFilters";
import FilterSection from "../components/FilterSection";
import DataTable from "../components/DataTable";
import TableInteractionFields from "../components/TableInteractionFields";
import Pagination from "../components/Pagination";
import axios from "axios";
import SelectColumns from "../components/SelectColumns";
import { ColumnsProvider } from "../context/ColumnsContext";
import { Link, useParams } from "react-router";
import { MdAddToPhotos } from "react-icons/md";

const AlarmPage = () => {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const { tableName } = useParams();

  const {
    objectFilters,
    setObjectFilters,
    setFilteredData,
    paginatedData,
    rowLimit,
    getAllFilters,
    changeFilteredDataRowsLimit,
    currentPage,
    setCurrentPage,
    totalPages,
    searchTableRecord,
    handleDateFilter,
    appropriateDate,
  } = useFilters(`${BACKEND_URL}/api/${tableName}/table-records`, tableName);

  const [objectColumns, setObjectColumns] = useState([]);

  useEffect(() => {
    const getColumns = async () => {
      const response = await axios.get(
        `${BACKEND_URL}/api/${tableName}/columns`
      );
      setObjectColumns(response.data);
    };

    getColumns();
  }, [tableName]);

  const renderPageNumbers = () => {
    if (totalPages <= 1) return null;

    let pageNumbers = [];
    const startPage = Math.max(1, currentPage - 3);
    const endPage = Math.min(totalPages, currentPage + 3);

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`px-3 py-1 m-1 rounded-full  ${
            i === currentPage ? "bg-custom-blue text-white" : "bg-gray-200"
          }`}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="w-full flex flex-col items-start md:p-14 p-3">
      <div className="w-full flex justify-between items-center mb-14">
        <h2 className="text-2xl font-bold text-custom-blue">{tableName}</h2>
        <Link to={`/${tableName}/add`}>
          <button className="button bg-custom-blue text-white flex items-center gap-2 hover:bg-custom-blue-light">
            Add {tableName} <MdAddToPhotos />
          </button>
        </Link>
      </div>

      <FilterSection
        objectFilters={objectFilters}
        setObjectFilters={setObjectFilters}
        objectColumns={objectColumns}
        tableName={tableName}
        handleDateFilter={handleDateFilter}
        appropriateDate={appropriateDate}
      />

      <ColumnsProvider tableName={tableName}>
        <SelectColumns />

        <TableInteractionFields
          getAllFilters={getAllFilters}
          objectFilters={objectFilters}
          setObjectFilters={setObjectFilters}
          rowLimit={rowLimit}
          changeFilteredDataRowsLimit={changeFilteredDataRowsLimit}
          searchTableRecord={searchTableRecord}
        />

        <DataTable
          filteredData={paginatedData}
          setFilteredData={setFilteredData}
          tableName={tableName}
        />
      </ColumnsProvider>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        changePage={setCurrentPage}
        renderPageNumbers={renderPageNumbers}
      />
    </div>
  );
};

export default AlarmPage;

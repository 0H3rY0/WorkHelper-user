import { useState, useEffect } from "react";
import axios from "axios";

const useFilters = (get_url, tableName) => {
  const [objectFilters, setObjectFilters] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [paginatedData, setPaginatedData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [rowLimit, setRowLimit] = useState(5);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [isSearching, setIsSearching] = useState(false);

  const [appropriateDate, setApproprieteDate] = useState("current");

  const handleDateFilter = (e) => {
    setApproprieteDate(e.target.value);
  };

  const getAllFilters = async () => {
    try {
      const filters = objectFilters.length
        ? objectFilters.reduce((acc, item) => ({ ...acc, ...item.name }), {})
        : {};

      const response = await axios.post(`${get_url}`, { filters });

      const responseWithAppropriateDate = response.data.filter((item) => {
        if (appropriateDate === "current") {
          return !item.dataDO;
        } else if (appropriateDate === "removed") {
          return item.dataDO;
        }
        return true;
      });

      setOriginalData(responseWithAppropriateDate);
      setFilteredData(responseWithAppropriateDate);
      setIsSearching(false);
      setCurrentPage(1);
    } catch (error) {
      console.error("Error during downloading data:", error);
    }
  };

  useEffect(() => {
    setObjectFilters([]);
    setOriginalData([]);
    setFilteredData([]);
    setIsSearching(false);
    setCurrentPage(1);
  }, [tableName]);

  const changeFilteredDataRowsLimit = (e) => {
    const limit = Number(e.target.value);
    setRowLimit(limit);
    setCurrentPage(1);
  };

  const searchTableRecord = (e) => {
    const searchValue = e.target.value.toLowerCase().trim();

    if (!searchValue) {
      setFilteredData(originalData);
      setIsSearching(false);
      setCurrentPage(1);
      return;
    }

    setIsSearching(true);

    const newData = originalData.filter((item) =>
      Object.values(item).some((val) =>
        String(val).toLowerCase().includes(searchValue)
      )
    );

    setFilteredData(newData);
    setCurrentPage(1);
  };

  useEffect(() => {
    const dataSource = isSearching ? filteredData : originalData;
    setTotalPages(Math.max(1, Math.ceil(dataSource.length / rowLimit)));
  }, [originalData, filteredData, rowLimit, isSearching]);

  useEffect(() => {
    const dataSource = filteredData;
    const startIndex = (currentPage - 1) * rowLimit;
    const endIndex = startIndex + rowLimit;

    const paginatedData = dataSource.slice(startIndex, endIndex);
    setPaginatedData(paginatedData);
  }, [filteredData, rowLimit, currentPage]);

  return {
    objectFilters,
    setObjectFilters,
    paginatedData,
    setFilteredData,
    originalData,
    setOriginalData,
    rowLimit,
    getAllFilters,
    changeFilteredDataRowsLimit,
    currentPage,
    setCurrentPage,
    totalPages,
    searchTableRecord,
    handleDateFilter,
    appropriateDate,
  };
};

export default useFilters;

import { useState } from "react";
import { useNavigate } from "react-router";
import TableHeader from "./ui/TableHeader";
import TableRow from "./ui/TableRow";
import { useColumnsContext } from "../context/ColumnsContext";

const DataTable = ({ setFilteredData, filteredData, tableName }) => {
  const navigate = useNavigate();
  const [sortConfig, setSortConfig] = useState({
    column: null,
    direction: "asc",
  });

  const { columns } = useColumnsContext();

  const sortDataByChoosenRecord = (chosenColumn) => {
    setSortConfig((prevSortConfig) => {
      const newDirection =
        prevSortConfig.column === chosenColumn &&
        prevSortConfig.direction === "asc"
          ? "desc"
          : "asc";

      return {
        column: chosenColumn,
        direction: newDirection,
      };
    });

    const sortedData = [...filteredData].sort((a, b) => {
      return sortConfig.direction === "asc"
        ? a[chosenColumn] > b[chosenColumn]
          ? 1
          : -1
        : a[chosenColumn] < b[chosenColumn]
        ? 1
        : -1;
    });

    setFilteredData(sortedData);
  };

  return (
    <table className="table mt-7">
      {filteredData.length > 0 ? (
        <TableHeader
          objectColumns={columns}
          sortConfig={sortConfig}
          onSort={sortDataByChoosenRecord}
        />
      ) : null}

      <tbody>
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <TableRow
              key={item.id}
              item={item}
              objectColumns={columns}
              onRowClick={(id) => navigate(`/${tableName}/${id}`)}
            />
          ))
        ) : (
          <tr className="sm:text-center no-results">
            <td colSpan="100%">No results</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default DataTable;

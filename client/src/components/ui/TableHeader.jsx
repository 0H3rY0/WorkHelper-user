import SortIcon from "./SortIcon";

const TableHeader = ({ objectColumns, sortConfig, onSort }) => {
  return (
    <thead>
      <tr>
        {objectColumns.map((col) => (
          <th key={col}>
            <div className="flex items-center gap-1">
              <p>{col}</p>
              <SortIcon
                isActive={sortConfig.column === col}
                direction={sortConfig.direction}
                onClick={() => onSort(col)}
              />
            </div>
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;

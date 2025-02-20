const TableRow = ({ item, objectColumns, onRowClick }) => {
  return (
    <tr onClick={() => onRowClick(item.id)}>
      {objectColumns.map((col, index) => (
        <td key={index} data-label={col}>
          {item[col]}
        </td>
      ))}
    </tr>
  );
};

export default TableRow;

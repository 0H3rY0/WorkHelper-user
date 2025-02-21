import { useParams, Link } from "react-router-dom";
import { GrOverview } from "react-icons/gr";
import { IoMdArrowRoundBack } from "react-icons/io";
import ItemDetails from "../components/ItemDetails";
// import DeleteModal from "../components/modals/DeleteModal";
// import useDeleteItem from "../hooks/useDeleteItem";
import { getFieldConfig } from "../utils/fieldConfig";

const SingleItemPage = () => {
  const { tableName, id } = useParams();
  // const { handleDeleteItem, date, setDate } = useDeleteItem(tableName, id);
  const fieldConfig = getFieldConfig(tableName);

  return (
    <div className="w-full flex flex-col items-start md:p-14 p-3">
      <div className="w-full flex items-center justify-between mb-10">
        <h2 className="h2 flex items-center gap-2 text-xl md:text-2xl">
          Przegląd {tableName} <GrOverview size={32} />
        </h2>
        <Link to={`/${tableName}`}>
          <button className="button bg-custom-blue text-white flex items-center gap-2 hover:bg-custom-blue-light">
            <IoMdArrowRoundBack /> Wróć
          </button>
        </Link>
      </div>

      <ItemDetails
        tableName={tableName}
        itemId={id}
        fieldConfig={fieldConfig}
      />

      {/* <DeleteModal
        text={`Czy jesteś pewny, że chcesz usunąć ten ${tableName} z datą:`}
        date={date}
        func={handleDeleteItem}
        func2={setDate}
      /> */}
    </div>
  );
};

export default SingleItemPage;

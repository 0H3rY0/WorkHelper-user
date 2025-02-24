import { useParams, Link } from "react-router-dom";
import { GrOverview } from "react-icons/gr";
import { IoMdArrowRoundBack } from "react-icons/io";
import ItemDetails from "../components/ItemDetails";
import { getFieldConfig } from "../utils/fieldConfig";
import { useEffect, useState } from "react";
import { usePermission } from "../store/usePermission";
import PermissionDenied from "../components/ui/PermissionDenied";

const SingleItemPage = () => {
  const { tableName, id } = useParams();
  const fieldConfig = getFieldConfig(tableName);

  const { permission } = usePermission();
  const [tablePerrmision, setTablePerrmision] = useState({});

  useEffect(() => {
    setTablePerrmision(permission[tableName]);
  }, [permission, tableName]);

  if (!tablePerrmision.edytowanie) {
    return <PermissionDenied />;
  }

  return (
    <div className="w-full flex flex-col items-start md:p-14 p-3">
      <div className="w-full flex items-center justify-between mb-10">
        <h2 className="h2 flex items-center gap-2 text-xl md:text-2xl">
          Przegląd {tableName} <GrOverview size={32} />
        </h2>
        <Link to={`/selected/${tableName}`}>
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
    </div>
  );
};

export default SingleItemPage;

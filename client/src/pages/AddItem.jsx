import { useState, useEffect } from "react";
import { IoMdAdd } from "react-icons/io";
import AddDeviceForm from "../components/AddDeviceForm";
import useAddDeviceForm from "../hooks/useAddDeviceForm";
import { useNavigate, useParams } from "react-router";
import { IoMdArrowRoundBack } from "react-icons/io";
import { usePermission } from "../store/usePermission";
import { getItemAddFields } from "../utils/addFieldConfig";
import { initialDeviceStates } from "../utils/initialStates";

const AddLaptopPage = () => {
  const { tableName } = useParams();
  const { permission } = usePermission();
  const navigate = useNavigate();

  const itemFields = getItemAddFields(tableName);
  const initialState = initialDeviceStates[tableName] || {};
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const [objectId, setObjectId] = useState(null);

  useEffect(() => {
    console.log(permission);
    if (permission.objectId) {
      setObjectId(permission.objectId);
    }
  }, [permission]);

  const { formState, handleChange, handleSubmit, error } = useAddDeviceForm(
    initialState,
    `${BACKEND_URL}/api/item/add/${tableName}`,
    objectId
  );

  if (!objectId) {
    return (
      <div className="w-full p-14 flex flex-col items-start justify-start">
        <h2 className="text-xl md:text-2xl font-semibold">
          Ładowanie danych...
        </h2>
      </div>
    );
  }

  return (
    <div className="w-full p-14 flex flex-col items-start justify-start">
      <div className="w-full">
        <div className="flex justify-between items-center mb-10">
          <h2 className="h2 flex items-center gap-2 text-xl md:text-2xl">
            Dodaj {tableName} <IoMdAdd size={32} />
          </h2>
          <button
            className="button bg-custom-blue hover:bg-custom-blue-light text-white flex gap-2 items-center justify-center"
            onClick={() => navigate(`/selected/${tableName}`)}
          >
            <IoMdArrowRoundBack /> Wróć
          </button>
        </div>
        <AddDeviceForm
          handleSubmitForm={handleSubmit}
          fields={itemFields}
          onInputChange={handleChange}
          DeviceState={formState}
        />
        <p className="text-[1rem] text-red-400 mt-5 font-semibold">
          {error ? error : null}
        </p>
      </div>
    </div>
  );
};

export default AddLaptopPage;

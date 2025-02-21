import { useRef } from "react";
import useItemData from "../hooks/useItemData";
import useEditItem from "../hooks/useEditItem";
import CheckAgreementModal from "../components/modals/CheckAgreementModal";

const ItemDetails = ({ tableName, itemId, fieldConfig }) => {
  const { itemData, setItemData } = useItemData(tableName, itemId);
  const { editMode, setEditMode, handleEditField } = useEditItem(
    tableName,
    itemId,
    itemData,
    setItemData
  );
  const inputRefs = useRef({});

  const handleCheckItemState = (e) => {
    const name = e.currentTarget.dataset.name;
    setEditMode(name);

    if (inputRefs.current[name]) {
      inputRefs.current[name].focus();
      const length = inputRefs.current[name].value.length;
      inputRefs.current[name].setSelectionRange(length, length);
    }
  };

  const handleChangeItemState = (e) => {
    setItemData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <ul className="w-full flex flex-col md:gap-6 gap-8">
      {fieldConfig.map((field) => (
        <li
          key={field.name}
          className="w-full flex flex-col items-start justify-center"
        >
          <label className="text-2xl text-dark-gray font-bold">
            {field.label}:
          </label>
          <div className="w-full flex items-center justify-between text-xl">
            <input
              name={field.name}
              defaultValue={
                field.type === "date" && itemData[field.name]
                  ? new Date(itemData[field.name]).toISOString().split("T")[0]
                  : itemData[field.name] || ""
              }
              className="w-full border-none bg-transparent p-0 m-0 text-inherit outline-none focus:outline-none focus:ring-0 
    focus:border-none focus:shadow-none appearance-none min-h-0 text-lg"
              ref={(el) => (inputRefs.current[field.name] = el)}
              readOnly={editMode !== field.name}
              onChange={handleChangeItemState}
            />
            <div
              data-name={field.name}
              className="underline cursor-pointer flex gap-5 underline-offset-4"
              onClick={handleCheckItemState}
            >
              {editMode === field.name ? (
                <>
                  <CheckAgreementModal
                    text={`Czy na pewno edytować ${field.label}?`}
                    func={handleEditField}
                    btnText={"Edit"}
                  >
                    <p className="hover:scale-125 scale-transition hover:text-custom-blue underline-offset-4">
                      Save
                    </p>
                  </CheckAgreementModal>
                  <p
                    className="hover:scale-125 scale-transition hover:text-custom-blue underline-offset-4"
                    onClick={(e) => {
                      e.stopPropagation();
                      setEditMode(null);
                    }}
                  >
                    Cancel
                  </p>
                </>
              ) : (
                <p className="hover:scale-125 scale-transition hover:text-custom-blue underline-offset-4">
                  Edit
                </p>
              )}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ItemDetails;

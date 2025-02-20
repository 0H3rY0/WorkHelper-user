import { MdDeleteForever } from "react-icons/md";

const RemoveFilterButton = ({ onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="button text-white bg-custom-gray md:w-1/12 md:min-w-20 w-1/2 flex items-center justify-center"
    >
      <MdDeleteForever size={32} />
    </button>
  );
};

export default RemoveFilterButton;

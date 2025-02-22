import { FaSortAlphaUp, FaSortAlphaDown, FaSort } from "react-icons/fa";

const SortIcon = ({ isActive, direction, onClick }) => {
  return (
    <div onClick={onClick} className="cursor-pointer">
      {isActive ? (
        direction === "asc" ? (
          <FaSortAlphaUp
            className="text-slate-400 hover:text-slate-500 hover:scale-110 scale-transition"
            size={18}
          />
        ) : (
          <FaSortAlphaDown
            className="text-slate-400 hover:text-slate-500 hover:scale-110 scale-transition"
            size={18}
          />
        )
      ) : (
        <FaSort
          className="text-slate-400 hover:text-slate-500 hover:scale-110 scale-transition"
          size={18}
        />
      )}
    </div>
  );
};

export default SortIcon;

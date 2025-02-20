import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Pagination = ({
  currentPage,
  totalPages,
  changePage,
  renderPageNumbers,
}) => {
  return (
    // totalPages > 1 && (
    <div className="w-full flex justify-center items-center bg-dark-gray p-2 min-h-12">
      {currentPage > 1 && (
        <button
          onClick={() => changePage(currentPage - 1)}
          className="px-4 py-2 rounded-full bg-gray-300 hover:bg-gray-400"
        >
          <FaChevronLeft />
        </button>
      )}
      {renderPageNumbers()}
      {currentPage < totalPages && (
        <button
          onClick={() => changePage(currentPage + 1)}
          className="px-4 py-2 rounded-full bg-gray-300 hover:bg-gray-400"
        >
          <FaChevronRight />
        </button>
      )}
    </div>
  );
  // );
};

export default Pagination;

import { Link } from "react-router";

const BackButton = ({ path }) => {
  return (
    <Link to={`${path}`}>
      <button className="button bg-custom-blue text-white flex items-center gap-2 hover:bg-custom-blue-light">
        Wróć
      </button>
    </Link>
  );
};

export default BackButton;

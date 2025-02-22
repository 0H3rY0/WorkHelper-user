import { Link } from "react-router";

const MakeRaport = () => {
  return (
    <div className="w-full flex flex-col items-start md:p-14 p-3">
      <div className="w-full flex justify-between items-center mb-14">
        <h2 className="text-2xl font-bold text-custom-blue">Zrób zgłoszenie</h2>
        <Link to={`/selected`}>
          <button className="button bg-custom-blue text-white flex items-center gap-2 hover:bg-custom-blue-light">
            Wróć
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MakeRaport;

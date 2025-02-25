import { formatDate } from "../../utils/functions/formatData";
import { useNavigate } from "react-router";

const Ticket = ({ item, tableName }) => {
  const navigate = useNavigate();

  return (
    <li
      className="w-full bg-custom-blue-light text-white p-3 md:p-5 
      grid grid-cols-6 md:grid-cols-8 gap-2 md:gap-5 
      hover:scale-105 scale-transition cursor-pointer 
      text-center rounded-sm"
      onClick={() => navigate(`/selected/my-raports/${item.id}`)}
    >
      <h2 className="text-sm md:text-base font-semibold col-span-2 text-start truncate">
        {item.tytul}
      </h2>
      <p className="col-span-2 text-start text-sm md:text-base truncate">{`#${item.id}/${tableName}`}</p>
      <p className="text-center text-sm md:text-base">{item.status}</p>
      <p className="text-center text-sm md:text-base">{item.priorytet}</p>

      <p className="text-end text-sm md:hidden whitespace-nowrap">
        {formatDate(item.data)}, {item.godzina}
      </p>

      <p className="hidden md:block text-end">{formatDate(item.data)}</p>
      <p className="hidden md:block text-end">{item.godzina}</p>
    </li>
  );
};

export default Ticket;

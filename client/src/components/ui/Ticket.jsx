import { formatDate } from "../../utils/functions/formatData";
import { useNavigate } from "react-router";

const Ticket = ({ item, tableName }) => {
  const navigate = useNavigate();

  return (
    <li
      className="w-full bg-custom-blue-light text-white p-5 grid 
    grid-cols-8 gap-5 hover:scale-105 scale-transition cursor-pointer 
    text-center rounded-sm"
      onClick={() => navigate(`/selected/my-raports/${item.id}`)}
    >
      <h2 className="text-xl font-semibold col-span-2 text-start">
        {item.tytul}
      </h2>
      <p className="col-span-2 text-start">{`#${item.id}/${tableName}`}</p>
      <p className="text-center">{item.status}</p>
      <p className="text-center">{item.priorytet}</p>
      <p className="text-end">{formatDate(item.data)}</p>
      <p className="text-end">{item.godzina}</p>
    </li>
  );
};

export default Ticket;

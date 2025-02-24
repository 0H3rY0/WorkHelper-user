import { formatDate } from "../../utils/functions/formatData";

const Message = ({ item }) => {
  const isClient = item.id_klienta !== null;

  return (
    <li
      className={`flex flex-col relative min-w-72 max-w-lg p-3 rounded-lg text-white ${
        isClient ? "bg-custom-blue-light self-start" : "bg-gray-700 self-end"
      }`}
    >
      <div className="flex justify-between text-lg w-full p-2">
        <span className="font-semibold">{isClient ? "Ty: " : "Admin: "}</span>
        <div className="flex gap-3 text-sm text-gray-300">
          <p>{formatDate(item.data) || "Data"}</p>
          <p>{item.godzina || "Godzina"}</p>
        </div>
      </div>
      <hr className="border-gray-500" />
      <div className="p-2">{item.tresc || "Brak treści"}</div>
    </li>
  );
};

export default Message;

import { useParams } from "react-router";
import BackButton from "../components/ui/BackButton";
import MessageList from "../components/MessageList";

const SingleRaportPage = () => {
  const { ticketId } = useParams();

  return (
    <div className="w-full flex flex-col items-start md:p-14 p-3">
      <div className="w-full flex justify-between items-center mb-14">
        <h2 className="text-2xl font-bold text-custom-blue">
          Zgloszenie ID {ticketId}
        </h2>
        <BackButton path="/selected/my-raports" />
      </div>
      <MessageList />
    </div>
  );
};

export default SingleRaportPage;

import { useParams } from "react-router";
import BackButton from "../components/ui/BackButton";
import MessageList from "../components/MessageList";
import SendMessage from "../components/SendMessage";
import { useState } from "react";
import SendButton from "../components/ui/SendButton";

const SingleRaportPage = () => {
  const { ticketId } = useParams();

  const today = new Date();

  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, "0");

  const tableName = `ticket${month}${year}`;

  const [isSendMessageFormOpen, setIsSendMessageFormOpen] = useState(false);
  const [isMessageSend, setIsMessageSend] = useState(false);

  return (
    <div className="w-full flex flex-col items-start md:p-14 p-3">
      <div className="w-full flex justify-between md:items-center items-start mb-14 md:flex-row flex-col gap-3">
        <div className="w-full flex justify-between items-center">
          <h2 className=" items-center md:text-2xl text-xl font-bold text-custom-blue">
            Zgloszenie &nbsp; #{`${ticketId}/${tableName}`}
          </h2>
          <BackButton path="/selected/my-raports" />
        </div>
        <div className="flex md:items-center items-start gap-3 md:flex-row flex-col text-nowrap">
          <SendButton
            isSendMessageFormOpen={isSendMessageFormOpen}
            setIsSendMessageFormOpen={setIsSendMessageFormOpen}
          />
        </div>
      </div>
      {isSendMessageFormOpen && (
        <SendMessage
          ticketId={ticketId}
          setIsMessageSend={setIsMessageSend}
          setIsSendMessageFormOpen={setIsSendMessageFormOpen}
        />
      )}
      <MessageList ticketId={ticketId} isMessageSend={isMessageSend} />
    </div>
  );
};

export default SingleRaportPage;

import { useParams } from "react-router";
import BackButton from "../components/ui/BackButton";
import MessageList from "../components/MessageList";
import SendMessage from "../components/SendMessage";
import { useState } from "react";
import SendButton from "../components/ui/SendButton";

const SingleRaportPage = () => {
  const { ticketId } = useParams();

  const [isSendMessageFormOpen, setIsSendMessageFormOpen] = useState(false);
  const [isMessageSend, setIsMessageSend] = useState(false);

  return (
    <div className="w-full flex flex-col items-start md:p-14 p-3">
      <div className="w-full flex justify-between items-center mb-14">
        <h2 className="text-2xl font-bold text-custom-blue">
          Zgloszenie ID {ticketId}
        </h2>
        <div className="flex items-center gap-3">
          <BackButton path="/selected/my-raports" />
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

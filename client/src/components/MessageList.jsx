import axios from "axios";
import { useEffect, useState } from "react";
import Message from "./ui/Message";

const MessageList = ({ ticketId, isMessageSend }) => {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const getAllMessagesByTicketId = async () => {
      try {
        const response = await axios.get(
          `${BACKEND_URL}/api/raport/all-message/ticket/${ticketId}`
        );
        console.log(response);
        const reverseMessages = response.data.messages.slice().reverse();

        setMessages(reverseMessages);
      } catch (error) {
        console.log(error);
      }
    };

    getAllMessagesByTicketId();
  }, [isMessageSend]);

  return (
    <ul className="w-full flex flex-col gap-3 items-start">
      {messages.map((item) => (
        <Message key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default MessageList;

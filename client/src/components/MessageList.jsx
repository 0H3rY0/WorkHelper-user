import axios from "axios";
import { useEffect, useState } from "react";
import Message from "./ui/Message";

const MessageList = ({ ticketId }) => {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const getAllMessagesByTicketId = async () => {
      try {
        const response = await axios.get(
          `${BACKEND_URL}/api/raport/all-message/ticket/${ticketId}`
        );
        console.log(response);
        setMessages(response.data.messages);
      } catch (error) {
        console.log(error);
      }
    };

    getAllMessagesByTicketId();
  }, []);

  return (
    <ul className="w-full flex flex-col gap-3 items-start">
      {messages.map((item) => (
        <Message key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default MessageList;

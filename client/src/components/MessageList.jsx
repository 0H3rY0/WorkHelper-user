import axios from "axios";
import { useEffect, useState } from "react";

const MessageList = () => {
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const getAllMessagesByTicketId = async () => {
      try {
        const response = await axios.get(
          `${BACKEND_URL}/api/raport/all-message/ticket/3`
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
    <ul>
      {messages.map((item) => (
        <li key={item.id}>
          <p>{item.data}</p>
          <p>{item.godzina}</p>
          <p>{item.tresc}</p>
        </li>
      ))}
    </ul>
  );
};

export default MessageList;

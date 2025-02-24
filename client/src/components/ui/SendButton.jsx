const SendButton = ({ isSendMessageFormOpen, setIsSendMessageFormOpen }) => {
  return (
    <button
      className={`button text-white ${
        !isSendMessageFormOpen
          ? "bg-custom-green hover:border-custom-green"
          : "bg-custom-red hover:border-custom-red"
      }`}
      onClick={() => setIsSendMessageFormOpen((prev) => !prev)}
    >
      {isSendMessageFormOpen ? "Anuluj Wysyłanie" : "Napisz Wiadomośc"}
    </button>
  );
};

export default SendButton;

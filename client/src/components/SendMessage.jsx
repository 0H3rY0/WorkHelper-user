import FormTextarea from "./ui/FormTextarea";

const SendMessage = () => {
  return (
    <div className="w-full">
      <form className="w-full mb-5">
        <FormTextarea
          name="tresc"
          //   value={raport.tresc}
          placeholder="Napisz tutaj treść swojego zgłoszenia"
          //   onChange={onInputChange}
          labelText="Treść zgłoszenia"
        />
        <button className="button bg-custom-blue text-white hover:bg-custom-blue-light mt-3 min-w-28">
          Wyśli
        </button>
      </form>
    </div>
  );
};

export default SendMessage;

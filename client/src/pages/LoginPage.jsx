import useLogin from "../hooks/useLogin";

const LoginPage = () => {
  const InitialLoginData = {
    email: "",
    haslo: "",
  };

  const { handleSubmitForm, onInputChange, error } = useLogin(InitialLoginData);

  return (
    <div className="w-full h-screen items-center justify-center flex">
      <form className="flex flex-col gap-5" onSubmit={handleSubmitForm}>
        <div className="flex flex-col">
          <label htmlFor="emial">Adres email: </label>
          <input type="text" id="email" name="email" onChange={onInputChange} />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password">Haslo: </label>
          <input
            id="password"
            type="password"
            name="haslo"
            autoComplete="current-password"
            onChange={onInputChange}
          />
        </div>
        {error && <p>{error}</p>}
        <button type="submit">zaloguj sie</button>
      </form>
    </div>
  );
};

export default LoginPage;

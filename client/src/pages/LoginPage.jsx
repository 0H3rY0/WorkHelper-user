import useLogin from "../hooks/useLogin";

const LoginPage = () => {
  const InitialLoginData = {
    email: "",
    haslo: "",
  };

  const { handleSubmitForm, onInputChange, error } = useLogin(InitialLoginData);

  return (
    <div className="w-full h-screen flex items-center justify-center bg-custom-blue">
      <form
        className="flex flex-col gap-6 bg-custom-gray p-8 rounded-xl shadow-lg w-full max-w-md"
        onSubmit={handleSubmitForm}
      >
        <h2 className="text-white text-2xl font-bold text-center">
          Zaloguj się
        </h2>

        <div className="flex flex-col">
          <label
            htmlFor="email"
            className="text-white mb-2 text-sm font-semibold"
          >
            Adres email:
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className="p-3 rounded-lg bg-dark-gray text-white outline-none border-2 border-transparent focus:border-custom-orange transition-all"
            onChange={onInputChange}
          />
        </div>

        <div className="flex flex-col">
          <label
            htmlFor="password"
            className="text-white mb-2 text-sm font-semibold"
          >
            Hasło:
          </label>
          <input
            id="password"
            type="password"
            name="haslo"
            autoComplete="current-password"
            className="p-3 rounded-lg bg-dark-gray text-white outline-none border-2 border-transparent focus:border-custom-orange transition-all"
            onChange={onInputChange}
          />
        </div>

        {error && (
          <p className="text-custom-red text-sm text-center">{error}</p>
        )}

        <button
          type="submit"
          className="mt-4 bg-gradient-to-r from-custom-orange to-custom-red text-white font-bold p-3 rounded-lg hover:opacity-90 transition-opacity"
        >
          Zaloguj się
        </button>
      </form>
    </div>
  );
};

export default LoginPage;

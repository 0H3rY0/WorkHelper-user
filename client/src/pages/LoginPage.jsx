import { useState } from "react";
import axios from "axios";
import { useAuthStore } from "../store/useAuthStore";

const LoginPage = () => {
  const InitialLoginData = {
    email: "",
    haslo: "",
  };

  const [loginData, setLoginData] = useState(InitialLoginData);
  const [error, setError] = useState("");
  const { setAuthenticated } = useAuthStore();

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const onInputChange = (e) => {
    setError("");
    setLoginData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        `${BACKEND_URL}/api/uzytkownicy/login`,
        loginData
      );

      console.log(response);
      setAuthenticated(response.data.token);
    } catch (error) {
      console.log(error);
      setError(error.response.data.error);
    }
  };

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

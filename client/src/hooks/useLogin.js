import { useState } from "react";
import axios from "axios";
import { useAuthStore } from "../store/useAuthStore";
import { useNavigate } from "react-router";

const useLogin = (InitialLoginData) => {
  const [loginData, setLoginData] = useState(InitialLoginData);
  const [error, setError] = useState("");
  const { setAuthenticated } = useAuthStore();
  const navigate = useNavigate();

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

      setAuthenticated(response.data.token);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.response.data.error);
    }
  };

  return { handleSubmitForm, onInputChange, error };
};

export default useLogin;

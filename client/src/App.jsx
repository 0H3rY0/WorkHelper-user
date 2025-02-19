import Navbar from "./components/layouts/Navbar";
import Header from "./components/layouts/Header";
import MainTemplate from "./templates/MainTemplate";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useState } from "react";
import AuthenticatedApp from "./components/layouts/AuthenticatedApp";
import UnauthenticatedApp from "./components/layouts/UnauthenticatedApp";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <>
      <ToastContainer />
      <BrowserRouter>
        {isAuthenticated ? <AuthenticatedApp /> : <UnauthenticatedApp />}
      </BrowserRouter>
    </>
  );
}

export default App;

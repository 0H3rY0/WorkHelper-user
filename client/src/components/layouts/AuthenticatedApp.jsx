import Navbar from "./Navbar";
import Header from "./Header";
import MainTemplate from "../../templates/MainTemplate";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const AuthenticatedApp = () => {
  return (
    <div>
      <MainTemplate>
        <Header />
        <Navbar />
        <Routes></Routes>
      </MainTemplate>
    </div>
  );
};

export default AuthenticatedApp;

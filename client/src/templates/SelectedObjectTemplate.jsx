import { Routes, Route } from "react-router-dom";
import Navbar from "../components/layouts/Navbar";
import MainTemplate from "./MainTemplate";
import Header from "../components/layouts/Header";

const SelectedObjectTemplate = () => {
  return (
    <>
      <MainTemplate>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/laptopy" />
        </Routes>
      </MainTemplate>
    </>
  );
};

export default SelectedObjectTemplate;

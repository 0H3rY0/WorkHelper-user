import { Routes, Route } from "react-router-dom";
import Navbar from "../components/layouts/Navbar";

const SelectedObjectTemplate = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/laptopy" />
      </Routes>
    </>
  );
};

export default SelectedObjectTemplate;

// SelectedObjectTemplate.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/layouts/Navbar";
import MainTemplate from "./MainTemplate";
import Header from "../components/layouts/Header";

import ItemPage from "../pages/ItemPage";

const SelectedObjectTemplate = () => {
  return (
    <MainTemplate>
      <Header />
      <Navbar />
      <Routes>
        <Route path=":tableName" element={<ItemPage />} />
      </Routes>
    </MainTemplate>
  );
};

export default SelectedObjectTemplate;

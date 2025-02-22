// SelectedObjectTemplate.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/layouts/Navbar";
import MainTemplate from "./MainTemplate";
import Header from "../components/layouts/Header";

import ItemPage from "../pages/ItemPage";
import SingleItemPage from "../pages/SingleItemPage";
import AddItem from "../pages/AddItem";

const SelectedObjectTemplate = () => {
  return (
    <MainTemplate>
      <Header />
      <Navbar />
      <Routes>
        <Route path=":tableName" element={<ItemPage />} />
        <Route path=":tableName/:id" element={<SingleItemPage />} />
        <Route path="add/:tableName" element={<AddItem />} />
      </Routes>
    </MainTemplate>
  );
};

export default SelectedObjectTemplate;

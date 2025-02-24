// SelectedObjectTemplate.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "../components/layouts/Navbar";
import MainTemplate from "./MainTemplate";
import Header from "../components/layouts/Header";

import ItemPage from "../pages/ItemPage";
import SingleItemPage from "../pages/SingleItemPage";
import AddItem from "../pages/AddItem";

import MyRaportsPage from "../pages/MyRaportsPage";
import MakeRaportPage from "../pages/MakeRaportPage";

const SelectedObjectTemplate = () => {
  return (
    <MainTemplate>
      <Header />
      <Navbar />
      <Routes>
        <Route path=":tableName" element={<ItemPage />} />
        <Route path=":tableName/:id" element={<SingleItemPage />} />
        <Route path="add/:tableName" element={<AddItem />} />

        <Route path="make-raport" element={<MakeRaportPage />} />
        <Route path="my-raports" element={<MyRaportsPage />} />
      </Routes>
    </MainTemplate>
  );
};

export default SelectedObjectTemplate;

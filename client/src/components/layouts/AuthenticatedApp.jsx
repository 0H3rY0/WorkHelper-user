import Header from "./Header";
import MainTemplate from "../../templates/MainTemplate";
import ObjectsTemplate from "../../templates/ObjectsTemplate";
import SelectedObjectTemplate from "../../templates/SelectedObjectTemplate";
import { Routes, Route } from "react-router-dom";

const AuthenticatedApp = () => {
  return (
    <div>
      <MainTemplate>
        <Header />
        <Routes>
          <Route path="/" element={<ObjectsTemplate />} />
          <Route path="/obiekty/:id" element={<SelectedObjectTemplate />} />
        </Routes>
      </MainTemplate>
    </div>
  );
};

export default AuthenticatedApp;

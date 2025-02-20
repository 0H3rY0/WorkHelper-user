import Header from "./Header";
// import MainTemplate from "../../templates/MainTemplate";
// import SelectedObjectTemplate from "../../templates/SelectedObjectTemplate";
import { Routes, Route } from "react-router-dom";
import ObjectsPage from "../../pages/ObjectsPage";
import SelectedObjectPage from "../../pages/SelectedObjectPage";
import SelectedObjectTemplate from "../../templates/SelectedObjectTemplate";

const AuthenticatedApp = () => {
  return (
    <>
      {/* <MainTemplate> */}
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<ObjectsPage />} />
        <Route path="/obiekty/:id" element={<SelectedObjectTemplate />} />
      </Routes>
      {/* </MainTemplate> */}
    </>
  );
};

export default AuthenticatedApp;

// AuthenticatedApp.jsx
import { Routes, Route } from "react-router-dom";
import ObjectsPage from "../../pages/ObjectsPage";
import SelectedObjectTemplate from "../../templates/SelectedObjectTemplate";

const AuthenticatedApp = () => {
  return (
    <Routes>
      <Route path="/" element={<ObjectsPage />} />
      <Route path="/selected/*" element={<SelectedObjectTemplate />} />
    </Routes>
  );
};

export default AuthenticatedApp;

import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import AuthenticatedApp from "./components/layouts/AuthenticatedApp";
import UnauthenticatedApp from "./components/layouts/UnauthenticatedApp";
import { useAuthStore } from "./store/useAuthStore";

function App() {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { isAuthenticated, initializeAuth } = useAuthStore();

  useEffect(() => {
    initializeAuth();
  }, []);

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

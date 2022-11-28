import { Route, Routes, BrowserRouter } from "react-router-dom";
import MainPage from "./pages/mainPage/MainPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

import { Route, Routes, BrowserRouter } from "react-router-dom";
import MainPage from "./pages/main/MainPage";
import LoginPage from "./pages/login/LoginPage";
import SignUpPage from "./pages/signUp/SignUpPage";
import ChooseFlowerPage from "./pages/chooseFlower/ChooseFlowerPage";
import MyPage from "./pages/my/MyPage";
import LetterPage from "./pages/letter/LetterPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/chooseFlower" element={<ChooseFlowerPage />} />
        <Route path="/my" element={<MyPage />} />
        <Route path="/letter" element={<LetterPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

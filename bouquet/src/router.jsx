import { Route, Routes, BrowserRouter } from "react-router-dom";
import MainPage from "./pages/main/MainPage";
import LoginPage from "./pages/login/LoginPage";
import SignUpPage from "./pages/signUp/SignUpPage";
import GiveFlowerPage from "./pages/giveFlower/GiveFlowerPage";
import MyPage from "./pages/my/MyPage";

// import MeetingPage from "./pages/meeting/MeetingPage";
// import HomeWorkingPage from "./pages/homeWorking/HomeWorkingPage";
// import HomeApprovalPage from "./pages/homeWorking/HomeApprovalPage";
// import HomeReportPage from "./pages/homeWorking/HomeReportPage";
// import AdminVacationPage from "./pages/Vacation/AdminVacationPage";
// import SignUpPage from "./pages/signUp/SignUpPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/giveFlower" element={<GiveFlowerPage />} />
        <Route path="/my" element={<MyPage />} />

        {/* <Route path="/meeting" element={<MeetingPage />} />
        <Route path="/admin-homeworking" element={<HomeWorkingPage />} />
        <Route path="/homeapproval/:id" element={<HomeApprovalPage />} />
        <Route path="/homereport/:id" element={<HomeReportPage />} />
        <Route path="/admin-vacation" element={<AdminVacationPage />} />
        <Route path="/signUp" element={<SignUpPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

import { Route, Routes, BrowserRouter } from "react-router-dom";
import LoginPage from "./page/LoginPage";
import SignupPage from "./page/SignupPage";
import Header from "./components/Header";
import MainPage from "./page/MainPage";
import WatchingDiaryPage from "./page/WatchingDiaryPage";
import ReviseDiaryPage from "./page/ReviseDiaryPage";
import WritingDiaryPage from "./page/WritingDiaryPage";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/*" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/main/:date" element={<MainPage />} />
        <Route path="/watch_diary/:id" element={<WatchingDiaryPage />} />
        <Route path="/revise_diary/:id" element={<ReviseDiaryPage />} />
        <Route path="/writing_diary" element={<WritingDiaryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

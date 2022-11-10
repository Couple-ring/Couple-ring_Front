import { Route, Routes, BrowserRouter } from 'react-router-dom';
import LoginPage from './page/LoginPage';
import SignupPage from './page/SignupPage';
import Header from './components/Header';
import MainPage from './page/MainPage';
import WatchingDiaryPage from './page/WatchingDiaryPage';

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/*' element={<LoginPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/main' element={<MainPage />} />
        <Route path='/watch_diary' element={<WatchingDiaryPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;
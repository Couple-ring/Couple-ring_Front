import { Route, Routes, BrowserRouter } from 'react-router-dom';
import LoginPage from './page/LoginPage';
import SignupPage from './page/SignupPage';
import Header from './components/Header';

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;
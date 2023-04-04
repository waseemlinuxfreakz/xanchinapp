import { BrowserRouter, Routes, Route } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'swiper/css';
import './App.css';
import './responsive.css';

import LoginPage from './pages/login';
import HomePage from './pages/Home';
import MyWallet from "./pages/MyWallet";
import RestrictedArea from "./pages/RestrictedArea";
import HowToPlay from "./pages/HowtoPlay";



function App() {
  return (
    <div className="App">

      
      <BrowserRouter>
        <Routes>
          <Route>
            <Route index element={<LoginPage/>} />
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/my-wallet" element={<MyWallet />} />
            <Route path="/restricted-area" element={<RestrictedArea />} />
            <Route path="/how-to-play" element={<HowToPlay />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

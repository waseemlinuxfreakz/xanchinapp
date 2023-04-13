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
import Affilate from "./pages/Affilate";
import ContactUs from "./pages/ContactUs";
import FAQ from "./pages/FAQ";
import BigSmall from "./pages/BigSmall";
import GameCardBeat from "./pages/GameCardBeat";
import Bankroll from "./pages/Bankroll";
import PlayCard from "./pages/PlayCard";
import CoinFlip from "./pages/CoinFlip";
import PlayCard2 from "./pages/PlayCard2";
import CoinFlip2 from "./pages/CoinFlip2";
import ClassicDice from "./pages/ClassicDice";
import MiniPoker from "./pages/MiniPoker";
import DailySpin from "./pages/DailySpin";
import ShakeDish from "./pages/ShakeDish";
import Crash from "./pages/Crash";
import Crash2 from "./pages/Crash2";
import Crash3 from "./pages/Crash3";


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
            <Route path="/affilate" element={<Affilate />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/big-small" element={<BigSmall />} />
            <Route path="/game-card" element={<GameCardBeat />} />
            <Route path="/shake-dish" element={<ShakeDish />} />
            <Route path="/crash" element={<Crash />} />
            <Route path="/Crash2" element={<Crash2 />} />
            <Route path="/Crash3" element={<Crash3 />} />
            
            <Route path="/bankroll" element={<Bankroll />} />
            <Route path="/play-card" element={<PlayCard />} />
            <Route path="/play-card-2" element={<PlayCard2 />} />
            <Route path="/coin-flip" element={<CoinFlip />} />
            <Route path="/coin-flip-2" element={<CoinFlip2 />} />
            <Route path="/classic-dice" element={<ClassicDice />} />
            <Route path="/mini-poker" element={<MiniPoker />} />
            <Route path="/daily-spin" element={<DailySpin />} />
            
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;

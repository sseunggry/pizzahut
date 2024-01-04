import {BrowserRouter, Routes, Route} from "react-router-dom";
import {RecoilRoot} from "recoil";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import MyPage from "./pages/MyPage";
import Event from "./pages/Event";
import Detail from "./pages/Detail";
import Address from "./pages/Address";
import EventDetail from "./pages/EventDetail";
import Pickup from "./pages/Pickup";

import "./styles/base/_index.scss";
import { RecoilEnv } from 'recoil';
RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

function App() {
  return (
      <RecoilRoot>
          <BrowserRouter basename={process.env.PUBLIC_URL}>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/menu" element={<Menu />} />
                  <Route path="/mypage" element={<MyPage />} />
                  <Route path="/event" element={<Event />} />
                  <Route path="/event/:id" element={<EventDetail />} />
                  <Route path="/menu/:id" element={<Detail />} />
                  <Route path="/address" element={<Address />} />
                  <Route path="/pickup" element={<Pickup />} />
              </Routes>
          </BrowserRouter>
      </RecoilRoot>
  );
}

export default App;

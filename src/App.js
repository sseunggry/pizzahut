import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {RecoilRoot} from "recoil";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import MyPage from "./pages/MyPage";
import Event from "./pages/Event";
import Detail from "./pages/Detail";
import "./styles/base/_index.scss";

function App() {
  return (
      <RecoilRoot>
          <Router>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/menu" element={<Menu />} />
                  <Route path="/myPage" element={<MyPage />} />
                  <Route path="/event" element={<Event />} />
                  <Route path="/menu/:id" element={<Detail />} />
              </Routes>
          </Router>
      </RecoilRoot>
  );
}

export default App;

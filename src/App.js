import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {RecoilRoot} from "recoil";
import Main from "./pages/Main";
import Menu from "./pages/Menu";
import MyPage from "./pages/MyPage";
import Event from "./pages/Event";
import "./styles/base/_index.scss";

function App() {
  return (
      <RecoilRoot>
          <Router>
              <Routes>
                  <Route path="/" element={<Main />}></Route>
                  <Route path="/menu" element={<Menu />}></Route>
                  <Route path="/myPage" element={<MyPage />}></Route>
                  <Route path="/event" element={<Event />}></Route>
              </Routes>
          </Router>
      </RecoilRoot>
  );
}

export default App;

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {RecoilRoot} from "recoil";
import Main from "./pages/Main";
import Menu from "./pages/Menu";
import "./styles/base/_index.scss";
import "./styles/layout.scss";

function App() {
  return (
      <RecoilRoot>
          <Router>
              <Routes>
                  <Route path="/" element={<Main />}></Route>
                  <Route path="/menu" element={<Menu />}></Route>
              </Routes>
          </Router>
      </RecoilRoot>
  );
}

export default App;

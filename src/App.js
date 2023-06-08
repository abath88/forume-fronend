import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import ContainerStretch from "./components/ContainerStretch/ContainerStretch";
import Sidebar from "./components/Sidebar/Sidebar";
import MainBar from "./components/MainBar/MainBar";
import MainMenu from "./components/MainMenu/MainMenu";
import Home from "./components/Home/Home";
import NoMatch from "./components/NoMatch/NoMatch";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Main>
        <ContainerStretch>
          <Sidebar>
            <MainMenu></MainMenu>
          </Sidebar>
          <MainBar width="60%">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </MainBar>
          <Sidebar>

          </Sidebar>
        </ContainerStretch>
      </Main>
    </>
  );
}

export default App;

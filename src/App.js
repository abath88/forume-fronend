import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import ContainerStretch from "./components/ContainerStretch/ContainerStretch";
import Sidebar from "./components/Sidebar/Sidebar";
import MainBar from "./components/MainBar/MainBar";
import MainMenu from "./components/MainMenu/MainMenu";
import Home from "./components/Home/Home";
import NoMatch from "./components/NoMatch/NoMatch";
import AddPost from "./components/AddPost/AddPost";

import { Routes, Route } from "react-router-dom";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignIn/SignIn";
import PostWithComments from "./components/PostWithComments/PostWithComments";

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
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/addpost" element={<AddPost />} />
              <Route path="/post/:id" element={<PostWithComments />} />
              <Route path="/explore-topics" element={<Home />} />
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

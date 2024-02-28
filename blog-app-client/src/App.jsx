import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Signin from "./pages/Signin";
import SignUp from "./pages/SignUp";
import Header from "./cmponents/Header";
import FooterComp from "./cmponents/FooterComp";
import PrivateRouter from "./cmponents/PrivateRouter";
import PrivateRouteAdmin from "./cmponents/PrivateRouteAdmin";
import CreatePost from "./pages/CreatePost";
import UpdatePost from "./pages/UpdatePost";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route element={<PrivateRouter />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route element={<PrivateRouteAdmin />}>
          <Route path="/create-post" element={<CreatePost />} />
          <Route path='/update-post/:postId' element={<UpdatePost />} />
        </Route>
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
      <FooterComp />
    </BrowserRouter>
  );
};

export default App;

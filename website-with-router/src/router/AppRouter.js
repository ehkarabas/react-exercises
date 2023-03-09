import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Css from "../pages/Css";
import GraphicsDesign from "../pages/GraphicsDesign";
import Home from "../pages/Home";
import Html from "../pages/Html";
import Services from "../pages/Services";
import Error from "../pages/Error";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/html" element={<Html />} />
        <Route path="/css" element={<Css />} />
        <Route path="/graphics-design" element={<GraphicsDesign />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;

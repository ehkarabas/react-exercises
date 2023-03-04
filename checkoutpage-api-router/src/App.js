import Main from "./pages/Main";
import NewProduct from "./pages/NewProduct";
import ProductList from "./pages/ProductList";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import UpdateProduct from "./pages/UpdateProduct";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";

const PageLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

function App() {
  // https://63f88fe25b0e4a127de89fae.mockapi.io/checkout-page

  return (
    <div className="bg-light app">
      <BrowserRouter>
        <Routes>
          <Route element={<PageLayout />}>
            <Route path="/" element={<Main />} />
            <Route path="/new-product" element={<NewProduct />} />
            <Route path="/product-list" element={<ProductList />} />
            <Route path="/about" element={<About />} />
            <Route path="/product-list/:update" element={<UpdateProduct />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

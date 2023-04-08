import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FavoritesPage from "./pages/FavoritesPage";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import { persistor, store } from "./app/store";
import { Flip, ToastContainer } from "react-toastify";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <div className="bg-slate-600 min-h-screen text-center">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/favorites" element={<FavoritesPage />} />
            </Routes>
          </BrowserRouter>
        </PersistGate>
      </Provider>
      <ToastContainer transition={Flip} />
    </div>
  );
}

export default App;

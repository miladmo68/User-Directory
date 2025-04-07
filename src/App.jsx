import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import DetailePage from "./pages/DetailePage";
import FavoritePage from "./pages/FavoritePage";

const App = () => {
  return (
    <Router>
      <div className=" flex flex-col items-center m-auto  bg-gray-200">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/detaile" element={<DetailePage />} />
          <Route path="/favorite" element={<FavoritePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

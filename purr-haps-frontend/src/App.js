import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IntroPage from "./components/IntroPage";
import CharacterSelection from "./components/CharacterSelect/CharacterSelection";
import "./index.css";
import MenuPage from "./components/MenuPage/MenuPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/menuPage" element={<MenuPage />} />
        <Route path="/" element={<IntroPage />} />
        <Route path="/menu1" element={<CharacterSelection />} />
      </Routes>
    </Router>
  );
}

export default App;

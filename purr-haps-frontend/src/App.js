import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import IntroPage from "./components/IntroPage";
import HomePage from "./components/HomePage";
import CharacterSelection from "./components/CharacterSelection";
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<IntroPage />} />
        <Route path="/menu1" element={<CharacterSelection />} />
      </Routes>
    </Router>
  );
}

export default App;

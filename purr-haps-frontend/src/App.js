import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from "react-router-dom";
import IntroPage from "./components/IntroPage";
import CharacterSelection from "./components/CharacterSelect/CharacterSelection";
import MenuPage from "./components/MenuPage/MenuPage";
import BioPage from "./components/BioPage/BioPage";
import ContactPage from "./components/ContactPage/ContactPage";
import "./index.css";

function PageLogger({ pageName }) {
  const location = useLocation();
  React.useEffect(() => {
    console.log(`Navigated to ${pageName}: ${location.pathname}`);
  }, [location, pageName]);
  return null;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <PageLogger pageName="IntroPage" />
              <IntroPage />
            </>
          }
        />
        <Route
          path="/menuPage"
          element={
            <>
              <PageLogger pageName="MenuPage" />
              <MenuPage />
            </>
          }
        />
        <Route
          path="/menu1"
          element={
            <>
              <PageLogger pageName="CharacterSelection" />
              <CharacterSelection />
            </>
          }
        />
        <Route
          path="/bio"
          element={
            <>
              <PageLogger pageName="BioPage" />
              <BioPage />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <PageLogger pageName="ContactPage" />
              <ContactPage />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

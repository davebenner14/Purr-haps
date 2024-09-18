import React, { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import "./index.css";

const IntroPage = lazy(() => import("./components/IntroPage/IntroPage"));
const CharacterSelection = lazy(() =>
  import("./components/CharacterSelect/CharacterSelection")
);
const MenuPage = lazy(() => import("./components/MenuPage/MenuPage"));
const BioPage = lazy(() => import("./components/BioPage/BioPage"));
const ContactPage = lazy(() => import("./components/ContactPage/ContactPage"));

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
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <PageLogger pageName="/IntroPage" />
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
      </Suspense>
    </Router>
  );
}

export default App;

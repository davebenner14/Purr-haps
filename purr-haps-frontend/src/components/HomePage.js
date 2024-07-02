import React from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/images/HomeBackground.jpeg";
import menuSelectionImage from "../assets/images/MenuSelection.png";
import catGuyImage from "../assets/images/CatGuy.png";
import "./HomePageStyles.css";
import "./MenuSelection.css";
import "./CatGuy.css";

const HomePage = () => {
  const navigate = useNavigate();

  const handleButtonClick = (path) => {
    navigate(path);
  };

  return (
    <div className="PageContainer">
      <img
        className="BackgroundImage"
        src={backgroundImage}
        alt="Home Background"
      />
      <div className="MenuSelectionContainer">
        <img
          src={menuSelectionImage}
          alt="Menu Selection Background"
          className="MenuSelectionImage"
        />
        <button
          className="MenuButton MenuButton1"
          onClick={() => handleButtonClick("/menu1")}
        >
          Menu Item 1
        </button>
        <button
          className="MenuButton MenuButton2"
          onClick={() => handleButtonClick("/menu2")}
        >
          Menu Item 2
        </button>
        <button
          className="MenuButton MenuButton3"
          onClick={() => handleButtonClick("/menu3")}
        >
          Menu Item 3
        </button>
      </div>
    </div>
  );
};

export default HomePage;

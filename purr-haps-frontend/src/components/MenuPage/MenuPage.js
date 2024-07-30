import React from "react";
import { useNavigate } from "react-router-dom";

import backgroundImage from "../../assets/MenuPage/Menu Pg Background (1).png";
import menuSignImage from "../../assets/MenuPage/Menu Sign.png";
import signTextImage from "../../assets/MenuPage/Sign Text.png";
import barTableImage from "../../assets/MenuPage/Bar Table.png";
import percImage from "../../assets/MenuPage/Perc (Menu Pg) (1).png";

import "./MenuPage.css";

const MenuPage = () => {
  const navigate = useNavigate();

  const handleButtonClick = (path) => {
    navigate(path);
  };

  return (
    <div className="PageContainer">
      <img
        className="BackgroundImage"
        src={backgroundImage}
        alt="Menu Page Background"
      />
      <img className="PercImage" src={percImage} alt="Perc" />
      <img className="BarTableImage" src={barTableImage} alt="Bar Table" />
      <img className="MenuSignImage" src={menuSignImage} alt="Menu Sign" />
      <img className="SignTextImage" src={signTextImage} alt="Sign Text" />
      <div className="MenuSelectionContainer">
        <button
          className="MenuButton MenuButton1"
          onClick={() => handleButtonClick("/menu1")}
        >
          Character Selection
        </button>
        <button
          className="MenuButton MenuButton2"
          onClick={() => handleButtonClick("/menu2")}
        >
          FAQ
        </button>
        <button
          className="MenuButton MenuButton3"
          onClick={() => handleButtonClick("/menu3")}
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default MenuPage;

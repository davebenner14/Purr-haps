import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import backgroundImage from "../../assets/MenuPage/Menu Pg Background (1).png";
import menuSignImage from "../../assets/MenuAndButtons/Menu Sign.png";
import signTextImage from "../../assets/MenuPage/Sign Text.png";
import barTableImage from "../../assets/MenuPage/Bar Table.png";
import percImage from "../../assets/MenuPage/Perc (Menu Pg) (1).png";

import button1Image from "../../assets/MenuAndButtons/Button 1.png";
import lightUp1Image from "../../assets/MenuAndButtons/Light up 1.png";

import "./MenuPage.css";

const MenuPage = () => {
  const navigate = useNavigate();
  const [hoveredButton, setHoveredButton] = useState(false);

  const handleButtonClick = (path) => {
    navigate(path); // Navigate to the next page
  };

  return (
    <div className="PageContainer MenuPage">
      <img
        className="BackgroundImage"
        src={backgroundImage}
        alt="Menu Page Background"
      />
      <img className="PercImage" src={percImage} alt="Perc" />
      <img className="BarTableImage" src={barTableImage} alt="Bar Table" />
      <img className="MenuSignImage" src={menuSignImage} alt="Menu Sign" />
      <img className="SignTextImage" src={signTextImage} alt="Sign Text" />

      {/* Button 1 */}
      <div className="MenuButtonContainer">
        {/* This is the button image that changes on hover */}
        <img
          className="ButtonImage"
          src={hoveredButton ? lightUp1Image : button1Image}
          alt="Button 1"
        />

        {/* Invisible clickable overlay */}
        <div
          className="ClickableArea"
          onClick={() => handleButtonClick("/menu1")}
          onMouseEnter={() => setHoveredButton(true)} // Set hover state
          onMouseLeave={() => setHoveredButton(false)} // Remove hover state
        />
      </div>
    </div>
  );
};

export default MenuPage;

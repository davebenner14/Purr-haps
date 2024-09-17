import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Import necessary assets
import backgroundImage from "../../assets/MenuPage/Menu Pg Background (1).png";
// import menuSignImage from "../../assets/MenuSign/PH_Sign.png";
import signTextImage from "../../assets/MenuPage/Sign Text.png";
import barTableImage from "../../assets/MenuPage/Bar Table.png";
import percImage from "../../assets/MenuPage/Perc (Menu Pg) (1).png";

// Replace with Button 1 assets
import button1Image from "../../assets/MenuAndButtons/Button 1.png";
import buttonHighlight1Image from "../../assets/MenuAndButtons/Light up 1.png";

import "./MenuPage.css";

const MenuPage = () => {
  const navigate = useNavigate();
  const [hoveredButton, setHoveredButton] = useState(false);

  const handleButtonClick = (path) => {
    navigate(path);
  };

  return (
    <div className="PageContainer MenuPage">
      {/* Background and other assets */}
      <img
        className="BackgroundImage"
        src={backgroundImage}
        alt="Menu Page Background"
      />
      <img className="PercImage" src={percImage} alt="Perc" />
      <img className="BarTableImage" src={barTableImage} alt="Bar Table" />
      <img className="MenuSignImage" src={menuSignImage} alt="Menu Sign" />
      <img className="SignTextImage" src={signTextImage} alt="Sign Text" />

      {/* Button 1 with hover effect */}
      <div
        className="MenuButtonContainer"
        onClick={() => handleButtonClick("/menu1")}
        onMouseEnter={() => setHoveredButton(true)}
        onMouseLeave={() => setHoveredButton(false)}
      >
        <img
          className="ButtonImage"
          src={hoveredButton ? buttonHighlight1Image : button1Image}
          alt="Button 1"
        />
        <p className="MenuText MenuText1">Character Selection</p>
      </div>

      {/* Other buttons commented out for now */}
      {/*
      <div className="MenuButtonContainer" onClick={() => handleButtonClick("/bio")}>
        <img className="ButtonImage" src={buttonImage} alt="Button 2" />
        <p className="MenuText MenuText2">Bio</p>
      </div>
      <div className="MenuButtonContainer" onClick={() => handleButtonClick("/contact")}>
        <img className="ButtonImage" src={buttonImage} alt="Button 3" />
        <p className="MenuText MenuText3">Contact Us</p>
      </div>
      */}
    </div>
  );
};

export default MenuPage;

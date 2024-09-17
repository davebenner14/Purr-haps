import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Import necessary assets
import backgroundImage from "../../assets/MenuPage/Menu Pg Background (1).png";
import signTextImage from "../../assets/MenuPage/Sign Text.png";
import barTableImage from "../../assets/MenuPage/Bar Table.png";
import percImage from "../../assets/MenuPage/Perc (Menu Pg) (1).png";
import menuSignImage from "../../assets/MenuAndButtons/Menu Sign.png"; // New menu sign
import button1Image from "../../assets/MenuAndButtons/Button 1.png"; // New button
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
      <img className="SignTextImage" src={signTextImage} alt="Sign Text" />
      <img className="MenuSignImage" src={menuSignImage} alt="Menu Sign" />

      {/* Button */}
      <div
        className="MenuButtonContainer"
        onMouseEnter={() => setHoveredButton(true)}
        onMouseLeave={() => setHoveredButton(false)}
        onClick={() => handleButtonClick("/menu1")}
      >
        <img
          className="ButtonImage"
          src={hoveredButton ? buttonHighlight1Image : button1Image}
          alt="Button 1"
        />
      </div>
    </div>
  );
};

export default MenuPage;

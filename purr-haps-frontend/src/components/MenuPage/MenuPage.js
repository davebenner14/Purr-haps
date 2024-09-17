import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Restore the other assets
import backgroundImage from "../../assets/MenuPage/Menu Pg Background (1).png";
import menuSignImage from "../../assets/MenuAndButtons/Menu Sign.png";
import signTextImage from "../../assets/MenuPage/Sign Text.png";
import barTableImage from "../../assets/MenuPage/Bar Table.png";
import percImage from "../../assets/MenuPage/Perc (Menu Pg) (1).png";

import button1Image from "../../assets/MenuAndButtons/Button 1.png";
// Commented out buttons 2-4 for now
// import button2Image from "../../assets/MenuAndButtons/Button 2.png";
// import button3Image from "../../assets/MenuAndButtons/Button 3.png";
// import button4Image from "../../assets/MenuAndButtons/Button 4.png";

import lightUp1Image from "../../assets/MenuAndButtons/Light up 1.png";
// import lightUp2Image from "../../assets/MenuAndButtons/Light up 2.png";
// import lightUp3Image from "../../assets/MenuAndButtons/Light up 3.png";
// import lightUp4Image from "../../assets/MenuAndButtons/Light up 4.png";

import "./MenuPage.css";

const MenuPage = () => {
  const navigate = useNavigate();
  const [hoveredButton, setHoveredButton] = useState(false);

  const handleButtonClick = () => {
    navigate("/menu1");
  };

  return (
    <div className="PageContainer MenuPage">
      {/* Restore the background and other assets */}
      <img
        className="BackgroundImage"
        src={backgroundImage}
        alt="Menu Page Background"
      />
      <img className="PercImage" src={percImage} alt="Perc" />
      <img className="BarTableImage" src={barTableImage} alt="Bar Table" />
      <img className="MenuSignImage" src={menuSignImage} alt="Menu Sign" />
      <img className="SignTextImage" src={signTextImage} alt="Sign Text" />

      {/* Only focusing on Button 1 */}
      <div
        className="MenuButtonContainer"
        onClick={handleButtonClick}
        onMouseEnter={() => setHoveredButton(true)}
        onMouseLeave={() => setHoveredButton(false)}
      >
        <img
          className="ButtonImage"
          src={hoveredButton ? lightUp1Image : button1Image}
          alt="Button 1"
        />
      </div>
    </div>
  );
};

export default MenuPage;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Commented out assets for buttons 2-4
// import backgroundImage from "../../assets/MenuPage/Menu Pg Background (1).png";
// import menuSignImage from "../../assets/MenuAndButtons/Menu Sign.png";
// import signTextImage from "../../assets/MenuPage/Sign Text.png";
// import barTableImage from "../../assets/MenuPage/Bar Table.png";
// import percImage from "../../assets/MenuPage/Perc (Menu Pg) (1).png";

import button1Image from "../../assets/MenuAndButtons/Button 1.png";
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
  const [hoveredButton, setHoveredButton] = useState(null);

  const handleButtonClick = () => {
    navigate("/menu1");
  };

  return (
    <div className="PageContainer MenuPage">
      {/* Only focusing on Button 1 */}
      <div
        className="MenuButtonContainer"
        onClick={handleButtonClick}
        onMouseEnter={() => setHoveredButton(1)}
        onMouseLeave={() => setHoveredButton(null)}
      >
        <img
          className="ButtonImage"
          src={hoveredButton === 1 ? lightUp1Image : button1Image}
          alt="Button 1"
        />
      </div>

      {/* Commented out buttons 2-4 */}
      {/*
      <div
        className="MenuButtonContainer"
        onClick={() => handleButtonClick("/bio")}
        onMouseEnter={() => setHoveredButton(2)}
        onMouseLeave={() => setHoveredButton(null)}
      >
        <img
          className="ButtonImage"
          src={hoveredButton === 2 ? lightUp2Image : button2Image}
          alt="Button 2"
        />
      </div>

      <div
        className="MenuButtonContainer"
        onClick={() => handleButtonClick("/contact")}
        onMouseEnter={() => setHoveredButton(3)}
        onMouseLeave={() => setHoveredButton(null)}
      >
        <img
          className="ButtonImage"
          src={hoveredButton === 3 ? lightUp3Image : button3Image}
          alt="Button 3"
        />
      </div>

      <div
        className="MenuButtonContainer"
        onClick={() => handleButtonClick("/settings")}
        onMouseEnter={() => setHoveredButton(4)}
        onMouseLeave={() => setHoveredButton(null)}
      >
        <img
          className="ButtonImage"
          src={hoveredButton === 4 ? lightUp4Image : button4Image}
          alt="Button 4"
        />
      </div>
      */}
    </div>
  );
};

export default MenuPage;

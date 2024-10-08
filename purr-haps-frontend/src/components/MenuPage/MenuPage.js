import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import backgroundImage from "../../assets/MenuPage/Menu Pg Background (1).png";
import menuSignImage from "../../assets/MenuAndButtons/Menu Sign.png";
import signTextImage from "../../assets/MenuPage/Sign Text.png";
import barTableImage from "../../assets/MenuPage/Bar Table.png";
import percImage from "../../assets/MenuPage/Perc (Menu Pg) (1).png";

import button1Image from "../../assets/MenuAndButtons/Button 1.png";
import lightUp1Image from "../../assets/MenuAndButtons/Light up 1.png";
import button2Image from "../../assets/MenuAndButtons/Button 2.png";
import lightUp2Image from "../../assets/MenuAndButtons/Light up 2.png";
import button3Image from "../../assets/MenuAndButtons/Button 3.png";
import lightUp3Image from "../../assets/MenuAndButtons/Light up 3.png";
import button4Image from "../../assets/MenuAndButtons/Button 4.png";
import lightUp4Image from "../../assets/MenuAndButtons/Light up 4.png";

import "./MenuPage.css";

const MenuPage = () => {
  const navigate = useNavigate();
  const [hoveredButton, setHoveredButton] = useState(null);

  // Preload highlighted images on component mount
  useEffect(() => {
    const preloadImages = [
      lightUp1Image,
      lightUp2Image,
      lightUp3Image,
      lightUp4Image
    ];
    preloadImages.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, []);

  const handleButtonClick = (path) => {
    navigate(path);
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
        <img
          className="ButtonImage"
          src={hoveredButton === 1 ? lightUp1Image : button1Image}
          alt="Button 1"
        />
        <div
          className="ClickableArea"
          onClick={() => handleButtonClick("/menu1")}
          onMouseEnter={() => setHoveredButton(1)}
          onMouseLeave={() => setHoveredButton(null)}
        />
      </div>

      {/* Button 2 */}
      <div className="MenuButtonContainer">
        <img
          className="ButtonImage"
          src={hoveredButton === 2 ? lightUp2Image : button2Image}
          alt="Button 2"
        />
        <div
          className="ClickableArea2"
          onClick={() => handleButtonClick("/bio")}
          onMouseEnter={() => setHoveredButton(2)}
          onMouseLeave={() => setHoveredButton(null)}
        />
      </div>

      {/* Button 3 */}
      <div className="MenuButtonContainer">
        <img
          className="ButtonImage"
          src={hoveredButton === 3 ? lightUp3Image : button3Image}
          alt="Button 3"
        />
        <div
          className="ClickableArea3"
          onClick={() => handleButtonClick("/contact")}
          onMouseEnter={() => setHoveredButton(3)}
          onMouseLeave={() => setHoveredButton(null)}
        />
      </div>

      {/* Button 4 */}
      <div className="MenuButtonContainer">
        <img
          className="ButtonImage"
          src={hoveredButton === 4 ? lightUp4Image : button4Image}
          alt="Button 4"
        />
        <div
          className="ClickableArea4"
          onClick={() => handleButtonClick("/settings")}
          onMouseEnter={() => setHoveredButton(4)}
          onMouseLeave={() => setHoveredButton(null)}
        />
      </div>
    </div>
  );
};

export default MenuPage;

import React from "react";
import { useNavigate } from "react-router-dom";

import backgroundImage from "../../assets/MenuPage/Menu Pg Background (1).png";
import menuSignImage from "../../assets/MenuPage/Menu Sign.png";
import signTextImage from "../../assets/MenuPage/Sign Text.png";
import barTableImage from "../../assets/MenuPage/Bar Table.png";
import percImage from "../../assets/MenuPage/Perc (Menu Pg) (1).png";
import buttonImage from "../../assets/MenuPage/Button.png";
import buttonImage2 from "../../assets/MenuPage/Button2.png";
import buttonImage3 from "../../assets/MenuPage/Button3.png";

import "./MenuPage.css";

const MenuPage = () => {
  const navigate = useNavigate();

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
      <img className="ButtonImage" src={buttonImage} alt="Button" />
      <img className="ButtonImage2" src={buttonImage2} alt="Button 2" />
      <img className="ButtonImage3" src={buttonImage3} alt="Button 3" />
      <div className="MenuTextContainer">
        <div
          className="MenuButtonContainer"
          onClick={() => handleButtonClick("/menu1")}
        >
          <p className="MenuText MenuText1">Character Selection</p>
        </div>
        <div
          className="MenuButtonContainer"
          onClick={() => handleButtonClick("/menu2")}
        >
          <p className="MenuText MenuText2">FAQ</p>
        </div>
        <div
          className="MenuButtonContainer"
          onClick={() => handleButtonClick("/menu3")}
        >
          <p className="MenuText MenuText3">Contact Us</p>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;

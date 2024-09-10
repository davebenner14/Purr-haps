import React from "react";
import { useNavigate } from "react-router-dom";

import backgroundImage from "../../assets/MenuPage/Menu Pg Background (1).png";
import menuSignImage from "../../assets/MenuSign/PH_Sign.png"; // Updated path
import signTextImage from "../../assets/MenuPage/Sign Text.png";
import barTableImage from "../../assets/MenuPage/Bar Table.png";
import percImage from "../../assets/MenuPage/Perc (Menu Pg) (1).png";
import buttonImage from "../../assets/MenuSign/PH_SignButtons.png"; // Updated path for normal button state
import buttonHighlightImage from "../../assets/MenuSign/PH_SignButtons_Highlight.png"; // Path for hover state

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

      {/* Each menu button with hover effect */}
      <div
        className="MenuButtonContainer"
        onClick={() => handleButtonClick("/menu1")}
      >
        <img className="ButtonImage" src={buttonImage} alt="Button" />
        <p className="MenuText MenuText1">Character Selection</p>
      </div>
      <div
        className="MenuButtonContainer"
        onClick={() => handleButtonClick("/bio")}
      >
        <img className="ButtonImage" src={buttonImage} alt="Button 2" />
        <p className="MenuText MenuText2">Bio</p>
      </div>
      <div
        className="MenuButtonContainer"
        onClick={() => handleButtonClick("/contact")}
      >
        <img className="ButtonImage" src={buttonImage} alt="Button 3" />
        <p className="MenuText MenuText3">Contact Us</p>
      </div>
    </div>
  );
};

export default MenuPage;

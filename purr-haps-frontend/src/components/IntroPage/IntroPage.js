import React from "react";
import { useNavigate } from "react-router-dom";
import "./IntroPage.css";
import tavernImage from "../../assets/IntroAssets/Inside of Tavern.png";
import gateImage from "../../assets/IntroAssets/Gate.png";
import catImage from "../../assets/IntroAssets/Roaming Cat Silhouette (1).png";

const IntroPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/MenuPage");
  };

  return (
    <div className="IntroContainer" onClick={handleClick}>
      <img src={tavernImage} alt="Inside of Tavern" className="TavernImage" />
      <img src={catImage} alt="Roaming Cat" className="CatImage" />
      <img src={gateImage} alt="Gate" className="GateImage" />
      <div className="FlashingTextContainer">
        <h1 className="FlashingText">Click to Enter</h1>
      </div>
    </div>
  );
};

export default IntroPage;

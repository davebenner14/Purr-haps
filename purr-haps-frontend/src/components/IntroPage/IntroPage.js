import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./IntroPage.css";
import tavernImage from "../../assets/IntroAssets/Inside of Tavern.png";
import gateImage from "../../assets/IntroAssets/Gate.png";
import catImage from "../../assets/IntroAssets/Roaming Cat Silhouette (1).png";
import titleImage from "../../assets/IntroAssets/Title.png";
import silhouetteImage from "../../assets/IntroAssets/Character Silhouette.png";

const IntroPage = () => {
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);
  const [zoomIn, setZoomIn] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => {
      setZoomIn(true);
      setTimeout(() => {
        navigate("/MenuPage");
      }, 2000); // Wait 2 seconds for the zoom-in effect
    }, 1500); // Wait 1.5 seconds for the fade-out effect
  };

  return (
    <div
      className={`IntroContainer ${zoomIn ? "zoom-in" : ""}`}
      onClick={handleClick}
    >
      <img src={tavernImage} alt="Inside of Tavern" className="TavernImage" />
      <img src={gateImage} alt="Gate" className="GateImage" />
      <img
        src={titleImage}
        alt="Title"
        className={`TitleImage ${isClicked ? "fade-out" : ""}`}
      />
      <img src={catImage} alt="Roaming Cat" className="CatImage" />
      <img
        src={silhouetteImage}
        alt="Character Silhouette"
        className="SilhouetteImage"
      />
      <div className={`FlashingTextContainer ${isClicked ? "fade-out" : ""}`}>
        <h1 className="FlashingText">Click to Enter</h1>
      </div>
    </div>
  );
};

export default IntroPage;

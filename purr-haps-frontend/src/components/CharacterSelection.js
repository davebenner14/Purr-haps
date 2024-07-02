import React, { useState } from "react";
import backgroundImage from "../assets/images/FantasyBackground.jpg";
import { characters, shirts } from "./CharacterData";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from "chart.js";
import "./CharacterSelection.css";

// Register the components from chart.js
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const CharacterSelection = () => {
  const [currentCharacterIndex, setCurrentCharacterIndex] = useState(0);
  const [currentShirtIndex, setCurrentShirtIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState(null);

  const currentCharacter = characters[currentCharacterIndex];
  const currentShirt = shirts[currentShirtIndex];

  console.log("Current Character:", currentCharacter); // Debugging log
  console.log("Current Shirt:", currentShirt); // Debugging log

  const handleNextCharacter = () => {
    setCurrentCharacterIndex(
      (prevIndex) => (prevIndex + 1) % characters.length
    );
  };

  const handlePreviousCharacter = () => {
    setCurrentCharacterIndex(
      (prevIndex) => (prevIndex - 1 + characters.length) % characters.length
    );
  };

  const handleNextShirt = () => {
    setCurrentShirtIndex((prevIndex) => (prevIndex + 1) % shirts.length);
  };

  const handlePreviousShirt = () => {
    setCurrentShirtIndex(
      (prevIndex) => (prevIndex - 1 + shirts.length) % shirts.length
    );
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const radarData = {
    labels: [
      "Strength",
      "Dexterity",
      "Constitution",
      "Intelligence",
      "Wisdom",
      "Charisma"
    ],
    datasets: [
      {
        label: currentCharacter.name,
        data: [
          currentCharacter.attributes.strength,
          currentCharacter.attributes.dexterity,
          currentCharacter.attributes.constitution,
          currentCharacter.attributes.intelligence,
          currentCharacter.attributes.wisdom,
          currentCharacter.attributes.charisma
        ],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1
      }
    ]
  };

  const radarOptions = {
    scales: {
      r: {
        ticks: {
          beginAtZero: true,
          max: 25,
          display: true,
          color: "white",
          font: {
            size: 10,
            weight: "bold"
          },
          callback: function (value) {
            return value.toString();
          }
        },
        pointLabels: {
          font: {
            size: 12,
            weight: "bold"
          },
          color: "white"
        },
        angleLines: {
          display: true,
          color: "rgba(255, 255, 255, 0.3)"
        },
        grid: {
          color: "rgba(255, 255, 255, 0.3)"
        }
      }
    }
  };

  return (
    <div className="PageContainer">
      <img
        className="BackgroundImage"
        src={backgroundImage}
        alt="Character Selection Background"
      />
      <div className="Content">
        <h1 className="Title">Character Selection</h1>
        <h2 className="Subtitle">
          Select your character to begin the adventure
        </h2>
        <div className="BoxesContainer">
          <div className="SmallBox">
            <div className="ShirtBox">
              <h2 className="ShirtName">{currentShirt.name}</h2>
              <div className="Sizes">
                {currentShirt.sizes.map((size, idx) => (
                  <span
                    key={idx}
                    className={`Size ${
                      selectedSize === size ? "selected" : ""
                    }`}
                    onClick={() => handleSizeSelect(size)}
                  >
                    {size}
                  </span>
                ))}
              </div>
              <img
                className="ShirtImage"
                src={currentShirt.image}
                alt={currentShirt.name}
              />
              <div className="ShirtDetails">
                <button className="AddToCartButton">Add to Cart</button>
              </div>
            </div>
            <div className="ArrowContainer">
              <button className="ArrowButton" onClick={handlePreviousShirt}>
                {"<"}
              </button>
              <button className="ArrowButton" onClick={handleNextShirt}>
                {">"}
              </button>
            </div>
          </div>
          <div className="LargeBox">
            <div className="ArrowContainer">
              <button className="ArrowButton" onClick={handlePreviousCharacter}>
                {"<"}
              </button>
              <div className="CharacterInfo">
                <h2 className="CharacterName">{currentCharacter.name}</h2>
                <img
                  className="CharacterImage"
                  src={currentCharacter.image}
                  alt={currentCharacter.name}
                />
              </div>
              <button className="ArrowButton" onClick={handleNextCharacter}>
                {">"}
              </button>
            </div>
          </div>
          <div className="SmallBox">
            <h2 className="AttributesTitle">Attributes</h2>
            <Radar data={radarData} options={radarOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterSelection;

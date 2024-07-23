import React, { useState, useRef, useEffect } from "react";
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
import "./Glow.css";

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
  const chartRef = useRef(null);

  const currentCharacter = characters[currentCharacterIndex];
  const currentShirt = shirts[currentShirtIndex];

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

  useEffect(() => {
    const sizes = document.querySelectorAll(".Size");
    const containerWidth = document.querySelector(".Sizes").offsetWidth;
    const numberOfSizes = currentShirt.sizes.length;
    const maxSize = Math.min(containerWidth / numberOfSizes - 10, 100); // 10px for padding/margin
    sizes.forEach((size) => {
      size.style.width = `${maxSize}px`;
      size.style.fontSize = `${Math.max(12, maxSize * 0.5)}px`;
      const span = size.querySelector("span");
      const parentWidth = size.offsetWidth;
      const spanWidth = span.offsetWidth;
      if (spanWidth > parentWidth) {
        span.style.transform = `scale(${parentWidth / spanWidth})`;
      } else {
        span.style.transform = "scale(1)";
      }
    });
  }, [currentShirtIndex, currentShirt.sizes.length]);

  const getChartData = (character) => {
    const ctx = chartRef.current && chartRef.current.ctx;
    if (ctx) {
      const gradient = ctx.createLinearGradient(0, 0, 0, 400);
      gradient.addColorStop(0, "rgba(255, 0, 0, 0.6)"); // Red
      gradient.addColorStop(0.5, "rgba(255, 255, 0, 0.6)"); // Yellow
      gradient.addColorStop(1, "rgba(0, 255, 0, 0.6)"); // Green
      return {
        labels: Object.keys(character.attributes),
        datasets: [
          {
            label: character.name,
            data: Object.values(character.attributes),
            backgroundColor: gradient,
            borderColor: "rgba(0, 0, 0, 1)",
            borderWidth: 2,
            pointBackgroundColor: "rgba(255, 255, 255, 1)"
          }
        ]
      };
    }
  };

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.update();
    }
  }, [currentCharacterIndex]);

  return (
    <div className="PageContainer">
      <div
        className="BackgroundImage"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="Content">
        <h1 className="Title">Character Selection</h1>
        <h2 className="Subtitle">
          Select your character to begin the adventure
        </h2>
        <div className="BoxesContainer">
          {/* Add BoxesContainer content here as in your previous code */}
        </div>
      </div>
    </div>
  );
};

export default CharacterSelection;

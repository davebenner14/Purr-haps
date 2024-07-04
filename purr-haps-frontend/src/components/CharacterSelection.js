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

  const calculateMaxSize = () => {
    const containerWidth = document.querySelector(".Sizes").offsetWidth;
    const numberOfSizes = currentShirt.sizes.length;
    const maxSize = Math.min(containerWidth / numberOfSizes - 10, 100); // 10px for padding/margin
    return maxSize;
  };

  useEffect(() => {
    const sizes = document.querySelectorAll(".Size");
    const maxSize = calculateMaxSize();
    sizes.forEach((size) => {
      size.style.width = `${maxSize}px`;
      size.style.fontSize = `${Math.max(12, maxSize * 0.5)}px`; // Adjust the font size relative to the button size, minimum 12px
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
    const gradient = ctx ? ctx.createLinearGradient(0, 0, 0, 400) : null;
    if (gradient) {
      gradient.addColorStop(0, "rgba(255, 0, 0, 0.6)"); // Red
      gradient.addColorStop(0.5, "rgba(255, 255, 0, 0.6)"); // Yellow
      gradient.addColorStop(1, "rgba(0, 255, 0, 0.6)"); // Green
    }

    return {
      labels: Object.keys(character.attributes),
      datasets: [
        {
          label: character.name,
          data: Object.values(character.attributes),
          backgroundColor: gradient || "rgba(54, 162, 235, 0.2)",
          borderColor: "rgba(0, 0, 0, 1)", // Black border color for points
          borderWidth: 2,
          pointBackgroundColor: "rgba(255, 255, 255, 1)" // White point color
        }
      ]
    };
  };

  const radarData = getChartData(currentCharacter);

  const radarOptions = {
    scales: {
      r: {
        beginAtZero: true,
        max: 25,
        ticks: {
          display: false, // Hide the default tick labels
          stepSize: 5,
          color: "white",
          font: {
            size: 10,
            weight: "bold"
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
    },
    plugins: {
      legend: {
        labels: {
          color: "white"
        }
      },
      afterDraw: (chart) => {
        const ctx = chart.ctx;
        chart.data.datasets.forEach((dataset) => {
          const meta = chart.getDatasetMeta(0);
          meta.data.forEach((point, index) => {
            const { x, y } = point.tooltipPosition();
            const value = dataset.data[index];
            ctx.fillStyle = "white";
            ctx.font = "bold 12px Arial";
            ctx.textAlign = "center";
            ctx.fillText(value, x, y - 10); // Position the value below the point
          });
        });
      }
    }
  };

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.update();
    }
  }, [currentCharacterIndex]);

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
                    <span>{size}</span>
                  </span>
                ))}
              </div>
              <div className="ImageWrapper">
                <img
                  className="ShirtImage"
                  src={currentShirt.image}
                  alt={currentShirt.name}
                />
              </div>
              <div className="ShirtDetails">
                <button className="AddToCartButton">Add to Cart</button>
              </div>
            </div>
            <div className="ArrowContainer">
              <button
                className="ArrowButton DnDArrow"
                onClick={handlePreviousShirt}
              >
                {"<"}
              </button>
              <button
                className="ArrowButton DnDArrow"
                onClick={handleNextShirt}
              >
                {">"}
              </button>
            </div>
          </div>
          <div className="LargeBox">
            <div className="ArrowContainer">
              <button
                className="ArrowButton DnDArrow"
                onClick={handlePreviousCharacter}
              >
                {"<"}
              </button>
              <div className="CharacterInfo">
                <h2 className="CharacterName">{currentCharacter.name}</h2>
                <div className="ImageWrapper">
                  <img
                    className="CharacterImage"
                    src={currentCharacter.image}
                    alt={currentCharacter.name}
                  />
                </div>
              </div>
              <button
                className="ArrowButton DnDArrow"
                onClick={handleNextCharacter}
              >
                {">"}
              </button>
            </div>
          </div>
          <div className="SmallBox">
            <h2 className="AttributesTitle">Attributes</h2>
            <Radar ref={chartRef} data={radarData} options={radarOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterSelection;

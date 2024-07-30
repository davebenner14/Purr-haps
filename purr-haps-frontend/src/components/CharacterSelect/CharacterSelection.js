import React, { useState, useEffect, useRef } from "react";
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
import Store1 from "../../assets/storePageBackgrounds/Store1.png";
import Store2 from "../../assets/storePageBackgrounds/Store2.png";
import Arrow from "./Arrow";
import ArrowSVG from "./ArrowSVG";

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
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  const chartRef = useRef(null);
  const backgrounds = [Store1, Store2];

  const currentCharacter = characters[currentCharacterIndex];
  const currentShirt = shirts[currentShirtIndex];

  console.log("Current Character:", currentCharacter); // Debugging log
  console.log("Current Shirt:", currentShirt); // Debugging log

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = (backgroundIndex + 1) % backgrounds.length;
      const currentImage =
        document.querySelectorAll(".BackgroundImage")[backgroundIndex];
      const nextImage =
        document.querySelectorAll(".BackgroundImage")[nextIndex];

      // Make the next image partially visible
      nextImage.classList.add("next");

      // After a delay, make the next image fully visible and hide the current image
      setTimeout(() => {
        nextImage.classList.add("visible");
        nextImage.classList.remove("next");
        currentImage.classList.remove("visible");
        setBackgroundIndex(nextIndex);
      }, 2500); // Half of the transition duration
    }, 15000); // Change every 15 seconds

    return () => clearInterval(intervalId);
  }, [backgroundIndex, backgrounds.length]);

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
    const container = document.querySelector(".Sizes");
    if (!container) return 100;
    const containerWidth = container.offsetWidth;
    const numberOfSizes = currentShirt.sizes.length;
    const maxSize = Math.min(containerWidth / numberOfSizes - 10, 100);
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
    const attributeLabels = {
      strength: "STR",
      dexterity: "DEX",
      constitution: "CON",
      intelligence: "INT",
      wisdom: "WIS",
      charisma: "CHR"
    };

    const dataValues = Object.values(character.attributes);

    return {
      labels: Object.keys(character.attributes).map(
        (attr) => attributeLabels[attr] || attr
      ),
      datasets: [
        {
          label: character.name,
          data: dataValues,
          backgroundColor: "rgba(54, 162, 235, 0.2)",
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
      tooltip: {
        enabled: false
      }
    }
  };

  // Custom plugin to draw values on the radar chart
  const drawValuesPlugin = {
    id: "drawValues",
    afterDraw: (chart) => {
      const ctx = chart.ctx;
      chart.data.datasets.forEach((dataset) => {
        const meta = chart.getDatasetMeta(0);
        meta.data.forEach((point, index) => {
          const { x, y } = point.tooltipPosition();
          const value = dataset.data[index];
          const angle =
            point.angle ||
            Math.atan2(
              y - chart.chartArea.centerY,
              x - chart.chartArea.centerX
            );
          const offset = 20; // Base offset value
          let xOffset = x + Math.cos(angle) * offset;
          let yOffset = y + Math.sin(angle) * offset;

          // Apply specific adjustments based on the angle to fine-tune the positioning
          if (index === 1) {
            // DEX
            xOffset += 10;
            yOffset += 10;
          } else if (index === 4) {
            // WIS
            xOffset += 10;
            yOffset += 10;
          } else if (index === 2) {
            // CON
            xOffset -= 5;
            yOffset -= 5;
          } else if (index === 3) {
            // INT
            xOffset -= 5;
            yOffset -= 5;
          }

          ctx.fillStyle = "white";
          ctx.font = "bold 12px Arial";
          ctx.textAlign = "center";
          ctx.fillText(value, xOffset, yOffset); // Position the value outside the point
        });
      });
    }
  };

  const radialGradientPlugin = {
    id: "radialGradientPlugin",
    beforeDatasetsDraw: (chart) => {
      const ctx = chart.ctx;
      const { left, top, right, bottom } = chart.chartArea;
      const width = right - left;
      const height = bottom - top;
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      // Start clipping path
      ctx.save();
      ctx.beginPath();

      // Move to the first point
      const firstPoint = chart.getDatasetMeta(0).data[0].getCenterPoint();
      ctx.moveTo(firstPoint.x, firstPoint.y);

      // Draw lines to the rest of the points
      chart.getDatasetMeta(0).data.forEach((point, index) => {
        if (index > 0) {
          // Skip the first point as it is already used in moveTo
          const { x, y } = point.getCenterPoint();
          ctx.lineTo(x, y);
        }
      });

      // Close the path and clip
      ctx.closePath();
      ctx.clip();

      const gradient = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        Math.min(width, height) / 2
      );
      gradient.addColorStop(0, "rgba(0, 255, 0, 0.6)"); // Green
      gradient.addColorStop(0.2, "rgba(255, 255, 0, 0.6)"); // Yellow
      gradient.addColorStop(0.4, "rgba(255, 165, 0, 0.6)"); // Orange
      gradient.addColorStop(0.6, "rgba(255, 69, 0, 0.6)"); // Red-Orange
      gradient.addColorStop(0.8, "rgba(255, 0, 0, 0.6)"); // Red

      ctx.globalCompositeOperation = "destination-over";
      ctx.fillStyle = gradient;
      ctx.fillRect(left, top, width, height);
      ctx.restore();
    }
  };

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.update();
    }
  }, [currentCharacterIndex]);

  const animateText = () => {
    const spans = document.querySelectorAll(".CharacterName.glow span");
    spans.forEach((span) => {
      span.classList.remove("show");
    });
    setTimeout(() => {
      spans.forEach((span, index) => {
        setTimeout(() => {
          span.classList.add("show");
        }, 200 * index); // Delay between each character
      });
    }, 100); // Slight delay to ensure text is hidden first
  };

  useEffect(() => {
    animateText();
  }, [currentCharacterIndex]);

  useEffect(() => {
    animateText();
  }, []);

  const handleArrowClick = (callback) => (e) => {
    e.preventDefault();
    callback();
    const arrow = e.currentTarget;
    if (!arrow.classList.contains("animate")) {
      arrow.classList.add("animate");
      setTimeout(() => {
        arrow.classList.remove("animate");
      }, 1600);
    }
  };

  return (
    <div className="PageContainer">
      <ArrowSVG />
      {backgrounds.map((bg, index) => (
        <img
          key={index}
          className={`BackgroundImage ${
            backgroundIndex === index ? "visible" : ""
          }`}
          src={bg}
          alt="Character Selection Background"
        />
      ))}
      <div className="Content">
        <h1 className="Title">Character Selection</h1>
        <h2 className="Subtitle">
          Select your character to begin the adventure
        </h2>
        <div className="BoxesContainer">
          <div className="LeftBoxContainer">
            <div className="ArrowContainer">
              <Arrow
                direction="left"
                onClick={handleArrowClick(handlePreviousShirt)}
              />
              <h2 className="ShirtName">{currentShirt.name}</h2>
              <Arrow
                direction="right"
                onClick={handleArrowClick(handleNextShirt)}
              />
            </div>
            <div className="SmallBox LeftBox">
              <div className="ShirtBox">
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
            </div>
          </div>
          <div className="LargeBox MiddleBox">
            <div className="CharacterInfo">
              <h2 className="CharacterName glow">
                {currentCharacter.name.split("").map((char, index) => (
                  <span key={index}>{char}</span>
                ))}
              </h2>
              <div className="ImageWrapper">
                <img
                  className="CharacterImage"
                  src={currentCharacter.image}
                  alt={currentCharacter.name}
                />
              </div>
            </div>
          </div>
          <div className="LargeBox RightBox LowerBox">
            <h2 className="AttributesTitle">Attributes</h2>
            <Radar
              ref={chartRef}
              data={radarData}
              options={radarOptions}
              plugins={[drawValuesPlugin, radialGradientPlugin]}
            />
          </div>
        </div>
        <div className="MiddleBoxArrowContainer">
          <Arrow
            direction="left"
            onClick={handleArrowClick(handlePreviousCharacter)}
          />
          <div className="SmallBoxesContainer">
            {[-1, 0, 1].map((offset, index) => (
              <div className="NewSmallBox" key={index}>
                <div className="ImageWrapper small">
                  <img
                    className="CharacterImage small"
                    src={
                      characters[
                        (currentCharacterIndex + offset + characters.length) %
                          characters.length
                      ].image
                    }
                    alt={
                      characters[
                        (currentCharacterIndex + offset + characters.length) %
                          characters.length
                      ].name
                    }
                  />
                </div>
              </div>
            ))}
          </div>
          <Arrow
            direction="right"
            onClick={handleArrowClick(handleNextCharacter)}
          />
        </div>
      </div>
    </div>
  );
};

export default CharacterSelection;

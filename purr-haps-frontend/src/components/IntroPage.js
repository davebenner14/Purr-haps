import React from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import introImage from "../assets/images/Purr-Haps-Intro.jpeg";

const IntroPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  };

  return (
    <IntroContainer onClick={handleClick}>
      <IntroImage src={introImage} alt="Purr-Haps Intro" />
      <FlashingTextContainer>
        <FlashingText>Click to Enter</FlashingText>
      </FlashingTextContainer>
    </IntroContainer>
  );
};

export default IntroPage;

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #000;
  cursor: pointer;
  position: relative;
`;

const IntroImage = styled.img`
  max-width: 80%;
  max-height: 80%;
  object-fit: contain;
`;

const flash = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
`;

const FlashingTextContainer = styled.div`
  position: absolute;
  bottom: 12%;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px;
  border: 3px solid #fff;
  border-radius: 15px; /* Pixelated oval look */
  background-color: rgba(
    0,
    0,
    0,
    0.5
  ); /* Optional background for better visibility */
`;

const FlashingText = styled.h1`
  font-family: "Press Start 2P", cursive;
  color: #fff;
  font-size: 16px; /* Smaller font size */
  animation: ${flash} 2s infinite; /* Slower flashing */
  margin: 0;
`;

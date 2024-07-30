import React from "react";
import "./Arrow.css";

const Arrow = ({ direction, onClick }) => (
  <a href="#" className={`arrow ${direction}`} onClick={onClick}>
    <i></i>
    <svg>
      <use xlinkHref="#circle" />
    </svg>
  </a>
);

export default Arrow;

import React from "react";
import "./card.css";

function Card({ details }) {
  const cardStyle = {
    boxShadow: `box-shadow: 2px 8px 20px rgba(181, 181, 181, 0.2)`,
    borderRadius: `8px`,
  };

  return <div style={cardStyle}>{details}</div>;
}

export default Card;

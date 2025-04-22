import React from "react";

function PlantCard({ name, image, price }) {
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
    </li>
  );
}

export default PlantCard;

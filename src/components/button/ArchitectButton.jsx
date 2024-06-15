import React from "react";
import "./ArchitectButton.scss";

export default function ArchitectButton({ name, onClick, isBlack }) {
  return (
    <button
      className={`architect-button ${isBlack && "black"}`}
      onClick={onClick}
    >
      {name}
    </button>
  );
}

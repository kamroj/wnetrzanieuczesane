import React from "react";
import "./ArchitectButton.scss";

export default function ArchitectButton({ name, onClick }) {
  return (
    <button className="architect-button" onClick={onClick}>
      {name}
    </button>
  );
}

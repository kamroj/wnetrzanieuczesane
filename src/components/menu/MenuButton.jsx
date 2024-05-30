import React from "react";
import './MenuButton.scss'

export default function MenuButton({ title, icon, action }) {
  return (
    <button onClick={action} className="menu-button">
      <div className="menu-button__icon">{icon}</div>
      <div className="menu-button__title">{title}</div>
    </button>
  );
}
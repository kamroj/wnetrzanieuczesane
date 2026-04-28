import React from "react";
import logo from "../../../assets/images/logo-gold.png";
import { LogoGlow, LogoImage } from "./AnimatedGoldLogo.styles";

function AnimatedGoldLogo() {
  return (
    <LogoGlow $logoUrl={logo} aria-label="Wnętrza Nieuczesane">
      <LogoImage src={logo} alt="Wnętrza Nieuczesane" />
    </LogoGlow>
  );
}

export default AnimatedGoldLogo;
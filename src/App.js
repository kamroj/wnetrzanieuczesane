import React from "react";

import "./App.scss";
import logo from "./assets/images/strona_w_budowie.png";
import useWindowDimensions from "./hooks/useWindowDimensionsHook";
// import sanityClient from "./clilent.jsx"

export const IsMobileContext = React.createContext();

function App() {
  const { windowWidth } = useWindowDimensions();
  const isMobile = (mobileWidth = 750) => windowWidth < mobileWidth;
  
  return (
    <IsMobileContext.Provider value={isMobile}>
      <div className="app-container">
        <img src={logo} alt="dimensions" className="logo" />
      </div>
    </IsMobileContext.Provider>
  );
}

export default App;

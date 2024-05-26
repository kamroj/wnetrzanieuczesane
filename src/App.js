import React from "react";

import "./App.scss";

import useWindowDimensions from "./hooks/useWindowDimensionsHook";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/navbar/Navbar";
// import sanityClient from "./clilent.jsx"

export const IsMobileContext = React.createContext();

function App() {
  const { windowWidth } = useWindowDimensions();
  const isMobile = (mobileWidth = 750) => windowWidth < mobileWidth;

  return (
    <IsMobileContext.Provider value={isMobile}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </IsMobileContext.Provider>
  );
}

export default App;

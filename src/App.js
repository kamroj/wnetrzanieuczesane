import React from "react";

import "./App.scss";

import useWindowDimensions from "./hooks/useWindowDimensionsHook";
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home/Home";
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/Menu";
import Contact from "./pages/Contact/Contact";

export const IsMobileContext = React.createContext();

function App() {
  const queryClient = new QueryClient();
  const { windowWidth } = useWindowDimensions();
  const isMobile = (mobileWidth = 750) => windowWidth < mobileWidth;

  return (
    <IsMobileContext.Provider value={isMobile}>
      <QueryClientProvider client={queryClient}>
        {isMobile() ? <Menu /> : <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </QueryClientProvider>
    </IsMobileContext.Provider>
  );
}

export default App;

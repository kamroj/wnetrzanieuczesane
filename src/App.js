import React from "react";

import "./App.scss";

import useWindowDimensions from "./hooks/useWindowDimensionsHook";
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home/Home";
import Navbar from "./components/navbar/Navbar";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/footer/Footer";

export const IsMobileContext = React.createContext();

function App() {
  const queryClient = new QueryClient();
  const { windowWidth } = useWindowDimensions();
  const isMobile = (mobileWidth = 750) => windowWidth < mobileWidth;

  return (
    <IsMobileContext.Provider value={isMobile}>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
      </QueryClientProvider>
    </IsMobileContext.Provider>
  );
}

export default App;

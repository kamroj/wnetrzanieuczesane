import React from "react";
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import useWindowDimensions from "./hooks/useWindowDimensionsHook";
import { useScrollToTop } from "./hooks/useScrollToTop";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Portfolio from "./pages/Portfolio/Portfolio";
import Project from "./pages/Portfolio/Project";
import ProcessDesign from "./pages/ProcessDesign/ProcessDesign";
import Offer from "./pages/Offer/Offer";
import AboutMe from "./pages/AboutMe/AboutMe";

export const IsMobileContext = React.createContext();

function App() {
  const queryClient = new QueryClient();
  const { windowWidth } = useWindowDimensions();
  const isMobile = React.useCallback((mobileWidth = 750) => windowWidth < mobileWidth, [windowWidth]);

  useScrollToTop();

  return (
    <ThemeProvider theme={theme}>
      <IsMobileContext.Provider value={isMobile}>
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:slug" element={<Project />} />
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/process" element={<ProcessDesign />} />
            <Route path="/offer" element={<Offer />} />
          </Routes>
          <Footer />
        </QueryClientProvider>
      </IsMobileContext.Provider>
    </ThemeProvider>
  );
}

export default App;
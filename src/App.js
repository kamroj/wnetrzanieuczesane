import React from "react";
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/theme';
import useWindowDimensions from "./hooks/useWindowDimensionsHook";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

export const IsMobileContext = React.createContext();

function App() {
  const queryClient = new QueryClient();
  const { windowWidth } = useWindowDimensions();
  const isMobile = React.useCallback((mobileWidth = 750) => windowWidth < mobileWidth, [windowWidth]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
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
    </ThemeProvider>
  );
}

export default App;
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "../pages/HomePage";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../assets/themes/Theme";
import { AnimatePresence } from "framer-motion";
import Workpage from "../pages/Workpage";
import AboutPage from "../pages/AboutPage";
import MySkillsPage from "../pages/MySkillsPage";


const RouterPortafolio = () => {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <AnimatePresence mode="wait">
          <BrowserRouter>
            <Routes>
              <Route exact path={"/"} element={<HomePage />} />
              <Route exact path={"/WorkPage"} element={<Workpage />} />
              <Route exact path={"/AboutPage"} element={<AboutPage />} />
              <Route exact path={"/MySkillsPage"} element={<MySkillsPage />} />
            </Routes>
          </BrowserRouter>

         
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
};

export default RouterPortafolio;

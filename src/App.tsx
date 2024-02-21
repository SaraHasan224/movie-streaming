import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { ErrorBoundary, ScrollUpBtn } from "./components/index";
import { ROUTING_CONFIG } from "./utils/index";

/* CSS */
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "@fortawesome/fontawesome-free/css/all.css";
import "./assets/fonts/customFonts.css";
import "./assets/css/style.css";
import "./assets/css/flaticon.css";
import "./assets/css/animate.css";

export const App = () => {
  return (
    <BrowserRouter>
      <React.StrictMode>
        <ErrorBoundary>
          <div>
            <Routes>
              {ROUTING_CONFIG &&
                ROUTING_CONFIG.map((route, index) => {
                  return <Route key={index} {...route} />;
                })}
            </Routes>
            <ScrollUpBtn />
          </div>
        </ErrorBoundary>
      </React.StrictMode>
    </BrowserRouter>
  );
};

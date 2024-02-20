import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";
import { ErrorBoundary, ScrollUpBtn } from "./components/index";

import "./App.css";
import { ROUTING_CONFIG } from "./utils/index";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "@fortawesome/fontawesome-free/css/all.css";
import "./assets/fonts/customFonts.css";
import "./assets/css/style.css";
import "./assets/css/flaticon.css";
import "./assets/css/animate.css";

function App() {
  return (
    <BrowserRouter>
      <React.StrictMode>
        <ErrorBoundary>
          <div>
            <Helmet>
              <title> Nizami Movie Center</title>
              <link rel="shortcut icon" href="favicon.ico"></link>
            </Helmet>
            <Routes>
              {ROUTING_CONFIG.map((route, index) => {
                return <Route key={index} {...route} />;
              })}
            </Routes>
            <ScrollUpBtn />
          </div>
        </ErrorBoundary>
      </React.StrictMode>
    </BrowserRouter>
  );
}

export default App;

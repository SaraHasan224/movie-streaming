import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";

import { Provider as RollbarProvider, ErrorBoundary } from "@rollbar/react";
import { store } from "./store/index";
import { ROLLBAR_CONFIG } from "./utils/index";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <RollbarProvider config={ROLLBAR_CONFIG}>
    <Provider store={store}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Provider>
  </RollbarProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

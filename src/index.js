import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";
import { Provider as P, ErrorBoundary } from "@rollbar/react";
import { store, persistor } from "./store";
// same configuration you would create for the Rollbar.js SDK
const rollbarConfig = {
  accessToken: process.env.REACT_APP_ROLLBAR_TOKEN,
  captureUncaught: true,
  captureUnhandledRejections: true,
  payload: {
    environment: process.env.REACT_APP_ENVIRONMENT,
  },
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <P config={rollbarConfig}>
    <Provider store={store}>
      <ErrorBoundary>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </ErrorBoundary>
    </Provider>
  </P>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

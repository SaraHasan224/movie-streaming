import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from "react-redux";

import { PersistGate } from "redux-persist/integration/react";
import { Provider as P, ErrorBoundary } from "@rollbar/react";
import { store, persistor } from "./store/index";
import {ROLLBAR_CONFIG} from "./utils/index";


const root = ReactDOM.createRoot(document.getElementById('root')  as HTMLElement);
root.render(
  <P config={ROLLBAR_CONFIG}>
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

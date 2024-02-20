import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import { thunk } from "redux-thunk";
import { createLogger } from "redux-logger";
import promiseMiddleware from "redux-promise";

import rootReducer from "./reducers/rootReducer";

const loggerMiddleware = createLogger();
const check_app_environment = process.env.REACT_APP_ENVIRONMENT;
let middleware;
let persistor;

if (check_app_environment === "dev" || check_app_environment === "local") {
  middleware = applyMiddleware(promiseMiddleware, thunk, loggerMiddleware);
} else {
  middleware = applyMiddleware(promiseMiddleware, thunk);
}

const store = createStore(rootReducer, middleware);
persistor = persistStore(store);

export { store, persistor };

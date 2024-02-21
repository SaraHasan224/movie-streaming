// @ts-nocheck

import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import { thunk } from "redux-thunk";
import { createLogger } from "redux-logger";
import promiseMiddleware from "redux-promise";

import { rootReducer } from "./reducers/rootReducer";

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

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// and if you need the type of the store itself
export type AppStore = typeof store;

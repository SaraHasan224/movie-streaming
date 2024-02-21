import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { homeReducer } from "./home.reducer";
import { alertReducer } from "./alert.reducer";

const homeConfig = {
  key: "home",
  storage,
  whitelist: [],
};

export const rootReducer = combineReducers({
  alert: alertReducer,
  home: persistReducer(homeConfig, homeReducer),
});

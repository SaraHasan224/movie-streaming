// @ts-nocheck

import { combineReducers, Reducer } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { homeReducer, homeState } from "./home.reducer";
import { alertReducer, alertStates } from "./alert.reducer";

// Define type for the root state
export interface RootState {
  alert: alertStates;
  home: homeState;
}

const homeConfig = {
  key: "home",
  storage,
  whitelist: [] as string[],
};

// Define type for the rootReducer
export const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  alert: alertReducer,
  home: persistReducer(homeConfig, homeReducer),
});

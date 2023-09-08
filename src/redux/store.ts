import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { itemsReducer } from "./slices/items.slice";
import { searchReducer } from "./slices/search.slice";

const rootReducer = combineReducers({
  itemsReducer,
  searchReducer,
});

const setupStore = () =>
  configureStore({
    reducer: rootReducer,
  });

type RootState = ReturnType<typeof rootReducer>;
type AppStore = ReturnType<typeof setupStore>;
type AppDispatch = AppStore["dispatch"];

export type { RootState, AppStore, AppDispatch };

export { setupStore };

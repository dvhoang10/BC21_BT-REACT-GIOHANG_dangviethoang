import { combineReducers } from "redux";
import { itemReducer } from "./productReducer";

export const rootReducer = combineReducers({
  item: itemReducer,
});

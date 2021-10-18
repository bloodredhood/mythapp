import { combineReducers } from "redux";
import { essencesReducer } from "./essencesReducer";

export const rootReducer = combineReducers({
    essences: essencesReducer
})
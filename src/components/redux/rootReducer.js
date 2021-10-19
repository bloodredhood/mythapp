import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { essencesReducer } from "./essencesReducer";

export const rootReducer = combineReducers({
    essences: essencesReducer,
    app: appReducer
})
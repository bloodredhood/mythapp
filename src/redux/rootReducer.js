import { combineReducers } from "redux";
import { appReducer } from "./app/appReducer";
import { essencesReducer } from "./essences/essencesReducer";

export const rootReducer = combineReducers({
    essences: essencesReducer,
    app: appReducer
})

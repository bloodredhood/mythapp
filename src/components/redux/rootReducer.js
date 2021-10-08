import { combineReducers } from "redux";
import { essenceCardsReducer } from "./essenceCardReducer";

export const rootReducer = combineReducers({
    essenceCards: essenceCardsReducer
})
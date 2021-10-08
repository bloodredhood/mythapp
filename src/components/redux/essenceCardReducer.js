import { CREATE_ESSENCE_CARD, FETCH_ESSENCE_CARDS } from "./types"

const initialState = {
    essenceCards: [],
    fetchedEssenceCards: []
}

export const essenceCardsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_ESSENCE_CARD:
            return { ...state, essenceCards: state.essenceCards.concat([action.payload]) }
        case FETCH_ESSENCE_CARDS:
            return { ...state, fetchedEssenceCards: action.payload }
        default: return state
    }
}
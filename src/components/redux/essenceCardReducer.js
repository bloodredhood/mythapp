import { CREATE_ESSENCE_CARD, FETCH_ESSENCE_CARD } from "./types"

const initialState = {
    essenceCards: [],
    fetchedEssenceCards: []
}

export const essenceCardsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_ESSENCE_CARD:
            return { ...state, essenceCards: state.essenceCards.concat([action.payload]) }
        case FETCH_ESSENCE_CARD:
            return { ...state, fetchedEssenceCards: action.payload }
        default: return state
    }
}
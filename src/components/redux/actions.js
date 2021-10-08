import { CREATE_ESSENCE_CARD, FETCH_ESSENCE_CARDS } from "./types";

export function createEssenceCard(essenceCard) {
    return {
        type: CREATE_ESSENCE_CARD,
        payload: essenceCard
    }
}

export function fetchEssenceCards() {
    return async dispatch => {
        const response = await fetch('/essences')
        const json = await response.json()
        dispatch({ type: FETCH_ESSENCE_CARDS, payload: json})
    }
}
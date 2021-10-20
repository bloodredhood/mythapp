import { CREATE_ESSENCE, FETCH_ESSENCES } from "../types"

const initialState = {
    essences: [],
    fetchedEssences: []
}

export const essencesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ESSENCE :
      return {...state, essences: state.essences.concat([action.payload])}
    case FETCH_ESSENCES :
      return { ...state, fetchedEssences: action.payload }
    default: return state
  }
}

import {SHOW_LOADER, HIDE_LOADER, SHOW_ALERT, HIDE_ALERT, SET_LOADER} from "../types"

const initialState = {
  loading: false,
  coolLoading: {"asd": true},
  alert: null
}

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADER:
      console.log(action)
      let nextLoading = {...state.coolLoading}
      if (!action.payload ) {
        delete nextLoading[action.key]
      } else {
        nextLoading[action.key] = action.payload
      }
      return { ...state, coolLoading: nextLoading }
    case SHOW_LOADER:
      return {...state, loading: true}
    case HIDE_LOADER:
      return {...state, loading: false}
    case SHOW_ALERT:
      return {...state, alert: action.payload}
    case HIDE_ALERT:
      return {...state, alert: null}
    default: return state
  }
}

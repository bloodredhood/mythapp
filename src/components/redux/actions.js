import { CREATE_ESSENCE, FETCH_ESSENCES, HIDE_ALERT, HIDE_LOADER, SHOW_ALERT, SHOW_LOADER } from "./types";

export function createEssence(essence) {
  return {
    type: CREATE_ESSENCE,
    payload: essence
  }
}

export function showLoader() {
  return {
    type: SHOW_LOADER
  }
}

export function hideLoader() {
  return {
    type: HIDE_LOADER
  }
}

export function showAlert(text) {
  return {
    type: SHOW_ALERT,
    payload: text
  }
}

export function hideAlert() {
  return {
    type: HIDE_ALERT
  }
}

export function fetchEssences() {
  return async dispatch => {
    dispatch(showLoader())
    const response = await fetch("/essences")
    const json = await response.json()
    setTimeout(() =>{
      dispatch({ type: FETCH_ESSENCES, payload: json })
    dispatch(hideLoader())
    }, 1000)
  }
}
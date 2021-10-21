import {CREATE_ESSENCE, FETCH_ESSENCES} from "../types";
import {hideLoader, setLoader, showAlert, showLoader} from "../app/actions";
import {batch} from "react-redux";

export function createEssence(essence) {
  return {
    type: CREATE_ESSENCE,
    payload: essence
  }
}

export function fetchEssences() {
  return async dispatch => {
    try {
      dispatch(setLoader("fetchEssences", true))
      const response = await fetch("/essences")
      const json = await response.json()
      console.log('aaa ===>')
      await setTimeout(() => {
        batch(() => {
          console.log('aaa ===> loaded')
          dispatch({ type: FETCH_ESSENCES, payload: json })
          dispatch(setLoader("fetchEssences", false))
        })
      }, 1000)
    } catch (e) {
      dispatch(showAlert('не пришло с сервера'))
      dispatch(setLoader("fetchEssences", false))
    }
  }
}

export function fetchSingleEssence() {
  return async (dispatch) => {
    try {
      dispatch(setLoader(""))
      dispatch(showLoader())
      const response = await fetch("/essences")
      const json = await response.json()
      setTimeout(() => {
        dispatch({ type: FETCH_ESSENCES, payload: json })
        dispatch(hideLoader())
      }, 1000)
    } catch (e) {
      dispatch(showAlert('не пришло с сервера'))
      dispatch(hideLoader())
    }
  }
}

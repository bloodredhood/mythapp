import {HIDE_ALERT, HIDE_LOADER, SET_LOADER, SHOW_LOADER, SHOW_ALERT } from "../types";

export const showLoader = () => ({ type: SHOW_LOADER })

export const setLoader = (key, payload) => ({ type: SET_LOADER, key, payload })

export function hideLoader() {
  return {
    type: HIDE_LOADER
  }
}

export function hideAlert() {
  return {
    type: HIDE_ALERT
  }
}

export function showAlert(text) {
  return async (dispatch) => {
    dispatch({
      type: SHOW_ALERT,
      payload: text
    })

    return setTimeout(() => {
      dispatch(hideAlert())
    }, 3000)
  }
}

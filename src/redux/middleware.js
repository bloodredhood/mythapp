import { CREATE_ESSENCE } from "./types"
import {showAlert} from "./app/actions";

const forbidden = ['fuck', 'spam', 'хуй', 'пизда']

export function forbiddenWordsMiddleware( {dispatch} ) {
  return function(next) {
    return function(action) {
      if (action.type === CREATE_ESSENCE) {
        const found = forbidden.filter(w => action.payload.name.includes(w) ||
          action.payload.pantheon.includes(w) ||
          action.payload.image.includes(w) ||
          action.payload.text.includes(w))
        if (found.length) {
          return dispatch(showAlert('АСТАНАВИТЕСЬ!!!'))
        }
      }
      return next(action)
    }
  }
}

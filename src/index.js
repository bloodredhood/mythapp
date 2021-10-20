import React from 'react'
import './index.css'
import {render} from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { createStore, compose, applyMiddleware } from 'redux'
import {Provider} from 'react-redux'
import { rootReducer } from './components/redux/rootReducer'
import thunk from "redux-thunk"
import { forbiddenWordsMiddleware } from './components/redux/middleware'

const store = createStore(rootReducer, compose(
  applyMiddleware(
    thunk, forbiddenWordsMiddleware
  ),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);
import React from 'react'
import './index.css'
import {render} from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { createStore, compose } from 'redux'
import {Provider} from 'react-redux'
import { rootReducer } from './components/redux/rootReducer'

const store = createStore(rootReducer, compose(
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
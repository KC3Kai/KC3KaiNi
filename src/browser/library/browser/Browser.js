import Promise from 'bluebird'
import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import BrowserLayout from '../../views/BrowserLayout'

let defaultState = {

}

let store = createStore(function(state, action) {
  let newState = Object.assign(defaultState, state);
  switch (action.type) {
    case 'GoToTab':
      newState.selectedTab = action.tabIndex
      break
    default: break
  }
  return newState
})

class Browser {

  boot() {
    ReactDOM.render(
      <Provider store={store}>
        <BrowserLayout/>
      </Provider>,
      document.getElementById('root'))
    return Promise.delay(300)
  }

  openHome() {

  }

  openPlayspaces() {

  }

}

export { Browser }

import Promise from 'bluebird'
import React from 'react';
import ReactDOM from 'react-dom'
import BrowserLayout from '../../views/BrowserLayout'

class Browser {

  constructor() {

  }

  boot() {
    ReactDOM.render(<BrowserLayout/>, document.getElementById('root'))
    return Promise.delay(300)
  }

  openHome() {

  }

  openPlayspaces() {

  }

}

export { Browser }

import path from 'path'
import url from 'url'
import electron from 'electron'
import React from 'react';
import ReactDOM from 'react-dom'
import Promise from 'bluebird'

import BrowserLayout from '../views/BrowserLayout'

ReactDOM.render(<BrowserLayout/>, document.getElementById('root'))

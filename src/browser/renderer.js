// import path from 'path'
// import url from 'url'
// import fs from 'fs'
// import electron from 'electron'
// import Promise from 'bluebird'
import { KC3Lib } from './library'

let KC3 = new KC3Lib()

KC3.boot()
  .then(() => {
    KC3.themes.apply()
    KC3.plugins.startEnabled()
    KC3.browser.openHome()
    KC3.browser.openPlayspaces()
  })

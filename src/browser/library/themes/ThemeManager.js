import Promise from 'bluebird'

class ThemeManager {

  constructor() {

  }

  boot() {
    return Promise.delay(300)
  }

  apply() {
    require('../../../themes/default.js')
  }

}

export { ThemeManager }

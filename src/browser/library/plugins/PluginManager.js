import Promise from 'bluebird'

class PluginManager {

  constructor() {

  }

  boot() {
    return Promise.delay(300)
  }

  startEnabled() {

  }

}

export { PluginManager }

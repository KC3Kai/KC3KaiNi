import electron from 'electron'
import Services from './services'

class KC3 {

  constructor() {
    // this.Events = new Services.Event.ForRenderer()
    this.Store = new Services.Store.ForRenderer()
    // this.Plugin = new Services.Plugin.ForRenderer()
    // this.Playspace = new Services.Playspace.ForRenderer()
    this.main = electron.remote
    this.renderer = electron.app
  }

  start() {

  }

}

export default KC3

/*
KC3 {
  Events {
    on()
    once()
    off()
    emit()
  }
  Store {
    save(name, value)
    load(name)
  }
  Plugins: {
    registerWidget()
    registerContent()
  }
}
*/

import electron from 'electron'
import Services from './services'

class KC3 {

  constructor() {
    this.Events = new Services.Event.ForPlugin()
    this.Store = new Services.Store.ForPlugin()
    this.Plugin = new Services.Plugin.ForPlugin()
  }

  start() {

  }

  registerGlobals() {

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

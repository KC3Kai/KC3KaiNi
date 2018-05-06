import ElectronWindow from './ElectronWindow'

class WindowManager {

  constructor() {
    this.windows = {}
  }

  create(name, options) {
    this.windows[name] = new ElectronWindow(options.url, options)
  }

  get(name) {
    return this.windows[name] || null
  }

}

export default WindowManager

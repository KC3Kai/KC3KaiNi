import { BrowserWindow } from 'electron'

class ElectronWindow {
  get webContents() { return this.instance.webContents }

  constructor(url, options) {
    // Create electron browser window
    this.instance = new BrowserWindow(Object.assign({
      width: 800,
      height: 480,
      useContentSize: true,
      frame: false,
      thickFrame: false
    }, options))
    // Option to remove window menu
    if (typeof options.menu != undefined && !options.menu) {
      this.instance.setMenu(null)
    }
    // Open a specified url in options
    console.log('url', url);
    if (url) {
      this.instance.loadURL(url)
    }

  }

  show() {
    this.instance.show()
    return this
  }

  hide() {
    this.instance.hide()
    return this
  }

  close() {

  }

  inspect() {
    this.instance.webContents.openDevTools()
    return this
  }

  on() {
    this.instance.on(arguments)
    return this
  }


}

export default ElectronWindow

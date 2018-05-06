import electron from 'electron'
import url from 'url'
import path from 'path'
import Services from './services'

const isDevelopment = process.env.NODE_ENV !== 'production'

class KC3 {

  constructor() {
    this.Windows = new Services.Window.ForMain()
    // this.Events = new Services.Event.ForMain()
    this.Store = new Services.Store.ForMain()
    // this.Plugin = new Services.Plugin.ForMain()
    this.app = electron.app
  }

  start() {
    this.app.on('window-all-closed', () => {
      if (process.platform !== 'darwin') {
        this.app.quit()
      }
    })

    this.app.on('activate', () => {
      this.openMainRenderer()
    })

    this.app.on('ready', () => {
      this.openMainRenderer()
    })
  }

  openMainRenderer() {
    if (!this.Windows.get('main')) {
      this.Windows.create('main', {
        url: this.rendererUrl(),
        width: 800,
        height: 480,
        frame: false,
        thickFrame: false,
        menu: false,
        devTools: isDevelopment
      })
    }
  }

  rendererUrl() {
    return isDevelopment
      ? 'http://localhost:'+process.env.ELECTRON_WEBPACK_WDS_PORT
      : url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file',
        slashes: true
      })
  }

}

export default KC3

/*
KC3 {
  Windows : {
    create()
    get()
  }
  Store : {
    find()
    insert()
    update()
    delete()
  }
  Plugins : {
    registry()
    list()
    install()
    get()
  }
  Events {
    on()
    once()
    off()
    emit()
  }
  Playspaces: {
    create()
    get()
    delete()
  }
}
*/

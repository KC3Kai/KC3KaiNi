import path from 'path'
import url from 'url'
import electron from 'electron'
import windowState from 'electron-window-state'

const app = electron.app

// Application ready state
app.on('ready', () => {

  let winState = windowState({
    defaultWidth: 900,
    defaultHeight: 800,
  })

  let mainWindow = new electron.BrowserWindow({
    width: winState.width,
    height: winState.height,
    x: winState.x,
    y: winState.y,
    useContentSize: true,
    autoHideMenuBar: true,
    icon: __dirname + "/browser/assets/images/favicon.ico",
  })

  winState.manage(mainWindow)

  mainWindow.setMenu(null)
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'browser/html/main.html'),
    protocol: 'file:',
    slashes: true
  }))
  //mainWindow.webContents.openDevTools()

})

// All windows closed, just quit main process
app.on('window-all-closed', () => {
  app.quit()
})

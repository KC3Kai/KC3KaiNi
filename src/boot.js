import path from 'path'
import url from 'url'
import electron from 'electron'

const app = electron.app

// Application ready state
app.on('ready', () => {

  let mainWindow = new electron.BrowserWindow({
    width: 900,
    height: 800,
    useContentSize: true,
    autoHideMenuBar: true
  })
  mainWindow.setMenu(null)
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'browser/html/main.html'),
    protocol: 'file:',
    slashes: true
  }))
  mainWindow.webContents.openDevTools()

})

// All windows closed, just quit main process
app.on('window-all-closed', () => {
  app.quit()
})

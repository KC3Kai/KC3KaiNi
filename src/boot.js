import path from 'path'
import url from 'url'
import { app, BrowserWindow, Tray, Menu } from 'electron'
import windowState from 'electron-window-state'

let pluginName;
let tray;
let mainWindow;

switch (process.platform) {
    case 'win32':
        pluginName = 'pepflashplayer.dll'
        break
    case 'darwin':
        pluginName = 'PepperFlashPlayer.plugin'
        break
    case 'linux':
        pluginName = 'libpepflashplayer.so'
        break
}
app.commandLine.appendSwitch('ppapi-flash-path', path.join(__dirname, `/vendor/flash/${pluginName}`));

// Application ready state
app.on('ready', () => {

    let winState = windowState({
        defaultWidth: 900,
        defaultHeight: 800,
    })

    mainWindow = new BrowserWindow({
        width: winState.width,
        height: winState.height,
        x: winState.x,
        y: winState.y,
        useContentSize: true,
        autoHideMenuBar: true,
        icon: __dirname + "/browser/assets/images/favicon.ico",
        frame: false,
        webPreferences: {
            plugins: true,
        },
    })

    tray = new Tray(__dirname + "/browser/assets/images/favicon.ico")

    winState.manage(mainWindow)

    tray.setToolTip(`KC3改二 v${require('./package.json').version}`)
    tray.setContextMenu(Menu.buildFromTemplate([
        { label: 'KC3 Desktop Menu' },
        { role: 'quit' }
    ]))

    mainWindow.setMenu(null)
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'browser/html/main.html'),
        protocol: 'file:',
        slashes: true
    }))
    mainWindow.webContents.openDevTools()
    mainWindow.on('closed', () => mainWindow = null);
})

// All windows closed, just quit main process
app.on('window-all-closed', () => {
    app.quit()
})
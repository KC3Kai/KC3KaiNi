'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

var _electron = require('electron');

var _electron2 = _interopRequireDefault(_electron);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = _electron2.default.app;

// Application ready state
app.on('ready', function () {

  var mainWindow = new _electron2.default.BrowserWindow({
    width: 900,
    height: 800,
    useContentSize: true,
    autoHideMenuBar: true
  });
  mainWindow.setMenu(null);
  mainWindow.loadURL(_url2.default.format({
    pathname: _path2.default.join(__dirname, 'browser/html/main.html'),
    protocol: 'file:',
    slashes: true
  }));
  mainWindow.webContents.openDevTools();
});

// All windows closed, just quit main process
app.on('window-all-closed', function () {
  app.quit();
});
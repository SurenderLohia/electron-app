const electron = require('electron');
const {app} = require('electron');
const {BrowserWindow} = require('electron');

function creatWindow() {
  let win = new BrowserWindow({width: 800, height: 600, show: false, title: 'My Electron App'});

  win.on('close', () => {
    win = null;
  });

  win.loadURL(`file://{__dirName/index.html}`);

  win.show();
}

app.on('ready', creatWindow);







const {app, globalShortcut} = require('electron');

app.on('ready', () => {
  const ret = globalShortcut.register('CommandOrControl+X', () => {
    console.log('CommandOrControl+X is pressed', '==== Oh! cool');
  });

  if(!ret) {
    console.log('registration failed');
  }

  console.log(globalShortcut.isRegistered('CommandOrControl+X'));
});

app.on('will-quit', () => {
  globalShortcut.unregister('CommandOrControl+X');

  globalShortcut.unregisterAll();
});


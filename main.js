const { app, BrowserWindow } = require('electron')

app.whenReady().then(() => {
  const win = new BrowserWindow({
    width: 900,
    height: 700,
    frame: false,
    webPreferences: { nodeIntegration: false, contextIsolation: true }
  })
  win.loadURL('https://chat.openai.com')
})

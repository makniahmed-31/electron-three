const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      // Remove preload option if not needed
      // preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: false, // Add this if using nodeIntegration
    },
  });

  mainWindow.loadFile("src/index.html");
}

app.whenReady().then(createWindow);

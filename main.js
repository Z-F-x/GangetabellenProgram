const { app, BrowserWindow } = require('electron');

function createWindow() {
    // Create the browser window.
    const win = new BrowserWindow({

        titleBarOverlay: false,

        width: 800,
        height: 600,    
        webPreferences: {
            webSecurity: true,
            nodeIntegration: false,
            contextIsolation: true,
        }
    });

    // and load the index.html of the app.
    win.loadFile('document.html');
    win.setMenu(null);  // This line removes the menu bar

}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
const isDarwin = process.platform === 'darwin';
const isWinNix = process.platform === 'win32' || process.platform === 'linux';
const createWindow = () => {
    const win = new electron_1.BrowserWindow({
        width: 1000,
        height: 700,
        frame: isWinNix,
        titleBarStyle: isDarwin ? 'hidden' : 'default',
        trafficLightPosition: { x: 13, y: 16.5 },
        webPreferences: {
            contextIsolation: true,
        },
    });
    win.loadURL('http://localhost:5173');
};
electron_1.app.whenReady().then(() => {
    createWindow();
    electron_1.app.on('activate', () => {
        if (electron_1.BrowserWindow.getAllWindows().length === 0)
            createWindow();
    });
});
electron_1.app.on('window-all-closed', () => {
    if (process.platform !== 'darwin')
        electron_1.app.quit();
});

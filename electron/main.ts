import { app, BrowserWindow } from 'electron';
import path from 'path';

const isDarwin = process.platform === 'darwin';
const isWinNix = process.platform === 'win32' || process.platform === 'linux';

const createWindow = () => {
    const win = new BrowserWindow({
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

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
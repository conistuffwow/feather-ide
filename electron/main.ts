import { app, BrowserWindow } from 'electron';
import path from 'path';

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1000,
        height: 700,
        frame: false,
        titleBarStyle: 'hidden',
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
})
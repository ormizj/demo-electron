import { app, BrowserWindow } from "electron";
import path from "path";

app.whenReady().then(() => {
  const win = new BrowserWindow();

  if (process.env.VITE_DEV_SERVER_URL) {
    win.loadURL(process.env.VITE_DEV_SERVER_URL);
    win.webContents.openDevTools();
  } else {
    win.loadFile(
      path.join(process.env.APP_ROOT!, ".output/public", "index.html")
    );
  }
});

import { app as e, BrowserWindow as o } from "electron";
import "path";
e.whenReady().then(() => {
  new o().loadURL(process.env.VITE_DEV_SERVER_URL);
});

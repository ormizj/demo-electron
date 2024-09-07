import { app, BrowserWindow } from "electron";

app.whenReady().then(() => {
  new BrowserWindow().loadURL(process.env.VITE_DEV_SERVER_URL!);
});

// app.whenReady().then(() => {
//   // new BrowserWindow().loadURL(process.env.VITE_DEV_SERVER_URL!);
//   const win = new BrowserWindow({
//     width: 800,
//     height: 600,
//   });
//   win.loadFile("./dist/win-unpacked/resources/app.asar");
//   // console.log(__dirname);
// });

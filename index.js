const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  })
  win.loadFile('index.html')
}
app.whenReady().then(() => {
  createWindow()
})
















































// let myOBJ = {
// 	msg0: 'Electron is shocking',
// 	msg1: 'Electron is nothing without Tesla',
// 	msg2: 'Electron is Green!',
// };

// console.log(`Hello from ${myOBJ.msg1}`);
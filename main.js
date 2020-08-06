const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

let win;

function createWindow(){
    // Create browser window
    win = new BrowserWindow({width:800, height:800, icon:__dirname+'/img/logo temp.png'});
    
    // Load index.html
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    // Open devtools
    win.webContents().openDevTools();

    win.on('closed', () => {
        win = null;

    });
}

// Run create window function
app.on('ready', createWindow)
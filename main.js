const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

let win;

function createWindow(){
    win = new BrowserWindow({width:800, height:800, icon:__dirname+'/img/logo temp.png'});
    
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
    }));
}
'user strict';

const CONFIG = require('./config');
const colors = require('colors');
const http = require('http');

const serverExpressApp = require('./server');

var server = http.createServer(serverExpressApp);

server.listen(CONFIG.SERVER.PORT);

server.on('listening', function () {
    console.log(colors.yellow(
        'server started: ' + 'http://' + CONFIG.SERVER.HOST + ":" + CONFIG.SERVER.PORT
    ));
});

server.on('request', function (request) {
    //console.dir(request);
    console.log("REQUEST: " + colors.green(request.url));
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const httpModule = require("http");
const path = require("path");
const SyslogServer = require("syslog-server");
const socketIo = require("socket.io");
const app = express();
const http = httpModule.createServer(app);
const io = socketIo(http);
const server = new SyslogServer();
const port = process.env.PORT || 3000;
/* Serves static files */
app.use(express.static(path.join(path.join(__dirname, '../public'))));
/* Default (homepage) route */
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});
/* Sockets listener */
io.on('connection', (socket) => {
    server.on("message", (value) => {
        let logData = value.date + " " + value.host + " " + value.protocol + " " + value.message;
        socket.emit('syslog-data', logData);
    });
});
/* Starts the HTTP server and listens to its port */
http.listen(port, () => {
    console.log(`listening on *:${port}`);
});
/* Starts the Syslog server and listens to its port */
server.start({
    port: 514,
    address: "127.0.0.1",
    exclusive: true
}, () => {
    console.log("Syslog server started!");
});
//# sourceMappingURL=app.js.map
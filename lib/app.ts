import * as express from 'express';
import * as httpModule from 'http';
import * as path from 'path';
import * as SyslogServer from "syslog-server";
import * as socketIo from 'socket.io';

const app: express.Application = express();
const http = httpModule.createServer(app);
const io: socketIo.Server = socketIo(http);
const server: SyslogServer = new SyslogServer();
const portHttp: string | number = process.env.PORT || 3000;

/* Serves static files */
app.use(express.static(path.join(path.join(__dirname, '../public'))));

/* Default (homepage) route */
app.get('/', (req: express.Request, res: express.Response) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

/* Sockets listener */
io.on('connection', (socket: any) => {
    server.on("message", (value: any) => {
        let logData: string = value.host + " " + value.protocol + " " + value.message;
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

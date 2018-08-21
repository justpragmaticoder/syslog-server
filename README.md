# Syslog server with the front-end part
It is a very simple syslog server (based on UDP/Datagram Sockets) with HTTP server for serving a web page and transfering logs to the front-end. The HTTP client gets logs data via sockets and sees a log flow on the web page.
## Built With
- [Typescript](https://github.com/Microsoft/TypeScript)
- [Express](http://expressjs.com)
- [Socket.io](https://socket.io/)
- [syslog-server](https://www.npmjs.com/package/syslog-server)
## Getting Started
### Download
Clone the project via the next command:
```
git clone https://github.com/vprotcykovich/syslog-server.git
```
### Install dependencies
Open the project folder in terminal and use the next command:
```
npm install
```
### Compile typescript files
Open the project folder in terminal and use the next command:
```
tsc -w
```
As a result, the project directory will get a new folder ("dist") with compiled ts files.
### Server starting
Open the "dist" folder in terminal and use the next command:
```
node app.js
```
Server should start to work. Now you can write "localhost:3000" or "127.0.0.1:3000" in your browser's field on the local machine and be ready to see a log flow (when the syslog server will start to receive logs on 514th port).
### What does syslog client/server need to start sending logs(events) to our syslog(UDP) server
Add the following line to the RULES section of /etc/rsyslog.conf or in RHEL-5 at the end of the /etc/rsyslog.conf
```
# remote host is: name/ip:port, e.g. 192.168.0.1:514, port optional
*.* @remote-host:514
```
You can also specify the severity to send, for example info messages:
```
*.info      @remote-host:514
```
Restart rsyslog:
```
[root@client ~]# service rsyslog restart
```
In RHEL-5 first stop the default syslog deamon and after that restart the rsyslog:
```
[root@client ~]# service syslog stop
[root@client ~]# service rsyslog restart
```
## Authors
- [Vasyl Protsukovych](https://www.facebook.com/vasiliy.protsukovych)

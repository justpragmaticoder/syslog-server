# Syslog server with the front-end part
It is a very simple syslog server (based on UDP/Datagram Sockets) with HTTP server for serving a web page and transfering logs to the front-end. The HTTP client gets logs data via sockets and sees a log flow on the web page.
## Getting Started
**Download**
Clone the project via the next command:
```
git clone https://github.com/vprotcykovich/syslog-server.git
```
**Install dependencies**
Open the project folder in terminal and use the next command:
```
npm install
```
**Compile typescript files**
Open the project folder in terminal and use the next command:
```
tsc -w
```
As the result, project directory will get a new folder (dist) with compiled ts files.

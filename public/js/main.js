$(function () {
    const socket = io();
    socket.on('syslog-data', (msg) => {
        $('#messages').append($('<li>').text(msg));
    });
});
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dgram = require("dgram");
const client = dgram.createSocket('udp4');
let testMsg = Buffer.from('siddheshrane');
setInterval(() => {
    client.send(testMsg, 514, 'localhost', (error) => {
        if (error) {
            client.close();
            return;
        }
        console.log('Data sent!!!');
    });
}, 2000);
//# sourceMappingURL=client-test.js.map
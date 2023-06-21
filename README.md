WS
const WebSocket = require("ws");

const createSocket = endpoint => {
    return new WebSocket(`ws://${host}:${port}/${endpoint}?password=${password}`);
};

const socket = createSocket("socket/player/song");
socket.onmessage = message => {
    const data = JSON.parse(message.data);
    console.log(data);
};






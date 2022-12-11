const express = require('express');
const fs = require('fs');

const server = express();

//server.get('/', (reg, res) => {
//    res.send("Hello server");
//})

server.use('/', express.static('dist'));

server.listen(3000, () => { console.log('Server port 3000...') })
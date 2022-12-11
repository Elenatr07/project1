const express = require('express');
const fs = require('fs');

const server = express();

//server.get('/', (reg, res) => {
//    res.send("Hello server");
//})

//server.use('/', express.static('dist')); //для запуска после финальной сборки
server.get('/chat/:id', (req, res) => {

})
server.listen(3000, () => { console.log('Server port 3000...') })
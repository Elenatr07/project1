const express = require('express');
const fs = require('fs');

const server = express();

//server.get('/', (reg, res) => {
//    res.send("Hello server");
//})

server.use('/', express.static('dist')); //для запуска после финальной сборки
server.get("/chat/:id", (req, res) => {
    let data = fs.readFile(`./server/db/chat_${req.params.id}.json`, "utf-8", (err, data) => {
        if (!err) {
            data = JSON.parse(data);
            res.json(data);
        }
    })
});
server.listen(3000, () => { console.log('Server port 3000...') })
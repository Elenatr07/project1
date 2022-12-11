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
server.post('/chat/:id', (req, res) => {
    let data = fs.readFile(`./server/db/chat_${req.params.id}.json`, "utf-8", (err, data) => {
        if (!err) {
            data = JSON.parse(data);
            data[req.body.messageId] = { author: req.body.author, text: req.body.text };
            fs.writeFile(`./server/db/chat_${req.params.id}.json`, JSON.stringify(data, null, ' '), err => {
                if (!err) {
                    res.json({ status: true });
                }
            })
        }
    })
})

server.listen(3000, () => { console.log('Server port 3000...') })
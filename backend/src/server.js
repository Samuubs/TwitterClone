const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.send('Hello World')
})

app.listen(3333, () => {
    console.log('Conectado na porta 3333')
});
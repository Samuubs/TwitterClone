const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes')
const socketio = require('socket.io')
const http = require('http')
const cors = require('cors');

const app = express()
const server = http.Server(app)
const io = socketio(server);

mongoose.connect('mongodb://samu:45967812sam@ds263928.mlab.com:63928/twitter_clone', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use((req, res, next) => {
    req.io = io;
    return next()
})

app.use(cors());
app.use(express.json())
app.use(routes)

server.listen(3333)
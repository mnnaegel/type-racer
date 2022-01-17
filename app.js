const express = require('express')
const app = express();
const socketio = require('socket.io')
const mongoose = require('mongoose')

const expressServer = app.listen(3001)
// const io = socketio(expressServer);
const io=socketio(expressServer,{
    cors:{
        origin:'http://localhost:3000'
    }
});

const Game = require('./Models/Game')
const QuotableAPI = require('./QuotableAPI')

mongoose.connect('mongodb://localhost:27017/typeracerTutorial',{useNewUrlParser:true,useUnifiedTopology:true},()=>{console.log('successfully connected to database')})
io.on('connect',(socket)=>{
    socket.emit('test', 'this is from the server');
})
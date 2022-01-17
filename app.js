const express = require('express')
const app = express();
const socketio = require('socket.io')
const mongoose = require('mongoose')

const expressServer = app.listen(3001)
const io = socketio(expressServer);


mongoose.connect('mongodb://localhost:27017/typeracerTutorial',{useNewUrlParser:true,useUnifiedTopology:true},()=>{console.log('successfully connected to database')})

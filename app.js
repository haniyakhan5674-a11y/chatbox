const express = require('express');
const app =express();
// server set up
const http = require('http');
const server = http.createServer(app);
const {Server} = require('socket.io');
const io= new Server(server)
app.set("view engine" ,'ejs')
app.use(express.static("./public"))

 app.use(express.json())
 app.use(express.urlencoded({extended : true}))

 //
 app.get('/',(req,res)=>{
    res.render('index')
 })

 //
 io.on('connection',(socket)=>{
      console.log("A socket or a user is attached ");
      socket.on ("message",(message)=>{
    socket.broadcast.emit('message',message)
      })


 })

 server.listen(3000,()=>{
    console.log("server is surning on port 3000")
 })
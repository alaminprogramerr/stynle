const express=require('express')
const io=require('socket.io')
const http=require('http')
const app=express()
const server=http.createServer(app)
const socket=io(server)
const PORT=process.env.PORT||5000
const mongoos=require('mongoose')



mongoos.connect('mongodb://localhost/stynly',{useUnifiedTopology:true,useNewUrlParser:true},(err=>{
    if(err){
        console.log(err)
        return
    }
    console.log('Mongodb  connected')
}))
server.listen(PORT,()=>console.log(`Server started on port `,PORT))
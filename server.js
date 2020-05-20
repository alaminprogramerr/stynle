const express=require('express')
const io=require('socket.io')
const http=require('http')
const app=express()
const server=http.createServer(app)
const socket=io(server)
const PORT=process.env.PORT||5000
const mongoos=require('mongoose')
const userRouter=require('./router/userRouter')
const bodyParser=require('body-parser')
const cors =require('cors')

mongoos.connect('mongodb://localhost/stynly-app',{useUnifiedTopology:true,useNewUrlParser:true},(err=>{
    if(err){
        console.log(err)
        return
    }
    console.log('Mongodb  connected')
}))

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
 

app.use(userRouter)


server.listen(PORT,()=>console.log(`Server started on port `,PORT))
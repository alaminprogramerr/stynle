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
const serviceRouter=require('./router/serviceRouter')

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



// const arr=[
//     {name:'alamin',id:1},
//     {name:'ayrin',id:2},
//     {name:'limon',id:3},
//     {name:'jon',id:4},
//     {name:'deo',id:5},
//     {name:'alex',id:6},
//     {name:'brdan',id:7}
// ]
// arr.forEach((item,id)=>{
//     console.log(item,id)
//     if(item.name=='ayrin'){
//         arr.splice(id,1)
//     }
// })
// console.log(arr)
 

app.use(userRouter)
app.use(serviceRouter)
server.listen(PORT,()=>console.log(`Server started on port `,PORT))
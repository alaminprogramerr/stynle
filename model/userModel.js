const mongoose=require('mongoose')
const Schema=mongoose.Schema

const userSchema=new Schema({
    name:String,
    email:String,
    phoneNumber:String,
    userType:String,
    address:String,
    about:String,
    password:String,
    rating:[],
    serviceRequest: []
})



const userModel=mongoose.model('userModel',userSchema)
module.exports =userModel
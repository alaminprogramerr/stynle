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
    rating:Array,
    serviceRquest:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'serviceRequestModel'
        }
    ]
})



const userModel=mongoose.model('userModel',userSchema)
module.exports =userModel
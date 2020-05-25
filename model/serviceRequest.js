const mongoose=require('mongoose')
const Schema=mongoose.Schema

const serviceRequest=new Schema({
    category:String,
    price:String,
    serviceRquest:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'userModel'
        }
    ]
})



module.exports =mongoose.model('serviceRequestModel',serviceRequest)

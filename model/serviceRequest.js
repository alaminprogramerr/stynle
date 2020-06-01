const mongoose=require('mongoose')
const Schema=mongoose.Schema

const serviceRequest=new Schema({
    category:String,
    price:String,
    seller: {
        type: Schema.Types.ObjectId,
        ref: 'userModel'
    },
    client: {
        type: Schema.Types.ObjectId,
        ref: 'userModel'
    },
    read:Boolean,
    accept:Boolean,
    document:String
},{timestamps:true})
module.exports =mongoose.model('serviceRequestModel',serviceRequest)
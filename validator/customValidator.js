const validator=require('validator')
const registerValidator= (req)=>{
    const {name,email,phoneNumber,address,about,password,confirmPassword}=req.body
    let error={}
    console.log(req.body)
    if(!name){
        error.name="Name required !!"
    }
    if(!email){
        error.email="Email required !!"
    }else if(!validator.default.isEmail(req.body.email)){
        error.email="Email not valid!!"
    }
    if(!phoneNumber){
        error.phoneNumber="Phone number required !!"
    }
    if(!address){
        error.address="Address required !!"
    }
    if(!about){
        error.about="Write something about yours !!"
    }
    if(!password){
        error.password="Password required !!"
    }
    if(!confirmPassword){
        error.confirmPassword="Confirm password  required !!"
    }else if(password!==confirmPassword){
        error.confirmPassword="Confirm  password does not match with password !!"
    }
    
    return{
        isValid:Object.keys(error).length===0,
        error:error
    }
}
const loginValidator=(req)=>{
    let err={}
    if(!req.body.email){
        err.email="Email required !!!"
    } else if(!validator.default.isEmail(req.body.email)){
        err.email="Email not valid"
    }
    if(!req.body.password){
        err.password="Password required !!!"
    }
    return{
        isValid:Object.keys(err).length===0,
        err:err
    }
}
const serviceValidator=(req)=>{
    const {category,price,seller,client}=req.body
   let err={}
    if(!category){
        err.category="Category required"
    }         
    if(!price){
        err.price="Price required"
    }
   if(!seller){
    err.seller="Seller ID required"
    }
   if(!client){
       seller.client="Client ID required"
   }
   return{
       isValid:Object.keys(err).length===0,
       err:err
   }
}
module.exports={
    loginValidator,
    registerValidator,
    serviceValidator
}
const registerValidator= (req)=>{
    const {name,email,phoneNumber,userType,address,about,password,confirmPassword}=req.body
    let error={}
    if(!name){
        error.name="Name required !!"
    }
    if(!email){
        error.email="Email required !!"
    }
    if(!phoneNumber){
        error.phoneNumber="Phone number required !!"
    }
    if(!userType){
        error.userType="Select your type !!"
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
    }
    
    return{
        isValid:Object.keys(error).length===0,
        error:error
    }
}

module.exports={
    registerValidator
}
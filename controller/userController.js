const customValidator=require('../validator/customValidator')
const userModel=require('../model/userModel')

const register=(req,res)=>{
    const verify=customValidator.registerValidator(req)
    if(!verify.isValid){
        return res.status(400).json(verify.error)
    }
    new userModel({
        name:req.body.name,
        email:req.body.email,
        phoneNumber:req.body.phoneNumber,
        userType:req.body.userType,
        address:req.body.address,
        about:req.body.about,
        password:req.body.password,
        confirmPassword:req.body.confirmPassword
    }).save()
    .then(user=>{
        console.log(user)
        res.status({massage:'Register successfull !!'})
    })
    .catch(error=>{
        console.log(error)
        res.status(500).json({massage:"Server error !!"})
    })
}
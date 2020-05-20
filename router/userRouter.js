const router=require('express').Router()
const userController=require('../controller/userController')



// testing the router is it working or not
router.get('/welcome',(req,res)=>{
    res.status(200).json({massage:'welcome to application'})
})

router.post('/register',userController.register)
router.post('/login',userController.login)
router.get('single-user/:id',userController.getSingleUser)

module.exports=router
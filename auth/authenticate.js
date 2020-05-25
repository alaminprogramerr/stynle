const jwt =require('jsonwebtoken')
const authenticate=(req,res,next)=>{
    try {
        let token=req.headers.authorization
        const decoded=jwt.verify(token,'st_app')
        req.user=decoded
        console.log('Authentication success !!')
        next()
    } catch (err) {
        return res.status(400).json({massage:'Authontication failed'})
        
    }
}
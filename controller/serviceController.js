const serviceRequestModel=require('../model/serviceRequest')
const UserModel=require('../model/userModel')
const validator=require('../validator/customValidator')
createServiceRequest=(req,res)=>{
    const verify=validator.serviceValidator(req)
    if(!verify.isValid){
        return res.status(400).json(verify.err)
    }
    const {category,seller,client,price} =req.body
    let serviceRequest= new  serviceRequestModel({
        category,
        price,
        seller:seller,
        client:client,
        read:false,
        accept:false
    })
    serviceRequest.save()
    .then(service=>{
        UserModel.findById(seller)
        .then(sellerAcc=>{
            sellerAcc.serviceRequest.unshift(service)
            sellerAcc.save()
            .then(updatedSellerAcc=>{
                console.log('updatedSellerAcc')
                console.log(updatedSellerAcc)
                UserModel.findById(client)
                .then(clientAcc=>{
                    console.log(' cliet acc is')
                    console.log(clientAcc.serviceRequest)
                    clientAcc.serviceRequest.unshift(service)
                    clientAcc.save()
                    .then(updatedClientAcc=>{
                        console.log('updatedClientAcc')
                        console.log(updatedClientAcc)
                    })
                    .catch(err=>{        
                        res.status(500).json({massage:'server error'})
                        return console.log(err)
                    })
                })
            })
            .catch(err=>{
                res.status(500).json({massage:'server error'})
                return console.log(err)
            })

        })
        console.log(service)
        return res.status(200).json(service)
    })
    .catch(err=>{
        res.status(500).json({massage:'server error'})
        return console.log(err)
    })

}


module.exports={
    createServiceRequest
}
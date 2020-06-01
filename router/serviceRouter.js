const ServiceRouter=require('express').Router()
const serviceController=require('../controller/serviceController')

ServiceRouter.post('/create-service',serviceController.createServiceRequest)

module.exports=ServiceRouter
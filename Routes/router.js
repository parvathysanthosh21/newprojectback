const express =require('express')
const router = new express.Router()
const userController = require('../Controller/userController')
// define path
// resolve register http request is post 
// route for register
router.post('/user/register',userController.register)

// route for login
router.post('/user/login',userController.login)
// export router
module.exports=router
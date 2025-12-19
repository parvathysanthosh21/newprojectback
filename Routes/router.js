const express =require('express')
const router = new express.Router()
const userController = require('../Controller/userController')
const projectController = require('../Controller/projectController')
const jwtMiddleware = require('../Middleware/jwtmiddleware')
const multerConfig = require('../Middleware/multerMiddleware')
// define path
// resolve register http request is post 
// route for register
router.post('/user/register',userController.register)

// route for login
router.post('/user/login',userController.login)
// router specific middleware
// route for add project
router.post('/user/addproject',jwtMiddleware,multerConfig.single('projectImage'),projectController.addProjects )

// gethomeprojects
router.get('/home-projects',projectController.getHomeProjects)

// getAllProjects
router.get('/all-projects',jwtMiddleware,projectController.getAllProjects)

// getuserProjects
router.get('/user-projects',jwtMiddleware,projectController.getUserProjects)


//edit
router.put('/project/edit/:pid',jwtMiddleware,multerConfig.single("projectImage"),projectController.editProject)


// delete
router.delete('/project/remove/:pid',jwtMiddleware,projectController.removeProject)

// updateuser

router.put('/user/edit',jwtMiddleware,multerConfig.single("profileImage"),userController.editUser)


// export router
module.exports=router
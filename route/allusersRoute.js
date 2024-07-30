const express = require('express')

const router=express.Router();

const userController=require('../controller/userController')


router.route('/').get(userController.getAllUser)
router.route('/:id').get(userController.getID).patch(userController.updateUser)
router.route('/status/:id').get(userController.statusChange)

module.exports=router
const express = require('express')

const router=express.Router();

const messageController=require('../controller/messageController')

router.route('/').post(messageController.sendMessage).get(messageController.getMessage)

module.exports=router
const mongoose = require('mongoose');

const messageSchema=mongoose.Schema({
    name:{
        type:String
    },
    image:{
        type:String
    },
    email:{
        type:String
    },
    reciverEmail:{
        type:String
    },
    CoreId:{
        type:String
    },
    messageText:{
        type:String
    },
    seen:{
        type:Boolean
    },
    sendTime:{
        type:String
    },
},{
    timestamps:true
})

const message=mongoose.model('message',messageSchema)

module.exports=message
const mongoose = require('mongoose');

const userSchema=mongoose.Schema({
    name:{
        type:String,
     
    },
    email:{
        type:String,
     
    },
    role:{
        type:String,
        enum:['user','admin']
      
    },
    image:{
        type:String
    },
    status:{
        type:String,
        enum: ['active', 'blocked'],
        default: 'active' }
},{
    timestamps:true
})

const user=mongoose.model('user',userSchema)

module.exports=user
const message=require('../model/message')

module.exports.sendMessage=async(req,res)=>{
    try {
        const createMessage=new message(req.body);
        const result=await createMessage.save()
        res.status(200).json(result)
    } catch (error) {
        console.log(`error${error}`);
      res.status(400).json(`error${error}`)
    }
}
module.exports.getMessage=async(req,res)=>{
    try {
        const result=await message.find({})
        res.status(200).json(result)
    } catch (error) {
        console.log(`error${error}`);
      res.status(400).json(`error${error}`)
    }
}


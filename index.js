const express = require('express')
const cors = require('cors')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose');
const port =process.env.PORT|| 3000
app.use(express.json())
app.use(cors())



mongoose.connect(process.env.DBConnection, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000, 
  socketTimeoutMS: 45000,
}).then(()=>{
    console.log('DB Connected')
})


// router manage

const userRouter=require('./route/userRoute')
const allusersRoute=require('./route/allusersRoute')
const messageRoute=require('./route/messageRoute')

app.use('/api/v1/user',userRouter)
app.use('/api/v1/users',allusersRoute)
app.use('/api/v1/message',messageRoute)



app.get('/', (req, res) => {
  res.send('Server Running!')

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log('Server Running!')
})
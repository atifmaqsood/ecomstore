const express = require('express')
const app = express()
const port = 5000
const dotenv = require('dotenv')
const mongoose = require('mongoose');
const authRouter = require('./routes/auth')
const userRouter = require('./routes/userRoute')
dotenv.config()
// Parse JSON requests
app.use(express.json())

mongoose.connect(process.env.MONGOOSE_URL).then(console.log("MongoDB Connected")).catch((err)=>{console.log(err)});

app.use("/api/auth" , authRouter);

app.use("/api/users", userRouter)

app.use('/', (req, res) => {
  res.send('App is running')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
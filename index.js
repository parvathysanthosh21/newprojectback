//Loads .env file contents into process.env by default.
require('dotenv').config()
const express =require('express')
const cors = require('cors')
const router =require('./Routes/router')
require('./DB/connection')
// create express application
const pfserver= express()

pfserver.use(cors())
pfserver.use(express.json())
pfserver.use(router)
const PORT =4000 || process.env.PORT
pfserver.listen(PORT,()=>{
    console.log(`Project server running at port ${PORT}`);
    
})
//hhtp get request from localhost:4000/
pfserver.get('/',(req,res)=>{
    res.send(`<h1>Project fair server started and waiting for client request</h1>`)
})

// pfserver.post('/',(req,res)=>{
//     res.send("Post request")
// })
// pfserver.put('/',(req,res)=>{
//     res.send("Put request")
// })
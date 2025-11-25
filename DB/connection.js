const mongoose=require('mongoose')
const connectionString = process.env.DATABASE
mongoose.connect(connectionString).then(()=>{
    console.log(`MongoDb Atlas Connection Successfully connect with Pfserver`);
    
}).catch((err)=>{
    console.log(`Mongodb Connection Failed!!!, Error:${err}`);
    
})
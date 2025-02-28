const express=require('express')
const mongoose=require('mongoose')
require('dotenv').config()
const User=require('./models/User')
const bcrypt=require('bcryptjs')

const app=express()
const PORT=3000
app.use(express.json());

//homepage
app.get('/',(req,res)=>{
    res.send('')
})

//signup
app.post('/register',async(req,res)=>{
    const {username,email,password}=req.body
    try{
        const hashedPassword= await bcrypt.hash(password,10)
        const user=new User({username,email,password:hashedPassword})
        await user.save()
        res.json({ message:"user Registered.."})
        console.log("user registration compleated")

    }
    catch(err)
    {
        console.log(err)
    }
})



mongoose.connect(process.env.MONGO_URL).then(
()=>console.log('DB connected ')
).catch(
    (err)=>console.log(err)
)
app.listen(PORT,(err)=>{
    if(err)
    {
        console.log(err)
    }
    console.log("server is running on port:"+PORT)
})
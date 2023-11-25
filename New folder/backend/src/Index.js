const express = require("express");
const app = express();
const mongoose = require('mongoose');
const Register = require("./model/Register");

const Query = require('./model/Query');
const ContactUs = require('./model/Contactus');
const port = process.env.PORT ||2000;
const cors = require('cors');

const session = require('express-session')

app.use(express.json());
app.use(cors());
mongoose.connect("mongodb+srv://ayushh:ayush@cluster0.yqrvv.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log('connected to db');
})
.catch((e)=>{
    console.log(e);
})



app.post("/signin",async(req,res)=>{
    const email = req.body.email;
    const user = await Register.findOne({email:email});
    if(user){
        if(user.password==req.body.password){
            console.log("user verified");
            res.send(`welcome ${user.username} !`).status(200);
        }
        else{
            res.send("wrong password!").status(401);
        }
    }
    else{
        console.log("User not found");
        res.send("User not found").status(401);
    }

    
})
app.post('/register',async(req,res)=>{
    const query = await new Register({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    })
    const insertQ = await query.save();
    res.send(insertQ);
    console.log(insertQ);
})



app.listen(port,(req,res)=>{
    console.log(`connected at ${port}`);
})
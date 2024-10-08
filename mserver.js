const express=require("express");
const app=express();
const User=require("./models/userModel");


const mongoose=require("mongoose");
const { MongoUnexpectedServerResponseError } = require("mongodb");
mongoose.connect("mongodb+srv://userroot:Password4001@cluster0.cmk41.mongodb.net/ecommerce")
.then((response)=>{
    console.log("Db Connected...")
}).catch((err)=>{
    console.log("Error ",err);
})
app.get("/addUser",(req,res)=>{

    let obj={};
    obj.username="Test";
    obj.password="testpassword";
    //obj.firstname="firstname ";
    //obj.lastname="lastname"
    const user=new User(obj);
    user.Name="First Last";

    console.log(user.firstname);
res.end();
    // user.save().then((data)=>{
    //     console.log(data);
    //     res.end();
    // })


})
app.get("/getUsers",(req,res)=>{

    //dbinstance.collection("users").find
    //User.find
    //User.findOneandUpdate({criteria},{})
    //update users set Name='CodeQuotient', where username='Test'
    //User.findOneandUpdate({"username":"Test"},{"name":"Code"})
    User.find({},{username:1}).then((response)=>{
    res.json(response);

    })
})
app.listen(3000);

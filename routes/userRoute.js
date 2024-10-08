const express=require("express");
const userRoute=express.Router();
const path=require("path");
//static routing
userRoute.get("/dashboard",(req,res)=>{

    res.sendFile(path.join(__dirname,"../Dashboard.html"));

})
userRoute.get("/profile",(req,res)=>{
    res.sendFile(path.join(__dirname,"../Profile.html"));
})
module.exports=userRoute;

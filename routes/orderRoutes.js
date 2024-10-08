const express=require("express");
const orderRoute=express.Router();
const path=require("path");
//static routing
orderRoute.get("/",(req,res)=>{

    res.send("Orders Dashboard")
  //  res.sendFile(path.join(__dirname,"../Dashboard.html"));

})
//Dynamic
orderRoute.get("/details/:x-:y",(req,res)=>{
    res.send("Order Details page "+req.params.x+ " "+req.params.y);

    //res.sendFile(path.join(__dirname,"../Profile.html"));
})
//Pattern
// orderRoute.get("/ab*c",(req,res)=>{
//   res.send("Pattern called");

// })
module.exports=orderRoute;

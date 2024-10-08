const express=require("express");
const app=express();
const fs=require("fs");
app.use(express.static("."));
app.set("view engine","ejs");
//app.set("views",)
app.get("/test",(req,res)=>{
    res.render("home",{msg:"CodeQuotient",courses:["one","tow","three"]});

})
app.get("/users",(req,res)=>{
    let users=JSON.parse(fs.readFileSync("users.json"));
    res.json(users);
    
//    res.render("users",{users:users});

})


app.listen(3000);

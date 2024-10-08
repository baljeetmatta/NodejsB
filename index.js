const express=require("express");
const path=require("path");
const fs=require("fs");
const session=require("express-session");
const userRoute=require("./routes/userRoute");
const orderRoute=require("./routes/orderRoutes");

const app=express();//http.createServer
app.set("view engine","ejs");

//MONGODB 
let dbinstance;

const client=require("mongodb").MongoClient;
client.connect("mongodb+srv://userroot:Password4001@cluster0.cmk41.mongodb.net/")
.then((server)=>{
    console.log("DB connected...")
    dbinstance=server.db("ecommerce");

}).catch((err)=>{
    console.log("Error:",err)
})
//db.users.findOne({})
//db.users.find({});
//db.users -> dbinstance.collection("users")
app.get("/getUsers",(req,res)=>{

dbinstance.collection("users").find({}).toArray()
.then((data)=>{
res.json(data);
}).catch((err)=>{

    res.json([]);

})

})
app.get("/showUsers",(req,res)=>{

    dbinstance.collection("users").find({}).toArray()
    .then((data)=>{
    //res.json(data);
    res.render("Showall",{users:data});

    }).catch((err)=>{
    
        console.log(err);

        res.json([]);
    
    })
    
    })
//insertOne(obj)
//return object=>acknowledged:true, insertedid:_id
//insertMany([])
app.get("/addUser",(req,res)=>{
    let obj={};
    obj.name="Test";
    obj.username="Testuser";
    obj.password="testpass"
    dbinstance.collection("users").insertOne(obj)
    .then((response)=>{
        console.log(response);
        res.redirect("/getUsers");
    })
})
app.use(session({
    saveUninitialized:true,
    secret:'asd#@4sdf$5',
    resave:false
}))
app.use("/users",auth,userRoute);
app.use("/orders",auth,orderRoute);

function auth(req,res,next)
{
    if(req.session.user)
        next();
    else
    res.redirect("/login");


}
// /dashboard  /users/dashboard
// /profile    /users/profile

app.get("/dashboard.html",(req,res)=>{
    if(req.session.user)
        res.sendFile(path.join(__dirname,"./Dashboard.html"));
    else
    res.redirect("/Login");
})

app.use(express.static("."))
app.use(express.urlencoded({extended:true}));



//static routing
app.get("/",(req,res)=>{
    //res.write("Welcome to home page");
    //res.end();
    res.send("Welcome to node page");
    //res.sendFile("/users/macbook/desktop/data/nodejs/BatchB/index.html")
    //res.sendFile(__dirnames+"/index.html");
    //res.sendFile(path.join(__dirname,"./index.html"));

})
// app.get("/style.css",(req,res)=>{
//     res.sendFile(path.join(__dirname,"./style.css"));
// })

//route
app.get("/about",(req,res)=>{
    res.write("Welcome to about us page");
    res.end();

})
app.get("/Login",(req,res)=>{
  //  console.log(req.query);

    //res.send("Req rec. Get"+req.query.username
    //);
    res.sendFile(path.join(__dirname,"./Login.html"));

})
app.post("/Login",(req,res)=>{


    dbinstance.collection("users").findOne({$and:[{"username":req.body.username},{"password":req.body.password}]})
    .then((response)=>{
        if(response==null)
            res.redirect("/login");
        else
        {
            req.session.user=response.name;
            req.session.userid=response._id;
            res.redirect("/users/dashboard");


        }
    })

//    // console.log(req.body);
// let users=JSON.parse(fs.readFileSync("users.json"));
// let results=users.filter((item)=>{
//     if(item.username==req.body.username && item.password==req.body.password)
//         return true;

// })
// if(results.length==0)
//     res.redirect("/Login");
// else
// {
//     req.session.user="a";

// res.redirect("/users/dashboard");
// }


    //res.send("POST REquest");
})

// app.get("/dashboard",(req,res)=>{
//     if(req.session.user)
//     res.sendFile(path.join(__dirname,"./Dashboard.html"));
// else
// res.redirect("/Login");
// })
app.get("/logout",(req,res)=>{
    req.session.destroy();
    res.redirect("/Login");

})
app.all("*",(req,res)=>{
    res.status(404).send("Page not found");
    
})

app.listen(3000);

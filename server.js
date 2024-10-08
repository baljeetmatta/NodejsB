//console.log("Hello1");
// let d=require("./test");
// let os=require("os");
// console.log(os.platform());

// //console.log(d());
// //d();
// console.log(d.data)
// d.log();
// //console.log(module);

// const log=require("./code");
// const EventEmitter=require("events");
// const evt=new EventEmitter();
// evt.on("done",()=>{
//     console.log("Done handled");
// })
// log();
// const code=require("./code");
// code.evt.on("done",()=>{
//     console.log("Done handled");
// })
// code.log();


// const Logger=require("./code");
// const logger=new Logger();
// logger.on("done",(data)=>{
//     console.log("done handled",data);
// })
// logger.log();
const http=require("http");
const fs=require("fs");

const server=http.createServer((req,res)=>{
    //console.log("A Req rec.")
    //console.log(req.url);
    res.setHeader("content-type","text/html");
//     if(req.url=="/" || req.url=="/index.html")
//     {
//         fs.readFile("./index.html","utf-8",(err,data)=>{
//             if(err)
//                 res.write("Page not found");
//             else
//             res.write(data);
//         res.end();

//         })
//      //   res.write("Home Page");
//     }
//     else if (req.url=="/style.css")
//     {
//         fs.readFile("./style.css","utf-8",(err,data)=>{
//             if(err)
//                 res.write("Page not found");
//             else
//             res.write(data);
//         res.end();

//         })
//     }
//     else if (req.url=="/script.js")
//         {
//             fs.readFile("./script.js","utf-8",(err,data)=>{
//                 if(err)
//                     res.write("Page not found");
//                 else
//                 res.write(data);
//             res.end();
    
//             })
//         }
//    else  if(req.url=="/about" || req.url=="/about.html")
//     {
//         res.write("About us page");
//         res.end();
//     }
//     else
//     res.end();
let filename="";
if(req.url=="/")
    filename="./index.html";
else if(req.url=="/about")
    filename="./about.html";
else

filename="."+req.url;
fs.readFile(filename,"utf-8",(err,data)=>{
    res.write(data);
    res.end();
})



    //res.write("Welcome to <b>nodejs</b>")
   

})
///const server=http.createServer(processRequest);
// function processRequest(req,res){

// }
server.listen(3000);
// server.on("connection",(socket)=>{
//     console.log("A Request rec.")
// })
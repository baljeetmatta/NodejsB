const express=require("express");
const app=express();
const multer=require("multer");
const path=require("path");
//const uploadFile=multer({dest:"files"});
const mstorage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"files");
    },
    filename:(req,file,cb)=>{
        //const ext=file.mimetype.split("/")[1];
        const ext=path.extname( file.originalname);

        //cb(null,"test"+ext);
cb(null,req.body.username+ext);


    }
    
})
const filter=(req,file,cb)=>{
    const ext=path.extname( file.originalname);

    if(ext==".png")
        cb(null,true)
    else

    cb(new Error("Not Supported"),false);

}
const uploadFile=multer({storage:mstorage,fileFilter:filter});


app.use(express.static("."));
app.use(express.urlencoded());


app.post("/upload",uploadFile.single("pic"), (req,res)=>{
    console.log(req.body.username);
    console.log(req.file);

    res.end();

})





app.listen(3000);

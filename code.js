// const EventEmitter=require("events");
// //console.log(events);
// const evt=new EventEmitter();
// //evt.emit("done");//raise event called done

// function log()
// {
//     console.log("Working on ...");
//     evt.emit("done");
// }

// // evt.on("done",()=>{
// //     console.log("Done handled");
// // })
// // //evt.emit("done");
// // log();
// module.exports={log,evt};
const EventEmitter=require("events");
class Logger extends EventEmitter
{
    log()
    {
        console.log("Working on logg..");
        this.emit("done",{x:20,y:10});
    }
}
module.exports=Logger;






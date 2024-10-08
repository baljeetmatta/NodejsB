let data=10;
//module.exports=data;
function log()
{
    console.log("Hello");
}
//module.exports=data;
//module.exports=log;
//module.exports={url:data,fun:log};
module.exports.url=data;
module.exports.fun=log;

module.exports={data,log};

const mongoose=require("mongoose");
const userSchema=mongoose.Schema({
    "username":String,
    "password":String,
    "firstname":{
        type:String,
        required:true,
    
    },lastname:String,
    age:{
        type:Number,
        default:0
    },
    "_id":{
        type:mongoose.ObjectId,
        auto:true

    }
});
userSchema.virtual("Name").get(function(){
    return this.firstname+" "+this.lastname;
});
userSchema.virtual("Name").set(function(name){
    let arr=name.split(" ");
    this.firstname=arr[0];
    this.lastname=arr[1];

})
module.exports=mongoose.model("users",userSchema);

var mongoose=required("mongoose");
var usersSchemma=require("../schemas/users");
module.exports=mongoose.model("User",usersSchemma);
var mongoose=require("mongoose");

var vehicleSchema= new mongoose.Schema({
    company:String,
    model:String,
    color:String,
    licenseplate:String
});

module.exports=mongoose.model("Vehicle", vehicleSchema);
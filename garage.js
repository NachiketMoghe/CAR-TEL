var mongoose=require("mongoose");

var garageSchema= new mongoose.Schema({
    name:String,
    usename:String,
    password:String,
    address:String,
    vehicle:[
        {
            company:String,
            model:String,
            color:String,
            licenseplate:String
        }
    ],
    mechanic:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Mechanic"
        }
    ]
});

module.exports=mongoose.model("Garage", garageSchema);
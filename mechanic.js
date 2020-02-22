var mongoose=require("mongoose");

var mechanicSchema= new mongoose.Schema({
    name:String,
    usename:String,
    password:String,
    gender:String,
    age:Number,
    contact:[],
    license:String,
    vehicle:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Vehicle"
        }
    ]
});

module.exports=mongoose.model("Mechanic", mechanicSchema);
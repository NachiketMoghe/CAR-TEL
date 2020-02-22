var mongoose=require("mongoose");

var userSchema= new mongoose.Schema({
    name:String,
    username:String,
    password:String,
    gender:String,
    age:Number,
    contact:[],
    license:String,
    address:String,
    city:String,
    pincode:Number,
    vehicle:[
        {
            company:String,
            model:String,
            color:String,
            licenseplate:String
        }
    ]
});

module.exports=mongoose.model("User", userSchema);
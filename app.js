var express=require("express"),
    app=express(),
    mongoose=require("mongoose"),
    bodyParser=require("body-parser"),
    User=require("./models/user"),
    Vehicle=require("./models/vehicle"),
    Garage=require("./models/garage"),
    Mechanic=require("./models/mechanic");


mongoose.connect("mongodb://localhost:27017/cartel",{useNewUrlParser:true,  useUnifiedTopology: true},);
//required for mongoose
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");

app.use(express.static(__dirname + "/public"));


app.use(require("express-session")({
    secret:"Acting is a art of life",
    resave:false,
    saveUninitialized:false
}));


//Homepage route

app.get("/", function(req, res){
    res.render("homepage");

});

//map page

app.get("/dashboard", function(req, res){
    res.render("map");
});


//User Signup

app.get("/user/new", function(req,res){
    res.render("user/usersignup");
});

app.post("/user", function(req, res){
    User.create(req.body.user, function(err, newuser){
        if(err){
            res.send("Invalid Input");
        }
        else{
            res.send(newuser);
        }
    });
});

//User Login Routes

app.get("/user/signin", function(req,res){
    res.render("signin");
});

app.post("/user/signin", function(req, res){
    
});

app.listen("2000", function(){
    console.log("Server is running..");

});
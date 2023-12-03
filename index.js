const express=require("express");
const app=express();

const path=require("path");
const { AdminRouts } = require("./routes/AdminRouts.routes");
const { UserRouts } = require("./routes/UserRouts.routes");
app.set('view engine', 'ejs');
app.set("views",path.join(__dirname,"view"))
app.use(express.static(path.join(__dirname,"public")))
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use('/admin',AdminRouts);
app.use('/',UserRouts);
app.get('/user',async(req,res)=>{
    res.status(200).json("hello world");
})



app.listen("2000",(error)=>{
    if(error) throw new Error(error)
    else console.log("2000")
})
const express=require("express");
const { user_list, insertData, updateData } = require("../controller/UserAuth.controller");
const AdminRouts=express.Router();

AdminRouts.get("/user-list",user_list)

AdminRouts.post("/insert_user",insertData)


AdminRouts.post("/update_user",updateData)


AdminRouts.get("/a",async(req,res)=>{
    res.status(200).json("hello a router")
})
module.exports={AdminRouts}
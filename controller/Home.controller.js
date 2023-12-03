const { f_select, f_delete } = require("../model/master.model");

const home=async(req,res)=>{
    try {
        res.render("home/home");
    } catch (error) {
        
    }
}

const user_list=async(req,res)=>{
    try {
        let user_data=await f_select('*',null,'admin');
        let viewdata={
            tabledata:user_data,
            title:"user list"
        }
        res.render('home/user_list',viewdata);
    } catch (error) {
        
    }
}

const edit_user=async(req,res)=>{
    try {
        let user_id=req.params.user_id;
        res.send(user_id);
    } catch (error) {
        
    }
}


const delete_user=async(req,res)=>{
    try {
        let user_id=req.params.user_id;
        let where=`ID=${user_id}`
        await f_delete('admin',where)
        res.redirect('/user_list');
    } catch (error) {
        
    }
}

module.exports={home,user_list,edit_user,delete_user}
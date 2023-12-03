const { f_select, f_select3, f_insert, f_update } = require("../model/master.model")

const user_list=async(req,res)=>{

    let where ='id = 1',
    tablename='admin'
    let userdata=await f_select3('*',tablename,where,null)


   
    let userdata2=await f_select('*',null,'admin')


    res.status(200).json({userdata,userdata2})
}

const insertData=async(req,res)=>{
    try {
        let fild=`(user_name,password)`;
        let value=`('${req.body.username}','${req.body.password}')`

        console.log("===============",value)
        var insertMainData=await f_insert("admin",fild,value)
        res.redirect('/user_list');
        //res.status(200).json(insertMainData)
    } catch (error) {
        res.status(400).json(error)

    }
   
}


const updateData=async(req,res)=>{
    try {
        var setData=`user_name='${req.body.user_name}', password='${req.body.password}' `,
        where=`ID=${req.body.id}`
        var updData=await f_update('admin',setData,where);
        res.status(200).json(updData);
    } catch (error) {
        res.status(400).json("Error");
    }
}

module.exports={user_list,insertData,updateData}
const { db } = require("../config/DB")
// const f_insert = () => {
// }
const f_select = (select, where=null, tablename) => {
    let whe = `${where ? 'WHERE ' + where : ''}`;
    let sql = `SELECT ${select} FROM ${tablename} ${whe}`;
    return new Promise((resolve, reject) => {
        db.query(sql, (error, result) => {
            if (error) {
                data = { suc: 0, msg: JSON.stringify(error) }
            } else {
                data = { suc: 1, msg: result, sql_q: sql }
            }
            resolve(data);

        })

    })
}
const f_select2 = () => {
    var sql = `SELECT user_name,id FROM admin`;
    return new Promise((resolve, reject) => {
        db.query(sql, (error, result) => {
            if (error) {
                data = { suc: 0, msg: JSON.stringify(error) }
            } else {
                data = { suc: 1, msg: result, sql: sql }
            }
            resolve(data);

        })

    })
}
const f_select3 = (select, table, where, order) => {
    let where_q = where ? `where ${where}` : '';
    let order_by = (order) ? order : '';
    var sql = `SELECT ${select} FROM ${table} ${where_q} ${order_by}`;
    return new Promise((resolve, reject) => {
        db.query(sql, (error, result) => {
            if (error) {
                data = { suc: 0, msg: JSON.stringify(error) }
            } else {
                data = { suc: 1, msg: result, sql_q: sql }
            }
            resolve(data);

        })

    })


}


const f_insert = (table,fild,value)=>{
    
    sql=`INSERT INTO ${table} ${fild} values${value}`
    return new Promise((resolve,result)=>{
        db.query(sql,(error,result)=>{
            if(error){
                data={suc:0,msg:JSON.stringify(error)}
            }else{
                data={suc:1,msg:JSON.result,sql:sql}
            }
            resolve(data);
        })
    })
}

const f_update=(table,setData,where)=>{
    let where_q = where ? ` where ${where}` : '';
    let sql=`UPDATE ${table} SET ${setData}${where_q}`
    return new Promise((resolve,result)=>{
        db.query(sql,(error,result)=>{
            if(error){
                data={suc:0,msg:JSON.stringify(error)}
            }else{
                data={suc:1,msg:JSON.result,sql:sql}
            }
            resolve(data);
        })
    })
}


const f_delete=(table,where)=>{
    let where_q = where ? ` where ${where}` : '';
    let sql=`DELETE FROM ${table}${where_q}`
    return new Promise((resolve,result)=>{
        db.query(sql,(error,result)=>{
            if(error){
                data={suc:0,msg:JSON.stringify(error)}
            }else{
                data={suc:1,msg:JSON.result,sql:sql}
            }
            resolve(data);
        })
    })
}

module.exports = { f_insert, f_select, f_select2, f_select3,f_update,f_delete }
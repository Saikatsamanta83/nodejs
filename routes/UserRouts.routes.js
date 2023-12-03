const express=require('express');
const { home, user_list, edit_user, delete_user } = require('../controller/Home.controller');
const UserRouts=express.Router();

UserRouts.get('/home',home);
UserRouts.get('/user_list',user_list)

UserRouts.get('/user_edit/:user_id',edit_user)

UserRouts.get('/user_delete/:user_id',delete_user)

module.exports={UserRouts};
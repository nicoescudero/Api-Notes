const {Router}=require('express');
const {validator}=require('../helpers/user_requirements');
const userCtrl=require('../controllers/user-controller');
const routes=Router();

routes.post('/register',validator.register,userCtrl.createUser);
routes.post('/login',validator.login,userCtrl.login);;

module.exports=routes;
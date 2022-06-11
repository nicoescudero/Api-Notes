const {Router}=require('express');
const routes=Router();

routes.get('/',(req,res)=>{
    return res.json({message:'Api-rest Notes'});
});

routes.use('/notes',require('./notes-routes'));
routes.use('/user',require('./user-routes'));

module.exports=routes;
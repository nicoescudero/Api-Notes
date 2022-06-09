const {Router}=require('express');
const routes=Router();
const notesCtrl=require('../controllers/notes_controller');

routes.get('/',notesCtrl.getNote);

module.exports=routes;
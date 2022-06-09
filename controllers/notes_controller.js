const controller={};

controller.getNote=(req,res)=>{
    return res.json({note:'Hello World!'});
};


module.exports=controller;
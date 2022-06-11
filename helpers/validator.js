const {validationResult}=require('express-validator');

const verify=(req,res,next)=>{
    try {
        const errors=validationResult(req);
        if(!errors.isEmpty())
            return res.status(422).json({erros:errors.array()});
        next();
    } catch (error) {
        return res.status(400).json({message:'Some error'});
    }
};

module.exports={verify};
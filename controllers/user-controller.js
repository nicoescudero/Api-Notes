const controller={};
const User=require('../models/user');
const jwt=require('jsonwebtoken');

controller.createUser=async(req,res)=>{
    try {
        const {email,password,username}=req.body;
        const userExist=await User.findOne({email});
        if(userExist)return res.status(404).json({message:'There is a user with this email address'})
        const user=new User({username,email,password:await User.encryptPassword(password)});
        user.save();
        const token=jwt.sign({id:user._id,username,email},process.env.TOKEN_KEY,{expiresIn:'1 hour'});
        return res.json(token);
    } catch (error) {
        return res.status(400).json('Bad Request');
    }
};

controller.login=async(req,res)=>{
    try {
        const {email,password}=req.body;
        const user=await User.findOne({email});
        if(!user)return res.status(404).json({message:'User not found'});
        const match=await user.descryptPassword(password);
        if(match===false)return res.status(401).json({message:'Unauthorized user'});
        const token=await jwt.sign({id:user._id,username:user.username,email},process.env.TOKEN_KEY,{expiresIn:'1 hour'});
        return res.json(token);
    } catch (error) {
        return res.status(400).json('Bad Request Login');
    }
};


module.exports=controller;
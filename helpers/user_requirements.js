const {body}=require('express-validator');
const {verify} = require('./validator');
const validator={};

validator.register=[
    body('username','username is required, minimum 4 characters').notEmpty().isLength({min:4}).trim().escape(),
    body('email','enter a valid email address').notEmpty().isEmail().normalizeEmail(),
    body('password','password is required, minimum 8 characters').notEmpty().isLength({min:8}),
    (req,res,next)=>verify(req,res,next)
];

validator.login=[
    body('email','enter a valid email address').notEmpty().isEmail().normalizeEmail(),
    body('password','password is required, minimum 8 characters').notEmpty().isLength({min:8}),
    (req,res,next)=>verify(req,res,next)
];

module.exports={validator};
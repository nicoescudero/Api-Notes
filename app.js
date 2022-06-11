const express=require('express');
const app=express();
const morgan=require('morgan');
require('dotenv').config();
const {dbConnection}=require('./database');
dbConnection();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use('/',require('./routes'));

app.listen(process.env.PORT || 3000,()=>console.log(`Listening server on port 3000`));
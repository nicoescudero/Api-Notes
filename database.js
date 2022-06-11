const mongoose=require('mongoose');
const {URI_PRODUCTION,URI_DEVELOPMENT,NODE_ENV}=process.env;
let uri;
if(NODE_ENV==='production')uri=URI_PRODUCTION;
else uri=URI_DEVELOPMENT;

const dbConnection=async()=>{
    try {
        await mongoose.connect(uri,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000,
        });
        console.log('Successful database connection');    
    } catch (error) {
        console.log('Some error when connecting to the database');
        console.error(error);
    }
};

module.exports={dbConnection};
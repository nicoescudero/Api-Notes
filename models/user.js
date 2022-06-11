const {Schema,model}=require('mongoose');
const bcrypt=require('bcrypt');

const userSchemas=new Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

userSchemas.statics.encryptPassword=async(password)=>{
    const salt=await bcrypt.genSalt(10);
    const hash=await bcrypt.hash(password,salt);
    return hash;
};

userSchemas.methods.descryptPassword=async function(password){
    const response = await bcrypt.compare(password,this.password);
    return response;
};

module.exports=model('User',userSchemas);
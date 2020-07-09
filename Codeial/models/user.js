const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true
    }
},
{
    // timestamps is used for createdAt and updatedAt in database
    timestamps:true
});

const User = new mongoose.model('User',userSchema);
module.exports = User;
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({

    user_file:{
        type:String,
           set:(file)=>{
            if(file){
                return file  
            }
            return ;
        },
        required:[true,'user file is required field']
    },
    file_name:{
        type: String, 
        required:[true,'file name is required field']
    }
 
},{timestamps:true})

module.exports = mongoose.model('userfile', userSchema, 'userfile');
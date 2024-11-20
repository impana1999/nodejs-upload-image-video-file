const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({

    user_image:{
        type:String,
           set:(icon)=>{
            if(icon){
                return icon  
            }
            return ;
        },
        required:[true,'image is required field']
    },
    image_name:{
        type: String, 
        required:[true,'image_name is required field']
    }
 
},{timestamps:true})

module.exports = mongoose.model('image', userSchema, 'image');


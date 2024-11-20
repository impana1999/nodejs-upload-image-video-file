const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const videoSchema = new Schema({
   

    video_file:{
        type:String,
        default:" ",   
        set:(file)=>{
            if(file){
                return file  
            }
            return ;
        },
    },
    video_name:{
        type: String, 
        required:[true,'videoname is required field']
    }
 
})

module.exports = mongoose.model('video',  videoSchema , 'video');


const multer = require('multer');
const express = require('express');
const fs = require('fs')
const path = require('path');

const ffmpeg = require('@ffmpeg-installer/ffmpeg');
const FFmpeg = require('fluent-ffmpeg');
FFmpeg.setFfmpegPath(ffmpeg.path);

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      var dir = "./app/src/src-ip-video"
        cb(null, dir);
    },

    filename: function (req, file, cb) {
      cb(null, file.originalname);
    }

 });
 
var upload = multer({ storage: storage });

const compressProductVideo = async(req,res,next)=>{
  try {
     var inputpath=("./app/src/src-ip-video/VID_55921127_174712_044.mp4")
   FFmpeg(inputpath)
          .videoCodec('libx264')
          .output("./app/src/resized-vedio/VID_55921127_174712_044.mp4")
          .on('error', function(err) {
            console.log('An error occurred: ' + err.message);    
          })	
          .on('progress', function(progress) { 
            console.log('... frames: ' +   progress.frames);
            
          })
          .on('end', function() { 
            console.log('Finished processing'); 
            
          })
          .run();
          next()
          } catch (error) {
            next()
            console.log(error);
          }
}
module.exports =  {upload,compressProductVideo}

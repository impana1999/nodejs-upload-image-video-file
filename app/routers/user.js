const express = require('express')
const route = express.Router();

const {uploadimage,compressedImg} =require('../middleware/upload-image')
const {uploadStorageImageFile} = require('../middleware/userimage')
const {uploadStorageFile} = require('../middleware/userfile')

const {upload,compressProductVideo} = require('../middleware/upload-video')


const UserController = require('../controllers/user')


route.post('/addimage',uploadStorageImageFile.single('user_img'),UserController.addImage)
route.post('/addFile',uploadStorageFile.single('file'),UserController.addFile)
route.post('/addVideo',upload.single('video_file'),compressProductVideo,UserController.addVideo)
route.post('/compressImage',uploadimage.single('user_img'),compressedImg,UserController.compressImage)
module.exports = route;


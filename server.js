const express = require('express');
require('dotenv').config()
const bodyParser = require('body-parser');
const multer = require('multer');
const ffmpeg = require('@ffmpeg-installer/ffmpeg');
const FFmpeg = require('fluent-ffmpeg');
FFmpeg.setFfmpegPath(ffmpeg.path);

const app = express();
app.use(bodyParser.json({limit: '70mb'}));
app.use(bodyParser.urlencoded({ extended: false}));


const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Databse Connected Successfully!!");    
}).catch(err => {
    console.log('Could not connect to the database', err);
    process.exit();
});

const router = require('./app/routers/user');
app.use('/', router);

app.get('/', (req, res) => {
    res.json({"message": "This is for testing"});
});

app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});

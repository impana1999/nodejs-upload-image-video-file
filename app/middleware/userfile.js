const fs = require('fs')
const multer = require("multer")

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        dir1 ="./app/src/file-store"
        if(!fs.existsSync(dir1)){
          return fs.mkdirSync(dir1)
      }
      cb(null, dir1)
    },
    filename: (req, file, cb) => {
      cb(null , file.originalname);
    },
  })
  
  const uploadStorageFile = multer({ storage: storage})
  module.exports =  {uploadStorageFile}

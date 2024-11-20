const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        dir ="./app/src/enroll_sub_img"
        cb(null, dir)
    },
    filename: (req, file, cb) => {
      cb(null , file.originalname);
    },
  })
  
const uploadStorageImageFile = multer({ storage: storage })

module.exports = {uploadStorageImageFile}

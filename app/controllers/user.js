const uploadImage = require('../models/userimage');
const uploadFile = require('../models/userfile');
const uploadVideo = require('../models/uservideo');

const uploadHandler = async (req, res, model, fileType, fieldName) => {
  try {
    if (req.file) {
      const data = {
        [`${fieldName}_name`]: req.body[`${fieldName}_name`],
        [`${fileType}_file`]: req.file.filename
      };
      
      const result = await model.create(data);
      return res.status(200).json({ Status: true, result });
    } else {
      return res.status(406).json({ Status: false, message: `Please choose ${fileType}` });
    }
  } catch (err) {
    console.log('err', err.message);
    const Error = {};
    if (err.message.includes('validation failed')) {
      Object.values(err.errors).forEach(properties => {
        Error[properties.path] = properties.message;
      });
    }
    return res.status(400).json({ Status: 'Error', Error });
  }
};

exports.addImage = (req, res) => {
  uploadHandler(req, res, uploadImage, 'image', 'image');
};

exports.addFile = (req, res) => {
  uploadHandler(req, res, uploadFile, 'file', 'file');
};

exports.addVideo = (req, res) => {
  uploadHandler(req, res, uploadVideo, 'video', 'video');
};

exports.compressImage = (req, res) => {
    uploadHandler(req, res, uploadImage, 'image', 'image');
  };
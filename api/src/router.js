const {Router, request} = require('express');
const { diskStorage } = require('multer');
const multer = require('multer');
const { router } = require('../app');

const filename = (request, file, callback) => {
    callback(null, file.originalname);
  };
  
  const storage = multer.diskStorage({
    destination: 'api/uploads/',
    filename,
  });

router=Router();
module.exports = router;


const fileFilter = (request, file, callback) => {
    if (file.mimetype !== 'image/png') {
      request.fileValidationError = 'Wrong file type';
      callback(null, false, new Error('Wrong file type'));
    } else {
      callback(null, true);
    }
  };
  


  const upload = multer({
    fileFilter,
    storage,
  });

  router.post('/upload', upload.single('photo'), (requests,response) => {
if (request.fileValidationError)
    return response.status(400).json({error: request.fileValidationError});
  }); 


const {Router} = require('express');
const { diskStorage } = require('multer');
const multer = require('multer');

const filename = (request, file, callback) => {
    callback(null, file.originalname);
  };
  
  const storage = multer.diskStorage({
    destination: 'api/uploads/',
    filename,
  });

router=Router();
module.exports = router;


const = fileFilter((request, file, callback) => {
    if (file.mimetype != 'image.png'){
        request.fileValidationError='Wrong file type';
        callback(null,false,Error)
        }
    else{
        callbuck(null,True)
    }
});
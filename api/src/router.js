const {Router} = require('express');
const multer = require('multer');
const { dirname } = require('path');
const path = require('path');
const imageProcessor = require('./imageProcessor');
const photoPath=path.resolve(__dirname, '../../client/photo-viewer.html');

const router = Router();


router.get('/photo-viewer', (requeast, response) => {
  response.sendFile(photoPath);
});

router.post(imageProcessor)
imageProcessor(async => this.post();


const filename = (request, file, callback) => {
  callback(null, file.originalname);
};

const storage = multer.diskStorage({
  destination: 'api/uploads/',
  filename,
});

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
router.post('/upload', upload.single('photo'), async (request, response) => {
  if (request.fileValidationError) return response.status(400).json({error: request.fileValidationError});

  try {
    await imageProcessor(request.file.filename);
  } catch (error) {

  }

  return response.status(201).json({success: true});
});

module.exports = router;



  router.post('/upload', upload.single('photo'), (request, response) => {
    if (request.fileValidationError) return response.status(400).json({error: request.fileValidationError});
  
    return response.status(201).json({success: true});
  });
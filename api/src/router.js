const {Router} = require('express');
const { diskStorage } = require('multer');
const multer = require('multer');

const filename;
const storage = multer.diskStorage({
    destination: 'api/uploads/',
    filename,
});

router=Router();
module.exports = router;

const filename = ((request, file, callback) => {
    callback(null,file.originalname)
});

const 
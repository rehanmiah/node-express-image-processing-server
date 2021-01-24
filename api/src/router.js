const {Router} = require('express');
const { diskStorage } = require('multer');
const storage = require('multer');

storage.diskStorage()

router=Router();
module.exports = router;

const filename = ((request, file, callback) => {
    callback(null,file.originalname)
});

const 
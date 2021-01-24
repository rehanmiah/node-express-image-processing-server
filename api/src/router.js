const {Router} = require('express');
router=Router();
module.exports = router;

const filename = ((request, file, callback) => {
    callback(null,file.originalname)
});
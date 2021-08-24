const express = require('express')
const router = express.Router()
const fileController = require('../controllers/upload.controller');
const fileValidator = require('../validators/fileupload.validator');


router.get('/files', fileController.listImages)
router.post('/uploadfile', fileController.uploadSingleFile.single('image'), fileValidator.validationBodyRules, fileValidator.checkRules, fileController.addFile)

module.exports = router;
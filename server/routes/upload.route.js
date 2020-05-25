const express = require('express')
const router = express.Router()
const fileController = require('../controllers/upload.controller')

router.get('/files', fileController.listImages)
router.post('/uploadfile', fileController.uploadSingleFile.single('image'), fileController.addFile)

module.exports = router;
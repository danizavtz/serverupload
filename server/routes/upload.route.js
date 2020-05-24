const express = require('express')
const router = express.Router()
const fileController = require('../controllers/upload.controller')

router.post('/uploadfile', fileController.uploadSingleFile.single('image'), fileController.addFile)
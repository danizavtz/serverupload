const multer = require('multer')
const options = {
    limits: {
        files: 1,
        fileSize: 2 * 1024 * 1024 //2MB max file size
    }
}
exports.uploadSingleFile = multer(options)

exports.addFile = async(req, res) => {
    console.log(req.body)
    res.status(201).end()   
}
const multer = require('multer')
const options = {
    dest: 'uploads/',
    limits: {
        files: 1,
        fileSize: 2 * 1024 * 1024 //2MB max file size
    }
}
exports.uploadSingleFile = multer(options)

exports.addFile = async(req, res) => {
    const sql = 'INSERT INTO imagemetadata (currentpath, nome, extension,fieldname, originalname, encoding, mimetype, size) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)';
    const dbi = req.app.get('dbinstance');
    const originalnamearr = req.file.originalname.split('.')
    const extensao = originalnamearr[originalnamearr.length - 1]
    dbi.query(sql, [req.file.path, req.body.nome, extensao, req.file.fieldname, req.file.originalname, req.file.encoding, req.file.mimetype, req.file.size], (err) => {
        if (err) {
            return res.status(500).json({ errors: [{location: "images", msg: err.detail, param: {}}]})
        }
        res.set('location', req.file.path)
        res.status(201).end()  
    })
     
}

exports.listImages = (req, res) => {
    const sql = 'SELECT * FROM imagemetadata ORDER BY id DESC'
    const dbi = req.app.get('dbinstance')
    dbi.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({ errors: [{location: "images", msg: err.detail, param: {}}]})
        }
        res.status(200).json(results.rows)
    })
}
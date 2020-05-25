const router = require('express').Router();
const fileuploadcontroller = require('./routes/upload.route')
router.use(fileuploadcontroller)
router.get('/', (req, res) => {
    res.status(200).json({msg: "server up and running"});
});
  //após tentar casar todas as rotas a ultima rota que sobrou é not found
router.get('*', (req, res) => {
    res.status(404).json({ errors: [{location: "server", msg: "Not found", param: req.path}]});
});

module.exports = router;
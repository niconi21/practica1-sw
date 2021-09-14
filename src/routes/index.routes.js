const router = require('express').Router();

router.use('/auth',require('./auth.routes'))
router.use('/usuario',require('./usuario.routes'))


module.exports = router;
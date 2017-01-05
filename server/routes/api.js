const express = require('express')
const router = express.Router()

router.use('/twitter', require('./twitter'))

module.exports = router

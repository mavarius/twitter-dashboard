const express = require('express')
const router = express.Router()

router.use('/user', require('./user'))
router.use('/statuses', require('./statuses'))

module.exports = router

const express = require('express')
const router = express.Router()

const Statuses = require('../models/Statuses')

router.use((req, res, next) => {
  res.handle = (err, data) => res.status(err ? 400 : 200).send(err || data)
  next()
})

// router.route('/')
router.get('/', (req, res) => {
  Statuses.search(req.query, res.handle)
})

module.exports = router

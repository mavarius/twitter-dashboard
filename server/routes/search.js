const express = require('express')
const router = express.Router()

const Search = require('../models/Search')

router.use((req, res, next) => {
  res.handle = (err, data) => res.status(err ? 400 : 200).send(err || data)
  next()
})

router.route('/')
.get((req, res) => {
  Search.search(req.query, res.handle)
})

module.exports = router
